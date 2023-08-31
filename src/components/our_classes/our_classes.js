import React from 'react';
import img_1 from "../../assets/img/aboutus/img_1.png";

import background from "../../assets/img/Background/footerbackground.png"
const  OurClasses=()=> {


  return (
    <div className="container-fluid " style={{backgroundSize: "cover",backgroundImage: `url(${background})`}} >
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12">
                    <div className="titlepage text-center">
                        <h1 style={{fontFamily:"Ethnocentric", color:"white"}} >CATEGORIES</h1>
                      
                    </div>
                </div>
            </div>
            <div className="row text-center mt-5" style={{marginBottom:"100px"}}>
                <div className="col-md-4 col-sm-6 d_none">
                </div>
                <div className="col-md-4 col-sm-6 margin_bott">
                    <div className="our_yoga">
                    <figure><img src={img_1} alt={{}} style={{width:"200px",height:"200px"}} /></figure>
                        <h3 style={{color:"white",fontFamily:"Ethnocentric"}} >KUMITE</h3>
                        <span style={{color:"white"}} >A Karate Kumite fight is like a skillful game of moves and tactics, where fighters use precise strikes and quick dodges to create a display of combat expertise. They show not just physical strength but also mental focus as they engage in each exchange. These fights highlight the mix of discipline, reflexes, and respect that lies at the heart of Karate.</span>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 d_none">
                </div>
                <div className="col-md-4 col-sm-6 mt-4">
                    <div className="our_yoga">
                    <figure><img src={img_1} alt={{}}style={{width:"200px",height:"200px"}} /></figure>
                        <h3 style={{color:"white",fontFamily:"Ethnocentric"}} >TEAM KUMITE </h3>
                        <span style={{color:"white"}} >A Karate team fight is a captivating blend of collaboration and individual excellence, where groups composed of 5 to 7 players from different weight categories unite to showcase their skills. In this unique format, weight distinctions are set aside as team members combine their strengths to compete against opponents.Embodying the true spirit of unity, the team fight sees diverse players strategically engaging with opponents, showcasing the power of collaboration.</span>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 d_none">
                </div>
                <div className="col-md-4 col-sm-6 mt-4">
                    <div className="our_yoga">
                    <figure><img src={img_1} alt={{}} style={{width:"200px",height:"200px"}} /></figure>
                        <h3 style={{color:"white",fontFamily:"Ethnocentric"}} >TEAM KATA</h3>
                        <span style={{color:"white"}} >A Karate team fight is a synchronized showcase of unity and skill, where groups of martial artists come together to demonstrate their combined strength. With strategic coordination and precise techniques, these teams engage in spirited battles, embodying the essence of teamwork and martial prowess. Each team fight is a dynamic display of strategy, camaraderie, and the disciplined spirit of Karate.</span>
                    </div>
                </div>
                <div className="col-md-4 offset-md-4 col-sm-6 mt-4  margin_top">
                    <div className="our_yoga">
                    <figure><img src={img_1} alt={{}} style={{width:"200px",height:"200px"}} /></figure>
                        <h3 style={{color:"white",fontFamily:"Ethnocentric"}} >KATA</h3>
                        <span style={{color:"white"}} >Kata, a fundamental aspect of Karate, is a solo performance of choreographed movements that encapsulate various techniques, forms, and principles. Practiced with precision, kata serves as a dynamic training tool to enhance technique, balance, and concentration. Each kata tells a story, conveying the essence of martial arts philosophy and the rich heritage of Karate.</span>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default OurClasses;
