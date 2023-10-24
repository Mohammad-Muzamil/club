import React, { useEffect } from 'react'
import TruncateText from '../../helpers/TruncatedText';
import { faBell,faBars,faAngleUp,faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import test_img from "../../assets/test_img.jpg"
import { useMediaQuery } from 'react-responsive';
import { UPCOMMING_EVENTS,LOGOUT } from '../../helpers/api';
const AdminHeader=(props)=> {

  const nevigate=useNavigate();
  const isMobilewidth = useMediaQuery({ maxWidth:767 });
  const [iconnam, seticonnam] = useState(faAngleDown);
  const [events,setevents]=useState(0)

  const seteventstotal=async()=>{
    await UPCOMMING_EVENTS().then((response)=>{
      if (response.status=200){
        setevents(response.data.length)
      }
      else{

      }
    })
  }
  useEffect(()=>{
    seteventstotal();
  },[])
    const { onClickHandler } = props;
  const [logOpen, setlogOpen] = useState(false);

  const LogoutPage=()=>{
    sessionStorage.removeItem('admin_token');
    sessionStorage.removeItem('admin_user');
  
    nevigate('/login');
  
  }
  const logoutDrop = () => {
    setlogOpen(!logOpen);
    if(logOpen){
      seticonnam(faAngleDown)
    }
    else{
      seticonnam(faAngleUp)

    }
  };
  return (
    <>
    <nav className="navbar navbar-expand  sticky-top px-4 py-0  ml-auto col-12" style={{ backgroundColor:"#ececec"}} >
                <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                    <h2 className="text-primary mb-0"><i className="fa fa-hashtag"></i></h2>
                </a>
                <a href="#" className="sidebar-toggler flex-shrink-0" onClick={onClickHandler}>
                    <FontAwesomeIcon icon={faBars} /> 
                    <i className="fa fa-bars"></i>
                </a>
                <div className="navbar-nav align-items-center ms-auto">
                    <div className="nav-item ">
                    <Link  className="nav-link"  >
                        <FontAwesomeIcon icon={faBell} style={{fontSize:"20px"}}  />
                        <span className="badge badge-dark " style={{borderRadius:"100%"}}>{events}</span>
                        <span className="d-none d-lg-inline-flex" style={{paddingLeft:"10px"}}>Events</span>
                    </Link>
                    </div>
                    <div className="nav-item" onClick={logoutDrop} >
                    <a href="#" className="nav-link" >
                        <img className="rounded-circle me-lg-2" src={ `//${window.location.host}/media/` +props.image_path} alt="" style={{ width: '40px', height: '40px' }} />
                        <span className="d-lg-inline-flex"> {TruncateText(props.name,8)} <FontAwesomeIcon icon={iconnam} style={{fontSize:"18px", paddingTop:"3px"}}/></span>
                    </a>
                    {logOpen&&<div className=" dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0 pb-2" style={{position:"absolute"}}>
                        <Link to="/admin-profile" className="dropdown-item" >My Profile</Link>
                        <p  className="dropdown-item" onClick={LogoutPage}>Log Out</p>
                    </div>}
                    </div>
                </div>
                </nav>
    </>
  )
}

export default AdminHeader;
