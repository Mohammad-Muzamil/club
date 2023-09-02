import React from 'react';
import call from "../../assets/img/call-icon.png"
import email from "../../assets/img/email-icon.png"
import location from "../../assets/img/location-icon.png"
import { useMediaQuery } from 'react-responsive';
import MObileView from "./mobile_view"

function RightBranch(prop) {
  const isMobileMode = useMediaQuery({ maxWidth: 767 });
  if (!isMobileMode) {
  return (
    <div style={{ marginTop: '10px' }}>
      <div className="container-fluid px-0" style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
        <iframe
          title="Google Map"
          frameborder="0"
          className=" col-4"
          style={{
            height: '400px',
            marginRight:"-10%",
            // position: 'relative',
            transform: 'skew(15deg)',
            transformOrigin: 'right',
            zIndex:"3"
            
          }}
          src={prop.location}
        ></iframe>
        <div className="col-8 bg-dark d-flex align-items-center justify-content-end" style={{ height: '320px',zIndex:"2" }}>
          <div className="col-9 d-flex flex-column justify-content-evenly " style={{ height: '320px'}}>
            <div className="w-100 mx-4 mb-2 mt-4">
              <p className="text-white text-center" style={{ fontFamily: "Ethnocentric", fontSize: "23px" }}>{prop.branch}</p>
            </div>
            <div className="Call d-flex px-4 w-100 mt-3">
              <img src={call} alt="Call Icon" style={{ height: '35px', width: '35px' }} />
              <p className="text-white mx-4 pt-1" style={{ fontSize: "18px" }}>{prop.contact}</p>
            </div>
            <div className="Email d-flex px-4 w-100 mt-4">
              <img src={email} alt="Email Icon" style={{ height: '35px', width: '35px' }} />
              <p className="text-white mx-4 pt-1" style={{ fontSize: "18px" }}>{prop.instructor}</p>
            </div>
            <div className="Address d-flex px-4 w-100 mt-4">
              <img src={location} alt="Location Icon" style={{ height: '35px', width: '35px' }} />
              <p className="text-white mx-4 pt-1 w-75" style={{ fontSize: "18px" }}>
                {prop.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}else{
    return (<MObileView  branch={prop.branch} location={prop.location} instructor={prop.instructor} address={prop.address} contact={prop.contact} />);
}

}

export default RightBranch;
