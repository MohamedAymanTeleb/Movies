import { createSlice } from "@reduxjs/toolkit";

const FavoritesSlice = createSlice({
    name: "Favorites",
    initialState: { favList: [] },
    reducers:
    {
        addMovie: (state, action) => {
            state.favList.push(action.payload);
        },
    }
});
export const { addMovie } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;