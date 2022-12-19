import React, { Fragment, useRef, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import "react-multi-carousel/lib/styles.css";
import Polygon from "../../assets/img/icons/Polygon4.svg";

const Faqs = (props) => {
  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="BackgroundPicture pt-100 pb-100">

          <div className="container">

 
  
              <p className="faq-heading show-screen pb-130">Frequently asked questions</p>
              <p className="faq-short">FAQS</p>
              <p className="faq-help-text">can we help</p>

      

  
              <p className="faq-paragraph-text">
                We are proud to offer international shipping services that
                currently operate in over 200 countries and islands worldwide.
                Nothing means more to us than bringing our customers great value
                and service. We will continue to grow to meet the needs of all
                our customers, delivering a service beyond all expectation
                anywhere in the world.{" "}
              </p>

              <p className="faq-heading-2">Frequently asked questions</p>

              <p className="faq-heading show-mobile pb-130">Frequently asked questions</p>


            <div className="faqConatiner">
              <p className="faqQuestions">
                HOW LONG DOES SHIPPING TAKE? (DELAYS MAY OCCUR DUE TO COVID-19)
              </p>

              <img className="dropdown-arrow" src={Polygon} />
            </div>
  
 
            <div className="faqConatiner">
              <p className="faqQuestions">WHAT DOES UA MEAN IN SNEAKERS?</p>
              <img className="dropdown-arrow" src={Polygon} />
            </div>
        

            <div className="faqConatiner">
              <p className="faqQuestions">
                WHAT DOES UA OR UNAUTHORISED AUTHENTIC MEAN?
              </p>
              <img className="dropdown-arrow" src={Polygon} />
            </div>
   

            <div className="faqConatiner">
              <p className="faqQuestions">
                DO I HAVE TO PAY CUSTOMS FOR INTERNATIONAL ORDERS?
              </p>
              <img className="dropdown-arrow" src={Polygon} />
            </div>
     
            <div className="faqConatiner">
              <p className="faqQuestions">
                WHAT COULD CAUSE A DELAY IN MY ORDER?
              </p>
              <img className="dropdown-arrow" src={Polygon} />
            </div>


            <div className="faqConatiner">
              <p className="faqQuestions">
                WHAT IS THE BOOLOPO CONFIRMATION NUMBER?
              </p>
              <img className="dropdown-arrow" src={Polygon} />
            </div>
  

     
            <div className="faqConatiner">
              <p className="faqQuestions">WILL I BE ABLE TO TRACK MY ORDER?</p>
              <img className="dropdown-arrow" src={Polygon} />
            </div>

            <div className="faqConatiner">
              <p className="faqQuestions">
                WHAT METHODS OF PAYMENT ARE ACCEPTED?
              </p>
              <img className="dropdown-arrow" src={Polygon} />
            </div>
       

            <div className="faqConatiner">
              <p className="faqQuestions">IS MY PERSONAL INFORMATION SAFE?</p>
              <img className="dropdown-arrow" src={Polygon} />
            </div>
 
  
            <div className="faqConatiner">
              <p className="faqQuestions">Do You Ship worldwide?</p>
              <img className="dropdown-arrow" src={Polygon} />
            </div>
            </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Faqs;
