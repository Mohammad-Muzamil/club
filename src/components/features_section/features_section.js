import React from 'react';
import img_1 from "../../assets/img/features_images/progression.png"
import img_2 from "../../assets/img/features_images/workout.png"
import img_3 from "../../assets/img/features_images/nutrition.png"
import { useMediaQuery } from "react-responsive";

const Feature = ({ imgSrc, title, description, backgroundColor }) => {
const isMobileDisplay = useMediaQuery({ maxWidth:767 });

  return (
  <div className="col-lg-4 p-0">
    <div
      className="d-flex align-items-center text-white px-5"
      style={{ minHeight: '300px', backgroundColor,}}
    >
      <img
        className=" "
        src={imgSrc}
        style={{ height: '100px', width: '100px' }}
        alt={title}
      />
      <div>
        <h2 className="text-white mb-3" style={{ fontFamily:"Ethnocentric", fontSize: isMobileDisplay?"19px":"" }}>{title}</h2>
        <p className="text-justify"style={{ fontFamily:"mont" }}>{description}</p>
      </div>
    </div>
  </div>
)}

const FeaturesSection = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <Feature
          imgSrc={img_1}
          title="Progress"
          description="Embark on a journey of continuous growth  through purposeful progression towards your goals."
          backgroundColor="#111111"
        />
        <Feature
          imgSrc={img_2}
          title="Workout"
          description="Transform your body through tailored workouts designed to drive your fitness progression and unlock your full potential."
          backgroundColor="orange"
        />
        <Feature
          imgSrc={img_3}
          title="Nutrition"
          description="Elevate your well-being with balanced nutrition strategies that fuel your body's progression towards optimal health."
          backgroundColor="#111111"
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
