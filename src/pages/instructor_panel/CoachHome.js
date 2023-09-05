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
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import CoachSideNavBar from "./CoachSideNavBar";
import TruncateText from '../../helpers/TruncatedText';
import { Success_light } from '../../helpers/NotifiyToasters';
import { useEffect } from 'react';
import CoachHeader from './CoachHeader';

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const CoachHome=()=> {

    const labels = ["January", "February", "March", "April", "May", "June","July","August","September","October","November","December"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Present Players",
          backgroundColor: "rgb(0,123,255)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    };

  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const toggleDrop = () => {
    setDropOpen(!isDropOpen);
  };
  useEffect(() => {
    Success_light("Welcome Nouman asrshad");
}, []); 

  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& <CoachSideNavBar name="Muhammad Muzamil" level="National"/>}
        <div className="content">
          <CoachHeader onClickHandler={toggleDrop}/>
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <FontAwesomeIcon icon={faUsers} style={{fontSize:"50px"}} className='text-primary' /> 
                            <div className="ms-3">
                                <h5 className="mb-2">Total Players</h5>
                                <h6 className="mb-0" style={{fontSize:"16px", color:"#71797E"}}>1234</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                        <FontAwesomeIcon icon={faUserCheck} style={{fontSize:"50px"}} className='text-primary' /> 
                            <div className="ms-3">
                                <h5 className="mb-2">Total Present</h5>
                                <h6 className="mb-0" style={{fontSize:"16px", color:"#71797E"}}>1234</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                        <FontAwesomeIcon icon={faQuestionCircle} style={{fontSize:"50px"}} className='text-primary' /> 
                            <div className="ms-3">
                                <h5 className="mb-2">New Players</h5>
                                <h6 className="mb-0" style={{fontSize:"16px", color:"#71797E"}}>1234</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <FontAwesomeIcon icon={faCity} style={{fontSize:"50px"}} className='text-primary' /> 
                            <div className="ms-3">
                                <h5 className="mb-2" >Faislabad</h5>
                                <h6 className="mb-0"style={{fontSize:"16px", color:"#71797E"}}>Pakistan</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* graphs */}
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light text-center rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h4 className="mb-0">This Month</h4>
                                {/* <a href="">Show All</a> */}
                            </div>
                            <Bar data={data} options={{Response: true}} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light text-center rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h4 className="mb-0">Monthly Attendane</h4>
                                {/* <a href=""></a> */}
                            </div>
                            <Bar data={data} />
                        </div>
                    </div>
                </div>
            </div>
          
        
       
    </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  CoachHome;