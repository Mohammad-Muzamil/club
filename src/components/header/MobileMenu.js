import React, { useEffect, useState } from "react";
import MobileMenuSearch from "./sub-components/MobileSearch";
import MobileNavMenu from "./sub-components/MobileNavMenu";
import MobileWidgets from "./sub-components/MobileWidgets";
import avatar from "../../assets/img/icons/Avatar.png"
import search from "../../assets/img/icons/search.png"
import Menu from "../../assets/img/icons/menu.png"
import dropdown from "../../assets/img/icons/dropdown.png"
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";
import clublogo from "../../assets/img/icons/whiteclublogo.png"
import { faDashboard, faGamepad, faHandHolding, faQuestion, faSignOut, faSignsPost, faTableCells, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Success } from "../../helpers/NotifiyToasters";

const MobileMenu = () => {
  const [open, setopen] = useState(false);
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
    <>
      <div className="mobile-menu">
        <div className="d-flex flex-row justify-content-between">
        <img className="mobile-logo" src={clublogo} style={{width:"230px", height:"70px"}}/>

        <div className="d-flex flex-row mobile-icons">
   
          <Link to={"/login"}>
            <img src={avatar}  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onMouseEnter={handleMouseEnter} />
          </Link>
          {isMenuVisible&&<ul className="mega-menu mega-menu-padding" style={{zIndex:"999",marginLeft:"-40px",marginTop:"150px",backgroundColor:"white",width:"150px",paddingBottom:"15px",paddingTop:"15px",paddingLeft:"20px",position:"absolute",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"}}onMouseLeave={handleMouseLeave}>
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



          <img onClick={()=> setopen(true)} src={Menu} data-toggle="collapse" data-target="#menu"  />
        </div>
        </div>
    
        <div  className="collapse" id="menu"  >
          <div className="main-menu">
              <nav>
              <ul className="mt-0">
                <li >
                  <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
                </li>
                <li className="na" >
                  <Link to={"/branch"} data-toggle="collapse" data-target="#brand-collapse"  >Branches</Link>
				           
                </li>
                
                <li >
                  <Link to={process.env.PUBLIC_URL + "/gallery"}>Gallery</Link>
                </li>
                <li >
                  <Link to={process.env.PUBLIC_URL + "/aboutus"}>About Us</Link>
                </li>
                <li >
                  <Link to={process.env.PUBLIC_URL + "/contactus"}>Contatct Us</Link>
                </li>
                <li >
                  <Link to={process.env.PUBLIC_URL + "/registration"}>Registration</Link>
                </li>
                <li >
                  <Link to={process.env.PUBLIC_URL}>Help</Link>
                  <ul className="mega-menu mega-menu-padding">
                    <li className="w-100">
                      <ul>
                      <Link to={process.env.PUBLIC_URL + "/faqs"}>
                        <li><FontAwesomeIcon icon={faQuestion} style={{fontSize:"18px", paddingTop:"0px",paddingRight:"7px"}}/>{"FAQs"}</li>
                      </Link>
                      <a href={"https://www.wkf.net/structure-statutes-rules"}>
                        <li><FontAwesomeIcon icon={faTableCells} style={{fontSize:"18px", paddingTop:"0px",paddingRight:"5px"}}/>{"Rules"}</li>
                      </a>
                      </ul>
                    </li>
                  </ul>
                  <img className="dropdown-img" src={dropdown} />
                </li>
                <li >
                  <Link to={process.env.PUBLIC_URL}>Event</Link>
                  <ul className="mega-menu mega-menu-padding">
                    <li className="w-100">
                      <ul>
                      <Link to={process.env.PUBLIC_URL + "/teamregistration"}>
                        <li><FontAwesomeIcon icon={faUsers} style={{fontSize:"18px", paddingTop:"3px",paddingRight:"7px"}}/>{"Register Team"}</li>
                      </Link>
                      <a href={"/drawzinglogin"}>
                        <li><FontAwesomeIcon icon={faGamepad} style={{fontSize:"18px", paddingTop:"3px",paddingRight:"7px"}}/>{"Drawzing"}</li>
                      </a>
                      </ul>
                    </li>
                  </ul>
                  <img className="dropdown-img" src={dropdown} />
                </li>
              </ul>
            </nav>  
          </div> 
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
