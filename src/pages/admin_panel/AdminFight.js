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
import { ADMIN_ATTENDANCE, ADMIN_Fight, ALL_ACCOUNTS, GET_BRANCHES, PLAYER_LIST, Reset_Password } from '../../helpers/api';
import AdminHeader from './AdminHeader';
import AdminSideNavBar from './AdminSideNavBar';
import { decrypt } from '../../helpers/encryption_decrption';


const AdminFight=()=> {
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
 const isAuthenticated= decrypt(sessionStorage.getItem('admin_token'));
 const user_details= decrypt(sessionStorage.getItem('admin_user'));
  const [showdiv,setshowdiv]=useState(true);
  const [showdiv1,setshowdiv1]=useState(false);
  const [result1,setresult1]=useState([])
  const [result2,setresult2]=useState([])
  useEffect(()=>{
    if (isAuthenticated == null || user_details == null || user_details.user.username[0].toLowerCase()!='a' ){
    
        nevigate('/login');
     }
     else{
       
     }
  },[]);

const stringBuilder=(s)=>{
    var temp="";
    for (var i=2;i< s.length-5;i++){
        temp+=s[i];
    }
    return temp;
}
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
if (branch!=null && branch!=""){
    await ADMIN_Fight(branch,"1").then((response)=>{
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
    setIsLoading(true);
    if ( branch1!=""&& std!=""){
        await ADMIN_Fight(branch1,std).then((response)=>{
            if (response.status==200){
            
                setresult2(response.data)
            }
        })
    }
    else{
        Error_light("select date or branch or student");
    }
    setIsLoading(false);

}

  return (
<div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& user_details!=null&& <AdminSideNavBar  name={user_details.name} level="Coach" image_path={user_details.profile_image}/>}
        <div className="content">
       {user_details!=null&& <AdminHeader onClickHandler={toggleDrop} name={user_details.name} total_events={"5"} image_path={user_details.profile_image}  />  }
        <Loader show={isLoading} message="Loading..."/>          
        {!isLoading&& <div className='container-fluid    ml-auto mr-auto mt-4 ' style={{columnGap:"10px", rowGap:"10px"}} >
            <div className=' col-12 p-5 d-flex  'style={{backgroundColor:"#ECECEC", borderRadius:"6px", order:isMobileactive?"2":"1",columnGap:"10px"}}>
                <button className='btn btn-primary' onClick={()=>{setshowdiv1(false);setshowdiv(true)}}>Branch Fights</button>        
                <button className='btn btn-primary' onClick={()=>{setshowdiv1(true);setshowdiv(false)}}>Specific Fights</button>        
            </div> 
        </div>}
        {!isLoading&& showdiv &&<div className='container-fluid mt-1  ml-auto mr-auto mt-4 ' style={{columnGap:"10px", rowGap:"10px"}} >
            <div className=' col-12 p-5 'style={{backgroundColor:"#ECECEC", borderRadius:"6px", order:isMobileactive?"2":"1"}}>
                             
                <h3 style={{fontWeight:"bold"}}className='text-primary' ><FontAwesomeIcon icon={faSearch} style={{fontSize:"30px", paddingRight:"10px"}} className='text-primary' />Fight Result</h3>
                <div className='d-flex flex-column flex-lg-row' style={{columnGap:"20px",rowGap:"10px"}}>
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
                             
                <h3 style={{fontWeight:"bold"}}className='text-primary' ><FontAwesomeIcon icon={faSearch} style={{fontSize:"30px", paddingRight:"10px"}} className='text-primary' />Fight Result</h3>
                <div className='d-flex flex-column flex-lg-row' style={{columnGap:"20px",rowGap:"10px"}}>
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
        <div className=' col-12 p-5 'style={{backgroundColor:"#ECECEC", borderRadius:"6px",overflowX:"scroll"}}>
        <table  className='w-100'>
            <tr>
                <th style={{fontSize:"25px",fontStyle:"italic"}}>Name</th>
                <th style={{fontSize:"25px",fontStyle:"italic"}}>&nbsp;Total&nbsp;Fight&nbsp;</th>
                <th style={{fontSize:"25px",fontStyle:"italic"}}>&nbsp;Fights&nbsp;Wins&nbsp;</th>
                <th style={{fontSize:"25px",fontStyle:"italic"}}>&nbsp;Total&nbsp;Kata&nbsp;</th>
                <th style={{fontSize:"25px",fontStyle:"italic"}}>&nbsp;Kata&nbsp;Wins&nbsp;</th>
                <th style={{fontSize:"25px",fontStyle:"italic"}}>&nbsp;Rating&nbsp;</th>
            </tr>
            {result1.map((obj)=>(
            <tr>
                <td style={{ fontSize:"17px", color:"Black"}}>{stringBuilder(obj.user.username)}</td>
                <td style={{ fontSize:"17px", color:"red"}}>{obj.total_fight}</td>
                <td style={{ fontSize:"17px", color:"green"}}>{obj.fight_wins}</td>
                <td style={{ fontSize:"17px", color:"red"}}>{obj.total_kata}</td>
                <td style={{ fontSize:"17px", color:"green"}}>{obj. kata_wins}</td>
                <td style={{ fontSize:"17px", color:"green"}}>{obj. rating}</td>
            </tr>))}
           
        </table>
        </div>

        </div>}
        {!isLoading&&showdiv1&&<div className='container-fluid  mt-1 ml-auto mr-auto mt-4  mb-5' style={{columnGap:"10px", rowGap:"10px"}} >
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
            {result2.map((obj)=>(
            <tr>
                <td style={{ fontSize:"17px", color:"Black"}}>{stringBuilder(obj.user.username)}</td>
                <td style={{ fontSize:"17px", color:"red"}}>{obj.total_fight}</td>
                <td style={{ fontSize:"17px", color:"green"}}>{obj.fight_wins}</td>
                <td style={{ fontSize:"17px", color:"red"}}>{obj.total_kata}</td>
                <td style={{ fontSize:"17px", color:"green"}}>{obj. kata_wins}</td>
                <td style={{ fontSize:"17px", color:"green"}}>{obj. rating}</td>
            </tr>))}
           
        </table>
        </div>

        </div>}

        
    </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  AdminFight;