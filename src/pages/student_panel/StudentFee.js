import React from 'react'
import "../../assets/panel_css/style.css"
import "../../assets/panel_css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import { faBell,faBars,faAngleUp,faAngleDown,faUser, faUserGroup, faPeopleArrows, faUserCheck,
     faQuestionCircle,  faUniversity, faCity, faLocation, faMap, faAddressCard, faAddressBook, faUsers, faSearch, faTimesCircle, faTimeline, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import test_img from "../../assets/test_img.jpg"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import StudentSideNavBar from "./StudentSideNavBar";
import TruncateText from '../../helpers/TruncatedText';
import { Error_light, Success_light, Throw_Error } from '../../helpers/NotifiyToasters';
import { useEffect } from 'react';
import StudentHeader from './StudentHeader';

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { ADMIN_ATTENDANCE, ADMIN_Fight, PLAYER_Stats } from '../../helpers/api';
import { PieChart } from 'react-minimal-pie-chart';
import { decrypt, encrypt } from '../../helpers/encryption_decrption';

import KataTable from '../../components/features_section/KataTable';
import tekki from "../../assets/img/tekki1.gif"
const StudentFee=()=> {
    // react-cssfx-loading
  const [isLoading,setIsLoading]=useState(false)
  const nevigate = useNavigate();
  const isAuthenticated= decrypt(sessionStorage.getItem('ply_token'))
  const user_details= decrypt(sessionStorage.getItem('ply_user'))
  const branch_details= decrypt(sessionStorage.getItem('ply_branch'))
  const [date,setdate]=useState("");
  



  useEffect(()=>{
    if (isAuthenticated == null || user_details == null || user_details.user.username[0].toLowerCase()!='p' ){
    
      nevigate('/login');
   }
     else{
     
     

     }

  },[]);
  
   
  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const toggleDrop = () => {
    setDropOpen(!isDropOpen);
  };

  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& user_details!=null&& <StudentSideNavBar name={user_details.player_name} level="Player" image_path={user_details.profile_image} />}
        <div className="content">
         {user_details!=null && <StudentHeader onClickHandler={toggleDrop} name={user_details.player_name} total_events={"5"} image_path={user_details.profile_image}  />}
          <Loader show={isLoading} message="Loading..."/>
       
         
    </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  StudentFee;