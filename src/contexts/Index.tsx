import React, { useEffect, useState } from "react";
import { Child } from "./Child";
import { getUserById } from "../api/user";
import { MainContent } from "./MainContent";
import { UserContext } from "./UserContext";

export function Index() {
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const getUser = async () => {
      const u = await getUserById(1);
      setUser(u);
    };
    getUser();
  }, []);

  return (
    <div className="flex flex-col gap-6 bg-slate-900 p-4">
      {/* NOTE: use Context */}
      {user && (
        <UserContext.Provider value={user}>
          <h2 className="text-2xl">MainContent - useContext Test</h2>

          <MainContent />
          <Child />
        </UserContext.Provider>
      )}
    </div>
  );
}
