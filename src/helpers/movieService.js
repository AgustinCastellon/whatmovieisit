import axios from "axios";

const url = 'https://api.themoviedb.org/3/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWQwODUxMmFlYjNkNTQ1YWFjNjFjMzNhMTEwNjA2NCIsIm5iZiI6MTc2MDAzMjY2My45ODg5OTk4LCJzdWIiOiI2OGU3Zjc5NzQ5Zjc2NzU0NzViN2FjNmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Qvd_v1hQuh_n4zKNSE4ubwT-5NHbMDx5Jmh2kHU2mVM'
  }
};

export const getPopularMovies = async () => {
  try {
    const randomPage = Math.floor(Math.random() * 20) + 1;
    const response = await axios.get(`${url}discover/movie?include_adult=false&include_video=false&language=en-US&page=${randomPage}&sort_by=popularity.desc&vote_count.gte=1000`, options)
    return response.data.results
  } catch (error) {
    console.log(error)
  }
}

export const getUnpopularMovies = async () => {
  try {
    const randomPage = Math.floor(Math.random() * 40) + 1;
    const response = await axios.get(
      `${url}discover/movie?include_adult=false&include_video=false&language=en-US&page=${randomPage}&sort_by=popularity.asc&vote_count.gte=100&vote_count.lte=1000&vote_average.gte=5&vote_average.lte=7.5&primary_release_date.gte=2000-01-01`,
      options
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export const getHorrorMovies = async () => {
  try {
    const randomPage = Math.floor(Math.random() * 40) + 1;
    const response = await axios.get(`${url}discover/movie?include_adult=false&include_video=false&language=en-US&page=${randomPage}&sort_by=popularity.desc&vote_count.gte=1000&with_genres=27`, options)
    return response.data.results;
  } catch (err) {
    console.log(err)
  }
}

export const getMovieDetail = async (id) => {
  try {
    const response = await axios.get(`${url}movie/${id}?language=es&append_to_response=keywords,images,videos,credits,alternative_titles,translations&include_image_language=es,en-US,null`, options)
    return response
  } catch (error) {
    console.log(error)
  }
}

export const getMovieVideos = async (id) => {
  try {
    const response = await axios.get(`${url}movie/${id}/videos`, options)
    return response
  } catch (err) {
    console.log(err)
  }
}

