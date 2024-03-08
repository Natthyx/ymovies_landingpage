import React from "react";
import logo from '../images/logo.png'

function Poster(props){
    return(
        <div className="movie-card">
        <label>{props.quality}</label>
        <img className="movie-img" src={props.img} alt="movie" />
        <img className="play-logo" src={logo} alt="logo"></img>
        <span>{props.title}</span>
        </div>
    )
}

export default  Poster;
