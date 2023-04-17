import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logic } from "./Logic.js";
import NowPlaying from "../../NowPlaying/NowPlaying.jsx";
import TopRated from "../../TopRated/TopRated.jsx";
import Popular from "../../Popular/Popular.jsx";
import Trending from "../../Trending/Trending.jsx";
import Loading from "../../Loading/Loading.jsx";

function Header() {
  const type = useParams();
  const state = useSelector((state) => state.cinema);
  const dispatch = useDispatch();
  useEffect(() => {
    Logic(dispatch, type);
  }, [type]);
  return (
    <>
      {state.loading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <header
            style={{
              backgroundImage: `url(${state.headerData.img})`,
            }}
            className="vh-100 position-relative"
          >
            <div className="container h-100 d-flex flex-column justify-content-center position-relative text-white">
              <h1>{state.headerData.heading}</h1>
              <p>{state.headerData.title}</p>
            </div>
          </header>
          <div className="container py-5">
            <NowPlaying />
            <TopRated />
            <Popular />
            <Trending />
          </div>
        </>
      )}
    </>
  );
}

export default Header;
