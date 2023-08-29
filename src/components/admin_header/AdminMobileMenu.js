import React, { useEffect, useState } from "react";
import MobileMenuSearch from "./sub-components/MobileSearch";
import MobileNavMenu from "./sub-components/MobileNavMenu";
import MobileWidgets from "./sub-components/MobileWidgets";

import MainLogo from "../../assets/img/logo/Logo.png"
import avatar from "../../assets/img/icons/Avatar.png"
import search from "../../assets/img/icons/search.png"
import Menu from "../../assets/img/icons/menu.png"
import dropdown from "../../assets/img/icons/dropdown.png"
import NavMenu from "./AdminNavMenu";
import { Link } from "react-router-dom";
import clublogo from "../../assets/img/icons/clublogo.png"

const AdminMobileMenu = () => {
  const [open, setopen] = useState(false);

  return (
    <>
      <div className="mobile-menu">
        <div className="d-flex flex-row justify-content-between">
        <img className="mobile-logo" src={clublogo}/>

        <div className="d-flex flex-row mobile-icons">
          <img src={search}/>
          <img src={avatar}  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
          <div className="dropdown-menu">
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
      
        <div  className="collapse" id="menu"  >
          <div className="main-menu">
              <nav>
              <ul className="mt-0">
                <li >
                  <Link to={process.env.PUBLIC_URL + "/dashboard"}>Home2</Link>
                </li>
              
              </ul>
            </nav>  
          </div> 
        </div>
      </div>
    </>
  );
};

export default AdminMobileMenu;
