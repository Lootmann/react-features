import { fake_db } from "../db/fake_db";

function compare(a: UserType, b: UserType): number {
  if (a.user_id < b.user_id) return -1;
  else return 0;
}

// for loader
export const all_user = () => {
  return fake_db.sort(compare);
};

export const all_user_filter_by_name = () => {
  return fake_db.filter((user) => {
    return user.name.includes("h");
  });
};

const random_number = (): number => {
  while (true) {
    const id: number = Math.floor(Math.random() * 1000);
    let found: boolean = false;

    for (const user of fake_db) {
      if (user.user_id == id) found = true;
    }
    if (found) continue;

    return id;
  }
};

const random_string = (size: number): string => {
  const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const res: Array<string> = [];

  for (let i = 0; i < size; i++) {
    res.push(str[Math.floor(Math.random() * str.length)]);
  }

  return res.join("");
};

export const create_user = (): void => {
  const user = {
    user_id: random_number(),
    name: random_string(10),
    email: `${random_string(10)}@email.com`,
  };
  fake_db.push(user);
};
