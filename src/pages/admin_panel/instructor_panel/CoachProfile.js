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
  

  const user_details= useSelector((state) => state.user)
  useEffect(()=>{
    if (isAuthenticated === "" || user_details.user.username[0].toLowerCase()!='i'){
        nevigate('/login');
     }
     else{
        console.log(user_details)
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
        <CoachHeader onClickHandler={toggleDrop} name={user_details.name} total_events={"5"} image_path={user_details.profile_image}  />
            
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
                            <img className="profile_img" src={ `//${window.location.host}/media/` +user_details.profile_image} alt="coach dp"/>
                            <h3>{user_details.name}</h3>
                        </div>
                        <div className="card-body">
                            <p className="mb-0" style={{color:"gray"}} ><strong className="pr-1" style={{color:"black"}}>PKF-ID:</strong>{user_details.coach_pkf_id}</p>
                            <p className="mb-0" style={{color:"gray"}} ><strong className="pr-1" style={{color:"black"}}>username:</strong>{user_details.user.username}</p>
                            <p className="mb-0" style={{color:"gray"}} ><strong className="pr-1" style={{color:"black"}}>Coach of:</strong>{user_details.coach_of}</p>

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
                            <tr className='col-12'>
                                <th style={{width:"30%"}}>CNIC</th>
                              
                                <td>{user_details.cnic}</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>Contact	</th>
                               
                                <td>{user_details.phone_number}</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>Gender</th>
                                
                                <td>{user_details.gender}</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>DOB</th>
                              
                                <td>{user_details.DOB}</td>
                            </tr>
                          
                            </table>
                        </div>
                        </div>
                        <div style={{height: "20px"}}></div>
                        <div className="card shadow-sm"style={{backgroundColor:"#ECECEC", border:"1px solid #ECECEC"}}>
                        <div className="card-header bg-transparent border-0">
                            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Email</h3>
                        </div>
                        <div className="card-body pt-0" >
                            <p style={{fontSize:"15px"}} >{user_details.user.email}</p>
                        </div>
                        <div className="card-header bg-transparent border-0" style={{marginTop:"-15px"}}>
                            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Home Address</h3>
                        </div>
                        <div className="card-body pt-0">
                            <p style={{fontSize:"15px"}} >{user_details.address}</p>
                        </div>
                        <div className="card-header bg-transparent border-0" style={{marginTop:"-15px"}}>
                            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Message from Cheif Coach</h3>
                        </div>
                        <div className="card-body pt-0 "  >
                            <p style={{fontSize:"15px"}}>I want to express my deep appreciation for the unwavering dedication and commitment you bring to our karate family. Your passion for the sport and your tireless efforts in nurturing our athletes are the driving force behind our success.
                            Remember, coaching is not just about teaching techniques; it's about shaping character, instilling discipline, and fostering a sense of unity within our team. Your guidance extends far beyond the dojo, impacting the lives of our students in profound ways.</p>
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