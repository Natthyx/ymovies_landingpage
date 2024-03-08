import React from "react";

function Poster(props){
    return(
        <div className="movie-card">
        <label>{props.quality}</label>
        <img src={props.img} alt="movie" />
        <span>{props.title}</span>
        </div>
    )
}

export default  Poster;
