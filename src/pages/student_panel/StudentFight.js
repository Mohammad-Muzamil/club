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
import { ADMIN_ATTENDANCE, ADMIN_Fight, PLAYER_Stats } from '../../helpers/api';
import { PieChart } from 'react-minimal-pie-chart';
import { decrypt, encrypt } from '../../helpers/encryption_decrption';

import KataTable from '../../components/features_section/KataTable';
import tekki from "../../assets/img/tekki1.gif"
const StudentFight=()=> {
    // react-cssfx-loading
  const [isLoading,setIsLoading]=useState(false)
  const nevigate = useNavigate();
  const isAuthenticated= decrypt(sessionStorage.getItem('ply_token'))
  const user_details= decrypt(sessionStorage.getItem('ply_user'))
  const branch_details= decrypt(sessionStorage.getItem('ply_branch'))
  const [date,setdate]=useState("");
  const [name,setname]=useState("")
  const [totalfight,settotalfights]=useState(0)
  const [totalkata,settotalkata]=useState(0)
  const [fightwins,setfightwins]=useState(0)
  const [katawins,setkatawins]=useState(0)
  const [rating,setrating]=useState(0)
  
  const [obj,setobj]=useState({})
  
    const searchresult=async()=>{
        setIsLoading(true);
        await ADMIN_Fight(branch_details.id,user_details.user.id).then((response)=>{
          if (response.status==200){
              setIsLoading(false);
         
                // setobj(response.data)
                setname(response.data[0].user.username)
                settotalfights(response.data[0].total_fight)
                settotalkata(response.data[0].total_kata)
                setfightwins(response.data[0].fight_wins)
                setkatawins(response.data[0].kata_wins)
                setrating(response.data[0].rating)
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
        searchresult();
     

     }

  },[]);
  const stringBuilder=(s)=>{
    if (s==""){
      return "";
    }
    var temp="";
    for (var i=2;i< s.length-5;i++){
        temp+=s[i];
    }
    return temp;
}
   
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
        {!isLoading&& obj!=null&&<div className='container-fluid  mt-1 ml-auto mr-auto mt-4  mb-5' style={{columnGap:"10px", rowGap:"10px"}} >
        <div className=' col-12 p-5 'style={{backgroundColor:"#ECECEC", borderRadius:"6px",overflowX:"scroll"}}>
        <table style={{overflowX:"scroll"}}>
            <tr>
            <th style={{fontSize:"25px",fontStyle:"italic"}}>Name</th>
                <th style={{fontSize:"25px",fontStyle:"italic"}}>&nbsp;Total&nbsp;Fight&nbsp;</th>
                <th style={{fontSize:"25px",fontStyle:"italic"}}>&nbsp;Fights&nbsp;Wins&nbsp;</th>
                <th style={{fontSize:"25px",fontStyle:"italic"}}>&nbsp;Total&nbsp;Kata&nbsp;</th>
                <th style={{fontSize:"25px",fontStyle:"italic"}}>&nbsp;Kata&nbsp;Wins&nbsp;</th>
                <th style={{fontSize:"25px",fontStyle:"italic"}}>&nbsp;Rating&nbsp;</th>
            </tr>
           
            <tr>
                <td style={{ fontSize:"17px", color:"Black"}}>{stringBuilder(name)}</td>
                <td style={{ fontSize:"17px", color:"red"}}>{totalfight}</td>
                <td style={{ fontSize:"17px", color:"green"}}>{fightwins}</td>
                <td style={{ fontSize:"17px", color:"red"}}>{totalkata}</td>
                <td style={{ fontSize:"17px", color:"green"}}>{katawins}</td>
                <td style={{ fontSize:"17px", color:"green"}}>{rating}</td>
            </tr>
           
        </table>
        </div>

        </div>}
       
         
    </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  StudentFight;