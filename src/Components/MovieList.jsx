import React from "react";
import Poster from "./Poster";
import movies from '../movies';

function MovieList() {
  return (
    <div className="movie-list">
      <div className="topic">
        <button>Trending</button>
        <h6>Movies</h6>
        <h6>Tv Shows</h6>
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
