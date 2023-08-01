import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import dropdown from "../../assets/img/icons/dropdown.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AllBrands } from"../../helpers/api";

const NavMenu = (props) => {
  const [brandData, setbrandData] = useState([]);
  useEffect(() => {
    AllBrands().then((response) => {
      if (response.status === 200) {
        setbrandData(response.data);
      } else {
        toast.error('Brands Data Not Loaded', {
          // ...
        });
      }
    });
  }, []);
  return (
    <div className={` ${`main-menu `} `}>
      <nav>
        <ul className="mt-0">
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/brands"}>Brand</Link>
            <ul className="mega-menu mega-menu-padding">
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
            <img className="dropdown-img" src={dropdown} />
          </li>

          <li>
            <Link>Help</Link>
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
          <li>
            <Link to={process.env.PUBLIC_URL + "/aboutus"}>About Us</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contactus"}>Contatct Us</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/about"}>
              Affiliate Program
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
