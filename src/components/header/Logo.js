import React from "react";
import { Link } from "react-router-dom";

import clublogo from "../../assets/img/icons/whiteclublogo.png"
import { useMediaQuery } from "react-responsive";
const Logo = (props) => {
  const isMobileactive = useMediaQuery({ maxWidth:767 });
  return (
    <div   className={""}>
      <Link to={process.env.PUBLIC_URL + "/"}>
        <img alt=""   src={clublogo} style={{marginTop:"10px" ,width:"300px"}} />
      </Link>


      {/* <p className="m-0 p-0"></p> */}
    </div>
  );
};



export default Logo;
