import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "../../assets/img/logo/Logo.png"
const Logo = (props) => {
  return (
    <div 
    className={`${"logoClass"}`}>
      <Link to={process.env.PUBLIC_URL + "/"}>
        <img alt="" className="w-100"  src={MainLogo} />
      </Link>
    </div>
  );
};



export default Logo;
