import React, { Fragment, useEffect, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import { Link, useNavigate } from "react-router-dom";
import { AllBrands } from "../../helpers/api";
import LightGallery from "lightgallery/react/Lightgallery.es5"



import pic_1 from "../../assets/gallery/1.jpg";
import pic_2 from "../../assets/gallery/2.jpg";
import pic_3 from "../../assets/gallery/kata.jpg";
import pic_4 from "../../assets/gallery/3.jpg";
import pic_5 from "../../assets/gallery/6.jpg";
import pic_6 from "../../assets/gallery/10.jpg";
import pic_7 from "../../assets/gallery/7.jpg";
import pic_8 from "../../assets/gallery/8.jpg";
import pic_9 from "../../assets/gallery/5.jpg";
import pic_10 from "../../assets/gallery/4.jpg";
import pic_11 from "../../assets/gallery/9.jpg";
import pic_12 from "../../assets/gallery/10 (2).jpg";
import pic_13 from "../../assets/gallery/medal.jpg";
import pic_14 from "../../assets/gallery/inetrnation.jpg";
import pic_15 from "../../assets/gallery/zafar.jpg";
import pic_16 from "../../assets/gallery/zafar_medal.jpg";

import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"
import "lightgallery/css/lg-autoplay.css"
import "lightgallery/css/lg-rotate.css"
import "lightgallery/css/lg-share.css"
import "lightgallery/css/lg-video.css"

import lgZoom from"lightgallery/plugins/zoom"
import lgThumbnail from"lightgallery/plugins/thumbnail"
import lgautoplay from"lightgallery/plugins/autoplay"
import lgrotate from"lightgallery/plugins/rotate"
import lgshare from"lightgallery/plugins/share"
import lgsvideo from"lightgallery/plugins/video"

const Gallery = (props) => {
  const navigate = useNavigate();
  const [images, setimages] = useState([]);

 

  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="BackgroundPicture pt-100 pb-100">
          <div className="container">
            <p className="page-info-text pb-100 ">Gallery</p>
           
            <div className="row" >
              <LightGallery
              speed={500}
              plugins={[lgZoom,lgautoplay,lgThumbnail,lgrotate,lgsvideo]}
              >
             
                      <a href={pic_1}   >
                        <img className="col-xl-4 col-lg-4 col-6 mb-1 p-1"  src={pic_1} style={{width:"350px",height:"350px"}} />
                      </a>
                      <a href={pic_14}>
                        <img className="col-xl-4 col-lg-4 col-6 mb-1 p-1"  src={pic_14} style={{width:"350px",height:"350px"}} />
                      </a>
                      <a href={pic_3}   >
                        <img className="col-xl-4 col-lg-4 col-6 mb-1 p-1"  src={pic_3}  style={{width:"350px",height:"350px"}} />
                      </a>
                      <a href={pic_4}   >
                        <img className="col-xl-4 col-lg-4 col-6 mb-1 p-1"  src={pic_4} style={{width:"350px",height:"350px"}} />
                      </a>
                      <a href={pic_15}   >
                        <img className="col-xl-4 col-lg-4 col-6 mb-1 p-1"  src={pic_15} style={{width:"350px",height:"350px"}} />
                      </a>
                      <a href={pic_9}   >
                        <img className="col-xl-4 col-lg-4 col-6 mb-1 p-1"  src={pic_9} style={{width:"350px",height:"350px"}} />
                      </a>
                      <a href={pic_5}   >
                        <img className="col-xl-4 col-lg-4 col-6 mb-1 p-1"  src={pic_5} style={{width:"350px",height:"350px"}} />
                      </a>

                      <a href={pic_6}   >
                        <img className="col-xl-4 col-lg-4 col-6 mb-1 p-1"  src={pic_6} style={{width:"350px",height:"350px"}} />
                      </a>
                      <a href={pic_2}>
                        <img className="col-xl-4 col-lg-4 col-6 mb-1 p-1"  src={pic_2} style={{width:"350px",height:"350px"}} />
                      </a>
                      <a href={pic_7}   >
                        <img className="col-xl-4 col-lg-4 col-6 mb-1 p-1"  src={pic_7} style={{width:"350px",height:"350px"}} />
                      </a>
                      <a href={pic_8}   >
                        <img className="col-xl-4 col-lg-4 col-6 mb-1 p-1"  src={pic_8} style={{width:"350px",height:"350px"}} />
                      </a>
                     
                      <a href={pic_10}   >
                        <img className="col-xl-4 col-lg-4 col-6 mb-1 p-1"  src={pic_10} style={{width:"350px",height:"350px"}} />
                      </a>
                      <a href={pic_16}   >
                        <img className="col-xl-4 col-lg-4 col-6 mb-1 p-1"  src={pic_16} style={{width:"350px",height:"350px"}} />
                      </a>
                      <a href={pic_11}   >
                        <img className="col-xl-4 col-lg-4 col-6 mb-1 p-1"  src={pic_11} style={{width:"350px",height:"350px"}} />
                      </a>
                      <a href={pic_12}   >
                        <img className="col-xl-4 col-lg-4 col-6 mb-1 p-1"  src={pic_12} style={{width:"350px",height:"350px"}} />
                      </a>
                      <a href={pic_13}   >
                        <img className="col-xl-4 col-lg-4 col-6 mb-1 p-1"  src={pic_13} style={{width:"350px",height:"350px"}} />
                      </a>
                     
                    
              </LightGallery>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Gallery;
