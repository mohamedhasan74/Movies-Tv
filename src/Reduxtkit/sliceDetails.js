import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import headerImg from "./../assets/images/mainHeader.jfif";

export const getDetails = createAsyncThunk(
  "cinemaDetails/getDetails",
  async ({ type, id }) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=923d29f4e2bc2d80636bb469fb8abe61&language=en-US`
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);
export const getSimilar = createAsyncThunk(
  "cinemaDetails/getSimilar",
  async ({ type, id }) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=923d29f4e2bc2d80636bb469fb8abe61&language=en-US&page=1`
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);
export const getVideos = createAsyncThunk(
  "cinemaDetails/getVideos",
  async ({ type, id }) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=923d29f4e2bc2d80636bb469fb8abe61`
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);
export const getCredits = createAsyncThunk(
  "cinemaDetails/getCredits",
  async ({ type, id }) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=923d29f4e2bc2d80636bb469fb8abe61&language=en-US`
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);
const initialState = {
  details: [],
  similar: [],
  videos: [],
  credits: [],
  loading: false,
  error: "",
};
const cinemaDetailsSlice = createSlice({
  name: "cinemaDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetails.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getDetails.fulfilled, (state, action) => {
        state.details = action.payload;
        state.loading = false;
      });
    builder
      .addCase(getSimilar.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getSimilar.fulfilled, (state, action) => {
        state.similar = action.payload.results;
        state.loading = false;
      });
    builder
      .addCase(getVideos.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getVideos.fulfilled, (state, action) => {
        state.videos = action.payload.results;
        state.loading = false;
      });
    builder
      .addCase(getCredits.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCredits.fulfilled, (state, action) => {
        state.credits = action.payload;
        state.loading = false;
      });
  },
});

export default cinemaDetailsSlice.reducer;
