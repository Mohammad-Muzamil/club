import React from 'react'
import "../../assets/panel_css/style.css"
import "../../assets/panel_css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import { faBell,faBars,faAngleUp,faAngleDown,faUser, faUserGroup, faPeopleArrows, faUserCheck,
     faQuestionCircle,  faUniversity, faCity, faLocation, faMap, faAddressCard, faAddressBook, faUsers,faKey, faEye, faEyeSlash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import test_img from "../../assets/test_img.jpg"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import CoachSideNavBar from "./CoachSideNavBar";
import TruncateText from '../../helpers/TruncatedText';
import { Success_light, Warning_light } from '../../helpers/NotifiyToasters';
import { useEffect } from 'react';
import CoachHeader from './CoachHeader';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Error_light } from '../../helpers/NotifiyToasters';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { PLAYER_ACCOUNTS, Reset_Password, SEND_EMAIL_FEES } from '../../helpers/api';
import plus from "../../assets/img/plus.png"
import minus from "../../assets/img/minus.png"

const CoachFees=()=> {
 const nevigate = useNavigate();
  const isAuthenticated= useSelector((state) => state.login)
  const user_details= useSelector((state) => state.user)

  useEffect(()=>{
    if (isAuthenticated === "" || user_details.user.username[0].toLowerCase()!='i'){
        nevigate('/login');
     }
     else{
       
     }
  },[]);
  const branch_details= useSelector((state) => state.branch)
  const[date,setdate]=useState("")

  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const toggleDrop = () => {
    setDropOpen(!isDropOpen);
  };

  const [isLoading,setIsLoading]=useState(false)
//   const [playerlist,setplayerlist]=useState(['ibad','abdullag','ibrahim','ibad','abdullag','ibrahim','ibad','abdullag','ibrahim','ibad','abdullag','ibrahim','ibad','abdullag','ibrahim','ibad','abdullag','ibrahim'])
  const [playerlist,setplayerlist]=useState([])
  const [newplayerlist,setnewplayerlist]=useState([])
  const setplayer=(index)=>{
    const adding=playerlist[index];
    const temp=[]
    for (var i=0; i<playerlist.length;i++){
      if (i!=index){
        temp.push(playerlist[i])
      }
    }
    setplayerlist(temp);
    setnewplayerlist([...newplayerlist,adding]);

  }
  const setplayerlistdata=async()=>{
    setIsLoading(true);
    await PLAYER_ACCOUNTS(branch_details.id).then((response)=>{
      if (response.status==200)
      {
        setplayerlist(response.data);
      }
      else{
       Error_light("Try again")
      }
    })
    setIsLoading(false);
  }
  useEffect(()=>{
    setplayerlistdata()
  },[])

  const setplayerdata=(index)=>{
    const adding=newplayerlist[index];
    const temp=[]
    for (var i=0; i<newplayerlist.length;i++){
      if (i!=index){
        temp.push(newplayerlist[i])
      }
    }
    setnewplayerlist(temp);
    setplayerlist([...playerlist,adding]);

  }
  const revert=(e)=>{
    if (e.target.checked==true){
      setnewplayerlist([...playerlist,...newplayerlist])
      setplayerlist([]);
    }else{
      setplayerlist([...newplayerlist,...playerlist])
      setnewplayerlist([])
    }
  }
  const senddata=async()=>{
    if (date==""){
      Warning_light("Please Select Month")
      return;
    }
    if(newplayerlist.length==0){
      Warning_light("Please select player")
      return;
    }

    if (newplayerlist.length>5){
      Error_light("Only Five Player Allowce Once");
      return;
    }
    setIsLoading(true);
    var z=[]
    for(var i=0;i<5 && i<newplayerlist.length;i++){
      if(document.getElementById(`id-${i}`).value==null || document.getElementById(`id-${i}`).value==0 || document.getElementById(`id-${i}`).value==""){
        setIsLoading(false);
        Warning_light("please Enter Fees of all students")
        return;
      }
      var temp={
        "username":newplayerlist[i].user.username,
        "email":newplayerlist[i].user.email,
        "father_name":newplayerlist[i].father_name,
        "fees":document.getElementById(`id-${i}`).value

      }
      z.push(temp)
    }
    var data={
      "student_list":z,
      "date":date
    }
    await SEND_EMAIL_FEES(data).then((response)=>{
      if (response.status==200)
      {
        Success_light("successfully sended Fees")
        setIsLoading(false);

      }
      else{
        Error_light("Try Again")
        setIsLoading(false);

      }
    })
  }

 const  handleDate=(e)=>{
  setdate(e.target.value)
  }


  

  return (
<div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& <CoachSideNavBar  name={user_details.name} level="Coach" image_path={user_details.profile_image}/>}
        <div className="content">
        <CoachHeader onClickHandler={toggleDrop} name={user_details.name} total_events={"5"} image_path={user_details.profile_image}  />  
        <Loader show={isLoading} message="Please wait fee is sending through mails"/>
        {!isLoading&&
        <div className='container-fluid  mt-1 ml-auto mr-auto mt-4  mb-5 d-flex flex-lg-row flex-xl-row flex-md-row flex-column flex-wrap justify-content-between ' style={{rowGap:"20px"}} >
          <div className=' col-lg-4 col-xl-4 col-12 d-flex flex-column   'style={{backgroundColor:"#ECECEC", borderRadius:"6px", maxHeight:"440px",minHeight:"440px"}}>
            <h2 className='pt-3 text-center' style={{fontWeight:"Bold",fontStyle:"italic"}}>Player List</h2>
           
            <ol className='mt-3 bg-white'  style={{minHeight:"310px",manHeight:"310px",overflowY:"scroll", borderRadius:"6px"}}>
              {playerlist.map((obj,index)=>(
                <div className='d-flex justify-content-around pt-1 mt-2' >
                <li className='mt-1' style={{minWidth:"230px",fontSize:"15px"}}>{obj.player_name}</li>
                <img  onClick={()=>setplayer(index)} className='mt-2 ' src={plus} style={{color:"green",fontWeight:"bold",marginLeft:"-10px",paddingRight:"16px",width:"37px",height:"20px"}}/>
                </div>
              ))}
            </ol>
            <div className='col-12 d-flex justify-content-end '>
              <label style={{paddingRight:"6px"}}>Select All</label>
              <input type="checkbox" style={{height:"20px",width:"20px"}} onChange={revert}/>
            </div>
          </div>
          <div className=' col-lg-7 col-xl-7 col-12 d-flex flex-column   'style={{backgroundColor:"#ECECEC", borderRadius:"6px", height:"85vh"}}>
          <h2 className='pt-3 text-center' style={{fontWeight:"Bold",fontStyle:"italic"}}> Selected Players</h2>
        
          <ol className='mt-3 bg-white' style={{minHeight:"65vh",overflowY:"scroll",borderRadius:"6px"}} >
              {newplayerlist.map((obj,index)=>(
                <div className='d-flex justify-content-between mt-2' >
                <li className='mt-1 pt-1' style={{fontSize:"15px",paddingLeft:"10px",maxWidth:"200px",minWidth:"200px"}}>{obj.player_name}</li>
                <input type='number' placeholder='amount/Fees'  id={`id-${index}`} className='mt-1' style={{width:"150px",height:"30px"}}/>
                <img onClick={()=>setplayerdata(index)} className='mt-2 ' src={minus} style={{color:"red",fontWeight:"bold",paddingRight:"25px",width:"57px",height:"20px"}}/>
                </div>
              ))}
              
            </ol>
            <div className='col-12 d-flex flex-row justify-content-between mb-3' style={{minHeight:"50px"}}>
                <input type='month' style={{height:"40px",backgroundColor:"#FFFFFF"}} onChange={handleDate} className='col-lg-5 col-xl-5 col-6'/>
                <button style={{height:"40px"}} className='btn btn-primary col-5' onClick={senddata}>Send Mail</button>

            </div>
            
           
          </div>
         
        </div>}      
           
                
    </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  CoachFees;