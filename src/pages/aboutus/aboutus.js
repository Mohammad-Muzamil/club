import React, { Fragment, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import CeoSection from "../../assets/img/Background/ceosection.png"
import Whitebackground from "../../assets/img/Background/whitebackground.png"

const AboutUs = (props) => {


    return (
        <Fragment>
            <LayoutOne
                headerContainerClass="container-fluid"
                headerPaddingClass="header-padding-2"
            >
                <div className="BackgroundPicture pt-100 pb-100">
                    <div className="container">

                        <p
                            className="about-us"
                        >
                            About us
                        </p>

                        <img
                            src={CeoSection}
                            className="ceo-section pt-100"

                        />

                        <p className="world-wide">
                            EST. 2018
                        </p>
                        <p className="world-wide">
                            WORLDWIDE DELIVERY
                        </p>


                        <div
                            className="white-background"
                        >
                           

                           
                            <div className="row  m-0">

                            <div className="portion1  col-lg-6 col-md-12 col-sm-12">
                                <p className="bold">How it all started</p>
                                <p className="light">Our site launched in July 2018, we aim to be the foremost trusted seller within the market. We have already sent thousands of pairs of top-quality UA replica sneakers to our customers. We have built a gentle and trusty relationship with every customer, as our customers are the highest priority of our business. We greatly value the requirements and suggestions of our customers. Via email, WhatsApp, and Instagram, you’ll receive prompt and courteous services from our consultants, who are going to be at your service until you discover the right products you wish. Meanwhile, we offer automatic order tracking after service because serving our customers is the greatest concern of our business.We assure our customers of reliable quotations, prompt deliveries, and stable supplies. We are constantly working to enhance our products, services.</p>
                            </div>

                            <div className="video-img col-lg-6 col-md-12 col-sm-12">

                            </div>

                            </div>

                     

                        </div>

                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

export default AboutUs;
