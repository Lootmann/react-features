import { Form, redirect, useActionData } from "react-router-dom";
import { loginUser } from "../api/auth";

export function Login() {
  const errors = useActionData() as UserErrorFormType;

  return (
    <Form
      method="post"
      className="w-1/3 flex flex-col gap-4 border p-4 text-slate-700"
    >
      {errors?.message && (
        <span className="text-red-500">{errors.message}</span>
      )}

      <input
        type="text"
        name="name"
        id="name"
        placeholder="name"
        className="px-2 rounded-md"
      />
      {errors?.name && <span className="text-red-500">{errors.name}</span>}

      <input
        type="text"
        name="email"
        id="email"
        placeholder="email"
        className="px-2 rounded-md"
      />
      {errors?.email && <span className="text-red-500">{errors.email}</span>}

      <input
        type="text"
        name="password"
        id="password"
        placeholder="password"
        className="px-2 rounded-md"
      />
      {errors?.password && (
        <span className="text-red-500">{errors.password}</span>
      )}

      <input
        type="submit"
        value="Login"
        className="bg-slate-400 text-black rounded-md"
      />
    </Form>
  );
}

export async function authLoginAction({ request }: any) {
  const formData = await request.formData();

  const user: UserFormType = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const errors: UserErrorFormType = {
    name: "",
    email: "",
    password: "",
    message: "",
  };

  if (
    errors.name.length > 0 ||
    errors.email.length > 0 ||
    errors.password.length > 0
  ) {
    return errors;
  }

  const found = await loginUser(user);

  if (!found) {
    errors.message = "Login Error";
    return errors;
  } else {
    return redirect("/auth");
  }
}
