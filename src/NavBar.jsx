import React from "react";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          E-Commerce App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/Dashboard"
                activeclassname="active"
              >
                <i className="fa fa-dashboard"></i>
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                activeclassname="active"
                aria-current="page"
                to="/"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                activeclassname="active"
                to="/register"
              >
                Register
              </NavLink>
            </li>
          </ul>
          <div style={{ marginRight: 100 }}>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <i className="fa fa-user-circle"></i>User
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
