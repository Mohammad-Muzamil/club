import React, { Fragment, useRef, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Secure from "../../assets/img/icons/secure.png";
import truck from "../../assets/img/icons/truck.png";
import timer from "../../assets/img/icons/timer.png";
import rightbutton from "../../assets/img/buttons/arrow-square-right.png";
import leftbutton from "../../assets/img/buttons/arrow-square-left.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Shoes from "../../assets/img/shoes/shoes.png";
import yellowstar from "../../assets/img/icons/yellowstar.png";
import star from "../../assets/img/icons/star.png";
import righarrow from "../../assets/img/icons/rightarrow.png";
import ourStory from "../../assets/img/our-story.png";
import btnBg from "../../assets/img/btn-bg.png";

const Home = (props) => {
  const nextSlide = useRef();
  const prevSlide = useRef();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 482 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 481, min: 0 },
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
        <div className="container pt-100 pb-100">
          <div className="row">
            <div className="d-flex flex-column align-items-center col-xl-4 col-lg-4 cold-12 centerIcon">
              <img src={Secure} />
              <p className="first-text">Free</p>
              <p className="second-text"> Shipping Worldwide</p>
            </div>

            <div className="d-flex flex-column align-items-center col-xl-4 col-lg-4 cold-12 centerIcon">
              <img src={truck} />
              <p className="first-text">100%</p>
              <p className="second-text"> Safe & Secure Checkout</p>
            </div>
            <div className="d-flex flex-column align-items-center col-xl-4 col-lg-4 cold-12 centerIcon">
              <img src={timer} />
              <p className="first-text">24/7</p>
              <p className="second-text"> Dedicated Support</p>
            </div>
          </div>
        </div>

        <div className="Slider-Area  mb-5">
          <div className="container">
            <div className="row justify-content-between slider-ctrl">
              <div className="col-sm-8 slider-text" >
                <p className="upper-text">Popular Picks</p>
                <p className="lower-text">
                  Our popular picks for most favorited Nike Men’s & Women’s
                  shoes.
                </p>
              </div>
              <div className="col-sm-4 slider-btn" >
                <img className="mr-10" src={leftbutton} onClick={() => prevSlide.current.click() }  />
                <img src={rightbutton} onClick={() => nextSlide.current.click() }  />
              </div>
            </div>
            <div className="row slider-sec">
              <div className="col-xs-6 d-sm-none col-sec">
                <div class="slider-desp" >
                  <p className="lower-text">
                    Our popular picks for most favorited Nike Men’s & Women’s
                    shoes.
                  </p>
                </div>
                <div className="slider-btn">
                  <img className="mr-10" src={leftbutton} onClick={() => prevSlide.current.click() }  />
                  <img src={rightbutton} onClick={() => nextSlide.current.click() }  />
                </div>
              </div>
              <div className="col-xs-6 col-md-12">
                <Carousel
                  arrows={false}
                  containerClass="carousel-container"
                  itemClass="ViewItem"
                  responsive={responsive}
                  infinite={true}
                  customRightArrow={<CustomRightArrow />}
                  renderButtonGroupOutside={true}
                  customButtonGroup={<ButtonGroup />}
                >
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
                </Carousel>
              </div>
            </div>
          </div>
          
        </div>
        <div class="container-fluid ourStory">
            <div class="row">
              <div class="col-md-8 offset-md-2 offset-sm-2 col-sm-8 col-xs-10 heading">
                <h3>WHY IS SO <span className="grey-text">CHEAP</span>?</h3>
                <p>Don't worry we have answers to all of your questions. Click on below button.</p>
              </div>
                <div class="col-lg-11 col-md-12 col-sm-12 img-section">
                  <img src={ourStory}  />
                  <img src={btnBg} className="read-story-btn" />
                </div>
                {/* <div class="col-8 btn-group">
                  <img src={btnBg} />
                </div> */}
            </div>
          </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Home;
