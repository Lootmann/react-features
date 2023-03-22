import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export function Index() {
  return (
    <div className="flex flex-col gap-6 h-screen bg-slate-700 text-slate-200 text-xl p-4">
      <Header />
      <Outlet />
    </div>
  );
}
