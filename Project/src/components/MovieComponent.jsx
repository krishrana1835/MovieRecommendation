import { useState } from "react";
import "../css/Main.css"

function MovieComponent({movie}) {

    const [likeState, setLikeState] = useState(0);

    return (
        <>
        <div className="card text-start movie-card m-3 bg-dark">
            <img className="card-img-top image-fluid text-light" src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} alt={movie.title}/>
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.release_date?.split("-")[0]}<button className="btn btn-light bi bi-heart bg-dark text-light like-btn" name={movie.id}></button></p>
            </div>
        </div>
    </>
    )
}

export default MovieComponent;