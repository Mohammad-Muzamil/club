import React from 'react'
import "../../assets/panel_css/style.css"
import "../../assets/panel_css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import { faBell,faBars,faAngleUp,faAngleDown,faUser, faUserGroup, faPeopleArrows, faUserCheck,
     faQuestionCircle, faSearch, faUniversity, faCity, faLocation, faMap, faAddressCard, faAddressBook, faUsers,faKey, faEye, faEyeSlash, faBucket, faTrash } from '@fortawesome/free-solid-svg-icons';
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
import { Error_light } from '../../helpers/NotifiyToasters';


const DeletionRow=(prop)=>{
    const deleteStudent=()=>{
        // call the api for soft deletion of student 
        Success_light("Student Deleted Successfully ")
    }
    return(
        <div className='w-100 d-flex mb-3' style={{boxShadow:"1px 1px 2px 2px gray", borderRadius:"7px"}}>
        <div className='img p-3 bg-dark' style={{ borderBottomLeftRadius:"7px",borderTopLeftRadius:"7px"}}>
            <img src={test_img} style={{borderRadius:"50%", height:"100px", width:"100px", border:"7px solid #D8D5D5"}}/>
        </div>
        <div className='d-lg-flex p-3 justify-content-around w-100'> 
            <div className='w-100'>
                <h3 className='text-bold' style={{fontWeight:"1000px"}} >{prop.name}</h3>
                <p style={{marginTop:"0px",color:"gray"}}>National Youth Karate Academy</p>
                <p style={{marginTop:"-10px",color:"gray"}}>+92 3346264383 </p>
            </div>
            <div className='d-flex justify-content-end mt-2'>
                <button className='btn btn-danger mt-lg-4' style={{height:"40px"}} onClick={deleteStudent}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </div>
    </div>
    )
}

const CoachDeletePlayerAccount=()=> { 
  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const [name, setname]=useState("");
  const [querydata, setquerydata]=useState([]);
  const [players,setplayers]=useState([{name:"Harris"},{name:"Nouman"},{name:"Muzammil"},{name:"Bilal"},{name:"Ibrahim"}])
  const [listofplayers,setlistofplayers]=useState([{name:"Harris"},{name:"Nouman"},{name:"Muzammil"},{name:"Bilal"},{name:"Ibrahim"}])
  const handleSarchBar=()=>{
    if (name=="")
    {   setlistofplayers(players);
        return;
    }
    let dummy=[];
    players.map(obj=>{
        if (obj.name.toLowerCase().includes(name.toLowerCase()))
        {
            dummy.push(obj)
        }
    setlistofplayers(dummy);
    })


  }
  const onHandleChange=(event)=>{
    setname(event.target.value)
    if (event.target.value)
        setlistofplayers(players)
  }
  const toggleDrop = () => {
    setDropOpen(!isDropOpen);
  };
  return (
<div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& <CoachSideNavBar name="Muhammad Muzamil" level="National"/>}
        <div className="content">
            <CoachHeader onClickHandler={toggleDrop}/>
            <div className='w-100 mt-4 d-flex p-3' style={{columnGap:"10px" ,backgroundColor:"#ECECEC", borderRadius:"7px"}}>
                <input type='text' className='form-control col-lg-5 col-xl-5 col-md-5 col-8'  style={{height:"45px"}} onChange={onHandleChange} placeholder='Enter Player Username....'/>
                <button className='btn btn-primary mt-2' style={{width:"120px", height:"45px"}} onClick={handleSarchBar} ><FontAwesomeIcon icon={faSearch} style={{paddingRight:"5px"}}/>Search</button>
            </div>
            <div className='w-100 mt-2 p-3' style={{height:"300px"}}>
                {listofplayers.map(std=>(
                    <DeletionRow name={std.name}/>
                ))}
       
            </div>
        </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  CoachDeletePlayerAccount;