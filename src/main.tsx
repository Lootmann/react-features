import React from "react";
import ReactDOM from "react-dom/client";
import { AuthIndex } from "./auth/Index";
import { authLoginAction, Login } from "./auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createUserAction } from "./loaders/FormCreateUser";
import { getAllUser, getAllUserFilteredByName } from "./api/user";
import { Index } from "./main/Index";
import { Index as ContextIndex } from "./contexts/Index";
import { Index as LoaderIndex } from "./loaders/Index";
import { Logout } from "./auth/Logout";
import { Profile } from "./auth/Profile";
import { UserDetail } from "./loaders/UserDetail";
import { Users } from "./loaders/Users";
import "./styles/index.css";

// TODO: これどうにかならんの?
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/auth",
        element: <AuthIndex />,
        children: [
          {
            path: "/auth/profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/auth/login",
        element: <Login />,
        action: authLoginAction,
      },
      {
        path: "/auth/logout",
        element: <Logout />,
      },

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
          {
            path: "/loader/user/:userId",
            element: <UserDetail />,
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
