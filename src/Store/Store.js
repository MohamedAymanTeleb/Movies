import { configureStore } from "@reduxjs/toolkit";
import FavoritesSlice from "./FavoritesSlice";
import MoviesSlice from "./MoviesSlice";

const Store = configureStore({
    reducer: {
        Favorites: FavoritesSlice,
        Movies: MoviesSlice,
    },
});
export default Store;