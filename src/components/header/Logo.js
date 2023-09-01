import React from "react";
import { Link } from "react-router-dom";

import clublogo from "../../assets/img/icons/clublogo.png"
const Logo = (props) => {
  return (
    <div 
    className={"Header-logo"}>
      <Link to={process.env.PUBLIC_URL + "/"}>
        <img alt=""   src={clublogo} style={{marginTop:"10px"}} />
      </Link>


      <p className="m-0 p-0">NYKAF</p>
    </div>
  );
};



export default Logo;
