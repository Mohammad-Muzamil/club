import React from 'react'
import "../../assets/panel_css/style.css"
import "../../assets/panel_css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import { faBell,faBars,faAngleUp,faAngleDown,faUser, faUserGroup, faPeopleArrows, faUserCheck,
     faQuestionCircle,faAdd,faEdit, faUpload,faRecycle,  faUniversity, faCity, faLocation, faMap, faAddressCard, faAddressBook, faUsers,faKey, faEye, faEyeSlash, faL, faAd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import test_img from "../../assets/test_img.jpg"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import CoachSideNavBar from "./CoachSideNavBar";
import TruncateText from '../../helpers/TruncatedText';
import { Success_light, Throw_Error } from '../../helpers/NotifiyToasters';
import { useEffect } from 'react';
import CoachHeader from './CoachHeader';
import { Error_light } from '../../helpers/NotifiyToasters';
import { useSelector } from 'react-redux';
import { PLAYER_LIST,SEND_PLAYER_ATTENDANCE_LIST, EDIT_PLAYER_ATTENDANCE_LIST } from '../../helpers/api';
import Loader from '../../components/Loader/Loader';
import { decrypt, encrypt } from '../../helpers/encryption_decrption';


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
  const nevigate = useNavigate();
  const isAuthenticated= decrypt(sessionStorage.getItem('inst_token'))
  const user_details= decrypt(sessionStorage.getItem('inst_user'))
  const branch_details= decrypt(sessionStorage.getItem('inst_branch'))
  const [edited,setedited]=useState(false)
  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const [listofplayers,setlistofplayers]=useState([])
  const [listofattendance,setlistofattendance]= useState([])
  const currentDate = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [datevalidation, setdatevalidation]=useState(true)
  const [isLoading,setIsLoading]=useState(false)

 const setAttendanceList = async () => {
    setIsLoading(true);
    try {
      const response = await PLAYER_LIST(branch_details.id);
      if (response.status === 200) {
        setlistofplayers(response.data);
        setlistofattendance(response.data.map((obj) => ({ Id: obj.id, player_name: obj.player_name, status: false })));
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
      setAttendanceList();
     }
  },[]);

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

  const calling=(id,status)=>{ 
    setlistofattendance(prevList => prevList.map(obj => {
        if (obj.Id === id) {
          return { ...obj, status };
        }
        return obj;
      }));
  }

  const SendAttendance=async(e)=>{
    e.preventDefault();
      setIsLoading(true);
       await SEND_PLAYER_ATTENDANCE_LIST(branch_details.id,listofattendance,selectedDate).then((response)=>{
        if(response.status==200)
        {
          Success_light(" Attendance Uploaded Successfully")
          let status=false
          setlistofattendance(prevList => prevList.map(obj => {
             return { ...obj, status };
           }))
          setIsLoading(false)
        }
        else if (response.status==406){
          Error_light("Already Uploaded Attendance");
          setIsLoading(false)
       
        }
        else{
          setIsLoading(false)
        }
      
       })
  }
  
  const EditAttendence=()=>{
    // remember the case if not upload the how it edited the attandence
    if(datevalidation){
      setedited(true);
    }
  }

  const SendEditAttendence=async()=>{

        setIsLoading(true);
       await EDIT_PLAYER_ATTENDANCE_LIST(branch_details.id,listofattendance,selectedDate).then((response)=>{
        if(response.status==200)
        {
          Success_light("Attendance Updated Successfully")
          setIsLoading(false)
       
          setedited(false);
        }
        else{
          Error_light("Try Again");
          setIsLoading(false)
        }
        const status=false
        setlistofattendance(prevList => prevList.map(obj => {return { ...obj, status }}))
        
       })
  }


  
  
  return (
<div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& user_details!=null&& <CoachSideNavBar  name={user_details.name} level="Coach" image_path={user_details.profile_image}/>}
        <div className="content">
        {user_details!=null&&<CoachHeader onClickHandler={toggleDrop} name={user_details.name} total_events={"5"} image_path={user_details.profile_image}  />  }
        <Loader show={isLoading} message="Loading..."/>
          {!isLoading&& <div className='container-fluid mt-5' style={{backgroundColor:"#ECECEC"}} >
          <div className="col-sm-12 col-12">
                        <div className=" rounded h-100 p-4">
                            <h2 className="mb-4 text-primary">Player Attendance</h2>
                                <div className='d-flex justify-content-end align-items-center w-100'>
                                  <input type='date' className={`form-control ${!datevalidation ? 'is-invalid' : ''} col-lg-2 col-xl-2 col-md col-7`}   onChange={handleDateChange}  value={selectedDate}  style={{border:"1px solid #D8D5D5"}}/>
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
                                    {listofattendance.map((ply,index)=>(<StudentRow key={ply.Id} name={ply.player_name} index={index} id={ply.Id} callme={calling} defaultvalue={ply.status} />))}
                             
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {!edited&&<div className='d-flex justify-content-end w-100 pb-3' style={{columnGap:"10px"}}>
                        <button type="button" className='btn text-primary' style={{width:"80px",border:"2px solid #007BFF" }} onClick={EditAttendence}><FontAwesomeIcon icon={faEdit} style={{paddingRight:"5px"}} />Edit</button>
                        <button type="button" className='btn btn-primary' style={{width:"120px"}} onClick={SendAttendance}><FontAwesomeIcon icon={faUpload} style={{paddingRight:"5px"}} />Submit</button>
                    </div>}

                    {edited &&<div className='d-flex justify-content-end w-100 pb-3' style={{columnGap:"10px"}}>
                        <button type="button" className='btn btn-primary' style={{width:"120px"}} onClick={SendEditAttendence}><FontAwesomeIcon icon={faRecycle} style={{paddingRight:"5px"}} />Update</button>
                    </div>}
          </div>}
        </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  CoachAttendance;