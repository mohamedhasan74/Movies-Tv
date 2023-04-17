import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { baseImg } from "../../App.js";
import { Link } from "react-router-dom";
import defImg from "./../../assets/images/defImg0.jpg";
function NowPlaying() {
  const { playinNow } = useSelector((state) => state.cinema);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <h2 className="text-white"> Now Playing : </h2>
        <Slider {...settings}>
          {playinNow?.map((movie) => (
            <Link key={movie.id} className="p-2" to={`/details/${movie.id}`}>
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
        </Slider>
      </div>
    </>
  );
}

export default NowPlaying;
