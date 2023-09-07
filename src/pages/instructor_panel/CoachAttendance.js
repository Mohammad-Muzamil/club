import React from 'react'
import "../../assets/panel_css/style.css"
import "../../assets/panel_css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import { faBell,faBars,faAngleUp,faAngleDown,faUser, faUserGroup, faPeopleArrows, faUserCheck,
     faQuestionCircle,  faUniversity, faCity, faLocation, faMap, faAddressCard, faAddressBook, faUsers,faKey, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
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
import { Error_light } from '../../helpers/NotifiyToasters';

const StudentRow=(prop)=>{
  const isMobilerow = useMediaQuery({ maxWidth:767 });
  const [ischecked, setischecked] =useState(prop.defaultvalue) 
  const callme=prop.callme;
  const settingstatus=(event)=>{
    setischecked(event.target.checked);
    callme(prop.id, event.target.checked);
  }
    return(
        <tr style={{marginBottom:"0px"}}>
            <th style={{color:"black"}}>{prop.index+1}</th>
            <td style={{color:"black", fontSize: isMobilerow?"12px":"15px"}}>{prop.name}</td>
            <td ><input style={{height:"20px"}} type='checkBox' checked={ischecked} onChange={settingstatus} /></td>
        </tr>
    )
}

const CoachAttendance=()=> {
  const [typepassword, settypepassword]=useState("password")
  const [defvalue, setdefvalue]=useState(false)
  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const listofplayers=[{name:"Muhammad Muzamil",id:"12345"},{name:"Muhammad Nouman Arshad",id:"12346"},{name:"Muhammad Harris",id:"12347"}]
  const [listofattendance,setlistofattendance]= useState( listofplayers.map(obj=>({Id:obj.id,status:false})))

  const toggleDrop = () => {
    setDropOpen(!isDropOpen);
  };

  const resetvalues=()=>{
    for(let i=0;i<listofattendance.length;i++){
            listofattendance[i].status=false;
    }
  }
  const calling=(id,status)=>{
   
    for(let i=0;i<listofattendance.length;i++){
        if(listofattendance[i].Id==id){
            listofattendance[i].status=status;
        }
    }
  }
  const [total_player, set_total_player]= useState( listofplayers.map((ply,index)=>(<StudentRow name={ply.name} index={index} id={ply.id}  callme={calling} defaultvalue={false} />)))
  const [total_players, set_total_players]= useState( listofplayers.map((ply,index)=>(<StudentRow name={ply.name} index={index} id={ply.id}  callme={calling} defaultvalue={true} />)))

  const test=()=>{
       listofattendance.map(b=>{
        console.log(b.Id)
        console.log(b.status)
    })
  }

  const testing=()=>{
    setdefvalue(true)
    setlistofattendance(( listofplayers.map(obj=>({Id:obj.id,status:true}))))
  }
  
  return (
<div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& <CoachSideNavBar name="Muhammad Muzamil" level="National"/>}
        <div className="content">
          <CoachHeader onClickHandler={toggleDrop}/>
          <div className='container-fluid mt-5' style={{backgroundColor:"#ECECEC"}} >
          <div className="col-sm-12 col-12">
                        <div className=" rounded h-100 p-4">
                            <h2 className="mb-4 text-primary">Player Attendance</h2>
                            <div className='d-flex justify-content-end align-items-center w-100'>
                                <input type='date' className='col-lg-2 col-xl-2 col-md col-6' style={{border:"1px solid #D8D5D5"}}/>
                            </div>
                            <table className="mt-4" >
                                <thead>
                                    <tr style={{borderBottom:"2px solid gray"}}>
                                        <th scope="col" style={{fontSize:"19px",paddingBottom:"4px"}}>#</th>
                                        <th scope="col" style={{fontSize:"19px",paddingBottom:"4px"}}>Name</th>
                                        <th scope="col" style={{fontSize:"19px",paddingBottom:"4px"}}>Status</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    {!defvalue&&total_player}
                                    {defvalue&&total_players}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end w-100 pb-3' style={{columnGap:"10px"}}>
                        <button className='btn text-primary' style={{width:"80px",border:"2px solid #007BFF" }}onClick={testing}>Edit</button>
                        <button className='btn btn-primary' style={{width:"100px"}} onClick={test}>Submit</button>
                    </div>

          </div>
        </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  CoachAttendance;