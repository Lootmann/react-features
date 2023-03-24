import React, { useEffect, useState } from "react";
import { getUserById } from "../api/user";
import { useParams } from "react-router-dom";

export function UserDetail() {
  const [user, setUser] = useState<UserType>();
  const { userId } = useParams();

  useEffect(() => {
    async function getUser() {
      if (userId !== undefined) {
        const u = await getUserById(Number(userId));
        setUser(u);
      }
    }

    getUser();
  }, []);

  return (
    <div className="bg-slate-700 p-4">
      <h2 className="mb-4">UserDetail</h2>

      {user != undefined && (
        <div className="border p-4 rounded-md">
          <p>
            {user.id}. {user.name}
          </p>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}
