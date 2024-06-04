import React from "react";

import * as styles from "./Menu.module.scss";
import { Headers } from "../../ui/Headers/Headers";
import { BurgerMenu } from "./components/BurgerMenu/BurgerMenu";
import { NavLink } from "../../ui/Link/NavLink";
import { AuthStore } from "../../store/AuthStore";

export const Menu = () => {
  const { user } = AuthStore();
  return (
    <nav className={styles.menu}>
      <Headers className={styles.menuHeader} type={Headers.Type.H3}>
        SDG PROJECT
      </Headers>

      <div style={{ display: "flex", gap: "20px" }}>
        <NavLink to="/" name="About" />
        <NavLink to="/" name="Test" />
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        {user.displayName}
        <BurgerMenu />
      </div>
    </nav>
  );
};
