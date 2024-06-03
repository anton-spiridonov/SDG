import React from "react";
import { Outlet } from "react-router-dom";

import * as styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <main className={styles.layout}>
        <Outlet />
      </main>
    </>
  );
};
