import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies: [],
    page: null,
    vote_average: null,

};
const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data: {results}} = await movieService.getAll();
            console.log(results);
            return results
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.results)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducer: {},

    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
                // const {page, results} = action.payload
                // state.movies = results
                // state.page = page
                // console.log(state.movies);???????????????????????????????
                // console.log(state.page);??????????????????????????????
            });
    },
});

const {reducer: movieReducer, actions: {setMovieForPage}} = movieSlice;
const movieActions = {
    getAll, setMovieForPage
}

export {
    movieReducer,
    movieActions,
}


