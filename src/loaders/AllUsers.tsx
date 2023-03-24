import React from "react";
import { useLoaderData } from "react-router-dom";

export function AllUsers() {
  // TODO: when refresh parent, but this loader does not work D:
  const data = useLoaderData() as UserType[];

  return (
    <>
      {data.map((user) => {
        return (
          <li key={user.id}>
            {user.id}. {user.name} ({user.email})
          </li>
        );
      })}
    </>
  );
}
