import React, { Fragment } from "react";
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

const Home = (props) => {
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

        <div className="Slider-Area pt-100 pb-100 mb-5">
          <div className="container">
            <div className="row justify-content-between">
              <div className="slider-text">
                <p className="upper-text">Popular Picks</p>
                <p className="lower-text">
                  Our popular picks for most favorited Nike Men’s & Women’s
                  shoes.
                </p>
              </div>

              <div className="slider-btn">
                <img className="mr-10" src={leftbutton} />
                <img src={rightbutton} />
              </div>
            </div>
          </div>
          <div className="ml-100 pt-100">
            <Carousel
              arrows={false}
              containerClass="carousel-container"
              itemClass="ViewItem"
              responsive={responsive}
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
            </Carousel>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Home;
