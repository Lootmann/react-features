import React from "react";
import ReactDOM from "react-dom/client";
import { all_user, all_user_filter_by_name } from "./api/user";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
            loader: all_user,
          },
          {
            path: "/loader/user_filter",
            element: <Users />,
            loader: all_user_filter_by_name,
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
