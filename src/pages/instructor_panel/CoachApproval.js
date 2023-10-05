import React from 'react'
import "../../assets/panel_css/style.css"
import "../../assets/panel_css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import { faBell,faBars,faAngleUp,faAngleDown,faUser, faUserGroup, faPeopleArrows, faUserCheck,
     faQuestionCircle,  faUniversity, faCity, faLocation, faMap, faAddressCard, faAddressBook, faUsers,faKey, faEye, faEyeSlash, faMessage } from '@fortawesome/free-solid-svg-icons';
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
import {ACCOUNT_APPROVAL_LIST} from '../../helpers/api';
import Loader from '../../components/Loader/Loader';

const CoachChangePassword=()=> { 

  const nevigate = useNavigate();
  const isAuthenticated= useSelector((state) => state.login)
  const user_details= useSelector((state) => state.user)
  const branch_details= useSelector((state) => state.branch)
  const [isLoading,setIsLoading]=useState(false)
  const [approvalsdata, setapprovaldata]=useState([])

  const approval_list=async()=>{
    setIsLoading(true);
    const response= await ACCOUNT_APPROVAL_LIST(branch_details.id);
    if (response.status==200){
 
      setapprovaldata(response.data);
      setIsLoading(false);
    }
    else{
      setIsLoading(false);
    }
  }
  const reupdate=(listofdata)=>{
    setapprovaldata(listofdata);
  }
  useEffect(()=>{
    if (isAuthenticated === "" || user_details.user.username[0].toLowerCase()!='i'){
        nevigate('/login');
     }
     else{
       approval_list();
     }
  },[]);
  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const toggleDrop = () => {
    setDropOpen(!isDropOpen);
  };



  return (
<div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& <CoachSideNavBar name={user_details.name} level="Coach" image_path={user_details.profile_image}/>}
        <div className="content">
        <CoachHeader onClickHandler={toggleDrop} name={user_details.name} total_events={"5"} image_path={user_details.profile_image}  /> 
        <Loader show={isLoading} message="Loading..."/>

            {!isLoading&&approvalsdata.map((app,index)=>(
                <div className='col-12 mt-2 '>
                    <ApprovalGenericTemplate data={app} func={setIsLoading} branch={branch_details.id} new_list={reupdate}/>
                    {index<approvalsdata.length-1 && <hr className='col-11 m-auto'></hr>}
                </div>
             ))}
            {!isLoading&&approvalsdata.length==0 &&
            <div className='mt-5'>
              No Approval Required...
            </div> 
            }

        </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  CoachChangePassword;