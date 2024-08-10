import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState : {
        nowPlayingMovies:null,
        nowPlayingTrailers:null,
        nowTrendingMovies:null,
        nowUpcomingMovies:null,
        nowTopRatedMovies:null
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
        },
         addUpcomingMovies : (state,action) =>{
            state.nowUpcomingMovies = action.payload;
        },
        addTopRatedMovies : (state,action) =>{
            state.nowTopRatedMovies = action.payload;
        }
}
});
export const {addnowPlayingMovies,addnowPlayingTrailers,addTrendingMovies,addUpcomingMovies,addTopRatedMovies} = movieSlice.actions;
export default movieSlice.reducer;