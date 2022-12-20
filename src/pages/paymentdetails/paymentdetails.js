import React, { Fragment, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import HeaderTwo from "../../wrappers/header/HeaderTwo";
import Proceedpayment from "../../assets/img/buttons/proceedpayment.png"
import BaseButton from "../../assets/img/buttons/basebutton.png"

const PaymentDetails = (props) => {


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
                                <div className="grey-background round">
                                    <p>1</p>
                                </div>
                                <div className="grey-text text">
                                    Shipping Address
                                </div>

                            </div>

                            <div className="d-flex flex-row align-items-center">
                                <div className="orange-background round">
                                    <p>2</p>
                                </div>
                                <div className="orange-text text">
                                    Payment Details
                                </div>

                            </div>
                        </div>

                        <div className="seperator pt-30 mb-100" />

                        <p className="add-card"> Add New</p>

                        <div className="input-area-view">
                            <p>Card number</p>
                            <input
                                type={"text"}
                            />
                        </div>

                        <div className="input-area-view">
                            <p> Name on card</p>
                            <input
                                type={"text"}
                            />
                        </div>
                        <div
                            className="row m-0 justify-content-between"
                        >
                            <div className="col-lg-5 col-md-12 col-sm-12 p-0">
                                <div className="input-area-view">
                                    <p> Name on card</p>
                                    <input
                                        type={"text"}
                                    />
                                </div>
                            </div>


                            <div className="col-lg-5 col-md-12 col-sm-12 p-0">
                                <div className="input-area-view">
                                    <p> Name on card</p>
                                    <input
                                        type={"text"}
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="seperator pt-100" />
                        <div className="BaseButton">
                            <p> Proceed to Pay</p>
                               
                        </div>
                        {/* <img
                            className="proceed-payment"
                            src={BaseButton} /> */}
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

export default PaymentDetails;
