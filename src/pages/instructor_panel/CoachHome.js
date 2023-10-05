import React from 'react'
import "../../assets/panel_css/style.css"
import "../../assets/panel_css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import { faBell,faBars,faAngleUp,faAngleDown,faUser, faUserGroup, faPeopleArrows, faUserCheck,
     faQuestionCircle,  faUniversity, faCity, faLocation, faMap, faAddressCard, faAddressBook, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import test_img from "../../assets/test_img.jpg"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import CoachSideNavBar from "./CoachSideNavBar";
import TruncateText from '../../helpers/TruncatedText';
import { Success_light, Throw_Error } from '../../helpers/NotifiyToasters';
import { useEffect } from 'react';
import CoachHeader from './CoachHeader';

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { PLAYER_Stats } from '../../helpers/api';
import { PieChart } from 'react-minimal-pie-chart';


const CoachHome=()=> {
    // react-cssfx-loading
  const [isLoading,setIsLoading]=useState(true)
  const nevigate = useNavigate();
  const isAuthenticated= useSelector((state) => state.login)
 
  const user_details= useSelector((state) => state.user)

  const branch_details= useSelector((state) => state.branch)
  const [players,setplayers]=useState(0)
  const [activePlayers,setActivePlayers]=useState(0)
  const [deactivePlayers,setDeactivePlayers]=useState(0)
  const [montly_admission,setmontly_admission]=useState([0,0,0,0,0,0,0,0,0,0,0,0])
  const [montly_attendance,setmontly_attendance]=useState([0,0,0,0,0,0,0,0,0,0,0,0])
  const [montly_fee,setmontly_fee]=useState([0,0,0,0,0,0,0,0,0,0,0,0])


  const settled_promises=async()=>{
    await PLAYER_Stats(branch_details.id).then((response)=>{
        if (response.status==200)
        {
         
            setplayers(response.data.total_player);
            setActivePlayers(response.data.total_active_players);
            setDeactivePlayers(response.data.total_deactive_players)
            setmontly_admission(response.data.monthly_admissions)
            setmontly_attendance(response.data.monthly_attendance)
            setIsLoading(false);
    }
    })
  }

  useEffect(()=>{
    if (isAuthenticated === "" || user_details.user.username[0].toLowerCase()!='i' ){
        nevigate('/login');
     }
     else{

     
     settled_promises();
     }

  },[]);
    const labels = ["January", "February", "March", "April", "May", "June","July","August","September","October","November","December"];
    const data_monthly_attendance = {
      labels: labels,
      datasets: [
        {
          label: "Present Players",
          backgroundColor: "rgb(0,123,255)",
          borderColor: "rgb(255, 99, 132)",
          data: montly_attendance,
        },
      ],
    };

    const data_of_monthly_addmission = {
      labels: labels,
      datasets: [
        {
          label: "New Admissions",
          backgroundColor: "rgb(0,123,255)",
          borderColor: "rgb(255, 99, 132)",
          data: montly_admission,
        },
      ],
    };
    const data_of_monthly_fee = {
      labels: labels,
      datasets: [
        {
          label: "New Admissions",
          backgroundColor: "rgb(0,123,255)",
          borderColor: "rgb(255, 99, 132)",
          data: montly_fee,
        },
      ],
    };
  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const toggleDrop = () => {
    setDropOpen(!isDropOpen);
  };

  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& <CoachSideNavBar name={user_details.name} level="Coach" image_path={user_details.profile_image} />}
        <div className="content">
          <CoachHeader onClickHandler={toggleDrop} name={user_details.name} total_events={"5"} image_path={user_details.profile_image}  />
          <Loader show={isLoading} message="Loading..."/>
          
           {!isLoading&& <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-6 col-xl-3">
                        <div className=" rounded d-flex align-items-center justify-content-between p-4" style={{backgroundColor:"#ECECEC"}} >
                            <FontAwesomeIcon icon={faUsers} style={{fontSize:"50px"}} className='text-primary' /> 
                            <div className="ms-3">
                                <h5 className="mb-2">Total Players</h5>
                                <h6 className="mb-0" style={{fontSize:"16px", color:"#71797E"}}>{players}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className=" rounded d-flex align-items-center justify-content-between p-4" style={{backgroundColor:"#ECECEC"}} >
                            <FontAwesomeIcon icon={faUserCheck} style={{fontSize:"50px"}} className='text-primary' /> 
                            <div className="ms-3">
                                <h5 className="mb-2">Active Players</h5>
                                <h6 className="mb-0" style={{fontSize:"16px", color:"#71797E"}}>{activePlayers}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className=" rounded d-flex align-items-center justify-content-between p-4" style={{backgroundColor:"#ECECEC"}} >
                        <FontAwesomeIcon icon={faQuestionCircle} style={{fontSize:"50px"}} className='text-primary' /> 
                            <div className="ms-3">
                                <h5 className="mb-2">On Approval</h5>
                                <h6 className="mb-0" style={{fontSize:"16px", color:"#71797E"}}>{deactivePlayers}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className=" rounded d-flex align-items-center justify-content-between p-4" style={{backgroundColor:"#ECECEC"}} >
                            <FontAwesomeIcon icon={faCity} style={{fontSize:"50px"}} className='text-primary' /> 
                            <div className="ms-3">
                                <h5 className="mb-2" >Faislabad</h5>
                                <h6 className="mb-0"style={{fontSize:"16px", color:"#71797E"}}>Pakistan</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
         
            {!isLoading&&<div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-6 ">
                        <div className="text-center rounded p-4" style={{backgroundColor:"#ECECEC"}}>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h3 className="mb-0" style={{fontWeight:"Bold",fontStyle:"italic"}}>Monthly Attendance</h3>
                              
                            </div>
                            <Bar data={data_monthly_attendance} options={{Response: true}} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6" >
                        <div className=" text-center rounded p-4" style={{backgroundColor:"#ECECEC"}}>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h3 className="mb-0" style={{fontWeight:"Bold",fontStyle:"italic"}}>Monthly Admissions</h3>
                              
                            </div>
                            <Bar data={data_of_monthly_addmission} />
                        </div>
                    </div>
                </div>
            </div> }
            {!isLoading&&<div className="container-fluid pt-4 px-4 mb-5">
                <div className="row">
                    <div className="col-sm-12 col-xl-12 ">
                  
                        <div className=" text-center rounded p-4" style={{backgroundColor:"#ECECEC"}}>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h2 className="mb-0" style={{fontWeight:"Bold",fontStyle:"italic"}}>Monthly Fee</h2>
                              
                            </div>
                            <Bar data={data_of_monthly_fee} />
                        </div>
                      
                    </div>
                   
                </div>
            </div> }
           
          
        
       
    </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  CoachHome;