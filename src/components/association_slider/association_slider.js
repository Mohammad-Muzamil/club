import React, { useEffect, useState } from 'react';
import GOP from "../../assets/img/association/GOP.png"
import PG from "../../assets/img/association/PG.png"
import PKF from "../../assets/img/association/PKF.png"
import POA from "../../assets/img/association/POA.png"
import PSB from "../../assets/img/association/PSB.png"
import WKF from "../../assets/img/association/WKF.png"
import clublogo from "../../assets/img/association/clublogo.png"
import "../../assets/css/association.css"

const styles = {
  teamHolder: {
    float: 'left',
    width: '100%',
    paddingTop: '50px',
    paddingBottom: '75px',
  },
  themePaddingMiddleBg: {
    float: 'left',
    width: '100%',
    paddingTop: '100px',
    paddingBottom: '100px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    boxShadow: '0 0 100px -80px rgba(0,0,0,0.8)',
    minHeight: '515px',
  },
  mainHeadingHolder: {
    textAlign: 'center',
    paddingBottom: '0',
    paddingTop: '30px',
    float: 'left',
    width: '100%',
  },
  mainHeading: {
    display: 'inline-block',
    textAlign: 'center',
    width: '100%',
    marginBottom: '35px',
  },
  mainHeadingStyle2: {
    position: 'relative',
    display: 'inline-block',
    padding: '0 20px',
    textTransform: 'capitalize',
    fontWeight: '600',
    color: '#111',
    lineHeight: '21px',
    fontSize: '30px',
  },
  slideshowContainer: {
    width: '200px',
    height: '200px',
    overflow: 'hidden',
  },
  slideshowImage: {
    width: '200px',
    height: '200px',
    marginLeft: '-50px',
    objectFit: 'cover',
    position: 'absolute',
    opacity: '0',
    transition: 'opacity 1s ease-in-out',
  },
  activeSlide: {
    opacity: '1',
  },
};

function AffiliatedAssociations() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  const slide1Images = [GOP, POA, PSB];
  const slide2Images = [WKF, PKF, clublogo];
  const slide3Images = [clublogo, PG, POA];

  return (
    <div style={styles.teamHolder}>
      <div className="container-fluid" >
        <div className="main-heading-holder">
          <div className="main-heading sytle-2">
            <h2 style={{fontFamily:"Ethnocentric", fontSize:"25px"}}>Boards</h2>
          
          </div>
        </div>
        <div className="container-fluid large-view-container">
          <div className="d-flex w-100 flex-column flex-lg-row text-center  " style={{justifyContent:"center", rowGap:"30px"}}>
            <div className="col-3 mt-2">
              <div style={styles.slideshowContainer} className="slideshow1">
                {slide1Images.map((image, index) => (
                  <img
                    key={index}
                    style={{
                      ...styles.slideshowImage,
                      ...(index === currentSlide ? styles.activeSlide : {}),
                    }}
                    src={image}
                    alt={`Image ${index}`}
                  />
                ))}
              </div>
            </div>
            <div className="col-3 mt-2">
              <div style={styles.slideshowContainer} className="slideshow2">
                {slide2Images.map((image, index) => (
                  <img
                    key={index}
                    style={{
                      ...styles.slideshowImage,
                      ...(index === currentSlide ? styles.activeSlide : {}),
                    }}
                    src={image}
                    alt={`Image ${index}`}
                  />
                ))}
              </div>
            </div>
            <div className="col-3 mt-2">
              <div style={styles.slideshowContainer} className="slideshow3">
                {slide3Images.map((image, index) => (
                  <img
                    key={index}
                    style={{
                      ...styles.slideshowImage,
                      ...(index === currentSlide ? styles.activeSlide : {}),
                    }}
                    src={image}
                    alt={`Image ${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AffiliatedAssociations;
