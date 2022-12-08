import React, { Fragment} from "react";

import LayoutOne from "../../layouts/LayoutOne";
// import { connect } from "react-redux";
// import { setCatgories } from "../../redux/actions/categoryActions";

const Home = (props) => {

  console.log("hello")
  return (
    <Fragment>
    
    
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >

        <div className="d-flex flex-column align-items-center pb-70">
          <p className="Stisfaction-Gurrante text-center mb-0">
            Satisfaction Gurantee
          </p>

          <p className="description">
            PrintShop makes sure to quality assure every product that you
            purchase before dispatching it. PrintShop will notify you whenever
            the image uploaded from your side is not upto quality or cannot be
            translated into your selected print format. Please note that
            PrintShop will not reimburse outgoing or return shipping charges
            once the order has been dispatched unless the return is due to a
            defect in the quality of the product.
          </p>
        </div>
      </LayoutOne>

    </Fragment>
  );
};



export default Home;
