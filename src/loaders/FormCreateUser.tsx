import React from "react";
import { createUser } from "../api/user";
import { Form, redirect, useActionData } from "react-router-dom";

export function FormCreateUser() {
  const errors = useActionData() as UserFormType;

  return (
    <Form
      method="post"
      className="flex flex-col gap-2 w-1/3 border p-2 mb-4 rounded-md"
    >
      <input
        type="text"
        name="name"
        id="name"
        autoComplete="off"
        className="bg-slate-700 text-slate-200 pl-2 rounded-md"
      />
      {errors?.name && <span className="text-red-600">{errors?.name}</span>}

      <input
        type="text"
        name="email"
        id="email"
        autoComplete="off"
        className="bg-slate-700 text-slate-200 pl-2 rounded-md"
      />
      {errors?.email && <span className="text-red-600">{errors?.email}</span>}

      <input
        type="submit"
        value="+ Create"
        className="hover:bg-slate-500 px-2 rounded-md"
      />
    </Form>
  );
}

export async function createUserAction({ request }: any) {
  const formData = await request.formData();

  const user: UserFormType = {
    name: formData.get("name"),
    email: formData.get("email"),
  };

  const errors: UserFormType = {};
  if (typeof user.name !== "string" || user.name.length < 3) {
    errors.name = "name should be longer than 5";
  }

  if (typeof user.email !== "string" || !user.email.includes("@")) {
    errors.email = "Invalid Email";
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  await createUser(user);
  return redirect("/loader/user");
}
