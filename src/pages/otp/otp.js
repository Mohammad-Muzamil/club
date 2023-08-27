import React, { Fragment, useRef, useEffect, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import btnArrowLt from "../../assets/img/hero-btn-arrow-lt.svg";
import btnArrowGt from "../../assets/img/hero-btn-arrow-gt.svg";
import otp from "../../assets/img/otp.jpg";

const OTP = (props) => {
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(10);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
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
  }, [isTimerRunning]);

  const handleInputChange = (index, value) => {
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    } else if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResendOTP = () => {
    setTimer(10);
    setIsTimerRunning(true);
    inputRefs.current[0].focus();
    inputRefs.current.forEach((ref, index) => {
              ref.value = "";
              ref.disabled = true; // Disable all fields initially
              if (index === 0) {
                ref.disabled = false; // Enable the first field
              }
            });
  };

  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="BackgroundPicture pt-100 pb-100">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 col-12 col-md-6 login-container2">
                <div className="w-100 mt-2">
                  <h1>VERIFY OTP </h1>
                  <p className="text-center pt-2" style={{ fontFamily: "Mont" }}>
                    We have sent an OTP to ****@*****.com{" "}
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <img
                    src={otp}
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
                    <button className="col-12" disabled={!isTimerRunning}>
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
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default OTP;
