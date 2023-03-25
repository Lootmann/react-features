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
        type="password"
        name="password"
        id="password"
        autoComplete="off"
        className="bg-slate-700 text-slate-200 pl-2 rounded-md"
      />
      {errors?.password && (
        <span className="text-red-600">{errors?.password}</span>
      )}

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
    password: formData.get("password"),
  };

  // TODO: how to set correct type hint?
  const errors: UserFormType = { name: "", email: "", password: "" };

  if (typeof user.name !== "string" || user.name.length < 3) {
    errors.name = "name should be longer than 5";
  }

  if (typeof user.email !== "string" || !user.email.includes("@")) {
    errors.email = "Invalid Email";
  }

  if (typeof user.password !== "string" || user.password.length < 3) {
    errors.email = "Invalid Password";
  }

  // TODO: how to check if the errors variable is empty
  if (
    user.name.length > 0 ||
    user.email.length > 0 ||
    user.password.length > 0
  ) {
    return errors;
  }

  await createUser(user);
  return redirect("/loader/user");
}
