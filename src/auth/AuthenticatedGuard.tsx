import { getLoggedinUser, useAuth } from "../api/auth";
import { Profile } from "./Profile";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "./UserContext";

export function AuthenticatedGuard({ children }: any) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const loggedInUser = async () => {
      const u = await getLoggedinUser();
      if (u) setUser(u);
    };
    loggedInUser();
  }, []);

  return isAuthenticated ? (
    <>
      <div>You're logged in D:</div>
      <div>{children}</div>
      <UserContext.Provider value={user}>
        <Profile />
      </UserContext.Provider>
    </>
  ) : (
    <>
      <header className="border px-2 py-1 rounded-md">
        <div className="text-red-500 text-2xl px-2 rounded-md">
          not logged in
        </div>
        <p>{location.pathname}</p>
      </header>
    </>
  );
}
