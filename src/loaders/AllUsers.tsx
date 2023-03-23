import React from "react";
import { useLoaderData } from "react-router-dom";

export function AllUsers() {
  const data = useLoaderData() as UserType[];

  return (
    <>
      {data.map((user) => {
        return (
          <li key={user.user_id}>
            {user.user_id}. {user.name} ({user.email})
          </li>
        );
      })}
    </>
  );
}
