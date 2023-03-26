import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export function Profile() {
  const resource = useContext(UserContext);

  return (
    <div className="border p-4">
      <h2 className="text-2xl">Profile</h2>

      {resource && (
        <>
          <p>{resource.id}</p>
          <p>{resource.name}</p>
          <p>{resource.email}</p>
          <p>{resource.password}</p>
        </>
      )}
    </div>
  );
}
