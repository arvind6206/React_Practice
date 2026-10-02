import React from 'react'
import MovieCard from './MovieCard';

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

interface MovieListProps {
    movies: Movie[]
}

const MovieList = ({movies}: MovieListProps) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </div>
  )
}

export default MovieList
