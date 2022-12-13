import React, { Fragment } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Shoes from "../../assets/img/shoes/shoes.png";
import yellowstar from "../../assets/img/icons/yellowstar.png";
import star from "../../assets/img/icons/star.png";
import righarrow from "../../assets/img/icons/rightarrow.png";
import NikeLogo from "../../assets/img/logo/nike.png";
import HomeIcon from "../../assets/img/icons/home.png";
import RightarrowWhite from "../../assets/img/icons/rightarrowwhite.png"
import HeaderTwo from "../../wrappers/header/HeaderTwo";
const BrandProducts = (props) => {
  console.log(window.location.pathname)
  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="BackgroundPicture pt-100 pb-100">
          <div className="container">
            
              {window.location.pathname === "/brands-products" ? (
                <div className="brand-logo pb-80">
                   <img className="logo" src={NikeLogo} />
                 </div> 
               
              ) : (
                <HeaderTwo 
                brand={"Nike"}
                name={"Adidas Falcon Shoes "}
                center={true}/>
              )}
          

            <div className="row">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
                <div className="col-xl-4 col-lg-4 col-6 p-3">
                  <div className="ItemView">
                    <img className="item-image" src={Shoes} />
                    <div className="item-description">
                      <div className="item-rating-view">
                        <img className="star" src={yellowstar} />
                        <img className="star" src={yellowstar} />
                        <img className="star" src={yellowstar} />
                        <img className="star" src={yellowstar} />
                        <img className="star" src={star} />
                      </div>
                      <p className="item-info">
                        Adidas Falcon Shoes for men - 2021 Edition
                      </p>
                      <div className="price-view">
                        <p className="price-text">$120.50</p>
                        <img className="right-arrow" src={righarrow} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default BrandProducts;
