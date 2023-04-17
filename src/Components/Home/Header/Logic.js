import headerImg from "./../../../assets/images/mainHeader.jfif";
import headerImgArabic from "./../../../assets/images/arabicHeader.jpg";
import headerImgArabictv from "./../../../assets/images/arabicHeadertv.jpg";
import headerImgEnglish from "./../../../assets/images/englishHeader.jpg";
import headerImgEnglishtv from "./../../../assets/images/englishHeadertv.jpg";
import headerImgIndian from "./../../../assets/images/indianHeader.jpg";
import headerImgIndiantv from "./../../../assets/images/indianHeadertv.jpg";
import {
  getPlayingNow,
  getPopularData,
  getTopRatedgData,
  getTrending,
  headerData,
  typeDetails,
} from "../../../Reduxtkit/slice.js";

export function Logic(dispatch, type) {
  if (Object.keys(type).length > 0) {
    switch (type.country) {
      case "mar":
        dispatch(
          headerData({
            img: headerImgArabic,
            heading: "Arabic Movies",
            title: `Discover Arabic Movies online and keep track of your favorite actors and movies!`,
          })
        );
        dispatch(typeDetails("movie"));
        dispatch(getTopRatedgData({ type: "movie", country: "ar" }));
        dispatch(getPopularData({ type: "movie", country: "ar" }));
        dispatch(
          getPlayingNow({ type: "movie", query: "now_playing", country: "ar" })
        );
        dispatch(getTrending("movie"));
        break;
      case "men":
        dispatch(
          headerData({
            img: headerImgEnglish,
            heading: "English Movies",
            title: `Discover English Movies online and keep track of your favorite actors and movies!`,
          })
        );
        dispatch(typeDetails("movie"));
        dispatch(getTopRatedgData({ type: "movie", country: "en" }));
        dispatch(getPopularData({ type: "movie", country: "en" }));
        dispatch(
          getPlayingNow({ type: "movie", query: "now_playing", country: "en" })
        );
        dispatch(getTrending("movie"));
        break;
      case "min":
        dispatch(
          headerData({
            img: headerImgIndian,
            heading: "Indian Movies",
            title: `Discover Indian Movies online and keep track of your favorite actors and movies!`,
          })
        );
        dispatch(typeDetails("movie"));
        dispatch(getTopRatedgData({ type: "movie", country: "hi" }));
        dispatch(getPopularData({ type: "movie", country: "hi" }));
        dispatch(
          getPlayingNow({ type: "movie", query: "now_playing", country: "hi" })
        );
        dispatch(getTrending("movie"));
        break;
      case "tar":
        dispatch(
          headerData({
            img: headerImgArabictv,
            heading: "Arabic Tv",
            title: `Discover Arabic Tv online and keep track of your favorite actors and movies!`,
          })
        );
        dispatch(typeDetails("tv"));
        dispatch(getTopRatedgData({ type: "tv", country: "ar" }));
        dispatch(getPopularData({ type: "tv", country: "ar" }));
        dispatch(
          getPlayingNow({ type: "tv", query: "on_the_air", country: "ar" })
        );
        dispatch(getTrending("tv"));
        break;
      case "ten":
        dispatch(
          headerData({
            img: headerImgEnglishtv,
            heading: "English Tv",
            title: `Discover English Tv online and keep track of your favorite actors and movies!`,
          })
        );
        dispatch(typeDetails("tv"));
        dispatch(getTopRatedgData({ type: "tv", country: "en" }));
        dispatch(getPopularData({ type: "tv", country: "en" }));
        dispatch(
          getPlayingNow({ type: "tv", query: "on_the_air", country: "en" })
        );
        dispatch(getTrending("tv"));
        break;
      case "tin":
        dispatch(
          headerData({
            img: headerImgIndiantv,
            heading: "Indian Tv",
            title: `Discover Indian Tv online and keep track of your favorite actors and movies!`,
          })
        );
        dispatch(typeDetails("tv"));
        dispatch(getTopRatedgData({ type: "tv", country: "hi" }));
        dispatch(getPopularData({ type: "tv", country: "hi" }));
        dispatch(
          getPlayingNow({ type: "tv", query: "on_the_air", country: "hi" })
        );
        dispatch(getTrending("tv"));
        break;
      default:
        dispatch(
          headerData({
            img: headerImg,
            heading: "Unlimited movies Are You Ready ?",
            title: `Discover latest Movies online and keep track of your favorite actors and movies!`,
          })
        );
        dispatch(typeDetails("movie"));
        dispatch(getTopRatedgData({ type: "movie", country: "en" }));
        dispatch(getPopularData({ type: "movie", country: "en" }));
        dispatch(
          getPlayingNow({ type: "movie", query: "now_playing", country: "en" })
        );
        dispatch(getTrending("movie"));
    }
  } else {
    dispatch(
      headerData({
        img: headerImg,
        heading: "Unlimited movies Are You Ready ?",
        title: `Discover latest Movies online and keep track of your favorite actors and movies!`,
      })
    );
    dispatch(typeDetails("movie"));
    dispatch(getTopRatedgData({ type: "movie", country: "en" }));
    dispatch(getPopularData({ type: "movie", country: "en" }));
    dispatch(
      getPlayingNow({ type: "movie", query: "now_playing", country: "en" })
    );
    dispatch(getTrending("movie"));
  }
}
