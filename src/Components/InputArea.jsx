import React, { useState } from "react";
import movies from "../movies";

function InputArea() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  // const [showAll , setShowAll] = useState(false)

  function handleInputChange(event) {
    const { value } = event.target;
    setQuery(value);
    if (value === "") {
      setSuggestions([]);
    } else {
      const filteredSuggestion = movies.filter((movie) =>
        movie.title.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestion.slice(0, 3));
      // setShowAll(false);
    }
  }

  // function handleViewAll(){
  //     setSuggestions(filteredSuggestion)
  //     setShowAll(true);
  // }

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
      <div className="search-suggestion">
        <ul>
          {suggestions.map((movie) => (
            <li key={movie.id}>
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
          ))}
          <hr></hr>
        </ul>
      </div>
    </div>
  );
}

export default InputArea;
