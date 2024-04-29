import React, { useState } from "react";
import movies from "../movies";
import { Link } from "react-router-dom";

function InputArea() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function handleInputChange(event) {
    const { value } = event.target;
    setQuery(value);
    if (value === "") {
      setSuggestions([]);
    } else {
      const filteredSuggestions = movies.filter((movie) =>
        movie.title.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions.slice(0, 3));
    }
  }

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <form className="search">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Enter Keywords..."
          ></input>
          <button>LOGIN</button>
        </form>
      </div>
      {suggestions.length > 0 && ( 
        <div className="search-suggestion">
          <ul>
            {suggestions.map((movie) => (
              <Link key={movie.id} className="link" to={`/stream/${movie.id}`}>
                <li>
                  <div className="searched-movie">
                    <div className="movie-poster">
                      <img src={movie.img} alt="movie" />
                    </div>
                    <div className="movie-title">
                      <h4>{movie.title}</h4>
                      <div className="movie-detail">
                        <span>2024  .  167Min  .  Movie</span>
                      </div>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
            <hr></hr>
          </ul>
        </div>
      )}
    </div>
  );
}

export default InputArea;
