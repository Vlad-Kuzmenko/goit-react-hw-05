import axios from "axios";

const fetchData = async (endpoint, customParams = {}) => {
  const response = await axios.get(endpoint, {
    params: { language: "en-US", ...customParams },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzg1ZDQ2M2M5OTk3MmNiNDBmZmY2YzI3YTg2YTVkMSIsIm5iZiI6MTc0OTU2Njk0My42MDA5OTk4LCJzdWIiOiI2ODQ4NDVkZmQzYzhkYWEwYWE5ZjU1OTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oi6l2rtAURA8K2k0pJG98AAZ9Yg9YtLS-x5pf8Y2UtY",
    },
  });
  return response;
};

export const getMovie = () =>
  fetchData("https://api.themoviedb.org/3/trending/movie/day");

export const getMovieDetails = (movieId) =>
  fetchData(`https://api.themoviedb.org/3/movie/${movieId}`);

export const getMovieCast = (movieId) =>
  fetchData(`https://api.themoviedb.org/3/movie/${movieId}/credits`);

export const getMovieReview = (movieId) =>
  fetchData(`https://api.themoviedb.org/3/movie/${movieId}/reviews`);

export const getMoviesByQuery = (query) =>
  fetchData("https://api.themoviedb.org/3/search/movie", { query });
