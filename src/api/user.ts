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

const random_string = (size: number): string => {
  const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const res: Array<string> = [];

  for (let i = 0; i < size; i++) {
    res.push(str[Math.floor(Math.random() * str.length)]);
  }

  return res.join("");
};

export const createUser = async (): Promise<void> => {
  const users = await getAllUser();
  const latestId = users.sort()[users.length - 1].id;

  const user: UserType = {
    id: Number(latestId) + 1,
    name: random_string(5),
    email: `${random_string(5)}@email.com`,
  };

  const resp = await axios.post(API_URL + "/users", user);
  console.log(resp);
};
