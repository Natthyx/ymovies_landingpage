import React from "react";
import InputArea from "./InputArea";
import BrandLogo from "./BrandLogo";


function Header() {
  return (
    <div className="header">
      <div className="container">
        <BrandLogo />
        <div className="list">
          <ul>
            <li>HOME</li>
            <li>GENRE</li>
            <li>COUNTRY</li>
            <li>MOVIES</li>
            <li>TV SHOWS</li>
            <li>TOP IMDB</li>
          </ul>
          <InputArea />
        </div>
        
      </div>
    </div>
  );
}


export default Header;