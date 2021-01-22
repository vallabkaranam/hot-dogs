import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navColor">
      <Link className="navbar-brand navWords" to="/">
        Hot Dogs
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav takeAll">
          <div className="leftSide">
            <NavLink className="nav-item nav-link navWords" to="/dogs">
              Browse dogs <span className="sr-only">(current)</span>
            </NavLink>
            <NavLink className="nav-item nav-link navWords " to="/favorites">
              Favorites
            </NavLink>
          </div>

          <div className="flex">
            <NavLink className="nav-item nav-link navWords " to="/login">
              Login
            </NavLink>
            <NavLink
              className="nav-item nav-link navWords dontBreak "
              to="/signup"
            >
              Sign up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
