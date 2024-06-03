import React from "react";
import { IButtonProps } from "./ButtonTypes";
import * as styles from "./Button.module.scss";
import classNames from "classnames";
import { Headers } from "../Headers/Headers";

export const Button: React.FC<IButtonProps> = (props) => {
  const { name = "click", onClick, disabled = false, className } = props;
  return (
    <button
      disabled={disabled}
      className={classNames(
        styles.button,
        disabled && styles.disabled,
        className
      )}
      onClick={onClick}
    >
      <Headers type={Headers.Type.H5}>{name}</Headers>
    </button>
  );
};
