import { Link, useLoaderData } from "react-router-dom";

export function AllUsers() {
  const data = useLoaderData() as UserType[];

  return (
    <ul>
      {data.map((user) => {
        return (
          <li key={user.id} className="hover:bg-green-800 px-2 rounded-md">
            <Link to={`/loader/user/${user.id}`}>
              {user.id}. {user.name} ({user.email})
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

// TODO: delete user using Action D:
