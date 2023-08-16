import React, { Fragment, useEffect, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Yeezy from "../../assets/img/shoes/yeezy.png";
import product1 from "../../assets/img/shoes/product1.png";
import { Link, useNavigate } from "react-router-dom";
import { AllBrands } from "../../helpers/api";
import btnArrowLt from "../../assets/img/hero-btn-arrow-lt.svg";
import btnArrowGt from "../../assets/img/hero-btn-arrow-gt.svg";
import login from "../../assets/img/login.png"
import googleicon from "../../assets/img/googleicon.png"

import '../../assets/css/blurredbackground.css';

import prof_icon from "../../assets/img/prof-icon.png"
import camera from "../../assets/img/camera.png"





function BlurredBackgroundModal() {
    const [showModal, setShowModal] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
        console.log("imagepath", selectedImage)
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
   

    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    const handleSaveChanges = () => {
        handleCloseModal();
    };
    const openFileInput = () => {
      document.getElementById("getimg").click();
    };

    return (
        <div className="modal-demo">
            <button className="open-modal-btn" onClick={handleOpenModal}>
                Open Modal
            </button>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <div className="modal-content">
                            <button className="close-modal-btn" onClick={handleCloseModal}>
                                &times;
                            </button>
  
                            <p className="text-center headingmain" style={{fontFamily: "Ethnocentric"}}>Profile Image</p>
                            {selectedImage &&<p className="text-center mt-1 alertmsg">Uploaded Successfully</p>}
                            <div className="image-container">
                                {selectedImage ? <img src={selectedImage} alt="Selected" />:<img src={prof_icon}/>}
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageSelect}
                                style={{display:"none"}}
                                capture="camera"
                            id="getimg"
                            />
                            <div className="modal-buttons">
                                {!isMobile &&<button className="close-btn"  style={{fontFamily: "Ethnocentric"}}onClick={handleCloseModal}>
                                    Close
                                </button>}
                                {isMobile && 
                                 <button className="" style={{marginRight:"10px"}}  onClick={openFileInput}>
                                     <img src={camera} style={{width:"30px", height:"30px"}}/>
                                </button>}
                                <button className="save-btn" onClick={openFileInput}>
                                     Upload
                                </button>
                                
                                {/* <button className="save-btn" onClick={handleSaveChanges}>
                                    Save Changes
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}



const MultiPartForm = () => {
    const [currentPart, setCurrentPart] = useState(1);

    const handleNext = () => {
        setCurrentPart(currentPart + 1);
    };

    const handlePrevious = () => {
        setCurrentPart(currentPart - 1);
    };

    return (
        <div className="form-container">
            <div className="form">
                <div className="steps">
                    <div className={`step ${currentPart === 1 ? 'active' : ''}`}>Step 1</div>
                    <div className={`step ${currentPart === 2 ? 'active' : ''}`}>Step 2</div>
                    <div className={`step ${currentPart === 3 ? 'active' : ''}`}>Step 3</div>
                </div>
                <div className={`form-part ${currentPart === 1 ? 'active' : ''}`}>
                    <h2>Part 1</h2>
                    {/* Your form fields for Part 1 */}
                    <button onClick={handleNext}>Next</button>
                </div>
                <div className={`form-part ${currentPart === 2 ? 'active' : ''}`}>
                    <h2>Part 2</h2>
                    {/* Your form fields for Part 2 */}
                    <button onClick={handlePrevious}>Previous</button>
                    <button onClick={handleNext}>Next</button>
                </div>
                <div className={`form-part ${currentPart === 3 ? 'active' : ''}`}>
                    <h2>Part 3</h2>
                    {/* Your form fields for Part 3 */}
                    <button onClick={handlePrevious}>Previous</button>
                </div>
            </div>
        </div>
    );
};







const SignUp = (props) => {
    const [currentPart, setCurrentPart] = useState(2);

    const handleNext = () => {
        setCurrentPart(currentPart + 1);
    };

    const handlePrevious = () => {
        setCurrentPart(currentPart - 1);
    };
  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="BackgroundPicture pt-100 pb-100 d-flex justify-content-center">
            <div className="col-lg-4  bg-white col-10"  >
                <div className="d-flex col-12 mt-3 justify-content-around">
                    <div className="col-lg-5 d-flex justify-content-center" style={{height:"40px" ,fontFamily: "Ethnocentric",borderBottom:"1px solid black"}}>
                            Personal Details
                    </div>
                    <div className="col-lg-5 d-flex justify-content-center" style={{height:"40px", fontFamily: "Ethnocentric",borderBottom:"1px solid black"}}>
                           <p> Parents Details</p>
                    </div>
                </div>
                {currentPart === 1 &&<div className={`col-12 bg-success mt-3`} style={{height:"300px"}}>
                    div 1
                    <button onClick={handleNext}>next</button>
                </div>}
                {currentPart === 2 &&<div className={`col-12 bg-success mt-3`} style={{height:"300px"}}>
                    div 2
                    <button onClick={handlePrevious}>pre</button>
                </div>}
            </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default SignUp;





