import React, { Fragment, useRef, useState, useEffect } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Secure from "../../assets/img/icons/secure.png";
import truck from "../../assets/img/icons/truck.png";
import branch from "../../assets/img/icons/branch.png";
import training from "../../assets/img/icons/training.png";
import timer from "../../assets/img/icons/timer.png";
import rightbutton from "../../assets/img/buttons/arrow-square-right.png";
import leftbutton from "../../assets/img/buttons/arrow-square-left.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Throw_Error, Warning, Success } from "../../helpers/NotifiyToasters";


import cover_image from "../../assets/img/icons/cover_image1.png";
import cover_image2 from "../../assets/img/icons/cover_image2.png";
import cover_image3 from "../../assets/img/icons/cover_image3.png";
import righarrow from "../../assets/img/icons/rightarrow.png";

import myStory from "../../assets/img/mystory.png";
import mblStory from "../../assets/img/mbl-story.png";
import newstory from "../../assets/img/new-story.jpg";
import btnBg from "../../assets/img/btn-bg.png";

import btnArrowLt from "../../assets/img/hero-btn-arrow-lt.svg";
import btnArrowGt from "../../assets/img/hero-btn-arrow-gt.svg";
import { Cover_Products, Populer_Picks } from "../../helpers/api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from "../../components/rating/rating";
import Loading from "../../helpers/loader";
import Videos from "../../components/video_section/videos";
import Coach from "../../components/coach_section/coach";
import Upcomming_Event from "../../components/upcomming_event/upcomming_event";
import AffiliatedAssociations from "../../components/association_slider/association_slider";

import zafar from"../../assets/gallery/zafar-removebg-preview.png"
import shahbaz from"../../assets/gallery/shahbaz_p.png"
import shahzoo from"../../assets/gallery/shazoo.png"
import haris from"../../assets/gallery/harris.png"
import nomi from"../../assets/gallery/nomi.png"
import muzamil from"../../assets/gallery/muzamil1.png"

import OurClasses from "../../components/our_classes/our_classes";

import FeaturesSection from "../../components/features_section/features_section"
import BMICalculator from "../../components/features_section/bmi"
import Timetable from "../../components/features_section/time_table"
import Testinomial_slider from "../../components/features_section/testinomial_slider"
import App from "../../components/timer/timer";


const Home = (props) => {

  
  const [imageSrc, setImageSrc] = useState(myStory);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setImageSrc(mblStory);
    } else {
      setImageSrc(myStory);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
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
      if (response.status === 200) {
        alert(response.data.message);
        // setcoverData(response.data);
      } else {
       
        // alert("Something went Wrong");
        Throw_Error("Cover Data Not Updated !! ")
      }
    });
  };
  useEffect(() => {
    HomePageData();
  }, []);
  
  
  const popular_player=[
    {name:"ZAFAR IQBAL", img:zafar, department:"WAPDA PLAYER"},
    {name:"SHAHBAZ AHMAD", img:shahbaz, department:"WAPDA PLAYER"},
    {name:"SHAHBAZ SALEEM", img:shahzoo, department:"WAPDA PLAYER"},
    {name:"HARIS NADEEM", img:haris, department:"HEC PLAYER"},
    {name:"MUZAMIL AMIN", img:muzamil, department:"HEC PLAYER"},
    {name:"Nouman Arshad", img:nomi, department:"HEC PLAYER"},
  ]

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
              
                {/* slide end */}
                <div className="row justify-content-center ">
                    <div className="col-lg-5 col-md-5 col-sm-12 first-sec pm-l-0">
             
                      <h1>If you <spam style={{color:"orange"}}>Don’t </spam>Practice You <spam style={{color:"orange"}}>Don't</spam> Derserve to win!</h1>
                      <p ></p>
                  
                      <div className="slider-img">
                        <img src={cover_image} />
                        
                      </div>
                      <div className="btn-div">
                        <button>
                          <img src={btnArrowLt} />
                          <img src={btnArrowLt} />
                          <img src={btnArrowLt} />
                          &nbsp;Read More&nbsp;
                          <img src={btnArrowGt} />
                          <img src={btnArrowGt} />
                          <img src={btnArrowGt} />
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5 second-sec">
                      <img src={cover_image} />
                    </div>
                  </div>
                <div className="row justify-content-center ">
                    <div className="col-lg-5 col-md-5 col-sm-12 first-sec pm-l-0">
             
                      <h1>Sports is where <spam style={{color:"orange"}}>dedication</spam>, passion, and unity propel <spam style={{color:"orange"}}>greatness</spam> forward</h1>
                      <p ></p>
                  
                      <div className="slider-img">
                        <img src={cover_image2} />
                        
                      </div>
                      <div className="btn-div">
                        <button>
                          <img src={btnArrowLt} />
                          <img src={btnArrowLt} />
                          <img src={btnArrowLt} />
                          &nbsp;Read More&nbsp;
                          <img src={btnArrowGt} />
                          <img src={btnArrowGt} />
                          <img src={btnArrowGt} />
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5 second-sec">
                      <img src={cover_image2}  />
                    </div>
                  </div>
                <div className="row justify-content-center ">
                    <div className="col-lg-5 col-md-5 col-sm-12 first-sec pm-l-0">
             
                      <h1>If you <spam style={{color:"orange"}}>Don’t </spam>Practice You <spam style={{color:"orange"}}>Don't</spam> Derserve to win!</h1>
                      <p ></p>
                  
                      <div className="slider-img" >
                        <img src={cover_image3}  />
                        
                      </div>
                      <div className="btn-div">
                        <button>
                          <img src={btnArrowLt} />
                          <img src={btnArrowLt} />
                          <img src={btnArrowLt} />
                          &nbsp;Read More&nbsp;
                          <img src={btnArrowGt} />
                          <img src={btnArrowGt} />
                          <img src={btnArrowGt} />
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5 second-sec">
                      <img src={cover_image3} />
                    </div>
                  </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div>
        <Videos/>
        </div>
     
        <div className="Slider-Area  mb-5">
          <div className="container">
            <div className="row justify-content-between slider-ctrl">
              <div className="col-sm-8 slider-text">
                <p className="upper-text">Popular Players</p>
                <p className="lower-text">
                  Our popular players for most favorited Tournaments
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
              <div className="col-xs-12 d-sm-none col-sec">
                <div className="slider-desp">
                  <p className="lower-text">
                  ur popular players for most favorited Tournaments
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
              <div className="col-xs-12 col-md-12">
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
                 
                {popular_player.map( (player)=>(

                      
                      <div className="ItemView">
                      <img className="item-image" src={player.img} style={{width:"100%", height:"300px", marginBottom:"30px", marginTop:"30px"}}  />
                      <div className="item-description">
                        <Rating rating={5} height={13} width={13}/>
                        <p className="item-info" style={{paddingTop:'7px',fontFamily:"Ethnocentric"}}>
                         {player.name}
                        </p>
                        <p className="" style={{paddingTop:'5px', marginBottom:'-10px',color:'#454545', fontSize:"14px"}} >
                         {player.department}
                        </p>

                        <div className="price-view" >
                        </div>
                      </div>
                    </div>))}
                    
                    
             
                     


                  
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className="container  pb-100 services">
          <div className="row">
            <div className="d-flex flex-column align-items-center col-xl-4 col-lg-4 cold-12 centerIcon">
              <img src={training} />
              <p className="first-text">Free</p>
              <p className="second-text"> 1 Day Training </p>
            </div>

            <div className="d-flex flex-column align-items-center col-xl-4 col-lg-4 cold-12 centerIcon">
              <img src={branch}/>
              <p className="first-text">3+</p>
              <p className="second-text"> Branches</p>
            </div>
            <div className="d-flex flex-column align-items-center col-xl-4 col-lg-4 cold-12 centerIcon">
              <img src={timer} />
              <p className="first-text">24/7</p>
              <p className="second-text"> Dedicated Support</p>
            </div>
          </div>
        </div>
        <div className="container-fluid ourStory">
            <div className="row ">
              <div className="col-md-8 offset-md-2 offset-sm-2 col-sm-8 col-xs-10 heading">
                <h3>
                  WHY IS KARATE SO <span className="grey-text">IMPORTANT</span>?
                </h3>
<a target="_blank" href="https://icons8.com/icon/7880/location">Location</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

                <p style={{paddingTop:'10PX'}}>
                  
                  Karate is important for you because it will help you improve your physical fitness, enhance your mental discipline, and teach you valuable self-defense skills.
                </p>
              </div>
              <div className="col-lg-11 col-md-12 col-sm-12 img-section">
                <img src={imageSrc} className="inner-img" />
                <img src={btnBg} className="read-story-btn" />
              </div>
              <div className="col-8 btn-group">
                    {/* <img src={btnBg} /> */}
            
              </div>
         
           
              <Coach/>
              <Upcomming_Event/>
              <AffiliatedAssociations/>
              <OurClasses/>
              <FeaturesSection/>
              <Timetable/>
              <BMICalculator/>
              <Testinomial_slider/>
           
            </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};



export default Home;
