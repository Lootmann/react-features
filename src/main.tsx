import React from "react";
import ReactDOM from "react-dom/client";
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
          },
          {
            path: "/loader/user_filter",
            element: <Users />,
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
