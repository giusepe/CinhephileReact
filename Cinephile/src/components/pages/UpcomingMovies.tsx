import React, { useEffect, useState } from "react";
import { MovieData, Movie } from "../../services/types";

export default function UpcomingMovies() {
  const urlBase = "https://api.themoviedb.org/3";
  const apiKey = "1f54bd990f1cdfb230adb312546d765d";
  const language = "en";
  const m: Movie[] = [];

  const [isLoading, setIsLoading] = useState(true);
  const [upcomingMovies, setUpcomingMovies] = useState(m);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `${urlBase}/movie/upcoming?api_key=${apiKey}&language=${language}&page=${page}&sort_by=release_date`,
      {
        method: "GET",
        headers: new Headers({
          accept: "application/json",
          Authorization: "Bearer 1f54bd990f1cdfb230adb312546d765d",
        }),
      }
    )
      .then((respose) => respose.json())
      .then((data) => data as MovieData)
      .then((movieData) => setUpcomingMovies(movieData.results));
  }, [page]);

  return <div>UpcomingMovies {upcomingMovies.map((movie) => movie.title)}</div>;
}
