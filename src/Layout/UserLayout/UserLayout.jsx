import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { loadState } from "./../../Config/storage";

const UserLayout = () => {
  const user = loadState("user");
  if (!user) return <Navigate to="/" replace />;
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default UserLayout;
