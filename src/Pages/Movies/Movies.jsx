import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";
import { stringManager } from "../../const";
import axiosInstance from "../../axios/axios";
import { addMovie } from "../../Store/FavoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../../Store/MoviesSlice";

function Movies() {

    const dispatch = useDispatch();
    const nav = useNavigate();
    const NavigateTo = (path) => {
        nav(path);
    };

    // Fetch the data from https://api.themoviedb.org/3/movie/popular?api_key=a0fc8c83cfb083744a63357b45457962
    // let [page,results, totalPages,totalResults] = fetch from the API
    const [moviesList, setMovies] = useState([]);
    const popularMovies = useSelector((state) => state.Movies.moviesList);

    //Thunk part

    useEffect(() => {
        // Using redux thunk
        //=========================================================================================
        dispatch(getPopularMovies());

        // Using axiosInstance
        //=========================================================================================
        // axiosInstance.get().then(
        //     (res) => {
        //         setMovies(res.data.results);
        //     }
        // ).catch((error) => {
        //     console.log(error);
        // });
        //=========================================================================================

        // Using axios
        // =========================================================================================
        // axios.get(`${stringManager.apiGetTopRatedMovies}?api_key=${stringManager.apiKey}`).then(
        //     (res) => {

        //         setMovies(res.data.results);
        //         // console.log(res.data.results);
        //         // console.log(moviesList);

        //     }).catch((error) => {
        //         console.log(error);
        //     });
        //=========================================================================================

    }, []);

    // =========================================== ADD TO FAVORITES SECTION ===========================================

    const favList = useSelector((state) => state.Favorites.favList);

    const add = (_movie) => {
        dispatch(addMovie(_movie));
    };

    const onFav = (_id, _title, _poster_path, _release_date, _overview, _popularity, _status) => {
        const _movie = {
            id: _id, title: _title, poster_path: _poster_path, release_date: _release_date,
            overview: _overview, popularity: _popularity,
            status: _status,
        };
        // Check if the movie is already in the favorites list

        let flag = true;//true == add ; false == don't add

        favList.map((m) => {
            if (m.id === _id) {
                flag = false;
                return;
            }
        });

        if (flag) {
            add(_movie);
        }

    };

    // =========================================== ADD TO FAVORITES SECTION ===========================================


    return <>
        <div className="mx-auto container-fluid bg-dark row d-flex justify-content-evenly">
            {/* Using redux thunk */}
            {popularMovies.map((m, index) => {
                // {moviesList.map((m, index) => {
                return (
                    <div key={index} className="col-xxl-2 col-xl-3 col-md-4 col-sm-6 my-3">

                        <Card className="col">
                            <Card.Img variant="top" src={`${stringManager.apiMoviePoster}/${m.poster_path}`}
                                onClick={() => { NavigateTo(`/MovieDetails/${m.id}`); }} style={{ height: 442 }} />
                            <Card.Body>
                                <Card.Title className="fw-bold" style={{ height: 40 }}>{m.title}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>{m.release_date}</ListGroup.Item>
                                <ListGroup.Item>{m.popularity}</ListGroup.Item>
                                <ListGroup.Item>{m.original_language}</ListGroup.Item>
                                <ListGroup.Item><button type="button" className="btn btn-danger col-12 text-white" onClick={() => { onFav(m.id, m.title, m.poster_path, m.release_date, m.overview, m.popularity, m.status); }}>Add to favorites</button></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>)
            })}
        </div>
    </>;
}
export default Movies;