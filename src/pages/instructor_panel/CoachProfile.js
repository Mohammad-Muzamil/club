import React from 'react'
import "../../assets/panel_css/style.css"
import "../../assets/panel_css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import { faBell,faBars,faAngleUp,faAngleDown,faUser, faUserGroup, faPeopleArrows, faUserCheck,
     faQuestionCircle,  faUniversity, faCity, faLocation, faMap, faAddressCard, faAddressBook, faUsers,faKey, faEye, faEyeSlash
     ,faClone} from '@fortawesome/free-solid-svg-icons';
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
import "../../assets/css/profile.css"



import { Error_light } from '../../helpers/NotifiyToasters';
import { useSelector } from 'react-redux';

const CoachProfile=()=> {
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
            
        <div className='container-fluid mt-4' style={{}} >

    <section>
    <div className="rt-container">
      <div className="col-rt-12">
            <div className="Scriptcontent">
                <div className="student-profile py-4" >
                <div className="container">
                    <div className="row">
                    <div className="col-lg-4 " >
                        <div className="card shadow-sm"style={{backgroundColor:"#ECECEC", border:"1px solid #ECECEC"}}>
                        <div className="card-header bg-transparent text-center">
                            <img className="profile_img" src={"https://source.unsplash.com/600x300/?student"} alt="student dp"/>
                            <h3>Ishmam Ahasan Samin</h3>
                        </div>
                        <div className="card-body">
                            <p className="mb-0"><strong className="pr-1">Student ID:</strong>321000001</p>
                            <p className="mb-0"><strong className="pr-1">className:</strong>4</p>
                            <p className="mb-0"><strong className="pr-1">Section:</strong>A</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-8" style={{marginTop:isMobileactive?"20px":"0px"}}>
                        <div className="card shadow-sm"style={{backgroundColor:"#ECECEC", border:"1px solid #ECECEC"}}>
                        <div className="card-header bg-transparent border-0">
                            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>General Information</h3>
                        </div>
                        <div className="card-body pt-0">
                            <table className="table table-bordered">
                            <tr>
                                <th style={{width:"30%"}}>Roll</th>
                              
                                <td>125</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>Academic Year	</th>
                               
                                <td>2020</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>Gender</th>
                                
                                <td>Male</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>Religion</th>
                              
                                <td>Group</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>blood</th>
                            
                                <td>B+</td>
                            </tr>
                            </table>
                        </div>
                        </div>
                        <div style={{height: "20px"}}></div>
                        <div className="card shadow-sm"style={{backgroundColor:"#ECECEC", border:"1px solid #ECECEC"}}>
                        <div className="card-header bg-transparent border-0">
                            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Other Information</h3>
                        </div>
                        <div className="card-body pt-0">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</section>
            
        </div>
        
    </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  CoachProfile;