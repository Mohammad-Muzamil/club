import React from 'react'
import "../../assets/panel_css/style.css"
import "../../assets/panel_css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import { faBell,faBars,faAngleUp,faAngleDown,faUser, faUserGroup, faPeopleArrows, faUserCheck,
     faQuestionCircle,  faUniversity, faCity, faLocation, faMap, faAddressCard, faAddressBook, faUsers,faKey, faEye, faEyeSlash
     ,faClone,
     faMessage,
     faHome,
     faMailReply,
     faSignsPost,
     faVoicemail} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import test_img from "../../assets/test_img.jpg"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import StudentSideNavBar from "./StudentSideNavBar";
import TruncateText from '../../helpers/TruncatedText';
import { Success_light } from '../../helpers/NotifiyToasters';
import { useEffect } from 'react';
import StudentHeader from './StudentHeader';
import "../../assets/css/profile.css"



import { Error_light } from '../../helpers/NotifiyToasters';
import { useSelector } from 'react-redux';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { decrypt, encrypt } from '../../helpers/encryption_decrption';

const StudentProfile=()=> {
    const nevigate = useNavigate();
    const isAuthenticated= decrypt(sessionStorage.getItem('ply_token'))
    const user_details= decrypt(sessionStorage.getItem('ply_user'))
    const branch_details= decrypt(sessionStorage.getItem('ply_branch'))
  

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
    {isDropOpen&&  user_details!=null&&<StudentSideNavBar  name={user_details.player_name} level="Player"  image_path={user_details.profile_image}/>}
        <div className="content">
        {user_details!=null&&<StudentHeader onClickHandler={toggleDrop} name={user_details.player_name} total_events={"5"} image_path={user_details.profile_image}  />}
            
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
                            <h3 className='text-primary' >{user_details.player_name}</h3>
                        </div>
                        <div className="card-body">
                            <p className="mb-0" style={{color:"gray"}} ><strong className="pr-1" style={{color:"black"}}>PKF-ID:</strong>{user_details.coach_pkf_id}</p>
                            <p className="mb-0" style={{color:"gray"}} ><strong className="pr-1" style={{color:"black"}}>username:</strong>{user_details.user.username}</p>

                        </div>
                        </div>
                    </div>
                    <div className="col-lg-8" style={{marginTop:isMobileactive?"20px":"0px"}}>
                        <div className="card shadow-sm"style={{backgroundColor:"#ECECEC", border:"1px solid #ECECEC"}}>
                        <div className="card-header bg-transparent border-0">
                            <h3 className="mb-0" style={{fontSize:"17px", fontStyle:"italic"}} >General Information</h3>
                        </div>
                        <div className="card-body pt-0">
                            <table className="table table-bordered">
                            <tr className='col-12'>
                                <th style={{width:"30%"}}>CNIC</th>
                              
                                <td>{user_details.player_cnic}</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>Contact	</th>
                               
                                <td>{user_details.player_contact_no}</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>Gender</th>
                                
                                <td>{user_details.gender}</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>DOB</th>
                              
                                <td>{user_details.date_of_birth}</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>Age</th>
                              
                                <td>{user_details.age}</td>
                            </tr>
                          
                            </table>
                        </div>
                        </div>
                        <div style={{height: "20px"}}></div>
                        <div className="card shadow-sm"style={{backgroundColor:"#ECECEC", border:"1px solid #ECECEC"}}>
                        <div className="card-header bg-transparent border-0 d-flex">
                        <FontAwesomeIcon icon={faVoicemail} className='text-primary mt-2' /><h3 className="mb-0" style={{fontSize:"17px", fontStyle:"italic"}}>&nbsp;&nbsp;Email</h3>
                        </div>
                        <div className="card-body pt-0" >
                            <p style={{fontSize:"15px"}} >{user_details.user.email}</p>
                        </div>
                        <div className="card-header bg-transparent border-0 d-flex" style={{marginTop:"-15px"}}>
                        <FontAwesomeIcon icon={faHome} className='text-primary mt-2' /> <h3 className="mb-0" style={{fontSize:"17px", fontStyle:"italic"}}>&nbsp;&nbsp;Home Address</h3>
                        </div>
                        <div className="card-body pt-0">
                            <p style={{fontSize:"15px"}} >{user_details.address}</p>
                        </div>
                        <div className="card-header bg-transparent border-0 d-flex" style={{marginTop:"-15px"}}>
                        <FontAwesomeIcon icon={faMessage} className='text-primary mt-2' /> <h3 className="mb-0" style={{fontSize:"17px", fontStyle:"italic"}}> &nbsp;&nbsp;Message from Cheif Coach</h3>
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

export default  StudentProfile;