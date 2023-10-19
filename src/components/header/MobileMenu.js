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


const MobileMenu = () => {
  const [open, setopen] = useState(false);

  return (
    <>
      <div className="mobile-menu">
        <div className="d-flex flex-row justify-content-between">
        <img className="mobile-logo" src={clublogo} style={{width:"230px", height:"80px"}}/>

        <div className="d-flex flex-row mobile-icons">
   
          <Link to={"/login"}><img src={avatar}  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/></Link>
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
                        <li>{"FAQs"}</li>
                      </Link>
                      <a href={"https://www.wkf.net/structure-statutes-rules"}>
                        <li>{"Rules"}</li>
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
                        <li>{"Register Team"}</li>
                      </Link>
                      <a href={"/drawzinglogin"}>
                        <li>{"Drawzing"}</li>
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
