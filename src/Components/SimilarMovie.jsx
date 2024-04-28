import React from "react";
import Poster from "./Poster";
import movies from '../movies';

function SimilarMovieList(props) {
  return (
    <div className="similar-movie-list">
      <div className="topic">
        <button>You may also Like</button>
      </div>
      <div className="similar-poster-grid">
        {movies.map((movie, index) => (
          <Poster
            key={index}
            id = {movie.id}
            title={movie.title}
            img={movie.img}
            quality={movie.quality}
          />
        ))}
      </div>
    </div>
  );
}

export default SimilarMovieList;
