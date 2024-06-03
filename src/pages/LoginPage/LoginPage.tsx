import React from "react";

// import { Link } from "react-router-dom";
import * as styles from "./LoginPage.module.scss";
import { LoginForm } from "../../components/LoginForm/LoginForm";

export function LoginPage() {
  return (
    <div className={styles.loginPageWrapper}>
      <div className={styles.leftSide}>
        <h1 className={styles.headerLogin}>Login</h1>
        <LoginForm />
        {/* <p>
          or <Link to="/register">Go to Register</Link>
        </p> */}
      </div>
      <div className={styles.rightSide}>
        <h1 className={styles.header}>SDG PROJECT</h1>
      </div>
    </div>
  );
}
