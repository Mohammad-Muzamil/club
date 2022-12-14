import React, { Fragment, useRef, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import "react-multi-carousel/lib/styles.css";

const ReturnPolicy = (props) => {
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
                <p className="heading-text">Return Policy</p>
            </div>
          </div>

          <div className="container pl-70 pt-40 pr-30">
            <div className="row justify-content-between">
                <p className="paragraph-text">
                Welcome to our self-service Exchange open 24/5. Register your exchange and process your return by following the steps below. Make sure you send all your order information                
                </p>
            </div>
          </div>

          <div className="container pl-50">
            <div className="row justify-content-between">
              <div className="line pt-50"></div>
            </div>
          </div>

        <form action="/action_page.php" className="container pl-50 pt-10">
            <div className="input-flex">
                <div className="form-group">
                    <label for="name" className="paragraph-text required">Your Name</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div className="pl-70"></div>
                <div className="form-group">
                    <label for="email" className="paragraph-text required">Your E-Mail</label>
                    <input type="text" id="email" name="email" required/>
                </div>
            </div>
            <label for="subject" className="paragraph-text required">Subject</label>
            <input type="text" id="subject" name="subject" required/><br></br>
            <label for="issue" className="paragraph-text required">Drop Your Issue</label>
            <textarea id="issue" name="issue" required/><br></br>
            <input type="submit" value="Submit"/>
        </form>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default ReturnPolicy;
