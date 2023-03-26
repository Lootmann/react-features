import axios from "axios";
import { API_URL, LOCALSTORAGE_KEY } from "../settings";

export function useAuth(): AuthType {
  const key = localStorage.getItem(LOCALSTORAGE_KEY);
  return { isAuthenticated: key != null };
}

export async function loginUser(user: UserFormType): Promise<void> {
  const found = await axios
    .get(API_URL + `/users?name=${user.name}&password=${user.password}`)
    .then((resp) => {
      return resp.data;
    });

  // TODO: security incidents D:
  if (found) localStorage.setItem(LOCALSTORAGE_KEY, user.name);
}

export async function logoutUser(): Promise<void> {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

export async function getLoggedinUser(): Promise<UserType | null> {
  const token = localStorage.getItem(LOCALSTORAGE_KEY);

  const found = await axios
    .get(API_URL + `/users?name=${token}`)
    .then((resp) => {
      return resp.data[0];
    })
    .catch((error) => {
      return null;
    });
  return found;
}
