import { AllUsers } from "./AllUsers";
import { FormCreateUser } from "./FormCreateUser";

export function Users() {
  return (
    <div className="flex flex-col gap-4 border p-4 rounded-md">
      <h2 className="text-2xl">LoaderTest - User</h2>

      <div className="border p-4 rounded-md text-2xl">
        <FormCreateUser />
        <AllUsers />
      </div>
    </div>
  );
}
