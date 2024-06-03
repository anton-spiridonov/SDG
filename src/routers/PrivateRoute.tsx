import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isEmpty } from "lodash";
import { AuthStore } from "../store/AuthStore";

export const PrivateRoute = () => {
  const { user } = AuthStore();

  return !isEmpty(user) ? <Outlet /> : <Navigate to="/login" replace />;
};
