
import React, { Fragment } from "react";
import CoachHeaderOne from "../wrappers/coach_header/CoachHeaderOne";
import CoachFooterOne from "../wrappers/coach_footer/CoachFooterOne";


const CoachLayoutOne = (props) => {
  return (

    <Fragment>
      <div className="d-flex flex-column justify-content-between max-height">
        <CoachHeaderOne
        

        />
        {props.children}
        <CoachFooterOne
          backgroundColorClass="bg-black"
          spaceTopClass="pt-100"
          spaceBottomClass="pb-70"
        />
      </div>
    </Fragment>
  );
};




export default CoachLayoutOne;