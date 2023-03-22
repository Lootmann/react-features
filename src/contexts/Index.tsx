import React from "react";
import { MainContent } from "./MainContent";
import { UserContext } from "./UserContext";

export function Index() {
  // get data from API
  const user = { name: "hoge", email: "hogehoge@gmail.com" };

  return (
    <div>
      <UserContext.Provider value={user}>
        <MainContent />
      </UserContext.Provider>
    </div>
  );
}
