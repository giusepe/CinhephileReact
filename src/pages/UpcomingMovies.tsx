import React, { useEffect, useState } from "react";
import { MovieData, Movie } from "../services/types";
import MovieCard from "../components/MovieCard";
import Spinner from "../components/Spinner";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../components/Pagination";

export default function UpcomingMovies() {
  const urlBase = "https://api.themoviedb.org/3";
  const apiKey = "1f54bd990f1cdfb230adb312546d765d";
  const language = "en";

  const [isLoading, setIsLoading] = useState(true);
  const [upcomingMovies, setUpcomingMovies] = useState<Array<Movie>>([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState<Array<number>>([]);

  const [searchParams] = useSearchParams();
  const p = Number(searchParams.get("page") ?? 0);

  useEffect(() => {
    setCurrentPage(p);
  }, [p]);

  useEffect(() => {
    fetch(
      `${urlBase}/movie/upcoming?api_key=${apiKey}&language=${language}&page=${currentPage}&sort_by=release_date`,
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
      .then((data) => {
        setPageNumbers([...Array(data.total_pages).keys()]);
        return data;
      })
      .then((movieData) => {
        setUpcomingMovies(movieData.results);
        setIsLoading(false);
      });
  }, [currentPage]);

  return (
    <>
      <h2 className="mb-4 font-bold text-xl text-black">Upcoming Movies</h2>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-700 py-6 sm:py-12 rounded-xl">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <UpcomingMovieList movies={upcomingMovies} />
            <Pagination PageNumbers={pageNumbers} />
          </>
        )}
      </div>
    </>
  );
}

const UpcomingMovieList = (props: { movies: Movie[] }) => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 w-full">
      <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {props.movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};
