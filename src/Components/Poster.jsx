import React from "react";
import logo from '../images/logo.png'
import { Link } from "react-router-dom";

function Poster(props){
    return(
        <div className="movie-card">
        {props.type === 'movie' ? <label className="quality">{props.quality}</label> : 
        <div>
        <label className="quality">{props.quality}</label>
        <label className="eps">{props.episode}</label>
        </div> }
        <Link to={`/stream/${props.id}`}>
        <img className="movie-img" src={props.img} alt="movie" />
        <img className="play-logo" src={logo} alt="logo"></img>
        <span>{props.title}</span>
        </Link>
        </div>
    )
}

export default  Poster;
