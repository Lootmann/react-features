import { useContext } from "react";
import { UserContext } from "./UserContext";

export function MainContent() {
  const resource = useContext(UserContext);

  return (
    <>
      {resource != null && (
        <div className="bg-slate-600 border border-slate-300 p-4 rounded-md">
          <div className="flex mb-2">
            <h2 className="bg-orange-900 px-2 rounded-md text-2xl">
              MainContent
            </h2>
          </div>

          <p>Name: {resource.name}</p>
          <p>{resource.email}</p>
        </div>
      )}
    </>
  );
}
