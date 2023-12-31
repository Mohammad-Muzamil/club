import React, { Fragment, useRef, useEffect, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import btnArrowLt from "../../assets/img/hero-btn-arrow-lt.svg";
import btnArrowGt from "../../assets/img/hero-btn-arrow-gt.svg";
import otp_image from "../../assets/img/otp.jpg";
import { Success, Success_light, Throw_Error } from "../../helpers/NotifiyToasters";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setOTPDATA } from "../../redux/actions/OTPActions";
import { Reset_Password,Forget_Password_OTP } from "../../helpers/api";
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
const OTP = (props) => {
  
  const navigate=useNavigate();
  const otp_data= decrypt(sessionStorage.getItem('otp_data'));
  const [hasotp,sethasotp]=useState("");
  
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(60);
  const [inputValue,setInputValue]=useState("");
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [isLoading,setIsLoading]=useState(false)
  const dispatch=useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }

    if (isTimerRunning) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            setIsTimerRunning(false);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
    if(otp_data !=null && "otp" in otp_data){
      sethasotp(otp_data.otp);
    }
    else{
      navigate("/login")
    }
  }, [isTimerRunning]);

  const handleInputChange = (index, value) => {
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    } else if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResendOTP = async() => {
    setTimer(60);
    setIsTimerRunning(true);
    inputRefs.current[0].focus();
    inputRefs.current.forEach((ref, index) => {
              ref.value = "";
              ref.disabled = true;
              if (index === 0) {
                ref.disabled = false;
              }
            });
    await Forget_Password_OTP(otp_data.username,otp_data.email).then((response)=>{
      setIsLoading(true);
      if(response.status==200){
        const data={
          email:otp_data.email,
          username:otp_data.username,
          otp:response.data.message,
          password:otp_data.password,
        }
        sessionStorage.setItem('otp_data',encrypt(data));
        sethasotp(response.data.message);
        setIsLoading(false);
      }
      else{
        Throw_Error("Try Again")
        setIsLoading(false);
      }
    });
  };
  const VerifyOTP=async()=>{
  let inputValuesss = "";
  inputRefs.current.forEach((ref,index) => {
    inputValuesss+= (ref.value).toString();
  });

    if(inputValuesss==hasotp){
      const passwrd=otp_data.password;
      await Reset_Password(otp_data.username,otp_data.email,passwrd).then((response)=>{
        setIsLoading(true);
        if(response.status==200)
        {
          // dispatch(setOTPDATA({}));
          sessionStorage.removeItem('otp_data');
          setIsLoading(false);
          Success("Password Reset Successfully")
          navigate("/login");
        }else{
        setIsLoading(false);
        }
      });
    }
    else{
      Throw_Error("Try Again")
    }
  }

  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="BackgroundPicture pt-20 pb-100">
          <div className="container">
          {isLoading&&<WebLoader text="Sending "/>}
            {!isLoading&&<div className="row d-flex justify-content-center">
              <div className="col-lg-6 col-12 col-md-6 login-container2">
                <div className="w-100 mt-2">
                  <h1>VERIFY OTP </h1>
                  <p className="text-center pt-2" style={{ fontFamily: "Mont" }}>
                    We have sent an OTP to ****@*****.com{" "}
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <img
                    src={otp_image}
                    style={{ height: "200px", width: "300px" }}
                    alt="OTP"
                  />
                </div>
                <div
                  className="w-100 d-flex mt-2 justify-content-center"
                  style={{ columnGap: "10px" }}
                >
                  {Array.from({ length: 6 }, (_, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      className="otp-field"
                      maxLength={1}
                      minLength={1}
                      onInput={(e) => handleInputChange(index, e.target.value)}
                      disabled={!isTimerRunning}
                    />
                  ))}
                </div>
                <div className="w-100 mt-3 d-flex justify-content-center">
                    {isTimerRunning ? (
                      <p style={{ fontSize:"20px", font:"mont"}}>Time remaining: <span style={{color:"red", fontSize:"20px"}}>{timer} seconds</span></p>
                    ) : (
                      <p style={{fontSize:"20px" , font:"Mont",fontStyle:"italic"}}>
                        Time's up!{" "}
                        <span style={{color:"red"}} onClick={handleResendOTP} className="resend-code">Resend OTP?</span>
                      </p>
                    )}
                  </div>
                <div className="w-100 mt-3">
                  <div className="input-container">
                    <button className="col-12" disabled={!isTimerRunning} onClick={VerifyOTP} >
                      <img src={btnArrowLt} alt="Left Arrow" />
                      <img src={btnArrowLt} alt="Left Arrow" />
                      <img src={btnArrowLt} alt="Left Arrow" />
                      &nbsp;VERIFY&nbsp;
                      <img src={btnArrowGt} alt="Right Arrow" />
                      <img src={btnArrowGt} alt="Right Arrow" />
                      <img src={btnArrowGt} alt="Right Arrow" />
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

export default OTP;

