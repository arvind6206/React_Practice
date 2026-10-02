import React from "react";

interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
  duration: string;
  director: string;
  description: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className=" mt-5 w-72 rounded-lg border bg-white p-4 shadow-sm">
      <h2 className="text-xl font-bold">{movie.title}</h2>

      <div className="mt-2 flex gap-2 text-sm text-gray-600">
        <span>{movie.year}</span>
        <span>•</span>
        <span>{movie.genre}</span>
      </div>

      <div className="mt-2 flex justify-between text-sm">
        <span>⭐ {movie.rating}</span>
        <span>{movie.duration}</span>
      </div>

      <p className="mt-3 text-sm text-gray-600">
        Director: {movie.director}
      </p>

      <p className="mt-3 text-sm text-gray-700">
        {movie.description}
      </p>

      <button className="mt-4 w-full rounded-md bg-black py-2 text-white">
        View Details
      </button>
    </div>
  );
};

export default MovieCard;