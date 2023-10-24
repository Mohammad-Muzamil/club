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
import { decrypt, encrypt } from '../../helpers/encryption_decrption';

const Kata=()=> {
  const nevigate = useNavigate();
  const isAuthenticated= decrypt(sessionStorage.getItem('inst_token'))
  const user_details= decrypt(sessionStorage.getItem('inst_user'))
  const branch_details= decrypt(sessionStorage.getItem('inst_branch'))
  useEffect(()=>{
    if (isAuthenticated == null || user_details == null || user_details.user.username[0].toLowerCase()!='i' ){
    
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
    {isDropOpen&& user_details!=null&& <CoachSideNavBar name={user_details.name} level="Coach" image_path={user_details.profile_image}/>}
        <div className="content">
       {user_details!=null&& <CoachHeader onClickHandler={toggleDrop} name={user_details.name} total_events={"5"} image_path={user_details.profile_image}  />  }
          
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