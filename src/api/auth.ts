import axios from "axios";
import { API_URL, LOCALSTORAGE_KEY } from "../settings";
import { axiosApi } from "./axios";

export function useAuth(): AuthType {
  const key = localStorage.getItem(LOCALSTORAGE_KEY);
  return { isAuthenticated: key != null };
}

//  curl -X GET "http://localhost:8888/users?name=hoge
export async function loginUser(user: UserFormType): Promise<boolean> {
  const found = await axiosApi
    .get(`/users?name=${user.name}&password=${user.password}`)
    .then((resp) => {
      console.log(resp);
      const users = resp.data;
      return users.length > 0;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });

  if (found) {
    localStorage.setItem(LOCALSTORAGE_KEY, user.name);
    return true;
  } else {
    return false;
  }
}

export async function logoutUser(): Promise<void> {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

export async function getLoggedinUser(): Promise<UserType | null> {
  const token = localStorage.getItem(LOCALSTORAGE_KEY);

  const found = await axios
    .get(`/users?name=${token}`)
    .then((resp) => {
      return resp.data[0];
    })
    .catch((error) => {
      return null;
    });

  return found;
}
