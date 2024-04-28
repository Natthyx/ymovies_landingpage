import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaRedditAlien } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";



function SocialMedia({ style }){
    return (
    <div className="bottom-section" style={style}>
        <ul>
          <li className="facebook"><FaFacebook /></li>
          <li className="twitter"><BsTwitterX /></li>
          <li className="whatsapp"><FaWhatsapp /></li>
          <li className="messanger"><FaFacebookMessenger /></li>
          <li className="reddit"><FaRedditAlien /></li>
          <li className="telegram"><FaTelegram /></li>
          
        </ul>
      </div>
    )
}

export default SocialMedia;

