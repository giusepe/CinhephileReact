import { Movie } from "./types";

export default function getUpcomingMovies(
  index: number,
  language: string
): Movie[] {
  return [
    {
      adult: false,
      backdrop_path: "/path/to/backdrop1.jpg",
      genre_ids: [28, 12],
      id: 1,
      original_language: "en",
      original_title: "Movie 1",
      overview: "This is an overview of Movie 1",
      popularity: 10.0,
      poster_path: "/path/to/poster1.jpg",
      release_date: "2022-01-01",
      title: "Movie 1",
      video: false,
      vote_average: 8.0,
      vote_count: 1000,
    },
    {
      adult: false,
      backdrop_path: "/path/to/backdrop2.jpg",
      genre_ids: [16, 35],
      id: 2,
      original_language: "en",
      original_title: "Movie 2",
      overview: "This is an overview of Movie 2",
      popularity: 20.0,
      poster_path: "/path/to/poster2.jpg",
      release_date: "2022-02-02",
      title: "Movie 2",
      video: false,
      vote_average: 7.0,
      vote_count: 2000,
    },
  ];
}
