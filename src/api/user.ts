import axios from "axios";
import { fake_db } from "../db/fake_db";

const API_URL = "http://localhost:8888";

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

export const createUser = async (formData: UserFormType): Promise<void> => {
  const users = await getAllUser();
  const latestId = users.sort()[users.length - 1].id;

  const user: UserType = {
    id: Number(latestId) + 1,
    name: formData.name,
    email: formData.email,
  };

  const resp = await axios.post(API_URL + "/users", user);
  console.log(resp);
};
