import React from 'react';
import call from "../../assets/img/call-icon.png"
import email from "../../assets/img/email-icon.png"
import location from "../../assets/img/location-icon.png"

const BranchMobileView=(prop)=> {
  return (
    <div className="container-fluid mt-5 mb-1">
      <div className="bg-dark col-11 container-fluid pb-3 pt-4">
        <div className="col-12 d-flex flex-column justify-content-evenly">
          <div className="w-100 mb-2">
            <h4 className="text-white text-center" style={{fontFamily:"Ethnocentric"}}>{prop.branch}</h4>
          </div>
          <div className="Call d-flex flex-column w-100 align-items-center mt-3">
            <img src={call} alt="Call Icon" style={{ height: '35px', width: '35px' }} />
            <p className="text-white px-3 py-2" style={{fontSize:"18px"}}>{prop.contact}</p>
          </div>
         
          <div className="email d-flex flex-column w-100 align-items-center mt-3">
            <img src={email} alt="Email Icon" style={{ height: '35px', width: '35px' }} />
            <p className="text-white w-100 py-2 px-3 text-center text-justify" style={{fontSize:"18px"}}>{prop.instructor}</p>
          </div>
          <div className="Address d-flex flex-column w-100 align-items-center mt-3">
            <img src={location} alt="Location Icon" style={{ height: '35px', width: '35px' }} />
            <p className="text-white w-100 px-3 py-2" style={{fontSize:"18px"}}>
                {prop.address}
             
            </p>
          </div>
         
        </div>
      </div>
      <iframe
        title="Google Map"
        frameborder="0"
        className="col-12"
        style={{ height: '250px', marginTop:"-4px" }}
        src={prop.location}
      ></iframe>
    </div>
  );
}

export default BranchMobileView;
