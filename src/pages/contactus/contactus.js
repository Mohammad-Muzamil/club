import React, { Fragment } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Send from "../../assets/img/buttons/send.png"

const ContactUs = (props) => {


    return (
        <Fragment>
            <LayoutOne
                headerContainerClass="container-fluid"
                headerPaddingClass="header-padding-2"
            >
                <div className="BackgroundPicture pt-100 pb-100">
                    <div className="container">
                        <p className="contact-us">Contact us</p>
                        <p className="help-text-heading pt-100">CAN WE HELP?</p>
                        <p className="help-text pb-100">Office support is available 5/24, we wish you a new and successful experience in our store. Make sure we are here to help you with any problem you encounter in the Store. BooLopo support Team</p>

                        <div className="row m-0 justify-content-between">
                            <div className="contact-us-form col-lg-7 col-md-12 col-sm-12">

                                <div className="feild-view">
                                    <p className="label">
                                        Your Name

                                        <p
                                            className="star">*</p>
                                    </p>
                                    <input
                                    />
                                </div>

                                <div className="feild-view">
                                    <p className="label">
                                        Your E-Mail

                                        <p
                                            className="star">*</p>
                                    </p>
                                    <input
                                    />
                                </div>




                                <div className="feild-view">
                                    <p className="label">
                                        Subject

                                        <p
                                            className="star">*</p>
                                    </p>
                                    <input
                                    />
                                </div>


                                <div className="feild-view">
                                    <p className="label">
                                        Drop Your Message *

                                        <p
                                            className="star">*</p>
                                    </p>
                                    <textarea
                                    />
                                </div>

                            <div className="row m-0 check-box-view align-items-center">
                                    <input
                                    type={"checkbox"}
                                    />
                                    <p>Please keep me updated on new collections.</p>
                            </div>

                            <img
                            src={Send}
                            />

                            </div>

                            <div className="contact-us-info col-lg-4 col-md-12 col-sm-12">
                                <p 
                                className="bold-heading"
                                >Store Adress</p>

                                <p
                                className="light-text"
                                >L-20, Universal Plaza, L Block, DHA Phase 4,Lahore.Punjab,Pakistan.</p>

                                <p 
                                className="bold-heading"
                                >Opning hours</p>

                                <p
                                className="light-text"
                                >Active 5/24</p>



<p 
                                className="bold-heading"
                                >Telephone</p>

                                <p
                                className="light-text"
                                >+92 336 5563138</p>


<p 
                                className="bold-heading"
                                >E-mail</p>

                                <p
                                className="light-text"
                                >asharatiq11@gmail.com8</p>

                            </div>

                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

export default ContactUs;
