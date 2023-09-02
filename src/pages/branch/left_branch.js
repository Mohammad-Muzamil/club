import React from 'react';
import call from "../../assets/img/call-icon.png"
import email from "../../assets/img/email-icon.png"
import location from "../../assets/img/location-icon.png"
import { useMediaQuery } from 'react-responsive';
import MObileView from "./mobile_view"

const LeftBranchView = (prop) => {
  const isMobileModeOn = useMediaQuery({ maxWidth: 767 });

  if (!isMobileModeOn) {
    return (
      <div style={{ marginTop: '10px' }}>
        <div className="container-fluid px-0" style={{ height: '500px', display: 'flex', alignItems: 'center' }}>
          <div className="col-8 bg-dark d-flex align-items-center" style={{ height: '320px', float: 'right' }}>
            <div className="col-9 d-flex flex-column justify-content-evenly " style={{ height: '320px' }}>
              <div className="w-100 mx-4 mb-2 mt-4">
                <p className="text-white text-center" style={{ fontFamily: "Ethnocentric", fontSize: "23px" }}>{prop.branch}</p>
              </div>
              <div className="Call d-flex w-100 mx-4 mt-3">
                <img src={call} style={{ height: '30px', width: '30px' }} alt="Call Icon" />
                <p className="text-white mx-4 pt-1" style={{ fontSize: "18px" }}>{prop.contact}</p>
              </div>
              <div className="Email d-flex w-100 mx-4 mt-4">
                <img src={email} style={{ height: '30px', width: '30px' }} alt="Email Icon" />
                <p className="text-white mx-4 pt-1" style={{ fontSize: "18px" }}>{prop.instructor}</p>
              </div>
              <div className="Address d-flex w-100 mx-4 mt-4">
                <img src={location} style={{ height: '30px', width: '30px' }} alt="Location Icon" />
                <p className="text-white mx-4 w-75 pt-1" style={{ fontSize: "18px" }}>
                {prop.address}
                </p>
              </div>
            </div>
          </div>
          <iframe
            title="Google Map"
            frameborder="0"
            className="parallelogram-desktop col-4"
            style={{
              marginLeft: '-10%',
              height: '400px',

              position: 'relative',
              transform: 'skew(-15deg)',
              transformOrigin: 'left',
            }}
            src={prop.location}
            ></iframe>
        </div>
      </div>
    );
  }
  else{
    return (<MObileView  branch={prop.branch} location={prop.location} instructor={prop.instructor} address={prop.address} contact={prop.contact} />);
  }

 
}

export default LeftBranchView;

