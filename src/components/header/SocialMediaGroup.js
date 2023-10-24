import React from "react";
import { Link } from "react-router-dom";
import FaceBook from '../../assets/img/logo/facebook.png'
import Instagram from '../../assets/img/logo/instagram.png'
import Telegram from '../../assets/img/logo/telegram.png'
import dropdown  from "../../assets/img/icons/dropdown.png"

const SocialMediaGroup = (props) => {

  return (
    <div className={`header-right-wrap`}>

   

      <div className="social-icon">
        <img src={FaceBook}/>
      </div>

      <div className="social-icon">
        <img src={Instagram}/>
      </div>

      <a href="https://www.youtube.com/channel/UCIDxLiIcST9yv0vXZgF_XUg" target="_blank"><div className="social-icon">
        <img src={Telegram}/>
      </div>
      </a>

    </div>
  );
};




export default SocialMediaGroup;
