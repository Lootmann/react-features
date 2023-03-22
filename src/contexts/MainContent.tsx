import { useContext } from "react";
import { UserContext } from "./UserContext";

export function MainContent() {
  const resource = useContext(UserContext);

  return (
    <>
      {resource != null && (
        <div className="p-4 bg-slate-600 border border-slate-300">
          <h2 className="text-2xl">MainContent - useContext Test</h2>
          <p>Name: {resource.name}</p>
          <p>{resource.email}</p>
        </div>
      )}
    </>
  );
}
