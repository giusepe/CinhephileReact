import React, { useEffect, useState } from "react";
import { Movie } from "../services/types";
import MovieCard from "../components/MovieCard";
import Spinner from "../components/Spinner";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../components/Pagination";
import getUpcomingMovies from "../services/movieService";

export default function UpcomingMovies() {
  const language = "en";

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const [upcomingMovies, setUpcomingMovies] = useState<Array<Movie>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState<Array<number>>([]);

  //TODO: Move this to inside the Pagination component or maybe a hook
  const [searchParams, setSearchParams] = useSearchParams();
  const p = Number(searchParams.get("page") ?? 0);
  useEffect(() => {
    if (p < 1) {
      setSearchParams("page=1");
    } else setCurrentPage(p);
  }, [p, setSearchParams]);

  useEffect(() => {
    getUpcomingMovies(currentPage, language)
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
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-800 rounded-xl">
      <Header />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <UpcomingMovieList movies={upcomingMovies} />
          <Pagination PageNumbers={pageNumbers} />
        </>
      )}
    </div>
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

const Header = () => {
  return (
    <div className="flex flex-col justify-start pb-4">
      <div className="relative">
        <img
          className="hidden sm:block w-full h-96 object-cover"
          src="https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="sofa"
        />
        <img
          className="sm:hidden w-full h-8"
          src="https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="sofa"
        />
        <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
          <p className="text-3xl sm:text-4xl font-semibold leading-9 text-white">
            Upcoming Movies
          </p>
        </div>
      </div>
    </div>
  );
};
