import React from "react";
import logo from '../images/logo.png'
import { Link } from "react-router-dom";

function BrandLogo(){
    return(
        <Link className="link" to="/">
        <div className="brand-logo">
        
        <div className="logo"> 
        <img src={logo} alt="logo"></img>
        </div>
        <div className="name"> 
        <h2>Ymovies.cc</h2>
        </div>
        </div>
        </Link>
       
    
    )
}

export default BrandLogo