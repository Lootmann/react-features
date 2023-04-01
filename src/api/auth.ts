import Cookies from "js-cookie";
import { axiosApi } from "./axios";
import { LOCALSTORAGE_KEY } from "../settings";

export function useAuth(): AuthType {
  const token = Cookies.get(LOCALSTORAGE_KEY);
  return { isAuthenticated: token != null };
}

export async function loginUser(user: UserFormType): Promise<boolean> {
  const found = await axiosApi
    .get(`/users?name=${user.name}&password=${user.password}`)
    .then((resp) => {
      const users = resp.data;
      return users.length > 0;
    })
    .catch((error) => {
      return false;
    });

  if (found) {
    Cookies.set(LOCALSTORAGE_KEY, user.name);
    return true;
  } else {
    return false;
  }
}

export async function logoutUser(): Promise<void> {
  Cookies.remove(LOCALSTORAGE_KEY);
}

export async function getLoggedinUser(): Promise<UserType | null> {
  const token = Cookies.get(LOCALSTORAGE_KEY);
  if (!token) return null;

  const found = await axiosApi
    .get(`/users?name=${token}`)
    .then((resp) => {
      const user = resp.data[0];
      if (!user) return null;
      else return user;
    })
    .catch((error) => {
      return null;
    });

  return found;
}
