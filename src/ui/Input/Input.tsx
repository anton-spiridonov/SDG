import React from "react";

import classNames from "classnames";
import { FC } from "react";
import * as styles from "./Input.module.scss";

interface Props {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input: FC<Props> = ({
  type,
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <input
      className={classNames(styles.input, className)}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
