import React from "react";
import { Profile } from "./Profile";
import { useAuth } from "../api/auth";
import { useLocation } from "react-router-dom";

export function AuthenticatedGuard({ children }: any) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return isAuthenticated ? (
    <>
      <div>You're logged in D:</div>
      <div>{children}</div>
      <Profile />
    </>
  ) : (
    <>
      <header className="border px-2 py-1 rounded-md">
        <div>not logged in</div>
        <p>{location.pathname}</p>
      </header>
    </>
  );
}
