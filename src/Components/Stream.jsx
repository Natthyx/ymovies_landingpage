import React from "react";
import Header from './Header';
import Footer from "./Footer";
import logo from '../images/logo.png'
import { Link, useParams } from "react-router-dom";
import movies from "../movies";
import { FaPlay } from "react-icons/fa";
import SimilarMovie from './SimilarMovie';
import SocialMedia from "./SocialMedia";
import { FaPlus } from "react-icons/fa";




function Stream(props){
    const {id} = useParams();

    const movie = movies.find(movie => movie.id === Number(id));
    console.log(movie);
    const custStyle = {
        'width':'68%',
        'margin':'20px auto',


    }
    return(
        <div className="streamer">
            <Header />
            <div className="title">
                    <Link to='/' className="links">Home</Link> / 
                    <Link to='/movie/' className="links">Movies</Link> /  
                    {movie.title}
                </div>
            <div className="stream-contanier">
            <div className="top-section">
                <img src={movie.cover} alt="banner"></img>
                <img className="play-logo" src={logo} alt="logo"></img>
            </div>
            <div className="middle-row">
                <div className="middle-col-poster">
                <img src={movie.img} alt="poster"></img>
                </div>
                <div className="middle-col-description">
                <div className="middle-col-right">
                <Link to={`/stream/${props.id}`}>
                <button className="watch-nowbtn">
                    <FaPlay/>  Watch Now
                </button>
                </Link>
                <Link to={`/`}>
                <button className="favorite-btn">
                <FaPlus /> Add to favorite
                </button>
                </Link>
                </div>
                <h3 className="movie-title">{movie.title}</h3>
                <div className="trailer-button">
                <span className="tr-btn">Trailer</span>
                <span className="ql-btn">{movie.quality}</span>
                <span className="imdb">IMDB: N/A</span>
                </div>
                <div className="description">
                <p>{movie.desc}</p>
                </div>
                <div className="elements-row">
                    <div className="elements-col">
                        <ul>
                            <li><strong>Released:</strong> 2024-02-27</li>
                            <li><strong>Genre:</strong> </li>
                            <li><strong>Casts:</strong> </li>
                        </ul>
                    </div>
                    <div className="elements-col">
                        <ul>
                            <li><strong>Duration:</strong> 167 min</li>
                            <li><strong>Country:</strong> </li>
                            <li><strong>Production:</strong> </li>
                        </ul>
                    </div>
                    <div className="clearfix">
                    </div>
                </div>
                </div>
                </div>       
            </div>
            <SocialMedia style={custStyle}/>
            <SimilarMovie />
            <Footer />
        </div>
    )
}

export default Stream