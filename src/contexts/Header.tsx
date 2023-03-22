import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export function Header() {
  const resource = useContext(UserContext);

  return (
    <>
      {resource != null && (
        <div className="flex gap-6 p-4 bg-slate-600 border border-slate-300">
          <h2 className="text-2xl">Header</h2>
          <Link to={`/`} className="bg-slate-700 px-2 rounded-md">
            App
          </Link>

          <p>name: {resource.name}</p>
        </div>
      )}
    </>
  );
}
