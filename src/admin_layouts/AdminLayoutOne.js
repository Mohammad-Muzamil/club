
import React, { Fragment } from "react";
import AdminHeaderOne from "../wrappers/admin_header/AdminHeaderOne";
import AdminFooterOne from "../wrappers/admin_footer/AdminFooterOne";


const AdminLayoutOne = (props) => {
  return (

    <Fragment>
      <div className="d-flex flex-column justify-content-between max-height">
        <AdminHeaderOne
        

        />
        {props.children}
        <AdminFooterOne
          backgroundColorClass="bg-black"
          spaceTopClass="pt-100"
          spaceBottomClass="pb-70"
        />
      </div>
    </Fragment>
  );
};




export default AdminLayoutOne;