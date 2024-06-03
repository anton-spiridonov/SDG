import React from "react";

import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";

import * as styles from "./RegisterPage.module.scss";
import { AuthStore } from "../../store/AuthStore";

export function RegisterPage() {
  const { error } = AuthStore();

  return (
    <div className={styles.registerPageWrapper}>
      <div className={styles.leftSide}>
        <h1 className={styles.headerRegister}>Register</h1>
        <RegisterForm />
        <p>
          or <Link to="/login">Go to Login</Link>
        </p>
        <p>{error}</p>
      </div>
      <div className={styles.rightSide}>
        <h1 className={styles.header}>SDG PROJECT</h1>
      </div>
    </div>
  );
}
