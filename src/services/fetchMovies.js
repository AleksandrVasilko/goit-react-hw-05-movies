import axios from 'axios';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Nofity } from 'notiflix/build/notiflix-notify-aio';

const API_KEY = '2be99a44138ee257c311e10fc02f689f';

async function fetchMovies(url) {
    try {
        Loading.pulse();

        const response = await axios.get(url);
        const movies = await response.data;
        Loading.remove();
        return movies;
    } catch (error){ 
        Nofity.failure(`${error}`);

        Loading.remove();

        return Promise.reject(error);
    }
}

export function fetchPopularMovies() { 
    return fetchMovies(
        `https://api.themoviedb.org/3/trending/movie/day?page=1&api_key=${API_KEY}`,
    );
}

export function fetchSearchMovies(query) {
    return fetchMovies(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`,
    );
}

export function fetchMovieDetails(movieId) {
    return fetchMovies(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`,
    );
}

export function fetchMovieCast(movieId) {
    return fetchMovies(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`,
    );
}

export function fetchMovieReviews(movieId) { 
    return fetchMovies(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`,
    );
}