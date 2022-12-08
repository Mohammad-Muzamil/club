import React, { useEffect, useState } from "react";
import MobileMenuSearch from "./sub-components/MobileSearch";
import MobileNavMenu from "./sub-components/MobileNavMenu";
import MobileWidgets from "./sub-components/MobileWidgets";

import MainLogo from "../../assets/img/logo/Logo.png"
import Cart from "../../assets/img/icons/Cart.png"
import search from "../../assets/img/icons/search.png"
import Menu from "../../assets/img/icons/menu.png"

const MobileMenu = () => {
    const [open, setopen] = useState(false);

  return (
    <div className="mobile-menu">
      <div className="d-flex flex-row justify-content-between">
      <img className="mobile-logo" src={MainLogo}/>

      <div className="d-flex flex-row mobile-icons">
        <img src={search}/>
        <img src={Cart}/>


        <img 
        onClick={()=> setopen(true)}
        src={Menu}/>
      </div>
      </div>
      <div
      
      style={{left: open ? 0 : '100vw'}}
      className={` ${open ? "d-block" : "d-none"} Side-Menu`}>
        <p
        onClick={()=> setopen(false)}
        >hell</p>
      </div>
    </div>
  );
};

export default MobileMenu;
