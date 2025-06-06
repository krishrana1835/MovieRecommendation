import { useState } from "react";
import "../css/Main.css";

function TodaysPopular({ movie }) {
    const [likeState, setLikeState] = useState(0);

    return (
        <div className="card text-start m-3 movie-card-popular">
            <div className="row justify-content-center align-items-center g-2 bg-dark">
                <div className="col-12 col-md-4 text-center p-2">
                    <img
                        className="card-img-top img-fluid"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                </div>
                <div className="col-12 col-md-6 p-3">
                    <div className="card-body text-light">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.release_date?.split("-")[0]}</p>
                        <p>{movie.overview}</p>
                        <p>Languages: {movie.original_language}</p>

                        {movie.adult && (
                            <>
                                <button
                                    className="bg-danger rounded"
                                    disabled
                                    style={{ color: "white", border: "none" }}
                                >
                                    18+
                                </button>
                                <br />
                                <br />
                            </>
                        )}

                        <button
                            className="btn btn-light bi bi-heart bg-dark text-light like-btn"
                            name={movie.id}
                        ></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodaysPopular;
