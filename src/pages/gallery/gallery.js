import React, { Fragment, useEffect, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Yeezy from "../../assets/img/shoes/yeezy.png";
import product1 from "../../assets/img/shoes/product1.png";
import { Link, useNavigate } from "react-router-dom";
import { AllBrands } from "../../helpers/api";
import LightGallery from "lightgallery/react/Lightgallery.es5"
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
             
                      <a href={Yeezy}   >
                        <img className="col-xl-4 col-lg-4 col-6 mb-1 p-1"  src={Yeezy}  />
                      </a>
                      <a href={product1}>
                        <img className="col-xl-4 col-lg-4 col-6 mb-1 p-1"  src={product1}  />
                      </a>
                      <a href={Yeezy}   >
                        <img className="col-xl-4 col-lg-4 col-6 mb-1 p-1"  src={Yeezy}  />
                      </a>
                      <a href={product1}>
                        <img className="col-xl-4 col-lg-4 col-6 mb-1 p-1"  src={product1}  />
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
