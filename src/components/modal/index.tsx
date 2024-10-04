import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { openModel, useOpenModal } from "./model";
import Cross from "../../assets/img/cross.png";
import Error from "../../assets/img/error.png";
import { Button } from "../button";
import styles from "./styles.module.scss";
import { registerUser } from "../../api/registerUser";
import { isValidEmail } from "../../helpers/isValidEmail";
import { isValidPassword } from "../../helpers/isValidPassword";
import classNames from "classnames";

export const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useOpenModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [done, setDone] = useState(true);
  const [error, setError] = useState("");
  const [isMailError, setIsMailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const onClose = useCallback(() => {
    dispatch(openModel(false));
    setDone(false);
    setIsMailError(false);
    setIsPasswordError(false);
    setError("");
  }, [dispatch]);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  const onSubmit = async () => {
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      setIsMailError(true);
      return;
    }

    if (!isValidPassword(password)) {
      setError("Password must be at least 8 characters long.");
      setIsMailError(false);
      setIsPasswordError(true);
      return;
    }

    setError("");

    try {
      const data = await registerUser(email, password);
      localStorage.setItem("token", data.token);
      window.location.href = ` https://www.dating.com/people/#token=${data.token}`;
      setDone(true);
      setPassword("");
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
      setIsMailError(true);
      setIsPasswordError(false);
      setError("A user with this email already exists.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <img
          className={styles.cross}
          src={Cross}
          alt="Close"
          onClick={onClose}
        />
        {!done ? (
          <>
            <h2>
              To register, enter the email to which our news is sent and set
              your password.
            </h2>

            <div className={styles.emailWrapper}>
              <input
                className={styles.input}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Example@email.com"
                type="email"
                required
              />
              <div
                className={classNames(
                  styles.divider,
                  isMailError && styles.error
                )}
              />
              {isMailError && (
                <>
                  <img className={styles.errorImg} src={Error} alt="error" />
                  <p className={styles.errorText}>{error}</p>
                </>
              )}
            </div>

            <div className={styles.passwordWrapper}>
              <input
                className={styles.input}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                required
              />
              <div
                className={classNames(
                  styles.divider,
                  isPasswordError && styles.error
                )}
              />

              {isPasswordError && (
                <>
                  <img className={styles.errorImg} src={Error} alt="error" />
                  <p className={styles.errorText}>{error}</p>
                </>
              )}
            </div>
            <Button onClick={onSubmit} text="Submit" />
          </>
        ) : (
          <div className={styles.doneWrapper}>
            <h1 className={styles.doneTitle}>Thank You</h1>
            <p className={styles.doneDescription}>
              To complete registration, please check your e-mail.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
