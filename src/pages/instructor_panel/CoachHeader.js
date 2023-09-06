import React from 'react'
import TruncateText from '../../helpers/TruncatedText';
import { faBell,faBars,faAngleUp,faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import test_img from "../../assets/test_img.jpg"
import { useMediaQuery } from 'react-responsive';

const CoachHeader=(props)=> {
  const isMobilewidth = useMediaQuery({ maxWidth:767 });
    const { onClickHandler } = props;
  const [logOpen, setlogOpen] = useState(false);

  const logoutDrop = () => {
    setlogOpen(!logOpen);
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
                    <a href="#" className="nav-link"  >
                        <FontAwesomeIcon icon={faBell} style={{fontSize:"20px"}}  />
                        <span class="badge badge-dark " style={{borderRadius:"100%"}}>14</span>
                        <span className="d-none d-lg-inline-flex" style={{paddingLeft:"10px"}}>Events</span>
                    </a>
                    </div>
                    <div className="nav-item" onClick={logoutDrop} >
                    <a href="#" className="nav-link" >
                        <img className="rounded-circle me-lg-2" src={test_img} alt="" style={{ width: '40px', height: '40px' }} />
                        <span className="d-lg-inline-flex"> {TruncateText("MuhammadMuzamil",8)}</span>
                    </a>
                    {logOpen&&<div className=" dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0 pb-2" style={{position:"absolute"}}>
                        <Link to="#" className="dropdown-item">My Profile</Link>
                        <Link to="#" className="dropdown-item">Log Out</Link>
                    </div>}
                    </div>
                </div>
                </nav>
    </>
  )
}

export default CoachHeader;
