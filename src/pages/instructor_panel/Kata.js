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
import KataTable from '../../components/features_section/KataTable';
import tekki from "../../assets/img/tekki1.gif"
import { useSelector } from 'react-redux';



const Kata=()=> {
  const nevigate = useNavigate();
  const isAuthenticated= useSelector((state) => state.login)

  useEffect(()=>{
    if (isAuthenticated === ""){
        nevigate('/login');
     }
     else{
        Success_light("Welcome Nouman asrshad");
     }
  },[]);

  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const toggleDrop = () => {
    setDropOpen(!isDropOpen);
  };



  return (
<div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& <CoachSideNavBar name="Muhammad Muzamil" level="National"/>}
        <div className="content">
          <CoachHeader onClickHandler={toggleDrop}/>
          
            <div className='w-100 pl-lg-5 pr-lg-5 pb-3 mt-4' style={{backgroundColor:"#ECECEC", marginTop:"-10px", overflowX:"scroll"}}>
                <div className='w-100 d-flex justify-content-center ' >
                    <img src={tekki}  className='pt-3'/>
                </div>
            <KataTable/>
            </div>
        </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  Kata;