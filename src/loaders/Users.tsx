import React, { useEffect, useState } from "react";
import { AllUsers } from "./AllUsers";
import { create_user } from "../api/user";

// TODO: use by '/user' and '/user_filter'
export function Users() {
  const [reload, setReload] = useState<boolean>(false);

  function onSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    create_user();
    setReload(!reload);
  }

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col gap-4 border p-4 rounded-md">
      <h2>LoaderTest - User</h2>

      <div className="border p-4 rounded-md text-2xl">
        <ul>
          <li className="mt-2">
            <button
              type="submit"
              className="hover:bg-slate-500 px-2 rounded-md"
              onClick={(e) => onSubmit(e)}
            >
              + Create
            </button>
          </li>

          <AllUsers />
        </ul>
      </div>
    </div>
  );
}