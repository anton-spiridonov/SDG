import React, { ChangeEvent } from "react";

import { useState } from "react";
import * as styles from "./RegisterForm.module.scss";
import { Button } from "../../ui/Button/Button";
import { Input } from "../../ui/Input/Input";
import useAuth from "../../hooks/useAuth";

export function RegisterForm() {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [displayName, setDisplayName] = useState("");

  return (
    <div className={styles.formWrapper}>
      <Input
        type="text"
        placeholder="Name"
        value={displayName}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setDisplayName(event.target.value)
        }
        className={styles.email}
      />
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
        name="Register"
        onClick={() => signUp(email, pass, displayName)}
      />
    </div>
  );
}
