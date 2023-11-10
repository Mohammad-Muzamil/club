import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import dropdown from "../../assets/img/icons/dropdown.png";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { AllBrands } from"../../helpers/api";
import { faGamepad, faHandHolding, faQuestion, faSignsPost, faTableCells, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavMenu = (props) => {
  const [brandData, setbrandData] = useState([]);

  return (
    <div className={` ${`main-menu`} `}>
      <nav>
        <ul className="mt-0">
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/gallery"}>Gallery</Link>
          
          </li>

          <li>
          <Link to={"/branch"}>Branches</Link>
            
          </li>

         
          <li>
            <Link to={process.env.PUBLIC_URL + "/aboutus"}>About Us</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contactus"}>Contatct Us</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/registration"}>Registration</Link>
          </li>
          <li>
            <Link>Help</Link>
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
          <li>
            <Link>Event</Link>
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
  );
};

export default NavMenu;
