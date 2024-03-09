import React from "react";
import { FaPlay } from "react-icons/fa";


function SwiperCard(props){
    return(
        <div className="card-contanier">
            <div className="top-section">
                <img src={props.img} alt="banner"></img>
            </div>
            <div className="middle-section">
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
                <div className="film-detail">
                <ul>
                        <li>Genre</li>
                        <li>Duration</li>
                        <li>Released</li>
                        <li>IMDB</li>
                    </ul>
                </div>
                <div className="watchBtn">
                <button>
                    <FaPlay/>  Watch Now
                </button>
                </div>
                
                    
                </div>
            </div>
    )
}

export default  SwiperCard; 