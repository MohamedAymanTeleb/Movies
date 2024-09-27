import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { stringManager } from "../../const";

function MovieDetails() {
    let { id } = useParams();
    let [movie, setMovie] = useState({});
    useEffect(() => {
        axios.get(`${stringManager.apiGetMovie}/${id}?api_key=${stringManager.apiKey}`).then(
            (res) => {
                setMovie(res.data);
                console.log(res.data);

            }).catch((error) => {
                console.log(error);
            })
    }, []);

    // Fetch the data from https://api.themoviedb.org/3/movie/{id}?api_key=a0fc8c83cfb083744a63357b45457962
    return <>

        <div className="col bg-dark text-white d-flex justify-content-between" style={{ height: 500 }}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="col-5" alt="Movie Poster" />
            <div className="col-6 d-flex flex-column justify-content-center ">
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <h1 className="bg-danger col-5 text-center">{movie.release_date}</h1>
                <h1>{movie.popularity}</h1>
                <h1>{movie.status}</h1>
            </div>
        </div>

    </>;
}

export default MovieDetails;