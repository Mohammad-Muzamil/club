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
                        <h1 style={{fontFamily:"Ethnocentric", color:"white"}} >Our Classes</h1>
                        <span style={{color:"#9C9C8E"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </span>
                    </div>
                </div>
            </div>
            <div className="row text-center mt-5" style={{marginBottom:"100px"}}>
                <div className="col-md-4 col-sm-6 d_none">
                </div>
                <div className="col-md-4 col-sm-6 margin_bott">
                    <div className="our_yoga">
                    <figure><img src={img_1} alt={{}} style={{width:"200px",height:"200px"}} /></figure>
                        <h3 style={{color:"white"}} >Kumite (Fight)</h3>
                        <span style={{color:"white"}} >Lorem ipsum dolor sit amet</span>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 d_none">
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="our_yoga">
                    <figure><img src={img_1} alt={{}}style={{width:"200px",height:"200px"}} /></figure>
                        <h3 style={{color:"white"}} >Team Kumite</h3>
                        <span style={{color:"white"}} >Lorem ipsum dolor sit amet</span>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 d_none">
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="our_yoga">
                    <figure><img src={img_1} alt={{}} style={{width:"200px",height:"200px"}} /></figure>
                        <h3 style={{color:"white"}} >Team Fight</h3>
                        <span style={{color:"white"}} >Lorem ipsum dolor sit amet</span>
                    </div>
                </div>
                <div className="col-md-4 offset-md-4 col-sm-6  margin_top">
                    <div className="our_yoga">
                    <figure><img src={img_1} alt={{}} style={{width:"200px",height:"200px"}} /></figure>
                        <h3 style={{color:"white"}} >Kata</h3>
                        <span style={{color:"white"}} >Lorem ipsum dolor sit amet</span>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default OurClasses;
