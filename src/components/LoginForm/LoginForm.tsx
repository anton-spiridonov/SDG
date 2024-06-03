import React, { ChangeEvent } from "react";

import { useState } from "react";
import * as styles from "./LoginForm.module.scss";
import { Button } from "../../ui/Button/Button";
import { Input } from "../../ui/Input/Input";
import useAuth from "../../hooks/useAuth";

export function LoginForm() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className={styles.formWrapper}>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setEmail(event.target.value)
        }
        className={styles.email}
      />
      <Input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setPass(event.target.value)
        }
        className={styles.password}
      />
      <Button
        className={styles.button}
        name="Login"
        onClick={() => signIn(email, pass)}
      />
    </div>
  );
}
