import React, { Fragment, useEffect, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import { Link, useNavigate } from "react-router-dom";
import { AllBrands } from "../../helpers/api";
import btnArrowLt from "../../assets/img/hero-btn-arrow-lt.svg";
import btnArrowGt from "../../assets/img/hero-btn-arrow-gt.svg";
import login from "../../assets/img/login.png"
import googleicon from "../../assets/img/googleicon.png"






const ForgetPassword = (props) => {
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
                    <h1>CHECK YOUR EMAIL</h1>
                <p className="text-center pt-2" style={{fontFamily:"Mont"}}></p>
                </div>
                <div className="w-100 mt-3">
                    <div className="input-container">
                        <h3>Email<span style={{color:"orange"}}>*</span></h3> 
                        <input type="email"/>
                        <p  style={{color:"orange"}}>Invalid Email</p>
                    </div>
                    <div className="input-container ">
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
              
            </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default ForgetPassword;





