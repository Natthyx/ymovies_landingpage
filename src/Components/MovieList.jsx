import React from "react";
import Poster from "./Poster";
import movies from '../movies';
import { useState } from "react";

function MovieList(props) {
  // Filter movies based on type
  const [filterType, setFilterType] = useState(props.type);

  // Filter movies based on type
  const filteredMovies = filterType ?
    movies.filter(movie => movie.type === filterType) :
    movies;

  const handleButtonClick = (type) => {
    setFilterType(type);
  };
  
  return (
    <div className="movie-list">
      <div className="topic">
        <button>{props.category}</button>
        <h6 active onClick={() => handleButtonClick('')}>{props.all}</h6>
        <h6 active onClick={() => handleButtonClick('movie')}>{props.movie}</h6>
        <h6 onClick={() => handleButtonClick('series')}>{props.series}</h6>
      </div>
      <div className="poster-grid">
        {filteredMovies.map((movie, index) => (
          <Poster
            key={index}
            id={movie.id}
            title={movie.title}
            img={movie.img}
            quality={movie.quality}
            type = {movie.type}
            episode = {movie.eps}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
