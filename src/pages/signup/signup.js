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
import cloud from "../../assets/img/cloud.png"

import '../../assets/css/blurredbackground.css';
import '../../assets/css/signup.css';

import prof_icon from "../../assets/img/prof-icon.png"
import camera from "../../assets/img/camera.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';





function BlurredBackgroundModal({ onImageSelect }) {
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
            onImageSelect(URL.createObjectURL(file));
        }
    };

    const handleSaveChanges = () => {
        handleCloseModal();
    };
    const openFileInput = () => {
      document.getElementById("getimg").click();
    };

    return (
        <div className="">
           
            <div className="col-lg-3 col-12 d-flex  flex-column justify-content-center"  onClick={handleOpenModal} style={{border:"2px dashed gray", alignItems:"center", height:"150px"}}>
                <img src={cloud} style={{height:"50px", width:"50px"}} />
                <p style={{fontFamily: "mont", color:"#87CEEB"}}>click to upload</p>
            </div>

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
                                
                               
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}









const SignUp = (props) => {
    const [currentPart, setCurrentPart] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [profilePicture,setProfilePicture]=useState("");
    const [formData, setFormData] = useState({
        name: '',
        fatherName: '',
        cnic: '',
        weight: '',
        dob: '',
        doj: '',
        city: '',
        branch: '',
        gender: 'male',
        fatherStatus: 'alive',
        email: '',
        playerContact: '',
        guardianContact: '',
        fatherContact: '',
        username: 'dummy',
        password: '',
        address: '',
    });
    const onSubmit=()=>{
        alert(formData.name);
    }
    const handleImageSelection = (selectedImage) => {
        setProfilePicture(selectedImage);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleNext = () => {
        setCurrentPart(currentPart + 1);
    };

    const handlePrevious = () => {
        setCurrentPart(currentPart - 1);
    };
    const [Mobile, setMobile] = useState(false);

   
    useEffect(() => {
        const handleResize = () => {
            setMobile(/Mobi|Android/i.test(navigator.userAgent));
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="BackgroundPicture pt-100 pb-100 d-flex justify-content-center" >
            <div className="col-lg-7  bg-white col-10  pt-3" style={{borderRadius:"10px"}} >
            <h1 className="text-center signup-heading">REGISTRATION</h1>
                <div className="d-flex col-12 mt-3 list-container" >
                    {!Mobile && <div className="d-flex justify-content-start inner-section">
                            <div className="d-flex justify-content-center pt-2 number" >
                                1
                            </div>
                            <div className={`d-flex justify-content-start p-2 ${currentPart==1?"heading-active":"heading"}`} >
                            Personal 
                            </div>
                    </div>}
                    { !Mobile &&<div className="d-flex justify-content-start inner-section">
                            <div className="d-flex justify-content-center pt-2 number" >
                                2
                            </div>
                            <div className={`d-flex justify-content-start p-2 ${currentPart==2?"heading-active":"heading"}`} >
                            Contact
                            </div>
                    </div>}

                    {!Mobile &&<div className="d-flex justify-content-start inner-section">
                            <div className="d-flex justify-content-center pt-2 number" >
                                3
                            </div>
                            <div className={`d-flex justify-content-start p-2 ${currentPart==3?"heading-active":"heading"}`} >
                            Status
                            </div>
                    </div>}
                    {Mobile && currentPart==1 && <div className="d-flex justify-content-start inner-section">
                            <div className="d-flex justify-content-center pt-2 number" >
                                1
                            </div>
                            <div className={`d-flex justify-content-start p-2 ${currentPart==1?"heading-active":"heading"}`} >
                            Personal 
                            </div>
                    </div>}
                    { Mobile && currentPart==2 &&<div className="d-flex justify-content-start inner-section">
                            <div className="d-flex justify-content-center pt-2 number" >
                                2
                            </div>
                            <div className={`d-flex justify-content-start p-2 ${currentPart==2?"heading-active":"heading"}`} >
                            Status
                            </div>
                    </div>}
                    {Mobile && currentPart==3 &&<div className="d-flex justify-content-start inner-section">
                            <div className="d-flex justify-content-center pt-2 number" >
                                3
                            </div>
                            <div className={`d-flex justify-content-start p-2 ${currentPart==3?"heading-active":"heading"}`} >
                            Submit
                            </div>
                    </div>}
                  
                </div>
                {currentPart === 1 &&<div className={`col-12  mt-4 mb-5`} >
                <div class="row g-3">
                    <div className="col-lg-6 col-12 ">
                        <h5>Name<span style={{color:"orange"}}>*</span></h5> 
                        <input type="text" required  value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div className="col-lg-6 col-12 ">
                        <h5>Father Name<span style={{color:"orange"}}>*</span></h5> 
                        <input type="text" required
                         value={formData.fatherName}
                         onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                         />
                    </div>
                </div>
                <div class="row g-3 ">
                    <div className="col-lg-6 col-12  ">
                        <h5>CNIC/B-Form<span style={{color:"orange"}}>*</span></h5> 
                        <input type="text" required 
                         value={formData.cnic}
                         onChange={(e) => setFormData({ ...formData, cnic: e.target.value })}
                        />
                    </div>
                    <div className="col-lg-6 col-12 ">
                        <h5>Weight (KG)<span style={{color:"orange"}}>*</span></h5> 
                        <input type="number" required style={{marginTop:"5px",border:" 1px solid #CCCCCC"}}
                         value={formData.weight}
                         onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                         />
                    </div>
                </div>
                <div class="row g-3">
                    <div className="col-lg-6 col-12" style={{marginTop:"10px"}}>
                        <h5 style={{paddingBottom:"3px"}}>Date of Birth<span style={{color:"orange"}}>*</span></h5> 
                        <input type="date" required style={{border:" 1px solid #CCCCCC"}}
                         value={formData.dob}
                         onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                         />
                    </div>
                    <div className="col-lg-6 col-12 " style={{marginTop:"10px"}}>
                        <h5 style={{paddingBottom:"3px"}}>Date of Joinning<span style={{color:"orange"}}>*</span></h5> 
                        <input type="date" required style={{border:" 1px solid #CCCCCC"}}
                         value={formData.doj}
                         onChange={(e) => setFormData({ ...formData, doj: e.target.value })}
                        />
                    </div>
                </div>
                <div class="row g-3 " >
                    <div className="col-lg-6 col-12 "style={{marginTop:"10px"}}>
                        <h5>City<span style={{color:"orange"}}>*</span></h5> 
                        <select className="selectform"  value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })} >
                            <option value={"faisalabad"}>Faisalabad</option>
                            <option value={"Lahore"}>Lahore</option>
                        </select>
                    </div>
                    <div className="col-lg-6 col-12" style={{marginTop:"10px"}}>
                        <h5>Branch<span style={{color:"orange"}}>*</span></h5> 
                        <select className="selectform"  value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })} >
                            <option value={"youth karate academy"}>Faisalabad</option>
                            
                        </select>
                    </div>
                </div>
                <div class="row g-3" >
                    <div className="col-lg-6 col-12 " style={{marginTop:"10px"}}>
                        <h5>Gender<span style={{color:"orange"}}>*</span></h5> 
                        <select className="selectform"  value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })} >
                            <option select value={"male"} >Male</option>
                            <option value={"female"}>Female</option>
                            <option value={"other"}>Other</option>
                        </select>
                      
                    </div>
                    <div className="col-lg-6 col-12" style={{marginTop:"10px"}}>
                        <h5>Father<span style={{color:"orange"}}>*</span></h5> 
                        <select className="selectform"  value={formData.fatherStatus}
                        onChange={(e) => setFormData({ ...formData, fatherStatus: e.target.value })}>
                            <option select value={"alive"} >Alive</option>
                            <option value={"death"}>Death</option>
                        </select>
                    </div>
                </div>
                <div class="row g-3" >
                    <div className=" col-12" style={{marginTop:"20px"}}>
                    <h5>Player Picture<span style={{color:"orange"}}>*</span></h5>
                        <BlurredBackgroundModal onImageSelect={handleImageSelection} />
                    </div>
                </div>
             

                    <div className="d-flex justify-content-end pt-3 mt-4">
                        <button onClick={handleNext} className="next-btn">next</button>
                    </div>
                </div>}
                {currentPart === 2 &&<div className={`col-12 mt-3 mb-5`} >
                <div class="row g-3 mt-3">
                    <div className="col-lg-6 col-12 "style={{marginTop:"10px"}}>
                        <h5>Email<span style={{color:"orange"}}>*</span></h5> 
                        <input type="email" required  
                         value={formData.email}
                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div className="col-lg-6 col-12 "style={{marginTop:"10px"}}>
                        <h5>Player Contact Number<span style={{color:"orange"}}>*</span></h5> 
                        <input type="tel" required 
                         value={formData.playerContact}
                         onChange={(e) => setFormData({ ...formData, playerContact: e.target.value })}
                        />
                    </div>
                </div>
                <div class="row g-3 mt-2">
                    <div className="col-lg-6 col-12 " style={{marginTop:"10px"}}>
                        <h5>Guardian Contact Number (if any)</h5> 
                        <input type="tel"  
                         value={formData.guardianContact}
                         onChange={(e) => setFormData({ ...formData, guardianContact: e.target.value })}
                        />
                    </div>
                    <div className="col-lg-6 col-12 " style={{marginTop:"10px"}}>
                        <h5>Father Contact Number</h5> 
                        <input type="tel" required 
                         value={formData.fatherContact}
                         onChange={(e) => setFormData({ ...formData, fatherContact: e.target.value })}
                        />
                    </div>
                </div>
                <div class="row g-3 mt-2">
                    <div className="col-lg-6 col-12 " style={{marginTop:"10px"}}>
                        <h5>username<span style={{color:"orange"}}>*</span></h5> 
                        <input type="text"  readOnly 
                         value={formData.username}
                         onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                         />
                    </div>
                    <div className="col-lg-6 col-12 " style={{marginTop:"10px"}}>
                        <h5>Password<span style={{color:"orange"}}>*</span></h5> 
                        <input type={showPassword ? 'text' : 'password'} required 
                         value={formData.password}
                         onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                            
                            <div className="d-flex justify-content-end" style={{paddingRight:"10px", marginTop:"-30px"}}> 
                            {showPassword ? (<FontAwesomeIcon icon={faEyeSlash} onClick={togglePasswordVisibility} />) : (<FontAwesomeIcon icon={faEye} onClick={togglePasswordVisibility}   />)}
                            </div>
                    </div>
                </div>
                <div class="row g-3 mt-3">
                    <div className=" col-12 " style={{marginTop:"10px"}}>
                        <h5>Home Address<span style={{color:"orange"}}>*</span></h5> 
                        <textarea className="textarea" style={{backgroundColor:"#ECEFF8"}} 
                         value={formData.address}
                         onChange={(e) => setFormData({ ...formData, address: e.target.value })} ></textarea>
                    </div>
                </div>
                    <div className="d-flex justify-content-end pt-3 mt-4"style={{columnGap:"7px"}}>
                        <button onClick={handlePrevious}className="pre-btn">Back</button>
                        <button onClick={handleNext} className="next-btn">Next</button>
                    </div>
                </div>}
                {currentPart === 3 &&<div className={`col-12 mt-3`} style={{height:"300px"}}>
                    div 3
                    <div className="d-flex justify-content-end pt-3" style={{columnGap:"7px"}}>
                    <button onClick={handlePrevious}className="pre-btn" >BACK</button>
                        <button  className="next-btn" onClick={onSubmit} >Submit</button>
                    </div>
                </div>}
            </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default SignUp;






