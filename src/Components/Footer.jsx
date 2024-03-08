import React from "react";
import BrandLogo from "./BrandLogo";

function Footer(){
    return(
        <div className="footer">
        <div className="footer-col">
        <p>Ymovies.cc is a Free Movies streaming site with zero ads. We let you watch movies online without having to register or paying, with over 10000 movies and TV-Series. You can also Download full movies from Ymovies.cc and watch it later if you want.</p>
        <ul>
            <li><a href="#about">Terms of service</a></li>
            <li><a href="#about">Contact</a></li>
            <li><a href="#about">FAQ</a></li>
        </ul>
        </div>
        <div className="footer-col">
        <BrandLogo />
        <h5>© Ymovies.cc</h5>
        <h6>Ymovies.cc does not store any files on our server, we only linked to the media which is hosted on 3rd party services.</h6>
        </div>
        </div>
    )
}
export default Footer