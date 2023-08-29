import React from "react";
import { Link } from "react-router-dom";
import Cart from "../../assets/img/icons/Cart.png"
import search from "../../assets/img/icons/search.png"
import Avatar from "../../assets/img/icons/Avatar.png"


const IconGroup = (props) => {
  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("start");
  };


  return (
    <div className={`header-right-wrap`}>


      <div className="same-style header-compare">
        <div className="dropdown">
          <Link to={process.env.PUBLIC_URL + "/wishlist"}>
            <img className="navBarLogo" src={search} />
          </Link>
        </div>
      </div>


      <div className="same-style header-compare">
        <div className="dropdown">
          <Link to={process.env.PUBLIC_URL + "/login"} >
          <img
            src={Avatar}
            type="button"
            className="navBarLogo dropdown-toggle"
            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
          />
          </Link>

          {/* <div className="dropdown-menu">
            <Link to={{ pathname: process.env.PUBLIC_URL + "/login" }}>
              <li>Profile</li>
            </Link>
            <Link
              to={{ pathname: process.env.PUBLIC_URL }}

            >
              <li>LogOut</li>
            </Link>
          </div> */}
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
