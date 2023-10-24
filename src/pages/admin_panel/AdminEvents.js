import React, { useReducer } from 'react'
import "../../assets/panel_css/style.css"
import "../../assets/panel_css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import { faBell,faBars,faAngleUp,faAngleDown,faUser, faUserGroup, faPeopleArrows, faUserCheck,
     faQuestionCircle,  faUniversity, faCity, faLocation, faMap, faAddressCard, faAddressBook, faUsers,faKey, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import test_img from "../../assets/test_img.jpg"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import TruncateText from '../../helpers/TruncatedText';
import { Success_light } from '../../helpers/NotifiyToasters';
import { useEffect } from 'react';

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Error_light } from '../../helpers/NotifiyToasters';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { Reset_Password, SEND_EVENT_DATA } from '../../helpers/api';
import AdminHeader from './AdminHeader';
import AdminSideNavBar from './AdminSideNavBar';
import imgeve from "../../assets/img/camera.png"
import { decrypt } from '../../helpers/encryption_decrption';

const AdminEvents=()=> {
 const nevigate = useNavigate();
 const isAuthenticated= decrypt(sessionStorage.getItem('admin_token'));
 const user_details= decrypt(sessionStorage.getItem('admin_user'));
  useEffect(()=>{
    if (isAuthenticated == null || user_details == null || user_details.user.username[0].toLowerCase()!='a' ){
    
        nevigate('/login');
     }
     else{
       
     }
  },[]);
  const [isLoading,setIsLoading]=useState(false)
  const [file,setfile]=useState("")
  const [eventdetails,seteventdetails]=useState({
    date:"",
    time:"",
    event_name:"",
    announcer:"",
    description:"",
   
  })
  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const toggleDrop = () => {
    setDropOpen(!isDropOpen);
  };
const sendeventdata=async()=>{
        setIsLoading(true);
    if(Object.values(eventdetails).every(value =>  value != "")){
        const formdata=new FormData();
        formdata.append('file',file);
        {Object.keys(eventdetails).map(key => (
            formdata.append(`${key}`,`${eventdetails[key]}`) 
      ))}
        await SEND_EVENT_DATA(formdata).then((response)=>{
            if (response.status==200){
                seteventdetails({
                    date:"",
                    time:"",
                    event_name:"",
                    announcer:"",
                    description:"",
                  })
                  setfile("");
                Success_light("Event Created Successfully");
            }
            else if (response.status==403){
                Error_light("Event already created of same date");
            }

            else{
                Error_light("Try Again")
            }
            setIsLoading(false);
        })

    }
    else{
        Error_light("Please Enter complete details")
        setIsLoading(false);

    }
}


  return (
<div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& user_details!=null&& <AdminSideNavBar  name={user_details.name} level="Coach" image_path={user_details.profile_image}/>}
        <div className="content">
       {user_details!=null&& <AdminHeader onClickHandler={toggleDrop} name={user_details.name} total_events={"5"} image_path={user_details.profile_image}  />  }
        <Loader show={isLoading} message="Loading..."/>         
        {!isLoading&&
        <div className='container-fluid  mt-1 ml-auto mr-auto mt-4  mb-5' style={{columnGap:"10px", rowGap:"10px"}}>
            <div className=' col-12 p-5  d-flex flex-lg-row flex-xl-row flex-md-row flex-column flex-wrap'style={{backgroundColor:"#ECECEC", borderRadius:"6px"}}>
                <div className='col-lg-6 col-xl-6 col-md-6 col-12'>
                    <label>Date</label>
                    <input type='date' value={eventdetails.date} onChange={(e)=>seteventdetails({...eventdetails,date:e.target.value})} style={{height:"45px",backgroundColor:"#FFFFFF"}} />
                </div>
                <div className='col-lg-6 col-xl-6 col-md-6 col-12'>
                    <label>Time</label>
                    <input type='time'  value={eventdetails.time} onChange={(e)=>seteventdetails({...eventdetails,time:e.target.value})} style={{height:"45px",backgroundColor:"#FFFFFF"}} />
                </div>
                <div className='col-lg-6 col-xl-6 col-md-6 col-12 mt-2'>
                    <label>Name</label>
                    <input type='text' value={eventdetails.event_name} onChange={(e)=>seteventdetails({...eventdetails,event_name:e.target.value})} style={{border:"none",height:"45px",backgroundColor:"#FFFFFF"}} />
                </div>
                <div className='col-lg-6 col-xl-6 col-md-6 col-12 mt-2'>
                    <label>Announcer</label>
                    <input type='text' value={eventdetails.announcer}  onChange={(e)=>seteventdetails({...eventdetails,announcer:e.target.value})} style={{border:"none",height:"45px",backgroundColor:"#FFFFFF"}} />
                </div>
                <div className=' col-12 mt-2'>
                    <label>Description</label>
                    <textarea  value={eventdetails.description} onChange={(e)=>seteventdetails({...eventdetails,description:e.target.value})}  style={{border:"none",height:"65px",backgroundColor:"#FFFFFF"}} />
                </div>
                <div className=' col-12 mt-2'>
                    <label>Flex Image (size should be 600px-300px)</label>
                    <div className='col-12 d-flex  flex-column justify-content-center align-items-center' onClick={()=>{document.getElementById("event-image").click()}} style={{border:"none",backgroundColor:"#FFFFFF",border:"2px dashed black"}} >
                        {file!==""&&<img src={URL.createObjectURL(file)} style={{width:"100%",height:"300px",paddingTop:"15px",paddingBottom:"15px"}}/>}
                        {file==""&&<img src={imgeve}/>}
                        {file==""&&<p style={{paddingBottom:"10px",fontSize:"18px"}}>Upload Event Image</p>}
                        
                    </div>
                    <input type='file'  id="event-image" accept='image/*' onChange={(e)=>setfile(e.target.files[0])} style={{display:"none"}} />
                </div>
                <div className=' col-12 mt-4 d-flex justify-content-end'>
                <button className='btn btn-primary'onClick={sendeventdata} >Create Event</button>
                </div>

            </div>


        </div>
        } 
    
        
    </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  AdminEvents;