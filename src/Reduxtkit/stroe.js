import { configureStore } from "@reduxjs/toolkit";
import cinemaSlice from "./slice.js";
import cinemaDetailsSlice from "./sliceDetails.js";
export const store = configureStore({
  reducer: {
    cinema: cinemaSlice,
    cinemDetails: cinemaDetailsSlice,
  },
});
