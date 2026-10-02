import { useState } from "react"
import MovieCard from "./components/MovieCard"
import MovieList from "./components/MovieList"
import Navbar from "./components/Navbar"
import movies from "./data/movies"

const App = () => {
  const [search, setSearch] = useState("")

  const filteredMovies = movies.filter((movie) => 
    movie.title.toLowerCase().includes(search.toLowerCase())
  
  )
  return (
    <div className=''>
      <Navbar setSearch={setSearch}/>
      <MovieList movies={filteredMovies}/>
    </div>
  )
}

export default App

