import React from "react";
import logo from "./../../assets/images/cinemaLogo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="me-2" src={logo} alt="logo" />
            CinemaClub
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Movies
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <Link className="dropdown-item" to="/type/mar">
                    Arabic Movies
                  </Link>
                  <Link className="dropdown-item" to="/type/men">
                    English Movies
                  </Link>
                  <Link className="dropdown-item" to="/type/min">
                    Indian Movies
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Tv
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <Link className="dropdown-item" to="/type/tar">
                    Arabic Tv
                  </Link>
                  <Link className="dropdown-item" to="/type/ten">
                    English Tv
                  </Link>
                  <Link className="dropdown-item" to="/type/tin">
                    Indian Tv
                  </Link>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter mx-3"></i>
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
