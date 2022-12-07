
import React, { Fragment } from "react";
import HeaderOne from "../wrappers/header/HeaderOne";
import FooterOne from "../wrappers/footer/FooterOne";


const LayoutOne = (props) => {
  return (

    <Fragment>
      <div className="d-flex flex-column justify-content-between max-height">
        <HeaderOne
        

        />
        {props.children}
        <FooterOne
          backgroundColorClass="bg-black"
          spaceTopClass="pt-100"
          spaceBottomClass="pb-70"
        />
      </div>
    </Fragment>
  );
};




export default LayoutOne;