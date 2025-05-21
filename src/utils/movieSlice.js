import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        PopularMovies:null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies : (state, action)=> {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action)=> {
            state.PopularMovies = action.payload;
        },
        addTrailerVideos: (state, action)=> {
            state.trailerVideo = action.payload;
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideos,addPopularMovies} = movieSlice.actions;

export default movieSlice.reducer;