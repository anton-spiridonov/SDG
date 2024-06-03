import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import { isEmpty } from "lodash";
import { AuthStore } from "../store/AuthStore";

export const PublicRoute = () => {
  const { user } = AuthStore();

  return !isEmpty(user) ? <Navigate to="/" replace /> : <Outlet />;
};
