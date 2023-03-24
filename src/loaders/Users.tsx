import React, { useEffect, useState } from "react";
import { AllUsers } from "./AllUsers";
import { FormCreateUser } from "./FormCreateUser";

export function Users() {
  return (
    <div className="flex flex-col gap-4 border p-4 rounded-md">
      <h2>LoaderTest - User</h2>

      <div className="border p-4 rounded-md text-2xl">
        <FormCreateUser />
        <AllUsers />
      </div>
    </div>
  );
}
