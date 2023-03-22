import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function Header() {
  return (
    <div className="flex gap-6 p-4 bg-slate-600 border border-slate-300">
      <Link
        to={`/`}
        className="text-2xl border px-2 bg-slate-700 hover:bg-slate-900 border-slate-700 rounded-md transition-all duration-200"
      >
        PluginTest
      </Link>

      <Link
        to={`/context`}
        className="text-2xl bg-slate-700 hover:bg-slate-900 px-2 rounded-md transition-all duration-200"
      >
        ContextTest
      </Link>
    </div>
  );
}
