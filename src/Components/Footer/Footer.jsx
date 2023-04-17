import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/cinemaLogo.png";

export default function Footer() {
  return (
    <>
      <div className="container pb-3 text-white">
        <div className="row gy-4">
          <div className="col-md-3 col-6 text-center">
            <h5>Movies</h5>
            <Link className="d-block text-muted" to="/type/mar">
              Arabic Movies
            </Link>
            <Link className="d-block text-muted" to="/type/men">
              English Movies
            </Link>
            <Link className="d-block text-muted" to="/type/min">
              Indian Movies
            </Link>
          </div>
          <div className="col-md-3 col-6 text-center">
            <h5>Tv</h5>
            <Link className="d-block text-muted" to="/type/tar">
              Arabic Tv
            </Link>
            <Link className="d-block text-muted" to="/type/ten">
              English Tv
            </Link>
            <Link className="d-block text-muted" to="/type/tin">
              Indian Tv
            </Link>
          </div>
          <div className="col-md-6 text-center">
            <Link className="navbar-brand fs-5 fw-bolder" to="/">
              <img className="me-2" src={logo} alt="logo" />
              CinemaClub
            </Link>
            <div className="d-flex gap-3 align-items-center justify-content-center py-2">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter mx-3"></i>
              <i className="fab fa-instagram"></i>
            </div>
            <p>
              Copyright &copy;2022 All rights reserved | This template is
              made with by Mohamed Hasan
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
