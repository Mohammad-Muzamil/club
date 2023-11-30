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
        <a href="https://www.facebook.com/Youthmartialartsfsd?mibextid=ZbWKwL" target="_blank">
         <img src={FaceBook}/>
        </a>
      </div>

      <div className="social-icon">
        <a href="https://instagram.com/majidbutt.59?igshid=NXN5NjE0bTlvNjVr" target="_blank">
          <img src={Instagram}/>
        </a>
      </div>

      <a href="https://www.youtube.com/channel/UCIDxLiIcST9yv0vXZgF_XUg" target="_blank"><div className="social-icon">
        <img src={Telegram}/>
      </div>
      </a>

    </div>
  );
};




export default SocialMediaGroup;
