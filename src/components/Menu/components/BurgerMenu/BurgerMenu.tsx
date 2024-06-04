import React, { useState } from "react";
import * as styles from "./BurgerMenu.module.scss";
import useAuth from "../../../../hooks/useAuth";
import { Button } from "../../../../ui/Button/Button";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { logOut } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <div
        className={`${styles.burgerIcon} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <a href="home">Settings</a>
          </li>
          <li>
            <a href="about">Profile</a>
          </li>
          <li>
            <Button onClick={logOut} name="Log out" />
          </li>
        </ul>
      </div>
    </div>
  );
};
