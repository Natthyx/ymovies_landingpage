import React, { useState } from "react";
import InputArea from "./InputArea";
import BrandLogo from "./BrandLogo";
import { Link } from "react-router-dom";
import genres from "../genres";
import countries from "../countries";

function Header() {
  const [isGenreDropdownOpen, setIsGenreDropdownOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  const showGenreDropdown = () => {
    setIsGenreDropdownOpen(true);
  };

  const hideGenreDropdown = () => {
    setIsGenreDropdownOpen(false);
  };
  const showCountryDropdown = () => {
    setIsCountryDropdownOpen(true);
  };

  const hideCountryDropdown = () => {
    setIsCountryDropdownOpen(false);
  };


  return (
    <div className="header">
      <div className="container">
        <BrandLogo />
        <div className="list">
          <ul>
            <li><Link className="link" to='/'>HOME</Link></li>
            <li onMouseEnter={showGenreDropdown}
                onMouseLeave={hideGenreDropdown}>
              <span className="link">GENRE</span>
              {isGenreDropdownOpen && (
                <div className="genre-container">
                <ul>
                  {genres.map(genre => (
                    <Link className="link" to={`/genre/${genre.name}`}>
                    <li key={genre.id}>{genre.name}</li>
                    </Link>
                  ))}
                </ul></div>
              )}
            </li>
            <li onMouseEnter={showCountryDropdown}
                onMouseLeave={hideCountryDropdown}>
              <span className="link">COUNTRY</span>
              {isCountryDropdownOpen && (
                <div className="genre-container">
                <ul>
                  {countries.map(country => (
                    <Link className="link" to={`/country/${country.id}`}>
                    <li key={country.id}>{country.name}</li></Link>
                  ))}
                </ul></div>
              )}
            </li>
            <li><Link className="link" to='/movie/'>MOVIES</Link></li>
            <li><Link className="link" to='/tvshow/'>TV-SHOW</Link></li>
            <li>TOP IMDB</li>
          </ul>
          <InputArea />
        </div>
        
      </div>
    </div>
  );
}

export default Header;
