import React from "react";
import InputArea from "./InputArea";
import BrandLogo from "./BrandLogo";
import { Link } from "react-router-dom";



function Header() {
  return (
    <div className="header">
      <div className="container">
        <BrandLogo />
        <div className="list">
          <ul>
            <li><Link className="link" to='/'>HOME</Link></li>
            <li>GENRE</li>
            <li>COUNTRY</li>
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