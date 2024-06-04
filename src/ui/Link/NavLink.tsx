import React from "react";

import { Link } from "react-router-dom";
import { INavLinkProps } from "./NavLink.type";
import classNames from "classnames";
import * as styles from "./NavLink.module.scss";

export const NavLink: React.FC<INavLinkProps> = (props) => {
  const { name, to, className } = props;
  return (
    <Link className={classNames(styles.link, className)} to={to}>
      {name}
    </Link>
  );
};
