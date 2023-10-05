import React from 'react'
import "../../assets/panel_css/style.css"
import "../../assets/panel_css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import { faBell,faBars,faAngleUp,faAngleDown,faUser, faUserGroup, faPeopleArrows, faUserCheck,
     faQuestionCircle,  faUniversity, faCity, faLocation, faMap, faAddressCard, faAddressBook, faUsers,faKey, faEye, faEyeSlash, faSearch } from '@fortawesome/free-solid-svg-icons';
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
import { ADMIN_ATTENDANCE, ALL_ACCOUNTS, GET_BRANCHES, PLAYER_LIST, Reset_Password } from '../../helpers/api';
import AdminHeader from './AdminHeader';
import AdminSideNavBar from './AdminSideNavBar';


const AdminAttendance=()=> {
 const nevigate = useNavigate();
 const [isLoading,setIsLoading]=useState(false)
 const[branches,setbranches]=useState([])
 const[branch,setbranch]=useState("")
 const[date,setdate]=useState(null);
 const[branches1,setbranches1]=useState([])
 const[branch1,setbranch1]=useState("")
 const[date1,setdate1]=useState(null);
 const[std,setstd]=useState("");
 const[students,setstudents]=useState([]);
 const isMobileactive = useMediaQuery({ maxWidth:767 });
 const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const isAuthenticated= useSelector((state) => state.login)
  const user_details= useSelector((state) => state.user)
  const [showdiv,setshowdiv]=useState(true);
  const [showdiv1,setshowdiv1]=useState(false);
  const [result1,setresult1]=useState([])
  const [result2,setresult2]=useState([])
  useEffect(()=>{
    if (isAuthenticated === "" || user_details.user.username[0].toLowerCase()!='a'){
        nevigate('/login');
     }
     else{
       
     }
  },[]);

const assignBranches=async()=>{
    await GET_BRANCHES("1").then((response)=>{
        if (response.status==200)
        {
            setbranches(response.data);
            setbranches1(response.data); 
        }
    })
}

  const toggleDrop = () => {
    setDropOpen(!isDropOpen);
  };
  useEffect(()=>{
    assignBranches();

  },[])
  
const findAttendance=async()=>{
if (date!=null && branch!=""){
    await ADMIN_ATTENDANCE(branch,date,"1").then((response)=>{
        if (response.status==200){
          
            setresult1(response.data)
            console.log(response.data)

        }
    })
}
else{
    Error_light("select date or branch");
}
}

const findAttendancewithStudent=async()=>{
    if (date1!=null && branch1!=""&& std!=""){
        await ADMIN_ATTENDANCE(branch1,date1,std).then((response)=>{
            if (response.status==200){
                console.log(response.data)
                setresult2(response.data)
            }
        })
    }
    else{
        Error_light("select date or branch or student");
    }
}

  return (
<div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& <AdminSideNavBar  name={user_details.name} level="Coach" image_path={user_details.profile_image}/>}
        <div className="content">
        <AdminHeader onClickHandler={toggleDrop} name={user_details.name} total_events={"5"} image_path={user_details.profile_image}  />  
        <Loader show={isLoading} message="Loading..."/>          
        {!isLoading&& <div className='container-fluid    ml-auto mr-auto mt-4 ' style={{columnGap:"10px", rowGap:"10px"}} >
            <div className=' col-12 p-5 d-flex  'style={{backgroundColor:"#ECECEC", borderRadius:"6px", order:isMobileactive?"2":"1",columnGap:"10px"}}>
                <button className='btn btn-primary' onClick={()=>{setshowdiv1(false);setshowdiv(true)}}>Branch Students</button>        
                <button className='btn btn-primary' onClick={()=>{setshowdiv1(true);setshowdiv(false)}}>Specific Student</button>        
            </div> 
        </div>}
        {!isLoading&& showdiv &&<div className='container-fluid mt-1  ml-auto mr-auto mt-4 ' style={{columnGap:"10px", rowGap:"10px"}} >
            <div className=' col-12 p-5 'style={{backgroundColor:"#ECECEC", borderRadius:"6px", order:isMobileactive?"2":"1"}}>
                             
                <h3 style={{fontWeight:"bold"}}className='text-primary' ><FontAwesomeIcon icon={faSearch} style={{fontSize:"30px", paddingRight:"10px"}} className='text-primary' />Attendance</h3>
                <div className='d-flex flex-column flex-lg-row' style={{columnGap:"20px",rowGap:"10px"}}>
                    <input  onChange={(e)=> setdate(e.target.value)} type='date' className='col-lg-4 col-12  form-control' style={{backgroundColor:"#FFFFFF",border:"none",height:"40px"}}/>
                    <select onChange={(e)=>setbranch(e.target.value)} style={{backgroundColor:"#FFFFFF",border:"none",height:"40px"}}  className='col-lg-4 col-12  form-control'>
                        <option value={""}>Select Branch ...</option>
                        {branches.map(obj=><option value={obj.id}>{obj.name}</option>)}
                    </select>
                    <button className='col-lg-2 col-6 btn btn-primary' onClick={findAttendance}>Show</button>
                </div> 
            </div>
         
        </div>}
        {!isLoading&&showdiv1&&<div className='container-fluid  mt-1 ml-auto mr-auto mt-4 ' style={{columnGap:"10px", rowGap:"10px"}} >
            <div className=' col-12 p-5 'style={{backgroundColor:"#ECECEC", borderRadius:"6px", order:isMobileactive?"2":"1"}}>
                             
                <h3 style={{fontWeight:"bold"}}className='text-primary' ><FontAwesomeIcon icon={faSearch} style={{fontSize:"30px", paddingRight:"10px"}} className='text-primary' />Attendance</h3>
                <div className='d-flex flex-column flex-lg-row' style={{columnGap:"20px",rowGap:"10px"}}>
                    <input  onChange={(e)=> setdate1(e.target.value)} type='month' className='col-lg-2 col-12  form-control' style={{backgroundColor:"#FFFFFF",border:"none",height:"40px"}}/>
                    <select 
                    onChange={async(e)=>{setbranch1(e.target.value)
                        await PLAYER_LIST(e.target.value).then((response)=>{
                            if (response.status==200)
                            {
                               setstudents(response.data)
                            }
                            else{
                                setstudents([])
                            }
                        })
                     
                    }}
                     style={{backgroundColor:"#FFFFFF",border:"none",height:"40px"}}  className='col-lg-4 col-12  form-control'>
                        <option value={""}>Select Branch ...</option>
                        {branches1.map(obj=><option value={obj.id}>{obj.name}</option>)}
                    </select>
                    <select onChange={(e)=>setstd(e.target.value)} style={{backgroundColor:"#FFFFFF",border:"none",height:"40px"}}  className='col-lg-4 col-12  form-control'>
                        <option value={""}>Select Student ...</option>
                        {students.map(obj=><option value={obj.id}>{obj.username}</option>)}
                    </select>
                    <button className='col-lg-1 col-6 btn btn-primary' onClick={findAttendancewithStudent}>Show</button>
                </div> 
            </div>
         
        </div>}
        {!isLoading&&showdiv&&<div className='container-fluid  mt-1 ml-auto mr-auto mt-4 ' style={{columnGap:"10px", rowGap:"10px"}} >
        <div className=' col-12 p-5 'style={{backgroundColor:"#ECECEC", borderRadius:"6px"}}>
        <table>
            <tr>
                <th style={{fontSize:"25px",fontStyle:"italic"}}>Name</th>
                <th style={{fontSize:"25px",fontStyle:"italic"}}>Status</th>
            </tr>
            {result1.map((obj)=>(
            <tr>
                <td style={{ fontSize:"17px", color:"Black"}}>{obj.player.player_name}</td>
                <td style={{ fontSize:"17px", color: obj.status==true?"green":"red"}}>{obj.status==true?"Present":"Absent"}</td>
            </tr>))}
           
        </table>
        </div>

        </div>}
        {!isLoading&&showdiv1&&<div className='container-fluid  mt-1 ml-auto mr-auto mt-4  mb-5' style={{columnGap:"10px", rowGap:"10px"}} >
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

export default  AdminAttendance;