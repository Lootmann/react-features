import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createUserAction } from "./loaders/FormCreateUser";
import { getAllUser, getAllUserFilteredByName } from "./api/user";
import { Index } from "./main/Index";
import { Index as ContextIndex } from "./contexts/Index";
import { Index as LoaderIndex } from "./loaders/Index";
import { Users } from "./loaders/Users";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/context",
        element: <ContextIndex />,
      },
      {
        path: "/loader",
        element: <LoaderIndex />,
        children: [
          {
            path: "/loader/user",
            element: <Users />,
            loader: getAllUser,
            action: createUserAction,
          },
          {
            path: "/loader/user_filter",
            element: <Users />,
            loader: getAllUserFilteredByName,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
