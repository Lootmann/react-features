import axios from "axios";
import { API_URL } from "../settings";

// for loader
export const getAllUser = async () => {
  return await axios.get(API_URL + "/users").then((resp) => {
    if (resp.status == 200) return resp.data;
  });
};

export const getAllUserFilteredByName = async () => {
  return await axios.get(API_URL + "/users").then((resp) => {
    if (resp.status == 200) return resp.data;
  });
};

export const getUserById = async (userId: number) => {
  return await axios.get(API_URL + `/users/${userId}`).then((resp) => {
    if (resp.status == 200) return resp.data;
  });
};

export const createUser = async (formData: UserFormType): Promise<void> => {
  const users = await getAllUser();
  const latestId = users.sort()[users.length - 1].id;

  const user: UserType = {
    id: Number(latestId) + 1,
    name: formData.name,
    email: formData.email,
    password: formData.password,
  };

  const resp = await axios.post(API_URL + "/users", user);
  console.log(resp);
};
