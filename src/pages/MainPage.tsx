import React from "react";

import { FC } from "react";
import useAuth from "../hooks/useAuth";

export const MainPage: FC = () => {
  const { logOut } = useAuth();

  return (
    <div>
      Hello world!
      <button onClick={logOut}>Log out</button>
    </div>
  );
};
