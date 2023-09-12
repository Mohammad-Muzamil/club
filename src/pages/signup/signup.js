import React, { Fragment, useEffect, useState, useRef } from "react";
import LayoutOne from "../../layouts/LayoutOne";

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
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import success from "../../assets/img/smaill.gif"
import tryagain from "../../assets/img/tryagain.gif"
import { GET_BRANCHES } from "../../helpers/api";




const RenderTime = ({ remainingTime }) => {
  const currentTime = useRef(remainingTime);
  const prevTime = useRef(null);
  const isNewTimeFirstTick = useRef(false);
  const [, setOneLastRerender] = useState(0);

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  if (remainingTime === 0) {
    remainingTime="Uploading..";
    setTimeout(() => {
      setOneLastRerender((val) => val + 1);
    }, 20);
  }

  const isTimeUp = isNewTimeFirstTick.current;

  return (
    <div className="time-wrapper">
      <div key={remainingTime} style={{fontSize:"20px"}} className={`time ${isTimeUp ? "up" : ""}`}>
        {remainingTime}
      </div>
      {prevTime.current !== null && (
        <div
          key={prevTime.current}
          className={`time ${!isTimeUp ? "down" : ""}`}
        >
     
        </div>
      )}
    </div>
  );
};


function MyCountdownTimer({ currentTime }) {
    return (
      <div>
        <CountdownCircleTimer
          isPlaying
          duration={5}
          colors={['#FFA500']}
          colorsTime={[3]}
        >
          {RenderTime}
        </CountdownCircleTimer>
      </div>
    );
  }


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
    const [currentTime, setCurrentTime] = useState(5);
    const[total_branch, set_total_branch]=useState([]);
    const [randomNumber, setRandomNumber]=useState("");

    const GETBranches=async()=>{
      await GET_BRANCHES().then((response)=>{
          if (response.status==200){
              set_total_branch(response.data)
          }
      });
    }

  useEffect(() => {
    GETBranches();
    const interval = setInterval(() => {
      if (currentTime > 0) {
        setCurrentTime(currentTime - 1);
    }
    else{
        settimerstatus(false)
        // if else if show success or error 
        
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [currentTime]);
    const [currentPart, setCurrentPart] = useState(3);
    const [showPassword, setShowPassword] = useState(false);
    const [profilePicture,setProfilePicture]=useState("");
    const [status, setstatus]=useState(false)
    const [timerstatus, settimerstatus]=useState(true)
    const [formData, setFormData] = useState({
        name: "",
        fatherName: "",
        cnic: "",
        weight: "",
        dob: "",
        doj:"",
        city: "",
        branch: "",
        gender: "Male",
        fatherStatus: "Alive",
        email: "",
        playerContact: "",
        guardianContact: "",
        fatherContact: "",
        username:"",
        password: "",
        address: "",
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
        
        if (formData.name!="" && formData.fatherName!="" && formData.cnic!="" &&
            formData.weight!="" && formData.dob!="" && formData.doj!="" && formData.city!=""&&
            formData.branch!="" && formData.gender!=""&& formData.fatherStatus!=""&& profilePicture!="")
        {
            setCurrentPart(currentPart + 1);
        }
        else{

        }
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
                            onChange={(e) =>{ setFormData({ ...formData, name: e.target.value, username:"P-"+e.target.value+randomNumber})}} />
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
                        <input type="number" required maxLength={13}
                         value={formData.cnic}
                         onChange={(e) => setFormData({ ...formData, cnic: e.target.value })}
                        />
                    </div>
                    <div className="col-lg-6 col-12 ">
                        <h5>Weight (KG)<span style={{color:"orange"}}>*</span></h5> 
                        <input type="number" required style={{marginTop:"0px",border:" 1px solid #CCCCCC"}}
                         value={formData.weight}
                         onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                         />
                    </div>
                </div>
                <div class="row g-3 mt-1">
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
                <div class="row g-3 mt-1 " >
                    <div className="col-lg-6 col-12 "style={{marginTop:"10px"}}>
                        <h5>City<span style={{color:"orange"}}>*</span></h5> 
                        <select className="selectform"  value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })} >
                            <option value={"Faisalabad"}>Faisalabad</option>
                            <option value={"Lahore"}>Lahore</option>
                        </select>
                    </div>
                    <div className="col-lg-6 col-12" style={{marginTop:"10px"}}>
                        <h5>Branch<span style={{color:"orange"}}>*</span></h5> 
                        <select className="selectform"  value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })} >
                            {total_branch.map((brn)=>(
                            <option value={`${brn.name}`}>{brn.name}</option>

                            ))}
                            
                        </select>
                    </div>
                </div>
                <div class="row g-3 mt-1" >
                    <div className="col-lg-6 col-12 " style={{marginTop:"10px"}}>
                        <h5>Gender<span style={{color:"orange"}}>*</span></h5> 
                        <select className="selectform"  value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })} >
                            <option select value={"Male"} >Male</option>
                            <option value={"Female"}>Female</option>
                            <option value={"Other"}>Other</option>
                        </select>
                      
                    </div>
                    <div className="col-lg-6 col-12" style={{marginTop:"10px"}}>
                        <h5>Father<span style={{color:"orange"}}>*</span></h5> 
                        <select className="selectform"  value={formData.fatherStatus}
                        onChange={(e) => setFormData({ ...formData, fatherStatus: e.target.value })}>
                            <option select value={"Alive"} >Alive</option>
                            <option value={"Death"}>Death</option>
                        </select>
                    </div>
                </div>
                <div class="row g-3 mt-1" >
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
                        <input type="tel" required maxLength={11}
                         value={formData.playerContact}
                         onChange={(e) => setFormData({ ...formData, playerContact: e.target.value })}
                        />
                    </div>
                </div>
                <div class="row g-3 mt-2">
                    <div className="col-lg-6 col-12 " style={{marginTop:"10px"}}>
                        <h5>Guardian Contact Number (if any)</h5> 
                        <input type="tel"  maxLength={11}
                         value={formData.guardianContact}
                         onChange={(e) => setFormData({ ...formData, guardianContact: e.target.value })}
                        />
                    </div>
                    <div className="col-lg-6 col-12 " style={{marginTop:"10px"}}>
                        <h5>Father Contact Number</h5> 
                        <input type="tel" required maxLength={11}
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
                         value={formData.password} className="mt-2"
                         onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                            
                            <div className="d-flex justify-content-end" style={{paddingRight:"10px", marginTop:"-30px"}}> 
                            {showPassword ? (<FontAwesomeIcon icon={faEyeSlash} onClick={togglePasswordVisibility} />) : (<FontAwesomeIcon icon={faEye} onClick={togglePasswordVisibility}   />)}
                            </div>
                    </div>
                </div>
                <div class="row g-3 mt-1">
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
                {currentPart === 3 &&
                <div className={`col-12 mt-3 mb-4`} >
                    <div className="d-flex justify-content-center mt-5 w-100" >
                    {/* <CountdownCircleTimer
                    isPlaying
                    duration={3}
                    colors={["#FFA500"]}
                    colorsTime={[3]}
                    >
                    {RenderTime }      
                    
                    </CountdownCircleTimer> */}
                     <MyCountdownTimer currentTime={currentTime} />
                
                    </div>
                    { status && !timerstatus && 
                     <div>
                         <div className="d-flex flex-column " style={{alignItems:"center"}}>
                            <img src={success} style={{height:"200px", width:"250px"}}/>
                            <h4 className="text-success"  style={{fontFamily:"Ethnocentric"}}>Congratulations </h4>
                            <h5 className="text-success"style={{fontFamily:"mont"}} >Data Uploaded Successfully </h5>
                        </div>
                        <div className="d-flex justify-content-end pt-3" style={{columnGap:"7px"}}>
                            <button  className="next-btn" style={{width:"300px"}} onClick={onSubmit} >BACK TO LOGIN</button>
                        </div>
                    </div>}
                    { !status && !timerstatus &&
                     <div>
                         <div className="d-flex flex-column " style={{alignItems:"center"}}>
                            <img src={tryagain} style={{height:"200px", width:"250px"}}/>
                            <h3 className="text-danger text-center mt-2"  style={{fontFamily:"Ethnocentric"}}> SORRY FOr INCONVIENCE</h3>
                            <h5 className="text-danger "style={{fontFamily:"mont"}} > Please Try Again </h5>

                          
                        </div>
                        <div className="d-flex justify-content-end pt-3" style={{columnGap:"7px"}}>
                            <button  className="pre-btn" style={{width:"300px", height:"40px"}} onClick={handlePrevious} >BACK</button>
                        </div>
                    </div>}
                 
                   
                </div>}
            </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default SignUp;






