import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { handleSignOut } from "../../utils/manageFirestore";

export function Navigation() {
  const navigate = useNavigate();
  function handleLogout() {
    handleSignOut();
    localStorage.removeItem("currentUserID");
    localStorage.removeItem("lastSearchParams");
    navigate("/signin");
  }

  return (
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
  );
}
