import React, { Fragment, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import HeaderTwo from "../../wrappers/header/HeaderTwo";
import Shoe from "../../assets/img/shoes/product1.png";
import CartIcon from "../../assets/img/icons/shipping-cart.png"
import Cross from "../../assets/img/icons/cross.png"
import Proceedpayment from "../../assets/img/buttons/proceedpayment.png"

const CheckOut = (props) => {

 
    return (
        <Fragment>
            <LayoutOne
                headerContainerClass="container-fluid"
                headerPaddingClass="header-padding-2"
            >
                <div className="BackgroundPicture pt-100 pb-100">
                    <div className="container">
                        <HeaderTwo
                        brand={"My Cart"}
                        name={"Checkout"}
                        />
                    <p className="checkout-text pb-100">Checkout</p>

                    <div className="row m-0 justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <div className="orange-background round">
                                <p>1</p>
                            </div>
                            <div className="orange-text text">
                            Shipping Address
                            </div>

                        </div>

                        <div className="d-flex flex-row align-items-center">
                            <div className="grey-background round">
                                <p>2</p>
                            </div>
                            <div className="grey-text text">
                            Payment Details
                            </div>

                        </div>
                    </div>

                    <div className="seperator pt-30"/>
                    <div className="row m-0">
                    <div
                    className="Address-Area col-xl-8 col-lg-8 col-md-12 col-sm-12"
                    >
                        <div className="input-area row m-0 justify-content-between">
                            <div className="single-input col-lg-5 col-md-12 col-sm-12">

                                <p>Name</p>
                                <input/>
                            </div>

                            <div className="single-input col-lg-5 col-md-12 col-sm-12">

                                <p>E-Mail</p>
                                <input/>
                            </div>
                        </div>
                        
                        <div className="input-area row m-0 justify-content-between">
                            <div className="single-input col-lg-5 col-md-12 col-sm-12">

                                <p>Phone Number</p>
                                <input/>
                            </div>

                            <div className="single-input col-lg-5 col-md-12 col-sm-12">

                                <p>Fax Number</p>
                                <input/>
                            </div>
                        </div>


                        <div className="input-area row m-0 justify-content-between">
                            <div className="single-input col-lg-5 col-md-12 col-sm-12">

                                <p>State</p>
                                <input/>
                            </div>

                            <div className="single-input col-lg-5 col-md-12 col-sm-12">

                                <p>Postel code</p>
                                <input/>
                            </div>
                        </div>

                   

                        <div className="input-area">
                            <div className="single-input col-lg-12 col-md-12 col-sm-12">
                                <div className="row justify-content-between m-0">
                                <p>Shipping address</p>
                                <p className="underline">Saved Addresses</p>
                                </div>
                           
                                <textarea
                            
                                />
                                
                            </div>

                     
                        </div>
                        

                    </div>

                    <div
                     className="Cart-Items col-xl-4 col-lg-4 col-md-12 col-sm-12"
                    >
                        <div className="row m-0">
                            <p className="my-cart">My cart</p>
                            <p className="total-items">(3 Items)</p>
                        </div>    
                        <div className="seperator  pt-20 mb-50"/>

                        <div className="All-Cart-Items">
                            {[1,2,3,4,5,6,7,8,9].map(val=>(
                                <div className="itemView">
                                    <img
                                    src={Shoe}
                                    />
                                    <div className="item-description">

                                        <p className="product-name">Adidas falcon shoes</p>
                                        <p className="product-price">$720</p>
                                        <img src={CartIcon}/>
                                    </div>    
                                    
                                  
                                    <img className="cross-icon" src={Cross}/>
                                       
                                
                                 </div>   
                            ))}
                        </div>

                    </div>
                    </div>

                    <div className="row m-0 pt-50">
                    <div
                    className="proceed-btn col-xl-8 col-lg-8 col-md-12 col-sm-12"
                    >
                    <img src={Proceedpayment}/>
                    </div>

                    <div
                     className="d-flex align-items-center col-xl-4 col-lg-4 col-md-12 col-sm-12"
                    >
                    
                    <div className="row justify-content-between total-view">
                            <p className="total">Total</p>
                            <p className="price">$1140</p>   
                    </div>

                    </div>
                    </div>

                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

export default CheckOut;
