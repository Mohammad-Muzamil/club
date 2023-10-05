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
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import TruncateText from '../../helpers/TruncatedText';
import { Success_light } from '../../helpers/NotifiyToasters';
import { useEffect } from 'react';

import Belts from '../../components/features_section/Belts';
import KarateCounting from "../../components/features_section/KarateCounting"
import Punches from '../../components/features_section/Punches';
import General from '../../components/features_section/General';
import Kicks from '../../components/features_section/KIcks';
import Stance from '../../components/features_section/Stance';
import Blocks from '../../components/features_section/Blocks';
import { useSelector } from 'react-redux';
import AdminHeader from './AdminHeader';
import AdminSideNavBar from './AdminSideNavBar';



const Kumite=()=> {
    const nevigate = useNavigate();
  const isAuthenticated= useSelector((state) => state.login)

  const user_details= useSelector((state) => state.user)
  useEffect(()=>{
    if (isAuthenticated === "" || user_details.user.username[0].toLowerCase()!='a'){
        nevigate('/login');
     }
     else{
     
     }
  },[]);

  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const [number,setnumber]=useState(1);

  const toggleDrop = () => {
    setDropOpen(!isDropOpen);
  };



  return (
<div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& <AdminSideNavBar  name={user_details.name} level="Coach" image_path={user_details.profile_image}/>}
        <div className="content">
        <AdminHeader onClickHandler={toggleDrop} name={user_details.name} total_events={"5"} image_path={user_details.profile_image}  />  
             <div className='w-100 d-flex mt-4 p-3 justify-content-center ' style={{backgroundColor:"#ECECEC",columnGap:"10px",flexWrap:"wrap"}}>
                <p className={` mt-2 text-center ${number==1?"search-value-active" :"search-value"}`} style={{fontSize:"18px"}}  onClick={()=>setnumber(1)} >ALL</p>
                <p className={` mt-2 text-center ${number==2?"search-value-active" :"search-value"}`} style={{fontSize:"18px"}}  onClick={()=>setnumber(2)} >BELTS</p>
                <p className={` mt-2 text-center ${number==3?"search-value-active" :"search-value"}`} style={{fontSize:"18px"}}  onClick={()=>setnumber(3)} >KASHAN</p>
                <p className={` mt-2 text-center ${number==4?"search-value-active" :"search-value"}`} style={{fontSize:"18px"}}  onClick={()=>setnumber(4)} >BLOCKS</p>
                <p className={` mt-2 text-center ${number==5?"search-value-active" :"search-value"}`} style={{fontSize:"18px"}}  onClick={()=>setnumber(5)} >KICKS</p>
                <p className={` mt-2 text-center ${number==6?"search-value-active" :"search-value"}`} style={{fontSize:"18px"}}  onClick={()=>setnumber(6)} >PUNCHES</p>
                <p className={` mt-2 text-center ${number==7?"search-value-active" :"search-value"}`} style={{fontSize:"18px"}}  onClick={()=>setnumber(7)} >GENERAL</p>
                
            </div>
            {number==1&&
            <div>
                <div className='w-100 mt-4 pl-lg-5 pr-lg-5 pb-3' style={{backgroundColor:"#ECECEC"}}>
                    <h1 className='pt-3 pl-3 text-primary'>BELTS</h1>
                    <Belts/>
                </div>
                <div className='w-100 mt-4 pl-lg-5 pr-lg-5 pb-3' style={{backgroundColor:"#ECECEC"}}>
                    <h1 className=' pl-3 pt-3  text-primary'>COUNTING</h1>
                    <KarateCounting/>
                </div>
                <div className='w-100 mt-4 pl-lg-5 pr-lg-5 pb-3' style={{backgroundColor:"#ECECEC"}}>
                    <h1 className='pt-3 text-primary'>BLOCKS</h1>
                    <Blocks/>
                </div>
                <div className='w-100 mt-4 pl-lg-5 pr-lg-5 pb-3' style={{backgroundColor:"#ECECEC"}}>
                    <h1 className=' pl-3 pt-3 text-primary'>KICKS</h1>
                    <Kicks/>
                </div>
                <div className='w-100 mt-4 pl-lg-5 pr-lg-5 pb-3' style={{backgroundColor:"#ECECEC"}}>
                    <h1 className=' pl-3 pt-3 text-primary'>PUNCHES</h1>
                    <Punches/>
                </div>
            
                <div className='w-100 mt-4 pl-lg-5 pr-lg-5 pb-3' style={{backgroundColor:"#ECECEC"}}>
                <h1 className=' pl-3 pt-3 text-primary'>GENERAL</h1>
                    <General/>
                </div>
            </div>}
            {number==2&&
            <div className='w-100 mt-4 pl-lg-5 pr-lg-5 pb-3' style={{backgroundColor:"#ECECEC"}}>
              <h1 className='pt-3 pl-3 text-primary'>BELTS</h1>
              <Belts/>
            </div>
            }
            {number==3&&
            <div className='w-100 mt-4 pl-lg-5 pr-lg-5 pb-3' style={{backgroundColor:"#ECECEC"}}>
                <h1 className=' pl-3 pt-3  text-primary'>COUNTING</h1>
                <KarateCounting/>
            </div>
            }
            {number==4&&
            <div className='w-100 mt-4 pl-lg-5 pr-lg-5 pb-3' style={{backgroundColor:"#ECECEC"}}>
                <h1 className='pt-3 text-primary'>BLOCKS</h1>
                <Blocks/>
             </div>
            }
            {number==5&&
            <div className='w-100 mt-4 pl-lg-5 pr-lg-5 pb-3' style={{backgroundColor:"#ECECEC"}}>
                <h1 className=' pl-3 pt-3 text-primary'>KICKS</h1>
                <Kicks/>
            </div>
            }
            {number==6&&
            <div className='w-100 mt-4 pl-lg-5 pr-lg-5 pb-3' style={{backgroundColor:"#ECECEC"}}>
                <h1 className=' pl-3 pt-3 text-primary'>PUNCHES</h1>
                <Punches/>
            </div>
            }
            {number==7&&
            <div className='w-100 mt-4 pl-lg-5 pr-lg-5 pb-3' style={{backgroundColor:"#ECECEC"}}>
             <h1 className=' pl-3 pt-3 text-primary'>GENERAL</h1>
                 <General/>
            </div>
            }
     
        
        </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  Kumite;