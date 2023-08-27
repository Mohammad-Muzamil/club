import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import dropdown from "../../assets/img/icons/dropdown.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AllBrands } from"../../helpers/api";

const NavMenu = (props) => {
  const [brandData, setbrandData] = useState([]);
  // useEffect(() => {
  //   AllBrands().then((response) => {
  //     if (response.status === 200) {
  //       setbrandData(response.data);
  //     } else {
  //       toast.error('Brands Data Not Loaded', {
  //         // ...
  //       });
  //     }
  //   });
  // }, []);
  return (
    <div className={` ${`main-menu `} `}>
      <nav>
        <ul className="mt-0">
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/gallery"}>Gallery</Link>
            {/* <ul className="mega-menu mega-menu-padding">
              <li className="w-100">
                <ul>
                 { brandData.map(data => (
                  // <Link to={process.env.PUBLIC_URL + "/shop"}>
                  <Link to={process.env.PUBLIC_URL + `/brands-products/${data.uuid}`}>
                    <li>{data.name}</li>
                  </Link>
                  ))
                 }
                </ul>
              </li>
            </ul>
            <img className="dropdown-img" src={dropdown} /> */}
          </li>

          <li>
          <Link to={"#"}>Branches</Link>
            <ul className="mega-menu mega-menu-padding">
              <li className="w-100">
                <ul>
                 { brandData.map(data => (
             
                  <Link to={process.env.PUBLIC_URL + `/Branch-id/${data.uuid}`}>
                    <li>{data.name}</li>
                  </Link>
                  ))
                 }
                </ul>
              </li>
            </ul>
            <img className="dropdown-img" src={dropdown} />
          </li>

          <li>
            <Link>Help</Link>
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
          <li>
            <Link to={process.env.PUBLIC_URL + "/aboutus"}>About Us</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contactus"}>Contatct Us</Link>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
