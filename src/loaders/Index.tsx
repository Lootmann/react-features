import React from "react";
import { Outlet } from "react-router-dom";

export function Index() {
  return (
    <div className="flex flex-col gap-6 bg-slate-800 p-4">
      {/* NOTE: use Context */}
      <h2 className="text-2xl">MainContent - useContext Test</h2>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
