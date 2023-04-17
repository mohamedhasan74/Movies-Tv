import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getCredits,
  getDetails,
  getSimilar,
  getVideos,
} from "../../Reduxtkit/sliceDetails.js";
import { baseImg } from "../../App.js";
import ReactPlayer from "react-player";
import defCast from "./../../assets/images/defCast.png";
import defImg from "./../../assets/images/defImg0.jpg";

function Details() {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.cinema.type);
  const { details, similar, credits, videos } = useSelector(
    (state) => state.cinemDetails
  );
  const { id } = useParams();
  useEffect(() => {
    dispatch(getVideos({ type, id }));
    dispatch(getSimilar({ type, id }));
    dispatch(getDetails({ type, id }));
    dispatch(getCredits({ type, id }));
  }, []);
  return (
    <>
      <header
        style={{
          backgroundImage: `url(${baseImg}${details.backdrop_path})`,
        }}
        className="vh-100 position-relative"
      >
        <div className="container h-100 d-flex flex-column justify-content-center position-relative text-white">
          <h1>{details.title ? details?.title : details?.name}</h1>
          <span>
            {Number(details?.vote_average).toFixed(1)}{" "}
            <i className="fas fa-star mx-2 text-warning"></i>
          </span>
          <div className="d-flex gap-3">
            {details?.genres?.map((gener) => (
              <span key={gener.id} className="lead py-2">
                {gener?.name}
              </span>
            ))}
          </div>
          <p>{details?.overview}</p>
        </div>
      </header>
      <div className="container py-3 text-white">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              Videos
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              Casting
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              More
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="Similar-tab"
              data-bs-toggle="tab"
              data-bs-target="#Similar-tab-pane"
              type="button"
              role="tab"
              aria-controls="Similar-tab-pane"
              aria-selected="false"
            >
              Similar
            </button>
          </li>
        </ul>
        <div className="tab-content p-3" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex="0"
          >
            <div className="row py-3 gy-3">
              {videos?.length === 0 ? (
                <p className="text-danger">there isn't video for this show</p>
              ) : (
                videos?.map((video) => (
                  <div key={video.id} className="col-md-6">
                    <ReactPlayer
                      url={`https://www.youtube.com/embed/${video.key}`}
                      controls={true}
                      width={"100%"}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabIndex="0"
          >
            <div className="row gy-3">
              {credits?.cast?.map((cast) => (
                <div key={cast.id} className="col-md-3 col-6">
                  <div className="overflow-hidden rounded-2 img-container">
                    <img
                      src={
                        cast.profile_path
                          ? `${baseImg}${cast.profile_path}`
                          : defCast
                      }
                      className="w-100"
                      alt="poster"
                    />
                  </div>
                  <div className="p-2 lead">{cast.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
            tabIndex="0"
          >
            <p>
              {details.release_date
                ? `release_date : ${details.release_date}`
                : `first_air_date : ${details.first_air_date}`}
            </p>
            <p>original_language : {details.original_language}</p>
            <p>vote_average : {details.vote_average}</p>
            <p>vote_count : {details.vote_count}</p>
            <h3 className="mb-0">Production Companies :</h3>
            {details?.production_companies?.length === 0 ? (
              <p className="text-danger">
                there isn't any information about Production Companies
              </p>
            ) : (
              <div className="d-flex justify-content-evenly align-items-center bg-white">
                {details?.production_companies?.map(
                  (comp) =>
                    comp.logo_path && (
                      <div key={comp.id} className="p-2">
                        <img
                          src={`${baseImg}${comp.logo_path}`}
                          style={{ maxHeight: "100px" }}
                          className="w-100"
                          alt="poster"
                        />
                      </div>
                    )
                )}
              </div>
            )}
          </div>
          <div
            className="tab-pane fade show"
            id="Similar-tab-pane"
            role="tabpanel"
            aria-labelledby="Similar-tab"
            tabIndex="0"
          >
            <div className="row gy-3">
              {similar?.map((movie) => (
                <div key={movie.id} className="col-md-2 col-6">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
