import { getLoggedinUser, logoutUser, useAuth } from "../api/auth";
import { Profile } from "./Profile";
import { redirect, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export function AuthenticatedGuard({ children }: any) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const loggedInUser = async () => {
      const u = await getLoggedinUser();
      if (u) setUser(u);
      else {
        await logoutUser();
        return redirect("/auth");
      }
    };
    loggedInUser();
  }, []);

  return isAuthenticated ? (
    <>
      <div className="bg-slate-900 px-2 rounded-md">
        <p>You're logged in D:</p>
        <p>{children}</p>
      </div>

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
