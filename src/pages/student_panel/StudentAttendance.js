import React from 'react'
import "../../assets/panel_css/style.css"
import "../../assets/panel_css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import { faBell,faBars,faAngleUp,faAngleDown,faUser, faUserGroup, faPeopleArrows, faUserCheck,
     faQuestionCircle,  faUniversity, faCity, faLocation, faMap, faAddressCard, faAddressBook, faUsers, faSearch, faTimesCircle, faTimeline, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import test_img from "../../assets/test_img.jpg"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import StudentSideNavBar from "./StudentSideNavBar";
import TruncateText from '../../helpers/TruncatedText';
import { Error_light, Success_light, Throw_Error } from '../../helpers/NotifiyToasters';
import { useEffect } from 'react';
import StudentHeader from './StudentHeader';

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { ADMIN_ATTENDANCE, PLAYER_Stats } from '../../helpers/api';
import { PieChart } from 'react-minimal-pie-chart';
import { decrypt, encrypt } from '../../helpers/encryption_decrption';

import KataTable from '../../components/features_section/KataTable';
import tekki from "../../assets/img/tekki1.gif"
const StudentAttendance=()=> {
    // react-cssfx-loading
  const [isLoading,setIsLoading]=useState(false)
  const nevigate = useNavigate();
  const isAuthenticated= decrypt(sessionStorage.getItem('ply_token'))
  const user_details= decrypt(sessionStorage.getItem('ply_user'))
  const branch_details= decrypt(sessionStorage.getItem('ply_branch'))
  const [date,setdate]=useState("");
  const [result2,setresult2]=useState([])
  
    const searchresult=async()=>{
        if (date==""){
            Error_light("Please Select Date");
            return;
        }
        setIsLoading(true);
        await ADMIN_ATTENDANCE(branch_details.id,date,user_details.user.id).then((response)=>{
            if (response.status==200){
               
                setresult2(response.data)
                setIsLoading(false);

            }
            else{
                Error_light("Try Again")
                setIsLoading(false);

            }
        })
       
    }


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
    {isDropOpen&& user_details!=null&& <StudentSideNavBar name={user_details.player_name} level="Player" image_path={user_details.profile_image} />}
        <div className="content">
         {user_details!=null && <StudentHeader onClickHandler={toggleDrop} name={user_details.player_name} total_events={"5"} image_path={user_details.profile_image}  />}
          <Loader show={isLoading} message="Loading..."/>
          {!isLoading &&<div className='container-fluid mt-1  ml-auto mr-auto mt-4 ' style={{columnGap:"10px", rowGap:"10px"}} >
            <div className=' col-12 p-5 'style={{backgroundColor:"#ECECEC", borderRadius:"6px", order:isMobileactive?"2":"1"}}>
                             
                <h3 style={{fontWeight:"bold"}}className='text-primary' ><FontAwesomeIcon icon={faSearch} style={{fontSize:"30px", paddingRight:"10px"}} className='text-primary' />Attendance</h3>
                <div className='d-flex flex-column flex-lg-row' style={{columnGap:"20px",rowGap:"10px"}}>
                    <input  onChange={(e)=> setdate(e.target.value)} type='month' className='col-lg-4 col-12  form-control' style={{backgroundColor:"#FFFFFF",border:"none",height:"40px"}}/>
                    <button className='col-lg-2 col-6 btn btn-primary' onClick={searchresult} >Search</button>
                </div> 
            </div>
         
        </div>}
        {!isLoading&&<div className='container-fluid  mt-1 ml-auto mr-auto mt-4  mb-5' style={{columnGap:"10px", rowGap:"10px"}} >
        <div className=' col-12 p-5 'style={{backgroundColor:"#ECECEC", borderRadius:"6px"}}>
        <table style={{overflowX:"scroll"}}>
            <tr>
                <th style={{fontSize:"25px",fontStyle:"italic"}}>Date</th>
                <th style={{fontSize:"25px",fontStyle:"italic"}}>Name</th>
                <th style={{fontSize:"25px",fontStyle:"italic"}}>Status</th>
            </tr>
            {result2.map((obj)=>(
            <tr>
                <td style={{color:"Black",fontSize:"17px"}}>{obj.date}</td>
                <td style={{color:"Black",fontSize:"17px"}}>{obj.player.player_name}</td>
                <td style={{fontSize:"17px",color: obj.status==true?"green":"red"}}>{obj.status==true?"Present":"Absent"}</td>
            </tr>))}
           
        </table>
        </div>

        </div>}
         
    </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  StudentAttendance;