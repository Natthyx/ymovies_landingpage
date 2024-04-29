import { useParams } from "react-router-dom";
import movies from "../movies";
import Poster from "./Poster";

function FilteredMovie(props) {
  const { name } = useParams();
  const lowerCaseName = name.toLowerCase();

  // Filter movies based on genre
  const filteredMovies = movies.filter(movie => movie.country && movie.country.includes(lowerCaseName));

  return (
      <div className="movie-list">
      <div className="topic">
        <button>{props.category}</button></div>
        
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
      </div></div>
  );
}

export default FilteredMovie;
