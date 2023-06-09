import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.8c0b6449.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { AuthButtons } from "../AuthButtons/AuthButtons";
import { Navigation } from "../Navigation/Navigation";

export function Header() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img className="header__logo-img" src={logo} alt="Logo" />
          </Link>
        </div>
        {currentUser && (
          <div className="header__user">User: {currentUser.email}</div>
        )}
        {currentUser ? <Navigation /> : <AuthButtons />}
      </div>
    </header>
  );
}
