import axios from "axios";
import { API_URL, LOCALSTORAGE_KEY } from "../settings";

export function useAuth(): AuthType {
  const key = localStorage.getItem(LOCALSTORAGE_KEY);
  return { isAuthenticated: key != null };
}

export async function loginUser(user: UserFormType): Promise<void> {
  console.log(">>> loginUser");
  const found = await axios
    .get(API_URL + `/users?name=${user.name}&password=${user.password}`)
    .then((resp) => {
      return resp.data;
    });

  if (found) localStorage.setItem(LOCALSTORAGE_KEY, "loggedin");
}

export async function logoutUser(): Promise<void> {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
