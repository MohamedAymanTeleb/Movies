import { createBrowserRouter } from "react-router-dom";
import Layout from './Pages/Layout/Layout'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Home from './Pages/Home/Home'
import Movies from './Pages/Movies/Movies'
import MovieDetails from './Pages/MovieDetails/MovieDetails'
import NotFound from './Pages/NotFound/NotFound'
import Favorites from "./Pages/Favorites/Favorites";

export const Router = createBrowserRouter(
    [{
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },//INDEX
            { path: "/Home", element: <Home /> },
            { path: "/Register", element: <Register /> },
            { path: "/Login", element: <Login /> },
            { path: "/Movies", element: <Movies /> },
            { path: "/Favorites", element: <Favorites /> },
            { path: "/MovieDetails/:id", element: <MovieDetails /> },
            { path: "*", element: <NotFound /> },
        ],
    },
    ],
);