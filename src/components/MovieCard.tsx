import React, { HTMLAttributes } from "react";
import { Movie } from "../services/types";
import Star from "./Star";

export type MovieCardProps = HTMLAttributes<HTMLDivElement> & {
  movie: Movie;
};

export default function MovieCard(props: MovieCardProps) {
  return (
    <div className="grid rounded-3xl max-w-[370px] shadow-sm bg-slate-100 flex-col">
      <MoviePoster movie={props.movie} />
      <div className="group p-6 grid z-10">
        <MovieTitle movie={props.movie} />
        <div className="h-28">
          <span className="line-clamp-4 py-2 text-sm font-light leading-relaxed">
            {props.movie.overview}
          </span>
        </div>
        <div className="grid-cols-2 flex group justify-between">
          <MovieScore movie={props.movie} />
          <MoviePopularity movie={props.movie} />
        </div>
      </div>
    </div>
  );
}

const MoviePoster = (props: { movie: Movie }) => {
  return (
    <img
      src={"https://image.tmdb.org/t/p/w500/" + props.movie.poster_path}
      width={375}
      height={200}
      className="rounded-t-3xl justify-center grid h-80 object-cover"
      alt={props.movie.title}
    />
  );
};

const MovieTitle = (props: { movie: Movie }) => {
  return (
    <>
      <span className="group-hover:text-cyan-700 font-bold sm:text-2xl line-clamp-2">
        {props.movie.title}
      </span>
      <span className="text-slate-400 pt-2 font-semibold">
        ({props.movie.release_date})
      </span>
    </>
  );
};

const MoviePopularity = (props: { movie: Movie }) => {
  return (
    <div className="flex flex-col items-end">
      <div className="h-7" />
      <span className="text-3xl  font-bold  gap-x-2 text-slate-300">
        #{(props.movie.popularity / 100).toString().slice(0, 4)}
      </span>
    </div>
  );
};

const MovieScore = (props: { movie: Movie }) => {
  return (
    <div className="font-black flex flex-col">
      <span className="text-yellow-500 text-xl">TMDB SCORE</span>
      <span className="text-3xl flex gap-x-1 items-center group-hover:text-yellow-600">
        {props.movie.vote_average}
        <Star />
      </span>
    </div>
  );
};
