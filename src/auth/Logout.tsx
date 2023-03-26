import React, { useEffect } from "react";
import { logoutUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

export function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      await logoutUser();
    };
    logout();

    navigate("/auth", { replace: true });
  }, []);

  return <div>Logout</div>;
}
