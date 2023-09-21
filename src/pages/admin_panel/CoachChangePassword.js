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
import CoachSideNavBar from "./CoachSideNavBar";
import TruncateText from '../../helpers/TruncatedText';
import { Success_light } from '../../helpers/NotifiyToasters';
import { useEffect } from 'react';
import CoachHeader from './CoachHeader';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Error_light } from '../../helpers/NotifiyToasters';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { Reset_Password } from '../../helpers/api';

const CoachChangePassword=()=> {
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
  const [isLoading,setIsLoading]=useState(false)
  const [typepassword, settypepassword]=useState("password")
  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const toggleDrop = () => {
    setDropOpen(!isDropOpen);
  };
  const handleType = () => {
    if(typepassword=="password"){
        settypepassword("text")
    }
    else{
        settypepassword("password")
    }
  };
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const clearAll=()=>{
    setConfirmPassword("");
    setPassword("");
  }

  const handleResetClick = async () => {
    if (password ==""){
        setPasswordIsValid(false);
    }
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const isLengthValid = password.length >= 8;
    const passwordsMatch = password === confirmPassword;
    const isValid = hasUppercase && hasLowercase && hasDigit && isLengthValid && passwordsMatch;
    setPasswordIsValid(false);
    if (!isValid || password==="") {
        Error_light("Please read the Instructions");
        setPassword("");
        setConfirmPassword("");
       
    } else {
        setIsLoading(true);
        await Reset_Password(user_details.user.username,user_details.user.email,password).then((response)=>{
            if(response.status==200){
                Success_light("Password Reset Successfully");
                clearAll();
                setPasswordIsValid(true);
                setIsLoading(false);
            }
            else{
                setIsLoading(false);
            }
            
    })
        
    }
}


  return (
<div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& <CoachSideNavBar name="Muhammad Muzamil" level="National"/>}
        <div className="content">
        <CoachHeader onClickHandler={toggleDrop} name={user_details.name} total_events={"5"} image_path={user_details.profile_image}  />  
        <Loader show={isLoading} message="Loading..."/>          
        {!isLoading&&<div className='container-fluid   ml-auto mr-auto mt-4 d-flex flex-column flex-lg-row flex-xl-row' style={{columnGap:"10px", rowGap:"10px"}} >
            <div className='col-lg-6 col-xl-6 col-12 p-5 'style={{backgroundColor:"#ECECEC", borderRadius:"6px", order:isMobileactive?"2":"1"}}>
                             
                <h3 style={{fontWeight:"bold"}}className='text-primary' ><FontAwesomeIcon icon={faKey} style={{fontSize:"30px", paddingRight:"10px"}} className='text-primary' />Change Password</h3>
                <div class="form-floating mb-3 mt-4">
                    <input type={typepassword}  id="floatingInput"
                    className={`form-control ${!passwordIsValid ? 'is-invalid' : ''}`}
                  
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                    <label for="floatingInput">Password</label>
                </div>

                <div class="form-floating mb-3 mt-1 ">
                    <input type={typepassword}   id="floatingInput"
                    className={`form-control ${!passwordIsValid ? 'is-invalid' : ''}`}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}/>                    
                    <label for="floatingInput">Confirm Password</label>
                    
                </div>
                <div className='d-flex justify-content-end' style={{marginTop:"-5px"}}>
                    <label style={{width:"121px"}}  >Show Password</label>
                    <input type='checkBox' style={{height:"20px",width:"20px", marginTop:isMobileactive?"2px":"0px" }} onClick={handleType}/>
                </div>

                <div class="form-floating mb-3 mt-1 d-flex justify-content-end">
                    <button type="button" class="btn m-2 btn-danger" style={{width:"120px"}} onClick={ clearAll} >Clear</button>
                    <button type="button" class="btn btn-md btn-primary m-2"style={{width:"120px"}} onClick={handleResetClick}>Reset</button>
                </div>
            </div>
            <div className='col-lg-6 col-xl-6 col-12 p-5'style={{ backgroundColor:"#ECECEC",borderRadius:"6px", order:isMobileactive?"1":"2"}}>
                <div className="">
                        <h3 className="mb-0 text-danger" style={{fontWeight:"bold"}}>Instructions</h3>
                </div>
                    <div className="card-body p-3">
                        <p style={{color:"gray", fontSize:"16px"}}>Your password should meet the following requirements.</p>
                        <ul style={{listStyleType:"square"}}>
                            <li>An English uppercase character (A-Z)</li>
                            <li>An English lowercase character (a-z)</li>
                            <li>A number (0-9) and/or symbol (such as !, #, or %)</li>
                            <li>Eight or more characters total.</li>
                        </ul>
                    </div>
            </div>
        </div>}
        
    </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  CoachChangePassword;