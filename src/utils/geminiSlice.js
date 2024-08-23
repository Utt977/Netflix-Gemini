import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
  name: "gemini",
  initialState: {
    showGeminiSearch: false,
    moviesNames: null,
    moviesResults: null,
  },
  reducers: {
    toggleGeminiSearch: (state) => {
      state.showGeminiSearch = !state.showGeminiSearch;
    },
    addGeminiMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.moviesNames = movieNames;
      state.moviesResults = movieResults;
    },
  },
});

export const { toggleGeminiSearch, addGeminiMovieResults } =
  geminiSlice.actions; // Corrected here

export default geminiSlice.reducer;
