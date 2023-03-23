import React from "react";
import { create_user } from "../api/user";
import { useLoaderData } from "react-router-dom";

// TODO: use by '/user' and '/user_filter'
export function Users() {
  const users = useLoaderData() as UserType[];

  function onSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    create_user();
  }

  return (
    <div className="flex flex-col gap-4 border p-4 rounded-md">
      <h2>LoaderTest - User</h2>

      <div className="border p-4 rounded-md text-2xl">
        <ul>
          {users.map((user) => {
            return (
              <li key={user.user_id}>
                {user.user_id}. {user.name} ({user.email})
              </li>
            );
          })}

          <li className="mt-2">
            <button
              type="submit"
              className="hover:bg-slate-500 px-2 rounded-md"
              onClick={(e) => onSubmit(e)}
            >
              + Create
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
