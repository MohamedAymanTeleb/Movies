import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axios/axios";

const getPopularMovies = createAsyncThunk("getPopularMovies", async () => {
    // await axiosInstance.get().then((res) => {
    //     return res.data.results;
    // }).catch((error) => {
    //     console.log(error);
    // });
    try {
        var data = await axiosInstance.get();
        return data.data.results;
    }
    catch (error) {
        console.log(error);
    };
});

const moviesSlice = createSlice({
    name: "Movies",
    initialState: { moviesList: [] },
    extraReducers: (builder) => {
        builder.addCase(getPopularMovies.fulfilled, (state, action) => {
            state.moviesList = action.payload;
        });
    }
});
export default moviesSlice.reducer;
export { getPopularMovies };