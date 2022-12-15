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
            <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>

          </li>




          <li >
            <Link to={process.env.PUBLIC_URL + "/brands"}>Brand</Link>
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
        
            <Link >Help</Link>
            <ul className="mega-menu mega-menu-padding">
              <li className="w-100">
                <ul>
                  <Link to={process.env.PUBLIC_URL + "/payments"}>
                    <li>{"Payments"}</li>
                  </Link>
                  <Link to={process.env.PUBLIC_URL + "/faqs"}>
                    <li>{"FAQs"}</li>
                  </Link>
                  <Link to={process.env.PUBLIC_URL + "/privacypolicy"}>
                    <li>{"Privacy Policy"}</li>
                  </Link>
                  <Link to={process.env.PUBLIC_URL + "/returnpolicy"}>
                    <li>{"Return Policy"}</li>
                  </Link>
                  <Link to={process.env.PUBLIC_URL + "/termsofservices"}>
                    <li>{"Term and Services"}</li>
                  </Link>

                  <Link to={process.env.PUBLIC_URL + "/shoesizeguide"}>
                    <li>{"Shoe Size Guide"}</li>
                  </Link>

                </ul>
              </li>
            </ul>
            <img className="dropdown-img" src={dropdown} />

          </li>
          <li >
            <Link to={process.env.PUBLIC_URL + "/aboutus"}>About Us</Link>
          </li>
          <li >
            <Link to={process.env.PUBLIC_URL + "/contactus"}>Contatct Us</Link>
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

