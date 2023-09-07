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
    return(
        <tr style={{marginBottom:"0px"}}>
            <th style={{color:"black"}}>{prop.index+1}</th>
            <td style={{color:"black", fontSize: isMobilerow?"12px":"15px"}}>{prop.name}</td>
            <td >
            <input style={{height:"20px"}} type='checkBox'/>
            </td>
            <td >
            <input style={{height:"20px"}} type='checkBox'/>
            </td>
            <td >
            <input style={{height:"20px"}} type='checkBox'/>
            </td>
        </tr>
    )
}

const CoachFightResult=()=> {
  const [typepassword, settypepassword]=useState("password")
  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const listofplayers=[{name:"Muhammad Muzamil"},{name:"Muhammad Nouman Arshad"},{name:"Muhammad Harris"}]
  const toggleDrop = () => {
    setDropOpen(!isDropOpen);
  };
  
  return (
<div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& <CoachSideNavBar name="Muhammad Muzamil" level="National"/>}
        <div className="content">
          <CoachHeader onClickHandler={toggleDrop}/>
          <div className='container-fluid mt-5' style={{backgroundColor:"#ECECEC"}} >
          <div className="col-sm-12 col-12">
                        <div className=" rounded h-100 p-4">
                                <h3 className="mb-4 text-primary">Player Fights Result</h3>
                          
                            <table className="mt-4" >
                                <thead>
                                    <tr style={{borderBottom:"2px solid gray"}}>
                                        <th scope="col" style={{fontSize:"19px",paddingBottom:"4px"}}>#</th>
                                        <th scope="col" style={{fontSize:"19px",paddingBottom:"4px"}}>Name</th>
                                        <th scope="col" style={{fontSize:"19px",paddingBottom:"4px"}}>{ isMobileactive?"Ply":"Played" }</th>  
                                        <th scope="col" style={{fontSize:"19px",paddingBottom:"4px"}}>{ isMobileactive?"F":"Fight" }</th>
                                        <th scope="col" style={{fontSize:"19px",paddingBottom:"4px"}}>{ isMobileactive?"K":"Kata" }</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    {listofplayers.map((ply,index)=>(
                                        <StudentRow name={ply.name} index={index} />
                                    ))}
                                
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end w-100 pb-3' style={{columnGap:"10px"}}>
                        <button className='btn text-primary' style={{width:"80px",border:"2px solid #007BFF" }}>Edit</button>
                        <button className='btn btn-primary' style={{width:"100px"}}>Submit</button>
                    </div>

          </div>
        </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  CoachFightResult;