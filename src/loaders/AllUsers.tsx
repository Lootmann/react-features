import { useLoaderData } from "react-router-dom";

export function AllUsers() {
  const data = useLoaderData() as UserType[];

  return (
    <ul>
      {data.map((user) => {
        return (
          <li key={user.id}>
            {user.id}. {user.name} ({user.email})
          </li>
        );
      })}
    </ul>
  );
}

// TODO: delete user using Action D:
