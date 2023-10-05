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
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import TruncateText from '../../helpers/TruncatedText';
import { Success_light } from '../../helpers/NotifiyToasters';
import { useEffect } from 'react';

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Error_light } from '../../helpers/NotifiyToasters';
import { useSelector } from 'react-redux';
import { ALL_ACCOUNTS, PLAYER_ACCOUNTS,PLAYER_ACCOUNTS_DELETION } from '../../helpers/api';
import Loader from '../../components/Loader/Loader';
import AdminHeader from './AdminHeader';
import AdminSideNavBar from './AdminSideNavBar';


const DeletionRow=(prop)=>{
    const functtorenew=prop.callback;
    const deleteStudent= async()=>{
        // call the api for soft deletion of student 
        await PLAYER_ACCOUNTS_DELETION(prop.branch,prop.id).then((response)=>{
            if(response.status==200)
            {
                functtorenew(response.data);
                Success_light("Student Deleted Successfully ")
            }
            else{
                Error_light("Try Again")
            }
        });
    }
    return(
        <div className='w-100 d-flex mb-3' style={{boxShadow:"1px 1px 1px 1px gray", borderRadius:"7px"}}>
        <div className='img p-3 bg-dark' style={{ borderBottomLeftRadius:"7px",borderTopLeftRadius:"7px"}}>
            <img src={ `//${window.location.host}/media/` +prop.image} style={{borderRadius:"50%", height:"100px", width:"100px", border:"7px solid #D8D5D5"}}/>
        </div>
        <div className='d-lg-flex p-3 justify-content-around w-100'> 
            <div className='w-100'>
                <h3 className='text-bold' style={{fontWeight:"1000px"}} >{prop.name}</h3>
                <p style={{marginTop:"0px",color:"gray"}}>{prop.username}</p>
                <p style={{marginTop:"-10px",color:"gray"}}>{prop.contact}</p>
            </div>
            <div className='d-flex justify-content-end mt-2'>
                <button className='btn btn-danger mt-lg-4' style={{height:"40px"}} onClick={deleteStudent}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </div>
    </div>
    )
}

const AdminDeletePlayerAccount=()=> { 
    const nevigate = useNavigate();
  const isAuthenticated= useSelector((state) => state.login)
  const user_details= useSelector((state) => state.user)
  const branch_details= useSelector((state) => state.branch)
  const [isLoading,setIsLoading]=useState(false)

  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const [name, setname]=useState("");
  const [querydata, setquerydata]=useState([]);
  const [players,setplayers]=useState([])
  const [listofplayers,setlistofplayers]=useState([])
  const populate_data=async()=>{
    setIsLoading(true);
    try {
      const response = await ALL_ACCOUNTS("player");
      if (response.status === 200) {
        setplayers(response.data);
        setlistofplayers(response.data);
        setIsLoading(false);
      }
       else {
        setIsLoading(false);
      }
    } catch (error) {

      setIsLoading(false);
      console.error('Error fetching player attendance list:', error);
    }
  }
  useEffect(()=>{
    if (isAuthenticated === "" || user_details.user.username[0].toLowerCase()!='a'){
        nevigate('/login');
     }
     else{
        populate_data();
     }
  },[]);

  const handleSarchBar=()=>{
    if (name=="")
    {   setlistofplayers(players);
        return;
    }
    let dummy=[];
    players.map(obj=>{
        if (obj.player_name.toLowerCase().includes(name.toLowerCase()))
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

  const renew_data=(listplayers)=>{
    setplayers(listplayers);
    setlistofplayers(listplayers);
  }


  return (
<div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& <AdminSideNavBar name={user_details.name} level="Coach" image_path={user_details.profile_image}/>}
        <div className="content">
        <AdminHeader onClickHandler={toggleDrop} name={user_details.name} total_events={"5"} image_path={user_details.profile_image}  />  
        <div className='w-100 mt-4 d-flex p-3' style={{columnGap:"10px" ,backgroundColor:"#ECECEC", borderRadius:"7px"}}>
                <input type='text' className='form-control col-lg-5 col-xl-5 col-md-5 col-8'  style={{height:"45px"}} onChange={onHandleChange} placeholder='Enter Player Name....'/>
                <button className='btn btn-primary mt-2' style={{width:"120px", height:"45px"}} onClick={handleSarchBar} ><FontAwesomeIcon icon={faSearch} style={{paddingRight:"5px"}}/>Search</button>
            </div>
            {!isLoading&&<div className='w-100 mt-2 p-3' style={{height:"300px"}}>
                {listofplayers.map(std=>(
                    <DeletionRow branch={branch_details.id} name={std.player_name} username={std.user.username} image={std.profile_image} id={std.user.id} contact={std.player_contact_no} callback={renew_data} />
                ))}
                
            </div>}
        </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  AdminDeletePlayerAccount;