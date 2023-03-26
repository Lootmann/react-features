import React from "react";
import { Form, redirect } from "react-router-dom";
import { loginUser } from "../api/auth";

export function Login() {
  return (
    // TODO: validation
    <Form method="post" className="w-1/3 flex flex-col gap-4 border p-4">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="name"
        className="px-2 rounded-md"
      />
      <input
        type="text"
        name="email"
        id="email"
        placeholder="email"
        className="px-2 rounded-md"
      />
      <input
        type="text"
        name="password"
        id="password"
        placeholder="password"
        className="px-2 rounded-md"
      />
      <input
        type="submit"
        value="Login"
        className="bg-slate-400 text-black rounded-md"
      />
    </Form>
  );
}

// TODO: Login Action
export async function authLoginAction({ request }: any) {
  const formData = await request.formData();

  const user: UserFormType = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const errors: UserFormType = { name: "", email: "", password: "" };

  if (
    errors.name.length > 0 ||
    errors.email.length > 0 ||
    errors.password.length > 0
  ) {
    return errors;
  }

  await loginUser(user);
  return redirect("/auth");
}
