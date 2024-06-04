import React from "react";
import { Outlet } from "react-router-dom";

import * as styles from "./Layout.module.scss";
import { Menu } from "../../components/Menu/Menu";
import { Headers } from "../../ui/Headers/Headers";

export const Layout = () => {
  return (
    <>
      <Menu />
      <main className={styles.layout}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <Headers className={styles.footerHeader} type={Headers.Type.H4}>
          SDG PROJECT 2024
        </Headers>
      </footer>
    </>
  );
};
