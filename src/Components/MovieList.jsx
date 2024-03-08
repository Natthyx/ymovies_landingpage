import React from "react";
import Poster from "./Poster";
import movies from '../movies';

function MovieList(props) {
  return (
    <div className="movie-list">
      <div className="topic">
        <button>{props.catagory}</button>
        <h6>{props.movie}</h6>
        <h6>{props.series}</h6>
      </div>
      <div className="poster-grid">
        {movies.map((movie, index) => (
          <Poster
            key={index}
            title={movie.title}
            img={movie.img}
            quality={movie.quality}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
