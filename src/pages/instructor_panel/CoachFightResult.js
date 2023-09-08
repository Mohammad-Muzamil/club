import React from 'react'
import "../../assets/panel_css/style.css"
import "../../assets/panel_css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import { faBell,faBars,faAngleUp,faAngleDown,faUser, faUserGroup, faPeopleArrows, faUserCheck,
     faQuestionCircle,  faUniversity, faCity, faLocation, faMap, faAddressCard, faAddressBook, faUsers,faKey, faEye, faEyeSlash, faEdit, faUpload } from '@fortawesome/free-solid-svg-icons';
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
  const[fight,setfight]=useState(prop.Fightstatus)  
  const[kata,setkata]=useState(prop.katastatus)
  const[played,setplayed]=useState(prop.playedstatus)
  const callme=prop.callme;  
    const onsetFight=(event)=>{
        setfight(event.target.checked)
        callme(prop.id,event.target.checked,kata,played)
    }
    const onsetKata=(event)=>{
        setkata(event.target.checked)
        callme(prop.id,fight,event.target.checked,played)

    }
    const onsetPlayed=(event)=>{
        setplayed(event.target.checked)
        callme(prop.id,fight,kata,event.target.checked)
    }  
    return(
        <tr style={{marginBottom:"0px"}}>
            <th style={{color:"black"}}>{prop.index+1}</th>
            <td style={{color:"black", fontSize: isMobilerow?"12px":"15px"}}>{prop.name}</td>
            <td >
            <input style={{height:"20px"}} type='checkbox' onChange={onsetPlayed} checked={played} />
            </td>
            <td >
            <input style={{height:"20px"}} type='checkbox'  onChange={onsetFight} checked={fight} />
            </td>
            <td >
            <input style={{height:"20px"}} type='checkbox'  onChange={onsetKata} checked={kata} />
            </td>
        </tr>
    )
}

const CoachFightResult=()=> {
  const [typepassword, settypepassword]=useState("password")
  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const listofplayers=[{name:"Muhammad Muzamil",id:"12345"},{name:"Muhammad Nouman Arshad",id:"12346"},{name:"Muhammad Harris",id:"12347"}]
  const [listofFightResults,setlistofFightResults]= useState( listofplayers.map(obj=>({Id:obj.id,name:obj.name,playedstatus:false,Fightstatus:false,katastatus:false})))

  const currentDate = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [datevalidation, setdatevalidation]=useState(true)

   const sevenDaysAgo = new Date();
   sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
   const sevenDaysAgoFormatted = sevenDaysAgo.toISOString().split('T')[0];
  const handleDateChange = (e) => {
    const selected = e.target.value;
    if (selected >= sevenDaysAgoFormatted && selected <= currentDate) {
      setSelectedDate(selected);
      setdatevalidation(true);
    } else {
      setSelectedDate(currentDate);
      setdatevalidation(false);
      if (selected >= currentDate)
          Error_light("Cannot Upload Future Attendance")
        else
          Error_light("Date must be within last 7 Days")
    }
  };
  const toggleDrop = () => {
    setDropOpen(!isDropOpen);
  };

  const calling=(id,Fightstatus,katastatus,playedstatus)=>{ 
    // console.log(id,Fightstatus,katastatus,playedstatus);
        const result=listofFightResults.map(obj => {
        if (obj.Id == id) {
          return { ...obj, playedstatus,Fightstatus,katastatus };
        }
        return obj;
      });
      setlistofFightResults(result);
  }


  const sendFightResult=()=>{
      listofFightResults.map(obj=>{
        console.log(`${obj.Id} ${obj.name} ${obj.playedstatus} ${obj.Fightstatus} ${obj.katastatus}`)
    })
    // cal the api for sending result
 
  }
  
  return (
<div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& <CoachSideNavBar name="Muhammad Muzamil" level="National"/>}
        <div className="content">
          <CoachHeader onClickHandler={toggleDrop}/>
          <div className='container-fluid mt-5' style={{backgroundColor:"#ECECEC"}} >
          <div className="col-sm-12 col-12">
                        <div className=" rounded h-100 p-4">
                                <h3 className="mb-4 text-primary">Player Fights Result</h3>
                                <div className='d-flex justify-content-end align-items-center w-100'>
                                  <input type='date' className={`form-control ${!datevalidation ? 'is-invalid' : ''} col-lg-2 col-xl-2 col-md col-7`}   onChange={handleDateChange}  value={selectedDate}  style={{border:"1px solid #D8D5D5"}}/>
                                </div>
                          
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
                                    {listofFightResults.map((ply,index)=>(
                                        <StudentRow key={ply.Id} name={ply.name} index={index}  callme={calling} id={ply.Id} playedstatus={ply.playedstatus} Fightstatus={ply.Fightstatus} katastatus={ply.katastatus} />
                                    ))}
                                
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end w-100 pb-3' style={{columnGap:"10px"}}>
                        <button type='button' className='btn btn-primary' style={{width:"120px"}}onClick={sendFightResult} ><FontAwesomeIcon icon={faUpload} style={{paddingRight:"5px"}}  />Submit</button>
                    </div>

          </div>
        </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  CoachFightResult;