import React, { Fragment, useEffect, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import { Link, useNavigate } from "react-router-dom";
import { AllBrands } from "../../helpers/api";
import btnArrowLt from "../../assets/img/hero-btn-arrow-lt.svg";
import btnArrowGt from "../../assets/img/hero-btn-arrow-gt.svg";
import login from "../../assets/img/login.png"
import googleicon from "../../assets/img/googleicon.png"
import { Success, Throw_Error } from "../../helpers/NotifiyToasters";
import { Forget_Password_OTP } from "../../helpers/api";
import { useDispatch } from "react-redux";
import {setOTPDATA} from "../../redux/actions/OTPActions"
import { HashLoader,RingLoader } from 'react-spinners';
import { useMediaQuery } from "react-responsive";
import { decrypt,encrypt } from '../../helpers/encryption_decrption';


const WebLoader=(prop)=>{
  const isMobilemodeActive = useMediaQuery({ maxWidth:767 });
  return(
    <div className="col-12 d-flex justify-content-center align-items-center flex-column">
      
      <RingLoader color="#FFFFFF"  className={`${isMobilemodeActive?"ml-2":"ml-0"}`} size={ isMobilemodeActive?50:100}/>
      <h4 className={`text-white mt-4 ${isMobilemodeActive?"ml-3":"ml-2"}`}>{prop.text}....</h4>

    </div>
  );
}

const ForgetPassword = (props) => {
  const dispatch=useDispatch();
  const nevigate=useNavigate();
  const [email,setemail]=useState("")
  const[username,setusername]=useState("")
  const[password,setpassword]=useState("")
  const [forget_portion,set_forget_portion]=useState(true);
  const [isLoading,setIsLoading]=useState(false)

  const changeHandlEmail=(event)=>{
    setemail(event.target.value);
  }
  const changeHandlUsername=(event)=>{
    setusername(event.target.value);
  }
  const changeHandlPassword=(event)=>{
    setpassword(event.target.value);
  }
  const  validatePassword = (password) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return pattern.test(password);
  };
  const validateEmail = (email) => {
    const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return pattern.test(email);
  };
  const SendOTP= async()=>{
    if(email=="" || username=="" )
    {
      Throw_Error("Enter Username or Email");
      return;
    }
    else if(!validatePassword(password)){
      Throw_Error("Invalid Password");
      return;
    }
    else if (!validateEmail(email)){
      Throw_Error("Invalid Email");
      return;
    }
    setIsLoading(true);
    await Forget_Password_OTP(username,email).then((response)=>{
      if(response.status==200){
        const data={
          email:email,
          username:username,
          otp:response.data.message,
          password:password,
        }
        sessionStorage.setItem('otp_data',encrypt(data));
        setIsLoading(false);
        Success("OTP Send to your mail.");
        nevigate("/otp");

      }
      else{
        Throw_Error("Try Again")
        setIsLoading(false);
      }
    });
  }
  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="BackgroundPicture pt-100 pb-100">

   
          <div className="container">
          {isLoading&&<WebLoader text="Sending "/>}

   
           
            {!isLoading &&<div className="row d-flex justify-content-center " >
          
            
            <div className="col-lg-6 col-12 col-md-6 login-container">
                <div className="w-100 mt-2 ">
                    <h1>FORGET PASSWORD</h1>
                <p className="text-center pt-2" style={{fontFamily:"Mont"}}></p>
                </div>
                <div className="w-100 mt-3">
                    <div className="input-container">
                        <h3>Email<span style={{color:"orange"}}>*</span></h3> 
                        <input type="email" onChange={changeHandlEmail} />
                    </div>
                    <div className="input-container">
                        <h3>Username<span style={{color:"orange"}}>*</span></h3> 
                        <input type="text" onChange={changeHandlUsername} style={{borderColor:"#ECEFF8"}} />
                    </div>
                    <div className="input-container">
                    
                        <h3>New Password<span style={{color:"orange"}}>*</span></h3> 
                        <p style={{color:"orange"}}>(password should contain 1 uppercase, 1 lowercase and 1 digit and minimum length is 8)</p>
                        <input type="password" onChange={changeHandlPassword} style={{borderColor:"#ECEFF8"}} />
                    </div>
                    <div className="input-container " >
                       <button className="col-12" onClick={SendOTP} >
                          <img src={btnArrowLt} />
                          <img src={btnArrowLt} />
                          <img src={btnArrowLt} />
                          &nbsp;Submit&nbsp;
                          <img src={btnArrowGt} />
                          <img src={btnArrowGt} />
                          <img src={btnArrowGt} />
                        </button>
                    </div>
                    
                </div>
              
            </div>
            </div>}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default ForgetPassword;





