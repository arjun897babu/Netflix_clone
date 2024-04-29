const key = import.meta.env.VITE_TMDB_KEY

const baseURL = `https://api.themoviedb.org/3`

const endPoints = {
  popular: `${baseURL}/movie/popular?api_key=${key}`,
  topRated: `${baseURL}/movie/top_rated?api_key=${key}`,
  trending: `${baseURL}/movie/popular?api_key=${key}&language=en-US&page=2`,
  comedy: `${baseURL}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=true`,
  upcoming: `${baseURL}/movie/upcoming?api_key=${key}`,
  video: (movie_id) => `${baseURL}/movie/${movie_id}/videos?api_key=${key}&language=en-US`,
  detail: (movie_id) => `${baseURL}/movie/${movie_id}?api_key=${key}&language=en-US`
}

export function createImageUrl(fileName, size) {
  return `https://image.tmdb.org/t/p/${size}/${fileName}`
}

export default endPoints