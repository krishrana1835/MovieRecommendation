const api_key = "48da79f9f8cd8d6018fcde5c7b825179"
const url = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${url}/movie/popular?api_key=${api_key}`)
    const data = await response.json()
    return data.results
}

export const searchMovies = async (query) => {
    const response = await fetch(`${url}/search/movie?api_key=${api_key}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};

export const getDailyTop = async (query) => {
    const response = await fetch(`${url}/trending/movie/day?api_key=${api_key}&language=en-US&page=1`)
    const data = await response.json()
    return data.results
}