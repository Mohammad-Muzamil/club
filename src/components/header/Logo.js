import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "../../assets/img/logo/Logo.png"
const Logo = (props) => {
  return (
    <div 
    className={"Header-logo"}>
      <Link to={process.env.PUBLIC_URL + "/"}>
        <img alt=""   src={MainLogo} />
      </Link>


      <p className="m-0 p-0">Hype Kicks</p>
    </div>
  );
};



export default Logo;
