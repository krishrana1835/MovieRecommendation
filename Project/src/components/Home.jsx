import { useState, useEffect } from 'react';
import { searchMovies, getPopularMovies, getDailyTop } from '../services/api';
import MovieComponent from './MovieComponent';
import TodaysPopular from './TodaysPopular';
import '../css/Main.css'

function Home({ searchData, setSearchData }) {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [dailyTop, setDailyTop] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            setError("");
            setLoading(true);
            try {
                if (searchData) {
                    const data = await searchMovies(searchData);
                    setMovies(data);
                } else {
                    const [popularMovies, dailyTop] = await Promise.all([
                        getPopularMovies(),
                        getDailyTop()
                    ]);
                    setMovies(popularMovies);
                    setDailyTop(dailyTop);
                }
            } catch (error) {
                console.error(error);
                setError("Error in fetching movies");
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [searchData]);

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {!searchData && (
                <>
                    <div className="container" data-aos="fade-right">
                        <h3 className="text-light mt-2">Today's Top</h3>
                    </div>
                    <div id="carouselId" className="carousel slide" data-bs-ride="carousel" data-aos="zoom-in">
                        <div className="carousel-inner" role="listbox">
                            {dailyTop.map((movie, index) => (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={movie.id}>
                                    <TodaysPopular movie={movie} />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </>
            )}

            <div className="container">
                <hr style={{ color: "white" }} />
                <h3 className="text-light" data-aos="fade-right">{searchData ? "Search Results" : "Popular Shows"}</h3>

                <div className="row" data-aos="zoom-in">
                    {movies.map((movie) => (
                        <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3 justify-content-center">
                            <MovieComponent movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
