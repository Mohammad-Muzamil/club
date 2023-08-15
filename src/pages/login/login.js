import React, { Fragment, useEffect, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Yeezy from "../../assets/img/shoes/yeezy.png";
import product1 from "../../assets/img/shoes/product1.png";
import { Link, useNavigate } from "react-router-dom";
import { AllBrands } from "../../helpers/api";
import btnArrowLt from "../../assets/img/hero-btn-arrow-lt.svg";
import btnArrowGt from "../../assets/img/hero-btn-arrow-gt.svg";
import login from "../../assets/img/login.png"
import googleicon from "../../assets/img/googleicon.png"






const Login = (props) => {
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
            
            <div className="col-lg-6 col-12 col-md-6 login-container1">
                <div className="w-100 ">
                    <h1>LOGIN</h1>
                <p className="text-center pt-2">Welcome back! Please enter your details</p>
                </div>
                <div className="d-flex justify-content-center mt-2">
                    <img src={login} style={{height:'100px', width:'100px'}}/>
                </div>
                <div className="w-100 mt-2">
                    <div className="input-container1">
                        <h3>Email<span style={{color:"orange"}}>*</span></h3> 
                        <input type="email"/>
                        <p  style={{color:"orange"}}>Invalid Email</p>
                    </div>
                    <div className="input-container1">
                        <h3>Password<span style={{color:"orange"}}>*</span></h3> 
                        <input type="email"/>
                        <p  style={{color:"orange"}}>Invalid Password</p>
                    </div>
                    <div className="input-container1 d-flex w-100" style={{justifyContent:'flex-end'}}>
                        <span> Forget Password</span>
                    </div>
                    <div className="input-container1 ">
                       <button className="col-12" >
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
                <div className=" or-container1">
                    <div>-------------</div>
                    <div>&nbsp;&nbsp;OR&nbsp;&nbsp;</div>
                    <div>-------------</div>
                </div>
                <div className="p-3">
                    <button className="col-12 new-btn mt-2"  >
                        &nbsp;&nbsp;SIGN IN With &nbsp;
                            <img src={googleicon} style={{height:"25px",width:"25px"}}/>
                    
                    </button>
                </div>
                <div className=" d-flex justify-content-center" style={{marginTop:"-20px"}}>
                    <p>Don't have account? <span style={{fontFamily:'Ethnocentric'}}> SIGN UP</span></p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Login;





