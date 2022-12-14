import React, { Fragment, useRef, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import "react-multi-carousel/lib/styles.css";
import Polygon from "../../assets/img/icons/Polygon4.svg"

const Faqs = (props) => {
  const nextSlide = useRef();
  const prevSlide = useRef();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group">
        <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} ref={prevSlide} />
        <button onClick={() => next()} ref={nextSlide} />
      </div>
    );
  };
  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >

        <div className="Slider-Area pt-100 pb-100 pr-30">
          <div className="container pl-50">
            <div className="row justify-content-between">
                <p className="heading-text">Frequently asked questions</p>
            </div>
          </div>

          <div className="container pl-50 pt-100">
            <div className="row justify-content-between">
                <p className="paragraph-text">
                We are proud to offer international shipping services that currently operate in over 200 countries and islands worldwide. Nothing means more to us than bringing our customers great value and service. We will continue to grow to meet the needs of all our customers, delivering a service beyond all expectation anywhere in the world.                </p>
            </div>
          </div>

          <div className="container pl-50 pt-70">
            <div className="row justify-content-between">
               <div className="faqConatiner">
                <p className="faqQuestions">HOW LONG DOES SHIPPING TAKE? (DELAYS MAY OCCUR DUE TO COVID-19)</p>
                <div className="dropDown-img"><img src={Polygon} /></div>
               </div>
            </div>
          </div>
          <div className="container pl-50 pt-45">
            <div className="row justify-content-between">
               <div className="faqConatiner">
                <p className="faqQuestions">WHAT DOES UA MEAN IN SNEAKERS?</p>
                <div className="dropDown-img"><img src={Polygon} /></div>
               </div>
            </div>
          </div>
          <div className="container pl-50 pt-45">
            <div className="row justify-content-between">
               <div className="faqConatiner">
                <p className="faqQuestions">WHAT DOES UA OR UNAUTHORISED AUTHENTIC MEAN?</p>
                <div className="dropDown-img"><img src={Polygon} /></div>
               </div>
            </div>
          </div>
          <div className="container pl-50 pt-45">
            <div className="row justify-content-between">
               <div className="faqConatiner">
                <p className="faqQuestions">DO I HAVE TO PAY CUSTOMS FOR INTERNATIONAL ORDERS?</p>
                <div className="dropDown-img"><img src={Polygon} /></div>
               </div>
            </div>
          </div>
          <div className="container pl-50 pt-45">
            <div className="row justify-content-between">
               <div className="faqConatiner">
                <p className="faqQuestions">WHAT COULD CAUSE A DELAY IN MY ORDER?</p>
                <div className="dropDown-img"><img src={Polygon} /></div>
               </div>
            </div>
          </div>
          <div className="container pl-50 pt-45">
            <div className="row justify-content-between">
               <div className="faqConatiner">
                <p className="faqQuestions">WHAT IS THE BOOLOPO CONFIRMATION NUMBER?</p>
                <div className="dropDown-img"><img src={Polygon} /></div>
               </div>
            </div>
          </div>
          <div className="container pl-50 pt-45">
            <div className="row justify-content-between">
               <div className="faqConatiner">
                <p className="faqQuestions">WILL I BE ABLE TO TRACK MY ORDER?</p>
                <div className="dropDown-img"><img src={Polygon} /></div>
               </div>
            </div>
          </div>
          <div className="container pl-50 pt-45">
            <div className="row justify-content-between">
               <div className="faqConatiner">
                <p className="faqQuestions">WHAT METHODS OF PAYMENT ARE ACCEPTED?</p>
                <div className="dropDown-img"><img src={Polygon} /></div>
               </div>
            </div>
          </div>
          <div className="container pl-50 pt-45">
            <div className="row justify-content-between">
               <div className="faqConatiner">
                <p className="faqQuestions">IS MY PERSONAL INFORMATION SAFE?</p>
                <div className="dropDown-img"><img src={Polygon} /></div>
               </div>
            </div>
          </div>
          <div className="container pl-50 pt-45">
            <div className="row justify-content-between">
               <div className="faqConatiner">
                <p className="faqQuestions">Do You Ship worldwide?</p>
                <div className="dropDown-img"><img src={Polygon} /></div>
               </div>
            </div>
          </div>
          
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Faqs;
