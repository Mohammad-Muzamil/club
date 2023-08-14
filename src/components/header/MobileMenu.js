import React, { useEffect, useState } from "react";
import MobileMenuSearch from "./sub-components/MobileSearch";
import MobileNavMenu from "./sub-components/MobileNavMenu";
import MobileWidgets from "./sub-components/MobileWidgets";

import MainLogo from "../../assets/img/logo/Logo.png"
import avatar from "../../assets/img/icons/Avatar.png"
import search from "../../assets/img/icons/search.png"
import Menu from "../../assets/img/icons/menu.png"
import dropdown from "../../assets/img/icons/dropdown.png"
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";
import clublogo from "../../assets/img/icons/clublogo.png"

const MobileMenu = () => {
  const [open, setopen] = useState(false);

  return (
    <>
      <div className="mobile-menu">
        <div className="d-flex flex-row justify-content-between">
        <img className="mobile-logo" src={clublogo}/>

        <div className="d-flex flex-row mobile-icons">
          <img src={search}/>
          <img src={avatar}  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
          <div class="dropdown-menu">
            <Link to={{ pathname: process.env.PUBLIC_URL + "/my-account" }}>
              <li>Profile</li>
            </Link>
            <Link
              to={{ pathname: process.env.PUBLIC_URL }}

            >
              <li>LogOut</li>
            </Link>


          </div>
          <img onClick={()=> setopen(true)} src={Menu} data-toggle="collapse" data-target="#menu"  />
        </div>
        </div>
        {/* <div style={{left: open ? 0 : '100vw'}} className={` ${open ? "d-block" : "d-none"} Side-Menu`}>
          <p onClick={()=> setopen(false)} >hell</p>  
        </div> */}
        <div  className="collapse" id="menu"  >
          <div class="main-menu">
              <nav>
              <ul className="mt-0">
                <li >
                  <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
                </li>
                <li classname="na" >
                  <Link  data-toggle="collapse" data-target="#brand-collapse"  >Branches</Link>
				  <img className="dropdown-img" src={dropdown} />
                  <div class="collapse" aria-labelledby="navbarDropdown" id="brand-collapse">
                    <ul>
                    
                    </ul>
                  </div>
                </li>
                <li >
                  <Link to={process.env.PUBLIC_URL}>Help</Link>
                  <ul className="mega-menu mega-menu-padding">
                    <li className="w-100">
                      <ul>
                      <Link to={process.env.PUBLIC_URL + "/faqs"}>
                        <li>{"FAQs"}</li>
                      </Link>
                      <Link to={process.env.PUBLIC_URL}>
                        <li>{"Rules"}</li>
                      </Link>
                      </ul>
                    </li>
                  </ul>
                  <img className="dropdown-img" src={dropdown} />
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
              </ul>
            </nav>  
          </div> 
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
