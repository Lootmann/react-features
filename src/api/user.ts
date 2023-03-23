import { fake_db } from "../db/fake_db";

export const all_user = () => fake_db;
export const all_user_filter_by_name = () => {
  return fake_db.filter((user) => user.name.indexOf("a"));
};

const random_number = (): number => {
  return Math.floor(Math.random() * fake_db.length + fake_db.length);
};

const random_string = (size: number): string => {
  return "";
};

export const create_user = (): UserType => {
  return {
    user_id: random_number(),
    name: random_string(10),
    email: `${random_string(10)}@email.com`,
  };
};
