import React, { useEffect } from 'react';
import $ from 'jquery';
import pic_1 from "../../assets/testinomial_pic/testinomial.jpg"
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../assets/css/testinomial.css'

import Jahangir from "../../assets/testinomial_pic/jhangir.jpg"
import Nadeem from "../../assets/testinomial_pic/nadeem.jpg"
import Mehboob from "../../assets/testinomial_pic/mehboob_alam.png"
import Hammad from "../../assets/testinomial_pic/hammad.jpg"


const TestimonialSlider = () => {
  useEffect(() => {
    // Initialize the Bootstrap carousel
    $('#carouselId').carousel();
  }, []);

  return (
    <div className="container-fluid position-relative testimonial my-5" >
      <div className="container">
        <div className="row px-3 align-items-center">
          <div className="col-md-6 " style={{backgroundColor:"#111111"}}>
            <div className="d-flex align-items-center px-3" style={{ minHeight: '450px' }}>
              <div id="carouselId" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselId" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselId" data-slide-to="1"></li>
                  <li data-target="#carouselId" data-slide-to="2"></li>
                  <li data-target="#carouselId" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner mt-5" role="listbox">
                  <div className="carousel-item active">
                    <div className="d-flex align-items-center mb-4 text-white">
                      <img width="80" height="80" className="rounded-circle bg-dark p-2" src={Jahangir} alt="Image" />
                      <div className="pl-4">
                        <h4 className="text-white" style={{fontFamily:"Ethnocentric"}}>M Jahangir</h4>
                        <p className="m-0" style={{color:"gray"}}>Chairman PKF</p>
                      </div>
                    </div>
                    <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4 text-justify ">
                    I'm truly impressed by National Youth Karate Academies' significant contributions to the martial arts community. Their dedication to fostering skilled athletes and promoting values of respect and discipline is truly commendable. With a perfect blend of tradition and innovation, National Youth Karate Academies stands as a beacon of excellence in the world of karate. I wholeheartedly endorse them for an authentic and enriching karate experience. Their commitment to nurturing both physical and character development sets them apart.
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="d-flex align-items-center mb-4 text-white">
                      <img width="80" height="80" className="rounded-circle bg-dark p-2" src={Nadeem} alt="Image" />
                      <div className="pl-4">
                        <h4 className="text-white" style={{fontFamily:"Ethnocentric"}}>M Nadeem</h4>
                        <p className="m-0" style={{color:"gray"}}>G.Secretary Punjab</p>
                      </div>
                    </div>
                    <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                    I have witnessed firsthand the remarkable impact of National Youth Karate Academies in our region. Their commitment to nurturing talent, fostering discipline, and upholding the traditions of karate is truly noteworthy. National Youth Karate Academies serves as a valuable asset to our martial arts community, consistently delivering top-tier training and instilling values that extend beyond the dojo. I confidently recommend National Youth Karate Academies to anyone seeking authentic karate education and personal growth.
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="d-flex align-items-center mb-4 text-white">
                      <img width="80" height="80" className="rounded-circle bg-dark p-2" src={Hammad} alt="Image" />
                      <div className="pl-4">
                        <h4 className="text-white" style={{fontFamily:"Ethnocentric"}}>M Hammad</h4>
                        <p className="m-0" style={{color:"gray"}}>DSO Faislabad</p>
                      </div>
                    </div>
                    <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                      In my role as a Sports Officer in Faisalabad, I've had the privilege of observing the significant impact of National Youth Karate Academies. Their dedication to enhancing the skills of budding athletes, along with their unwavering focus on discipline and character development, truly sets them apart. National Youth Karate Academies stands as a valuable asset for our community, consistently delivering top-notch training and cultivating an environment conducive to growth. I wholeheartedly recommend National Youth Karate Academies.
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="d-flex align-items-center mb-4 text-white">
                      <img width="80" height="80" className="rounded-circle bg-dark p-2" src={Mehboob} alt="Image" />
                      <div className="pl-4">
                        <h4 className="text-white" style={{fontFamily:"Ethnocentric"}}>Mehboob Alam</h4>
                        <p className="m-0" style={{color:"gray"}}>Ex-National Champion</p>
                      </div>
                    </div>
                    <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                    Drawing on my experience as an Ex-National Champion, I'm delighted to acknowledge the exceptional contributions of National Youth Karate Academies to the world of karate. Their dedication to refining the skills of budding athletes, alongside their unwavering commitment to discipline and character development, truly sets them apart. National Youth Karate Academies stands as a beacon of excellence, consistently delivering top-tier training and fostering an environment that nurtures growth.
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6" >
            <div className="pl-md-3 d-none d-md-block" >
              <h1 className=""style={{fontFamily:"Ethnocentric",color:"white"}}>Testimonial</h1>
         
              <p className="m-0 text-white">
              National Youth Karate Academies embodies excellence in every sense. Their commitment to nurturing both physical prowess and unwavering values sets them apart. With a perfect blend of tradition and innovation, they offer an authentic and enriching karate experience that leaves a lasting impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
