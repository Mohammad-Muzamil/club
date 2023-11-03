import React from 'react'
import "../../assets/panel_css/style.css"
import "../../assets/panel_css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import { faBell,faBars,faAngleUp,faAngleDown,faUser, faUserGroup, faPeopleArrows, faUserCheck,
     faQuestionCircle,  faUniversity, faCity, faLocation, faMap, faAddressCard, faAddressBook, faUsers, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import test_img from "../../assets/test_img.jpg"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import StudentSideNavBar from "./StudentSideNavBar";
import TruncateText from '../../helpers/TruncatedText';
import { Success_light, Throw_Error } from '../../helpers/NotifiyToasters';
import { useEffect } from 'react';
import StudentHeader from './StudentHeader';

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { PLAYER_Stats, SINGLE_PLAYER_STATS } from '../../helpers/api';
import { PieChart } from 'react-minimal-pie-chart';
import { decrypt, encrypt } from '../../helpers/encryption_decrption';
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Radar } from "react-chartjs-2";

const StudentHome=()=> {
    // react-cssfx-loading
  const [isLoading,setIsLoading]=useState(false);
  const nevigate = useNavigate();
  const isAuthenticated= decrypt(sessionStorage.getItem('ply_token'))
  const user_details= decrypt(sessionStorage.getItem('ply_user'))
  const branch_details= decrypt(sessionStorage.getItem('ply_branch'))
  const [players,setplayers]=useState(0)
  const [playerrating,setplayerrating]=useState(0)
  const [playerkata,setplayerkata]=useState(0)
  const [playerkumite,setplayerkumite]=useState(0)
  const [activePlayers,setActivePlayers]=useState(0)
  const [deactivePlayers,setDeactivePlayers]=useState(0)
  const [montly_admission,setmontly_admission]=useState([0,0,0,0,0,0,0,0,0,0,0,0])
  const [montly_attendance,setmontly_attendance]=useState([0,0,0,0,0,0,0,0,0,0,0,0])
  const [montly_fee,setmontly_fee]=useState([0,0,0,0,0,0,0,0,0,0,0,0])


  const settled_promises=async()=>{
    setIsLoading(true);
    await SINGLE_PLAYER_STATS(user_details.user.id).then((response)=>{
        if (response.status==200)
        {
            setplayerrating(response.data.rating)
            setplayerkata(parseInt(response.data.kata_wins))
            setplayerkumite(parseInt(response.data.fight_wins))
            setmontly_attendance(response.data.monthly_attendance)
            setmontly_fee(response.data.monthly_fee)
            setIsLoading(false);
    }
    else{
      setIsLoading(false);

    }
    })
  }

  useEffect(()=>{
    if (isAuthenticated == null || user_details == null || user_details.user.username[0].toLowerCase()!='p' ){
    
      nevigate('/login');
   }
     else{

     settled_promises();

     }

  },[]);
  const data = {
    labels: ["Total Fights Wins", "Total Kata Wins"],
    datasets: [
      {
        label: "Wins",
        data: [playerkumite, playerkata], // Replace these variables with your actual data
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 2,
      },
    ],
  };




  
    const labels = ["January", "February", "March", "April", "May", "June","July","August","September","October","November","December"];
    const data_monthly_attendance = {
      labels: labels,
      datasets: [
        {
          label: "Total Presents",
          backgroundColor: "rgba(75, 192, 192, 1)",
          borderColor: "rgb(255, 99, 132)",
          data: montly_attendance,
        },
      ],
    };


  


    const options = {
      scales: {
        r: {
          beginAtZero: true,
        },
      },
    };
    const data_of_monthly_fee  = {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [
        {
          label: "Monthly Fees",
          data:montly_fee,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          pointBackgroundColor: "rgba(75, 192, 192, 1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(75, 192, 192, 1)",
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
    {isDropOpen&& user_details!=null&& <StudentSideNavBar name={user_details.player_name} level="Player" image_path={user_details.profile_image} />}
        <div className="content">
         {user_details!=null && <StudentHeader onClickHandler={toggleDrop} name={user_details.player_name} total_events={"5"} image_path={user_details.profile_image}  />}
          <Loader show={isLoading} message="Loading..."/>
          
           {!isLoading&& <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-6 col-xl-4 col-lg-4">
                        <div className=" rounded d-flex align-items-center justify-content-between p-4" style={{backgroundColor:"#ECECEC"}} >
                            <FontAwesomeIcon icon={faUsers} style={{fontSize:"50px"}} className='text-primary' /> 
                            <div className="ms-3">
                                <h5 className="mb-2">Player level</h5>
                                <h6 className="mb-0" style={{fontSize:"16px", color:"#71797E"}}>{user_details.player_level}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-4 col-lg-4">
                        <div className=" rounded d-flex align-items-center justify-content-between p-4" style={{backgroundColor:"#ECECEC"}} >
                            <FontAwesomeIcon icon={faStar} style={{fontSize:"50px"}} className='text-warning'/> 
                            <div className="ms-3">
                                <h5 className="mb-2">Rating</h5>
                                <h6 className="mb-0" style={{fontSize:"16px", color:"#71797E"}}>{playerrating==1 ||playerrating==0?playerrating.toString()+ " Star":playerrating.toString()+" Stars"}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-4 col-lg-4">
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
                                <h3 className="mb-0" style={{fontWeight:"Bold",fontStyle:"italic"}}>ATTENDANCE</h3>
                              
                            </div>
                            <Bar data={data_monthly_attendance} options={{Response: true}} />
                        </div>
                    </div>
                    {/* <div className="col-sm-12 col-xl-6" >
                        <div className=" text-center rounded p-4" style={{backgroundColor:"#ECECEC"}}>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h3 className="mb-0" style={{fontWeight:"Bold",fontStyle:"italic"}}>Monthly Admissions</h3>
                              
                            </div>
                            <Bar data={data_of_monthly_addmission} />
                        </div>
                    </div> */}
                     <div className="col-sm-12 col-xl-6">
                      <div className="text-center rounded p-4" style={{ backgroundColor: "#ECECEC" }}>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                          <h3 className="mb-0" style={{ fontWeight: "bold", fontStyle: "italic" }}>
                          WINNING STREAK
                          </h3>
                        </div>
                        <Bar data={data}/>
                      </div>
                    </div>
                </div>
            </div> }
            {!isLoading&&<div className="container-fluid pt-4 px-4 mb-5">
                <div className="row">
                    <div className="col-sm-12 col-xl-12 col-lg-12">
                  
                        <div className=" text-center rounded p-4" style={{backgroundColor:"#ECECEC"}}>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h2 className="mb-0" style={{fontWeight:"Bold",fontStyle:"italic"}}>MONTHLY FEE</h2>
                              
                            </div>
                       
                            <Radar data={data_of_monthly_fee } options={options} style={{maxHeight:"350px"}} />
                        </div>
                    </div>
                </div>
            </div> }
           
          
        
       
    </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  StudentHome;