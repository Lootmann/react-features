import { axiosApi } from "./axios";
import { LOCALSTORAGE_KEY } from "../settings";

export function useAuth(): AuthType {
  const key = localStorage.getItem(LOCALSTORAGE_KEY);
  return { isAuthenticated: key != null };
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
