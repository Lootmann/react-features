import React from "react";
import { Child } from "./Child";
import { MainContent } from "./MainContent";
import { UserContext } from "./UserContext";

export function Index() {
  const user = { name: "hoge", email: "hogehoge@gmail.com" };

  return (
    <div className="flex flex-col gap-6 bg-slate-900 p-4">
      {/* NOTE: use Context */}
      <UserContext.Provider value={user}>
        <h2 className="text-2xl">MainContent - useContext Test</h2>

        <MainContent />
        <Child />
      </UserContext.Provider>
    </div>
  );
}
