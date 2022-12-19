import React, { Fragment, useEffect, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Yeezy from "../../assets/img/shoes/yeezy.png";
import { Link } from "react-router-dom";
import {AllBrands} from "../../helpers/api";


const Brands = (props) => {

  const BrandData = async ()=>{
    await AllBrands().then(response =>{
      console.log(response);
    });
  }

  useEffect(()=>{
      // BrandData();
  },[])



  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="BackgroundPicture pt-100 pb-100">
          <div className="container">
            <p className="page-info-text pb-100 ">Brands</p>
            <div className="row">
              {[1, 2, 3, 4, 5, 6].map((val) => (

                  <div className="col-xl-4 col-lg-4 col-6 mb-1 p-1">
                       <Link to={process.env.PUBLIC_URL + "/brands-products"}>
                    <img className="brandLogo" src={Yeezy} />
                    </Link>
                  </div>
             
              ))}
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Brands;
