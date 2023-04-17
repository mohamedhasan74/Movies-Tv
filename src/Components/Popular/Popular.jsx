import React from "react";
import { useSelector } from "react-redux";
import { baseImg } from "../../App.js";
import { Link } from "react-router-dom";
import defImg from "./../../assets/images/defImg0.jpg";

function Popular() {
  const numOfPage = 1;
  const { popular } = useSelector((state) => state.cinema);
  return (
    <>
      <div className="py-2 text-white">
        <h2>Popular : </h2>
        <div className="row gy-3">
          {popular?.map((movie) => (
            <Link
              key={movie.id}
              className="col-md-2 col-6"
              to={`/details/${movie.id}`}
            >
              <div className="overflow-hidden rounded-2 img-container">
                <img
                  src={
                    movie.poster_path
                      ? `${baseImg}${movie.poster_path}`
                      : defImg
                  }
                  className="w-100"
                  alt="poster"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Popular;
