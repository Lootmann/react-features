import React from "react";
import { AuthenticatedGuard } from "./AuthenticatedGuard";
import { Link, Outlet } from "react-router-dom";

export function AuthIndex() {
  return (
    <div className="flex flex-col gap-6 overflow-y-auto items-start h-screen bg-slate-600 text-slate-200 text-xl p-4">
      <header className="flex gap-4">
        <button>
          <Link
            to={`/auth/login`}
            className="bg-slate-900 hover:bg-slate-500 px-2 py-1 rounded-md"
          >
            Login
          </Link>
        </button>

        <button>
          <Link
            to={`/auth/logout`}
            className="bg-slate-900 hover:bg-slate-500 px-2 py-1 rounded-md"
          >
            Logout
          </Link>
        </button>
      </header>

      <AuthenticatedGuard>
        <Outlet />
      </AuthenticatedGuard>
    </div>
  );
}
