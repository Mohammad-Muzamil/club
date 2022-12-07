
import React from "react";
import { Link } from "react-router-dom";


const NavMenu = (props) => {
  return (
    <div
      className={` ${
         `main-menu `
      } `}
    >
      <nav>
        <ul className="mt-0">
          <li className="pr-5">
            <Link to={process.env.PUBLIC_URL + "/shop"}>Shop</Link>
            <ul className="mega-menu mega-menu-padding">
              <li className="w-100">
                <ul>
             
                    <Link to={process.env.PUBLIC_URL + "/shop"}>
                      <li>{"Helloo"}</li>
                    </Link>
            
                </ul>
              </li>
            </ul>
          </li>

          <li className="pr-5">
            <Link to={process.env.PUBLIC_URL + "/Create"}>Create</Link>
          </li>
          <li className="pr-5">
            <Link to={process.env.PUBLIC_URL + "/about"}>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;

