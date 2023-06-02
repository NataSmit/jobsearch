import React from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../../images/logo.8c0b6449.svg";
import { handleSignOut } from "../../utils/manageFirestore";

export function Header() {
  function handleLogout() {
    handleSignOut();
    localStorage.removeItem("currentUserID");
  }

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img className="header__logo-img" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="header__buttons">
          <button className="header__button">Signin</button>
          <button className="header__button">Signup</button>
        </div>
        <nav className="header__menu">
          <ul className="header__list">
            <li className="header__list-item">
              <NavLink to="/favorites" className="header__list-link">
                Favorites
              </NavLink>
            </li>
            <li className="header__list-item">
              <NavLink to="/history" className="header__list-link">
                History
              </NavLink>
            </li>
          </ul>
          <button className="header__button" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}
