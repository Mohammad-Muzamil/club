import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import dropdown from "../../assets/img/icons/dropdown.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AllBrands } from"../../helpers/api";

const CoachNavMenu = (props) => {
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
          
        </ul>
      </nav>
    </div>
  );
};

export default CoachNavMenu;
