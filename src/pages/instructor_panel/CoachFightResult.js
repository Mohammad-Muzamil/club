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
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import CoachSideNavBar from "./CoachSideNavBar";
import TruncateText from '../../helpers/TruncatedText';
import { Success_light } from '../../helpers/NotifiyToasters';
import { useEffect } from 'react';
import CoachHeader from './CoachHeader';
import { Error_light } from '../../helpers/NotifiyToasters';
import { useSelector } from 'react-redux';
import { PLAYER_LIST,SEND_PLAYER_FIGHT_LIST } from '../../helpers/api';
import Loader from '../../components/Loader/Loader';
import { decrypt, encrypt } from '../../helpers/encryption_decrption';

const StudentRow=(prop)=>{
  const isMobilerow = useMediaQuery({ maxWidth:767 });
  const[fight,setfight]=useState(prop.Fightstatus)  
  const[kata,setkata]=useState(prop.katastatus)
  const[played,setplayed]=useState(prop.playedstatus)
  const callme=prop.callme;  
    const onsetFight=(event)=>{
      if (played)
      {
        setfight(event.target.checked)
        callme(prop.id,event.target.checked,kata,played)
      }else{
        Error_light("Please seletect played")
      }
    }
    const onsetKata=(event)=>{
      if (played)
      {
        setkata(event.target.checked)
        callme(prop.id,fight,event.target.checked,played)
      }else{
        Error_light("Please seletect played")
      }

    }
    const onsetPlayed=(event)=>{
        setplayed(event.target.checked)
        if (event.target.checked==true){
          callme(prop.id,fight,kata,event.target.checked)
        }
        else{
          setkata(false)
          setfight(false)
          callme(prop.id,false,false,event.target.checked)
        }
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
            <input style={{height:"20px"}} type='checkbox' onChange={onsetKata} checked={kata} />
            </td>
        </tr>
    )
}

const CoachFightResult=()=> {
  const nevigate = useNavigate();
  const [isLoading,setIsLoading]=useState(false)
  const isAuthenticated= decrypt(sessionStorage.getItem('inst_token'))
  const user_details= decrypt(sessionStorage.getItem('inst_user'))
  const branch_details= decrypt(sessionStorage.getItem('inst_branch'))
  const [typepassword, settypepassword]=useState("password")
  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const [listofplayers,setlistofplayers]=useState([])
  const [listofFightResults,setlistofFightResults]= useState( listofplayers.map(obj=>({Id:obj.id,player_name:obj.player_name,playedstatus:false,Fightstatus:false,katastatus:false})))

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

  const setFightsList = async () => {
    setIsLoading(true);
    try {
      const response = await PLAYER_LIST(branch_details.id);
      if (response.status === 200) {
        setlistofplayers(response.data);
        setlistofFightResults(response.data.map((obj) => ({ Id: obj.id, player_name: obj.player_name, playedstatus:false,Fightstatus:false,katastatus:false })));
        setIsLoading(false);
      }
       else {
        setIsLoading(false);
      }
    } catch (error) {

      setIsLoading(false);
      console.error('Error fetching player attendance list:', error);
    }
  };
  
  useEffect(()=>{
    if (isAuthenticated == null || user_details == null || user_details.user.username[0].toLowerCase()!='i' ){
    
      nevigate('/login');
   }
     else{
      setFightsList();
     }
  },[]);

  const calling=(id,Fightstatus,katastatus,playedstatus)=>{ 
    
        const result=listofFightResults.map(obj => {
        if (obj.Id == id) {
          return { ...obj, playedstatus,Fightstatus,katastatus };
        }
        return obj;
      });
      setlistofFightResults(result);
  }


  const sendFightResult=async()=>{
      listofFightResults.map(obj=>{
      
    })
    if (!datevalidation)
    {
      return;
    }

    await SEND_PLAYER_FIGHT_LIST(branch_details.id,listofFightResults).then((response)=>{
      if (response.status==200)
      {
        setlistofFightResults(listofplayers.map((obj) => ({ Id: obj.id, player_name: obj.player_name, playedstatus:false,Fightstatus:false,katastatus:false })));
        Success_light("Uploaded sucessfully ")
      }
      else{
        Error_light("Try Again")
      }
    })
 
  }
  
  return (
<div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& user_details!=null && <CoachSideNavBar  name={user_details.name} level="Coach" image_path={user_details.profile_image}/>}
        <div className="content">
        {user_details!=null&&<CoachHeader onClickHandler={toggleDrop} name={user_details.name} total_events={"5"} image_path={user_details.profile_image}  />  }
        <Loader show={isLoading} message="Loading..."/>
          {!isLoading&&<div className='container-fluid mt-5' style={{backgroundColor:"#ECECEC"}} >
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
                                        <StudentRow key={ply.Id} name={ply.player_name} index={index}  callme={calling} id={ply.Id} playedstatus={ply.playedstatus} Fightstatus={ply.Fightstatus} katastatus={ply.katastatus} />
                                    ))}
                                
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end w-100 pb-3' style={{columnGap:"10px"}}>
                        <button type='button' className='btn btn-primary' style={{width:"120px"}}onClick={sendFightResult} ><FontAwesomeIcon icon={faUpload} style={{paddingRight:"5px"}}  />Submit</button>
                    </div>

          </div>}
        </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  CoachFightResult;