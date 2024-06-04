import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <>
      <div>Notfound page</div>
      <Link to="/">Go to main</Link>
    </>
  );
};
