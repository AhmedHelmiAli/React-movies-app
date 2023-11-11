import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("movies"))
    ? JSON.parse(localStorage.getItem("movies"))
    : [],
};
const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    toggleMovie: (state, movie) => {
      if (state.value.find((mov) => mov.id === movie.payload.id)) {
        state.value = state.value.filter((mov) => mov.id !== movie.payload.id);
      } else {
        state.value = [...state.value, movie.payload];
      }
      localStorage.setItem("movies", JSON.stringify(state.value));
    },
  },
});
export const { toggleMovie } = watchListSlice.actions;
export default watchListSlice.reducer;
