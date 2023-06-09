import React from "react";
import { Link } from "react-router-dom";

export function AuthButtons() {
  return (
    <div className="header__buttons">
      <Link to="/signin">
        <button className="header__button">Signin</button>
      </Link>
      <Link to="/signup">
        <button className="header__button">Signup</button>
      </Link>
    </div>
  );
}
