import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState : {
        nowPlayingMovies:null,
        nowPlayingTrailers:null,
        nowTrendingMovies:null
    },
reducers: {
        addnowPlayingMovies: (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addnowPlayingTrailers : (state,action) => {
            state.nowPlayingTrailers = action.payload;
        },
        addTrendingMovies : (state,action) =>{
            state.nowTrendingMovies = action.payload;
        }
}
});
export const {addnowPlayingMovies,addnowPlayingTrailers,addTrendingMovies} = movieSlice.actions;
export default movieSlice.reducer;