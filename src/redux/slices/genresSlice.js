import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";


const initialState = {
    genres: [],

};
const genresAll = createAsyncThunk(
    'genreSlice/genresAll',
    async (_, thunkAPI) => {
        try {
            const {data:{results}} = await genreService.genresAll();
            return results
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);
const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducer: {},

    extraReducers: builder => {
        builder
            .addCase(genresAll.fulfilled, (state, action) => {
                // const {items} = action.payload;
                state.genre = action.payload

            });
    },
});

const {reducer: genreReducer} = genreSlice;
const genreActions = {
    genresAll
}

export {
    genreReducer,
    genreActions,
}


