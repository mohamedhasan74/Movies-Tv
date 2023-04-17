import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { baseImg } from "../../App.js";
import { Link } from "react-router-dom";

function TopRated() {
  const { topRated } = useSelector((state) => state.cinema);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="py-3 text-white">
        <h2>Top Rated :</h2>
        <Slider {...settings}>
          {topRated?.map((movie) => (
            <div key={movie.id}>
              <div
                style={{
                  minHeight: "500px",
                  backgroundImage: `url(${baseImg}${movie.backdrop_path})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
                className="toprate-container"
              >
                <div className="row p-5 align-items-center h-100 position-relative">
                  <div className="col-md-4">
                    <img
                      src={`${baseImg}${movie.poster_path}`}
                      className="w-100"
                      alt="poster"
                    />
                  </div>
                  <div className="col-md-8">
                    <h3>{movie.title ? movie.title : movie.name}</h3>
                    <span>
                      {movie.vote_average}{" "}
                      <i className="fas fa-star mx-2 text-warning"></i>
                    </span>
                    <p>
                      {movie.overview.split(" ").slice(0, 25).join(" ")} ....
                    </p>
                    <Link
                      className="btn btn-sm btn-primary"
                      to={`/details/${movie.id}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default TopRated;
