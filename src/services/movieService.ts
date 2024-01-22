import { MovieData, MovieDetail } from "./types";

const urlBase = "https://api.themoviedb.org/3";
const apiKey = "1f54bd990f1cdfb230adb312546d765d";
export const MoviePosterBaseUrl = "https://image.tmdb.org/t/p/w500/";

export default function getUpcomingMovies(
  selectedPage: number,
  language: string
): Promise<MovieData> {
  return fetch(
    `${urlBase}/movie/upcoming?api_key=${apiKey}&language=${language}&page=${selectedPage}&sort_by=release_date`
  )
    .then((respose) => respose.json())
    .then((data) => data as MovieData);
}

export function getMovie(
  movieId: number,
  language: string
): Promise<MovieDetail> {
  return fetch(
    `${urlBase}/movie/upcoming?api_key=${apiKey}&language=${language}&movie_id=${movieId}`
  )
    .then((respose) => respose.json())
    .then((data) => data as MovieDetail);
}
