import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import headerImg from "./../assets/images/mainHeader.jfif";

export const getTopRatedgData = createAsyncThunk(
  "cinema/getTopRatedgData",
  async ({ type, country }) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${type}/top_rated?api_key=923d29f4e2bc2d80636bb469fb8abe61&language=en&with_original_language=${country}&page=1`
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);
export const getPopularData = createAsyncThunk(
  "cinema/getPopularData",
  async ({ type, country }) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${type}/popular?api_key=923d29f4e2bc2d80636bb469fb8abe61&language=en&with_original_language=${country}&page=1`
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const getTrending = createAsyncThunk(
  "cinema/getTrending",
  async (type) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${type}/week?api_key=923d29f4e2bc2d80636bb469fb8abe61`
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);
export const getPlayingNow = createAsyncThunk(
  "cinema/getPlayingNow",
  async ({ type, query, country }) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${type}/${query}?api_key=923d29f4e2bc2d80636bb469fb8abe61&language=en-US&with_original_language=${country}&page=1`
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);
const initialState = {
  topRated: [],
  popular: [],
  trending: [],
  playinNow: [],
  headerData: {
    img: headerImg,
    heading: "Unlimited movies Are You Ready ?",
    title: `Discover latest movies online and keep track of your favorite actors and movies!`,
  },
  type: "movie",
  loading: false,
  error: "",
};
const cinemaSlice = createSlice({
  name: "cinema",
  initialState,
  reducers: {
    headerData: (state, action) => {
      state.headerData = action.payload;
    },
    typeDetails: (state, action) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTopRatedgData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTopRatedgData.fulfilled, (state, action) => {
        state.topRated = action.payload.results;
        state.loading = false;
      });
    builder
      .addCase(getPopularData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPopularData.fulfilled, (state, action) => {
        state.popular = action.payload.results;
        state.loading = false;
      });
    builder
      .addCase(getTrending.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTrending.fulfilled, (state, action) => {
        state.trending = action.payload.results;
        state.loading = false;
      });
    builder
      .addCase(getPlayingNow.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPlayingNow.fulfilled, (state, action) => {
        state.playinNow = action.payload.results;
        state.loading = false;
      });
  },
});
export const { headerData, typeDetails } = cinemaSlice.actions;

export default cinemaSlice.reducer;
