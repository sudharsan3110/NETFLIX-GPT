import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResult: null,
    movieName: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addMovieResult: (state, action) => {
      const { movieName, movieResult } = action.payload;
      state.movieResult = movieResult;
      state.movieName = movieName;
    },
  },
});
export const { toggleGptSearchView, addMovieName, addMovieResult } =
  GptSlice.actions;
export default GptSlice.reducer;
