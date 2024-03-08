import React from "react";
import logo from '../images/logo.png'

function BrandLogo(){
    return(
        <div className="brand-logo">
        <div className="logo"> 
        <img src={logo} alt="logo"></img>
        </div>
        <div className="name"> 
        <h2>Ymovies.cc</h2>
        </div>
       
    </div>
    )
}

export default BrandLogo