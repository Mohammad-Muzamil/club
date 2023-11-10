import React, { Fragment, useEffect, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import { Link, useNavigate } from "react-router-dom";
import { AllBrands, GET_COMPEPTITIONS, VERIFY_COMPETITIONS_DETAILS } from "../../helpers/api";
import btnArrowLt from "../../assets/img/hero-btn-arrow-lt.svg";
import btnArrowGt from "../../assets/img/hero-btn-arrow-gt.svg";
import login from "../../assets/img/login.png"
import googleicon from "../../assets/img/googleicon.png"
import { Error_light, Success, Success_light, Throw_Error, Warning_light } from "../../helpers/NotifiyToasters";
import { Forget_Password_OTP } from "../../helpers/api";
import {setOTPDATA} from "../../redux/actions/OTPActions"
import { HashLoader,RingLoader } from 'react-spinners';
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { setDrawz } from "../../redux/actions/DrawzActions";
import { encrypt } from '../../helpers/encryption_decrption';



const WebLoader=(prop)=>{
  const isMobilemodeActive = useMediaQuery({ maxWidth:767 });
  return(
    <div className="col-12 d-flex justify-content-center align-items-center flex-column">
      
      <RingLoader color="#FFFFFF"  className={`${isMobilemodeActive?"ml-2":"ml-0"}`} size={ isMobilemodeActive?50:100}/>
      <h4 className={`text-white mt-4 ${isMobilemodeActive?"ml-3":"ml-2"}`}>{prop.text}....</h4>

    </div>
  );
}

const Drawzinglogin = (props) => {

  const nevigate=useNavigate();
  const [isLoading,setIsLoading]=useState(false)
  const [competition,setcompetition]=useState([])
  const [pass,setpass]=useState("password");
  const [data,setdata]=useState({
    id:"",
    password:"",
  })
  const settingeye=()=>{
    if(pass=="password"){
        setpass("text");
    }
    else{
        setpass("password")
    }
  }

  const comp=async()=>{
    setIsLoading(true);
    await GET_COMPEPTITIONS().then((response)=>{
        if(response.status==200){
            setcompetition(response.data);
            setIsLoading(false);
        }
        else{
            setIsLoading(false);
        }
    })
  }
useEffect(()=>{
  window.scrollTo(0, 0);
   comp();
},[])



const sendCredentials=async()=>{


    if (data.id!="" &&  data.password !=""){
        setIsLoading(true);
        await VERIFY_COMPETITIONS_DETAILS(data.id,data).then((response)=>{
            if (response.status==200){
                Success("Login Successfully ...");
                setdata({
                    id:"",
                    password:"",
                  });
                  var temp={};
                  for (var i=0;i<competition.length;i++){
                      if (data.id==competition[i].id){
                        temp=competition[i]
                          break;
                      }
                  }
                  sessionStorage.setItem('drawz_info',encrypt(temp));
               
                  setIsLoading(false);
                  nevigate("/drawzing")
            }
            else{
                Error_light("Try Again");
                setIsLoading(false);
            }
        });
    }
    else{
        Warning_light("Please enter password or competition");
    }
}
const handleKeyPress = (event) => {
  if (event.key === 'Enter') {

    sendCredentials();
  }
};
  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="BackgroundPicture pt-40 pb-100">
          <div className="container d-flex justify-content-center" >
          {isLoading&&<WebLoader text="Verifing "/>}
          {!isLoading&&<div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 bg-white d-flex flex-column align-items-center" style={{borderRadius:"7px"}}>
            <h1 className="mt-3" style={{fontFamily: "Ethnocentric"}}>Login</h1>
            <p className="" style={{color:"orange"}}>( only for Administration )</p>
            <div className="col-12 d-flex flex-column">
                <strong>Event </strong>
                <select  onChange={(e)=>setdata({...data,id:e.target.value})} style={{borderColor:"#ECEFF8",backgroundColor:"#ECEFF8",height:"45px"}}>
                    <option value={""}>Select Competition ...</option>
                    {competition.map((obj)=>( <option value={obj.id}>{obj.competition_name}</option>))}
                </select>
                <strong className="mt-3">Password </strong>
                <input type={pass} onChange={(e)=>setdata({...data,password:e.target.value})} style={{borderColor:"#ECEFF8",backgroundColor:"#ECEFF8",height:"45px"}}  onKeyDown={handleKeyPress}/>
                <FontAwesomeIcon icon={pass=="text"?faEyeSlash:faEye} style={{alignSelf:"end",marginTop:"-30px",fontSize:"17px", paddingRight:"10px"}} onClick={settingeye}  />

               
                <button className="btn mt-4 mb-4" style={{alignSelf:"end",width:"120px",backgroundColor:"orange",height:"45px",color:"white",fontFamily: "Ethnocentric"}} onClick={sendCredentials} >Login</button>
             
                
            </div>
          
          </div>}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Drawzinglogin;





