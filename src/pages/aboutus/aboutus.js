import React, { Fragment, useEffect, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import CeoSection from "../../assets/img/Background/ceosection.png";
import img_2 from "../../assets/img/aboutus/img_2.png";
import img_1 from "../../assets/img/aboutus/img_1.png";

const AboutUs = (props) => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="BackgroundPicture pt-40 pb-100">
          <div className="container">
            <p className="about-us">About us</p>

            <img src={CeoSection} className="ceo-section pt-100 mt-4" />

            <p className="world-wide">NAtional Youth </p>
            <p className="world-wide">Karate  Academies</p>

            <div className="container white-background">
              <div className="row  m-0 justify-content-between">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="portion1">
                    <p className="bold">How it all started</p>
                    <p className="light">
                      Sensei Majid Butt's journey in starting a karate academy was nothing short of remarkable and filled with perseverance. Despite facing numerous challenges, he pursued his dream with unwavering determination. Starting from humble beginnings, Sensei Majid poured his heart and soul into creating a space where karate enthusiasts could learn and grow.Sensei Majid style was marked by his passion and commitment. He not only imparted the physical techniques of karate but also instilled discipline, respect, and resilience in his students. His caring and nurturing approach fostered a strong sense of camaraderie among the students, creating a tightly-knit karate community.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="video-img">
                    <img src={img_1} />
                  </div>
                </div>
              </div>

              <div className="row  m-0 justify-content-between pt-30">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="video-img2">
                    <img src={img_2} />
                    <button>
                      <p>Follow us on instagram</p>
                    </button>

                    <p>
                     
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="portion2">
                    <p className="bold">
                    How he prepared players to reach new heights of success.
                    </p>
                    <p className="light">
                    As the academy grew, Sensei Butt continued to invest in his students' development, refining his curriculum and training programs. He sought to push their limits, challenging them to reach new heights in their karate journey. His guidance and mentorship were instrumental in shaping talented individuals into skilled karate athletes.

                    Through his relentless efforts, Sensei Butt's academy started producing remarkable results. Several of his students displayed exceptional talent and dedication, making their mark in regional and national-level competitions. Over time, his academy became renowned for producing top-notch karate players.

                    Now, the hard work and dedication have borne fruit, with some of Sensei Butt's finest students representing Pakistan at the highest level - the National Team. Their achievements on the international stage are a testament to Sensei Majid coaching prowess and the values he instilled in them.

                    Sensei Majid Butt's journey from starting a karate academy with determination to grooming players who proudly compete at the National Team level is an inspiring story of passion, perseverance, and unwavering belief in the power of karate to transform lives. His legacy continues to shine through his students' achievements, and his academy stands as a beacon of hope and opportunity for future generations of karateka in Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default AboutUs;
