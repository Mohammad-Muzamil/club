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
import CoachSideNavBar from "./CoachSideNavBar";
import TruncateText from '../../helpers/TruncatedText';
import { Success_light } from '../../helpers/NotifiyToasters';
import { useEffect } from 'react';
import CoachHeader from './CoachHeader';
import "../../assets/css/profile.css"

import { Error_light } from '../../helpers/NotifiyToasters';
import { useSelector } from 'react-redux';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { PLAYER_ACCOUNTS } from '../../helpers/api';
import Loader from '../../components/Loader/Loader';
import { decrypt, encrypt } from '../../helpers/encryption_decrption';


const CoachPlayersProfiles=()=> {
    const nevigate = useNavigate();
    const isAuthenticated= decrypt(sessionStorage.getItem('inst_token'))
    const user_details= decrypt(sessionStorage.getItem('inst_user'))
    const branch_details= decrypt(sessionStorage.getItem('inst_branch'))
  const [playerprofile,setplayerprofile]=useState([])
  const [isLoading,setIsLoading]=useState(false)
  
  const setplayer=async()=>{
    setIsLoading(true);
    try {
      const response = await PLAYER_ACCOUNTS(branch_details.id);
      if (response.status === 200) {
            setplayerprofile(response.data)
        setIsLoading(false);
      }
       else {
        setIsLoading(false);
      }
    } catch (error) {

      setIsLoading(false);
      console.error('Error fetching player attendance list:', error);
    }
  }

  useEffect(()=>{
    if (isAuthenticated == null || user_details == null || user_details.user.username[0].toLowerCase()!='i' ){
    
        nevigate('/login');
     }
     else{
        setplayer();
     }
  },[]);

  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const toggleDrop = () => {
    setDropOpen(!isDropOpen);
  };
 
 
  return (
<div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& user_details!=null && <CoachSideNavBar  name={user_details.name} level="Coach" image_path={user_details.profile_image}/>}
        <div className="content">
        {user_details!=null&&<CoachHeader onClickHandler={toggleDrop} name={user_details.name} total_events={"5"} image_path={user_details.profile_image}  />}
        <Loader show={isLoading} message="Loading..."/>
            
        <div className='container-fluid mt-4' >

    {playerprofile.map((obj)=>(<section>
    <div className="rt-container">
      <div className="col-rt-12">
            <div className="Scriptcontent">
                <div className="student-profile py-4" >
                <div className="container">
                    <div className="row">
                    <div className="col-lg-4 " >
                        <div className="card shadow-sm"style={{backgroundColor:"#ECECEC", border:"1px solid #ECECEC"}}>
                        <div className="card-header bg-transparent text-center">
                            <img className="profile_img" src={ `//${window.location.host}/media/` +obj.profile_image} alt="player pic"/>
                            <h3 className='text-primary' >{obj.player_name}</h3>
                        </div>
                        <div className="card-body">
                            <p className="mb-0" style={{color:"gray"}} ><strong className="pr-1" style={{color:"black"}}>username:</strong>{obj.user.username}</p>
                            <p className="mb-0" style={{color:"gray"}} ><strong className="pr-1" style={{color:"black"}}>Father:</strong>{obj.father_name}</p>
                            <p className="mb-0" style={{color:"gray"}} ><strong className="pr-1" style={{color:"black"}}>PKF-ID:</strong>{obj.pkf_id}</p>

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
                              
                                <td>{obj.player_cnic}</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>Contact	</th>
                               
                                <td>{obj.player_contact_no}</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>Gender</th>
                                
                                <td>{obj.gender}</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>DOB</th>
                              
                                <td>{obj.date_of_birth}</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>Age</th>
                              
                                <td>{obj.age}</td>
                            </tr>
                          
                            <tr>
                                <th style={{width:"30%"}}>Fees</th>
                              
                                <td>{obj.monthly_fee}</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>Weight</th>
                              
                                <td>{obj.weight}</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>Department</th>
                              
                                <td>{obj.department_name}</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>Player Level</th>
                              
                                <td>{obj.player_level}</td>
                            </tr>
                          
                            </table>
                        </div>
                        </div>
                        <div style={{height: "20px"}}></div>
                     
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</section>))}
            
        </div>
        
    </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  CoachPlayersProfiles;