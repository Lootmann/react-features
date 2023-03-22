import React from "react";
import { GrandChild } from "./GrandChild";

export function Child() {
  // NOTE: There is NOT Context !
  return (
    <div className="flex flex-col gap-4 bg-slate-600 border border-slate-300 p-4 rounded-md">
      <div className="flex mb-2">
        <h2 className="bg-orange-900 px-2 rounded-md text-2xl">Child</h2>
      </div>

      <GrandChild />
    </div>
  );
}
