import React, { Fragment, useRef, useState, useEffect } from "react";
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
import heroImg from "../../assets/img/shoe-img.png";
import btnArrowLt from "../../assets/img/hero-btn-arrow-lt.svg";
import btnArrowGt from "../../assets/img/hero-btn-arrow-gt.svg";
import { Cover_Products, Populer_Picks } from "../../helpers/api";
import TestonomialCarousel from "../../components/testnomial/testnomial_carousel";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from "../../components/rating/rating";

const Home = (props) => {

  const nextSlide = useRef();
  const prevSlide = useRef();
  const [converData, setcoverData] = useState([]);
  const [popularData, setpopularData] = useState([]);
  
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
  const heroSection = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group">
        <button
          className={currentSlide === 0 ? "disable" : ""}
          onClick={() => previous()}
          ref={prevSlide}
        />
        <button onClick={() => next()} ref={nextSlide} />
      </div>
    );
  };

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;
    const carouselItems = ["", "", ""];
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <span
        className={`control-btn ${active ? "active" : "inactive"}`}
        onClick={() => onClick()}
      >
        {React.Children.toArray(carouselItems)[index]}
      </span>
    );
  };

  const HomePageData = async () => {

  

    await Cover_Products().then((response) => {
      console.log(response);
      if (response.status === 200) {
        setcoverData(response.data);
      } else {
        // alert("Something went Wrong");

        toast.error('Cover Products Data Not Loaded', {
          position: 'top-right',
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    });

    await Populer_Picks().then((response) => {
      console.log("Populer", response);

      if (response.status === 200) {
        setpopularData(response.data);
      } else {
        // alert("Something went Wrong");
        toast.error('Populars picks Data Not Loaded', {
          position: 'top-right',
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    });
  };
  useEffect(() => {
    HomePageData();
  }, []);
  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="container-fluid hero-section">
          <div className="row">
            <div className="col-md-12 pm-l-0">
              <Carousel
                responsive={heroSection}
                showDots={true}
                arrows={false}
                customDot={<CustomDot />}
              >
                {/* slide start */}
                {converData.map((val) => (
                  <div className="row justify-content-center ">
                    <div className="col-lg-5 col-md-5 col-sm-12 first-sec pm-l-0">
                      <h1>{val.name}</h1>
                      <p>{val.long_description}</p>
                      <div class="slider-img">
                        <img src={process.env.REACT_APP_LOCAL_API+"/"+val.thumbnail} />
                        
                      </div>
                      <div className="btn-div">
                        <button>
                          <img src={btnArrowLt} />
                          <img src={btnArrowLt} />
                          <img src={btnArrowLt} />
                          &nbsp;SHOP NOW&nbsp;
                          <img src={btnArrowGt} />
                          <img src={btnArrowGt} />
                          <img src={btnArrowGt} />
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5 second-sec">
                      <img src={heroImg} />
                    </div>
                  </div>
                ))}
                {/* slide end */}
              </Carousel>
            </div>
          </div>
        </div>
        <div className="container pt-100 pb-100 services">
          <div className="row">
            <div className="d-flex flex-column align-items-center col-xl-4 col-lg-4 cold-12 centerIcon">
              <img src={truck} />
              <p className="first-text">Free</p>
              <p className="second-text"> Shipping Worldwide</p>
            </div>

            <div className="d-flex flex-column align-items-center col-xl-4 col-lg-4 cold-12 centerIcon">
              <img src={Secure} />
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
              <div className="col-sm-8 slider-text">
                <p className="upper-text">Popular Picks</p>
                <p className="lower-text">
                  Our popular picks for most favorited Nike Men’s & Women’s
                  shoes.
                </p>
              </div>
              <div className="col-sm-4 slider-btn">
                <img
                  className="mr-10"
                  src={leftbutton}
                  onClick={() => prevSlide.current.click()}
                />
                <img
                  src={rightbutton}
                  onClick={() => nextSlide.current.click()}
                />
              </div>
            </div>
            <div className="row slider-sec">
              <div className="col-xs-6 d-sm-none col-sec">
                <div class="slider-desp">
                  <p className="lower-text">
                    Our popular picks for most favorited Nike Men’s & Women’s
                    shoes.
                  </p>
                </div>
                <div className="slider-btn">
                  <img
                    className="mr-10"
                    src={leftbutton}
                    onClick={() => prevSlide.current.click()}
                  />
                  <img
                    src={rightbutton}
                    onClick={() => nextSlide.current.click()}
                  />
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
                  {popularData.map((val) => (
                    <div className="ItemView">
                      {process.env.REACT_APP_LOCAL_API+"/"+val.thumbnail}
                      <img className="item-image" src={process.env.REACT_APP_LOCAL_API+"/"+val.thumbnail} />
                      <div className="item-description">
                        <Rating rating={1} height={13} width={13}/>
                        <p className="item-info" style={{paddingTop:'7px'}}>
                         {val.name}
                        </p>
                        <p className="" style={{paddingTop:'10px', marginBottom:'-10px',fontSize:'16px',fontWeight:'100px',color:'#454545'}} >
                         {val.short_description}
                        </p>

                        <div className="price-view" >
                          <p className="price-text">${val.price}</p>
                          <img className="right-arrow" src={righarrow}/>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid ourStory">
            <div class="row">
              <div class="col-md-8 offset-md-2 offset-sm-2 col-sm-8 col-xs-10 heading">
                <h3>
                  WHY IS SO <span className="grey-text">CHEAP</span>?
                </h3>
                <p>
                  Don't worry we have answers to all of your questions. Click on
                  below button.
                </p>
              </div>
              <div class="col-lg-11 col-md-12 col-sm-12 img-section">
                <img src={ourStory} />
                <img src={btnBg} className="read-story-btn" />
              </div>
              <div class="col-8 btn-group">
                    {/* <img src={btnBg} /> */}
            
              </div>
              {/* testonomial portion */}
              <TestonomialCarousel/>
            </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};




export default Home;
