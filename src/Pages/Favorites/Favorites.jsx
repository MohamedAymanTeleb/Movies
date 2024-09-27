import { useSelector } from "react-redux";

function Favorites() {

    const favList = useSelector((state) => state.Favorites.favList);

    return <>
        {!favList.length ? <div className=" col-12 bg-dark text-danger fw-bold d-flex flex-column justify-content-center align-items-center" style={{ height: 700 }}>
            <span className="fs-1 border bg-secondary" style={{ color: "#123456" }} > Favorites </span>
            <span className="col-8 my-3 bg-warning text-danger fw-bold d-flex justify-content-center align-items-center">{favList.length ? "" : "No Favorites"}</span>
        </div> : <div className="mx-auto container-fluid bg-dark row d-flex justify-content-evenly">
            {favList.map((movie, index) =>
            (
                <div key={index} className="col-5 d-flex flex-column justify-content-center my-3 border text-white bg-body-tertiary">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="col" alt="Movie Poster" />
                    <h1 style={{ height: 40 }} className="text-black">{movie.title}</h1>
                    <h1 className="bg-danger col-7 text-center my-5">{movie.release_date}</h1>
                </div>
            )

            )
            }
        </div>}



    </>
}
export default Favorites;