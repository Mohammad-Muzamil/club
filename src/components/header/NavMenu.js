import React from "react";
import { Link } from "react-router-dom";
import dropdown from "../../assets/img/icons/dropdown.png"

const NavMenu = (props) => {
  return (
    <div
      className={` ${`main-menu `
        } `}
    >
      <nav>
        <ul className="mt-0">
          <li >
            <Link to={process.env.PUBLIC_URL + "/shop"}>Home</Link>

          </li>




          <li >
            <Link to={process.env.PUBLIC_URL + "/Create"}>Brand</Link>
            <ul className="mega-menu mega-menu-padding">
              <li className="w-100">
                <ul>

                  <Link to={process.env.PUBLIC_URL + "/shop"}>
                    <li>{"Helloo"}</li>
                  </Link>

                </ul>
              </li>
            </ul>
            <img className="dropdown-img" src={dropdown} />
          </li>



          <li >
            <Link to={process.env.PUBLIC_URL + "/about"}>Help</Link>
            <ul className="mega-menu mega-menu-padding">
              <li className="w-100">
                <ul>

                  <Link to={process.env.PUBLIC_URL + "/shop"}>
                    <li>{"Helloo"}</li>
                  </Link>

                </ul>
              </li>
            </ul>
            <img className="dropdown-img" src={dropdown} />

          </li>
          <li >
            <Link to={process.env.PUBLIC_URL + "/about"}>About Us</Link>
          </li>
          <li >
            <Link to={process.env.PUBLIC_URL + "/about"}>Contatct Us</Link>
          </li>
          <li >
            <Link to={process.env.PUBLIC_URL + "/about"}>Affiliate Program</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;

