import React, { useEffect, useState } from "react";
import { AllUsers } from "./AllUsers";
import { createUser } from "../api/user";
import { Form, redirect } from "react-router-dom";

export function Users() {
  return (
    <div className="flex flex-col gap-4 border p-4 rounded-md">
      <h2>LoaderTest - User</h2>

      <div className="border p-4 rounded-md text-2xl">
        <ul>
          <li className="mt-2">
            <Form method="post">
              <input
                type="submit"
                value="+ Create"
                className="hover:bg-slate-500 px-2 rounded-md"
              />
            </Form>
          </li>

          <AllUsers />
        </ul>
      </div>
    </div>
  );
}

export async function createUserAction({ request }: any) {
  // TODO: get form data using 'request.formData'
  await createUser();
  return redirect("/loader/user");
}
