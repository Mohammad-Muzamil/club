import React from 'react'
import "../../assets/panel_css/style.css"
import "../../assets/panel_css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import { faBell,faBars,faAngleUp,faAngleDown,faUser, faUserGroup, faPeopleArrows, faUserCheck,
     faQuestionCircle,  faUniversity, faCity, faLocation, faMap, faAddressCard, faAddressBook, faUsers,faKey, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import test_img from "../../assets/test_img.jpg"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import CoachSideNavBar from "./CoachSideNavBar";
import TruncateText from '../../helpers/TruncatedText';
import { Success_light } from '../../helpers/NotifiyToasters';
import { useEffect } from 'react';
import CoachHeader from './CoachHeader';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Error_light } from '../../helpers/NotifiyToasters';
import ApprovalGenericTemplate from './ApprovalGenericTemplate';
import { useSelector } from 'react-redux';
const CoachChangePassword=()=> { 

  const nevigate = useNavigate();
  const isAuthenticated= useSelector((state) => state.login)
  const user_details= useSelector((state) => state.user)
  useEffect(()=>{
    if (isAuthenticated === "" || user_details.user.username[0].toLowerCase()!='i'){
        nevigate('/login');
     }
     else{
        Success_light("Welcome Nouman asrshad");
     }
  },[]);
  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const [approvalsdata, setapprovaldata]=useState([1,2])
  const toggleDrop = () => {
    setDropOpen(!isDropOpen);
  };



  return (
<div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& <CoachSideNavBar name="Muhammad Muzamil" level="National"/>}
        <div className="content">
        <CoachHeader onClickHandler={toggleDrop} name={user_details.name} total_events={"5"} image_path={user_details.profile_image}  />  
            {approvalsdata.map((app,index)=>(
                <div className='col-12 mt-2 '>
                    <ApprovalGenericTemplate />
                    {index<approvalsdata.length-1 && <hr className='col-11 m-auto'></hr>}
                </div>
             ))}

        </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  CoachChangePassword;