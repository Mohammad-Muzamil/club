import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../../assets/img/icons/Cart.png"
import search from "../../assets/img/icons/search.png"
import Avatar from "../../assets/img/icons/Avatar.png"
import dropdown from "../../assets/img/icons/dropdown.png";
import { faBell, faDashboard, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-toastify/dist/ReactToastify.css';
import { Success } from "../../helpers/NotifiyToasters";


const IconGroup = (props) => {
  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("start");
  };
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [url, seturl] = useState("");

  const handleMouseEnter = () => {
    const instUser = sessionStorage.getItem('inst_user');
    const adminUser = sessionStorage.getItem('admin_user');
    const plyUser = sessionStorage.getItem('ply_user');
    if(instUser){
      setIsMenuVisible(true);
      seturl("/coach");
    }
    else if (adminUser){
      setIsMenuVisible(true);
      seturl("/admin");

    }
    else if (plyUser){
      setIsMenuVisible(true);
      seturl("/student");

    }
    else{
    setIsMenuVisible(false);
    }
  };

  const handleMouseLeave = () => {
    
    setIsMenuVisible(false);
  };
  const logoutfunc = () => {
    const instUser = sessionStorage.getItem('inst_user');
    const adminUser = sessionStorage.getItem('admin_user');
    const plyUser = sessionStorage.getItem('ply_user');
    if(instUser){
      sessionStorage.removeItem('inst_token')
      sessionStorage.removeItem('inst_user')
      sessionStorage.removeItem('inst_branch')
      Success("Successfully Logout");
      seturl("");
    }
    else if (adminUser){
      sessionStorage.removeItem('admin_token');
      sessionStorage.removeItem('admin_user');
      Success("Successfully Logout");
      seturl("");

    }
    else if (plyUser){
      sessionStorage.removeItem('ply_token')
      sessionStorage.removeItem('ply_user')
      sessionStorage.removeItem('ply_branch')
      Success("Successfully Logout");
      seturl("");
    }
    setIsMenuVisible(false);
  };


  return (
    <div className={`header-right-wrap`}>


   

      <div className="same-style header-compare">
        <div className="d-flex ">
      <ul>
        <li style={{display:"flex"}}>
        <Link to={"/login"} className="text-white" style={{fontSize:"15px", fontFamily:"mont"}}  onMouseEnter={handleMouseEnter}>Login&nbsp;</Link>
          <Link to={process.env.PUBLIC_URL + "/login"} >
          
          <img
            src={Avatar}
            type="button"
            className="navBarLogo "
            onMouseEnter={handleMouseEnter}
            
          
          />          
          </Link>
            {isMenuVisible&&<ul className="mega-menu mega-menu-padding" style={{marginTop:"30px",backgroundColor:"white",width:"150px",paddingBottom:"15px",paddingTop:"15px",paddingLeft:"20px",position:"absolute",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"}}onMouseLeave={handleMouseLeave}>
                <li className="w-100">
                  <ul>
                  <Link to={`${process.env.PUBLIC_URL}${url}`}>
                      <li><FontAwesomeIcon icon={faDashboard} style={{fontSize:"18px", paddingTop:"3px",paddingRight:"7px"}}/>{"Dashboard"}</li>
                    </Link>
                    <Link to={"#"} >
                      <li onClick={logoutfunc} className="mt-2" ><FontAwesomeIcon icon={faSignOut} style={{fontSize:"18px", paddingTop:"3px",paddingRight:"7px"}}/>{"Logout"}</li>
                    </Link>
                  </ul>
                </li>
              </ul> }
           
          </li>
          </ul>
        </div>
      </div>

      <div className="same-style d-block d-lg-none">
        <button

          onClick={() => triggerMobileMenu()}
        >
          <i className="pe-7s-menu" />
        </button>
      </div>

    </div>
  );
};




export default IconGroup;
