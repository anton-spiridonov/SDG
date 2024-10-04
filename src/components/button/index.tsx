import { FC } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

export const Button: FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={classNames(styles.button, className)}>
      {text}
    </button>
  );
};
