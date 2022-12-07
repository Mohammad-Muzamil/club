import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";


const NavMenu = ({ categories, menuWhiteClass, sidebarMenu }) => {
  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul className="mt-0">
          <li className="pr-5">
            <Link to={process.env.PUBLIC_URL + "/shop"}>Shop</Link>
            <ul className="mega-menu mega-menu-padding">
              <li className="w-100">
                <ul>
                  {categories.map((val) => (
                    <Link to={process.env.PUBLIC_URL + "/shop"}>
                      <li>{val.name}</li>
                    </Link>
                  ))}
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

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object,
  categories: PropTypes.array
};
export default NavMenu;

