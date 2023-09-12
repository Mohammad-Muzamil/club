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


const ForgetPassword = (props) => {
  const dispatch=useDispatch();
  const nevigate=useNavigate();
  const [email,setemail]=useState("")
  const[username,setusername]=useState("")
  const[password,setpassword]=useState("Ha3k5rrr")
  const [forget_portion,set_forget_portion]=useState(true);

  const changeHandlEmail=(event)=>{
    setemail(event.target.value);
  }
  const changeHandlUsername=(event)=>{
    setusername(event.target.value);
  }

  const SendOTP= async()=>{
    if(email=="" || username=="")
    {
      Throw_Error("Enter Username or Email");
      return;
    }
    await Forget_Password_OTP(username,email).then((response)=>{
      if(response.status==200){
        const data={
          email:email,
          username:username,
          otp:response.data.message,
          password:password,
        }
        dispatch(setOTPDATA(data));
        nevigate("/otp");
        Success("OTP Send to your mail.");

      }
      else{
        Throw_Error("Try Again")
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
            {/* <p className="page-info-text pb-100 ">LOGIN</p> */}
           
            <div className="row d-flex justify-content-center " >
            
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
                        <input type="text" onChange={changeHandlUsername} />
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
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default ForgetPassword;





