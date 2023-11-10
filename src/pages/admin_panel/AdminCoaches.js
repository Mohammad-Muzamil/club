import React from 'react'
import "../../assets/panel_css/style.css"
import "../../assets/panel_css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import { faSearch,faBell,faBars,faAngleUp,faAngleDown,faUser, faUserGroup, faPeopleArrows, faUserCheck,
     faQuestionCircle,  faUniversity, faCity, faLocation, faMap, faAddressCard, faAddressBook, faUsers,faKey, faEye, faEyeSlash, faAdd, faEdit, faUpload, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import test_img from "../../assets/test_img.jpg"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import TruncateText from '../../helpers/TruncatedText';
import { Success_light } from '../../helpers/NotifiyToasters';
import { useEffect } from 'react';

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Error_light } from '../../helpers/NotifiyToasters';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { ALL_COACHES, Reset_Password, SEND_COACH_DATA, SPECIFIC_COACH, SPECIFIC_COACH_DELETE, SPECIFIC_COACH_Update } from '../../helpers/api';
import AdminHeader from './AdminHeader';
import AdminSideNavBar from './AdminSideNavBar';
import {GET_BRANCHES,GET_INSTRUCTORS,CREATE_BRANCHE,UPDATE_BRANCHE} from '../../helpers/api'
import { decrypt } from '../../helpers/encryption_decrption';

const AdminCoaches=()=> {
 const nevigate = useNavigate();
 const [newdata,setnewdata]=useState(true);
 const [instructor_id, setinstructor_id]=useState([])
 const [randomNumber, setRandomNumber]=useState("");
 const [deleteuser, setdeleteuser]=useState("");
 const generateRandomNumber = () => {
     const min = 10000; 
     const max = 99999; 
     const randomNums = Math.floor(Math.random() * (max - min + 1)) + min;
     setRandomNumber(randomNums.toString())
   };
   const [profile,setprofile]=useState("");
   const handleImageSelect =(e) => {
       const file = e.target.files[0];
   
       if (file) {
           setprofile(file);
       }
   };
 const [data,setdata]=useState({
    "username":"",
    "email":"",
    "password":"Dummy123",
    "name":"",
    "phone_number":"",
    "address":"",
    "coach_of":"Male",
    "cnic":"",
    "DOB":"",
    "gender":"Male",
    "coach_pkf_id":""
 })
 const [updatedata,setupdatedata]=useState({})
 const onChangeHandle=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
   
 }

 const isAuthenticated= decrypt(sessionStorage.getItem('admin_token'));
 const user_details= decrypt(sessionStorage.getItem('admin_user'));
  
  const [isLoading,setIsLoading]=useState(false)
  const [inst_ids,setinst_ids]=useState([])

  const [id,setid]=useState("")

  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const toggleDrop = () => {
    setDropOpen(!isDropOpen);
  };
 
 

  const changeCoachID=(e)=>{
    setid(e.target.value);
  }

 const  displayCoach=async()=>{
    setIsLoading(true)
    await SPECIFIC_COACH(id).then((response)=>{
        if (response.status==200)
        {
            setupdatedata(response.data)
            setnewdata(false);
            console.log(response.data)
            setIsLoading(false);

        }
        else{
            setIsLoading(false);
        }
    });
    
  }
  const setInst=async()=>{
    setIsLoading(true)
    await ALL_COACHES().then((response)=>{
        if (response.status==200)
        {
            setinst_ids(response.data);
            console.log(response.data)
        setIsLoading(false)

        }
        else{
            setIsLoading(false)

        }
    });
  }
  useEffect(()=>{
    if (isAuthenticated == null || user_details == null || user_details.user.username[0].toLowerCase()!='a' ){
    
        nevigate('/login');
     }
     else{
        setInst();
       generateRandomNumber();
     }
  },[]);

  const onChangeHandles=(e)=>{
    setupdatedata({...updatedata,[e.target.name]:e.target.value})

 }

const showdiv=()=>{
setnewdata(true);
}


const SendCoach=async()=>{
    setIsLoading(true)

    if (data.name!=""&&data.phone_number!=""&& data.DOB!=""&& data.email!=""&& data.cnic!="",data.address!=""&& profile!=""){
        const dataforsending=new FormData();
        dataforsending.append('file',profile);
        {Object.keys(data).map(key => (
            dataforsending.append(`${key}`,`${data[key]}`) 
        ))}
        await SEND_COACH_DATA(dataforsending).then((response)=>{
            if (response.status==200)
            {
            setIsLoading(false)
            setdata({
                "username":"",
                "email":"",
                "password":"Dummy123",
                "name":"",
                "phone_number":"",
                "address":"",
                "coach_of":"Male",
                "cnic":"",
                "DOB":"",
                "gender":"Male",
                "coach_pkf_id":""
             })
            Success_light("Coach created successfully")
                
            }
            else{
        Error_light("Try Again ")
            setIsLoading(false)
            }
        })
        }
    else{
        Error_light("Please Enter Complete Data")
        setIsLoading(false)
    }
}

const updateCoach=async()=>{
    setIsLoading(true);
   if(updatedata.user.email!=""&& updatedata.name!=""&& updatedata.address!=""&& updatedata.phone_number!=""){
    await SPECIFIC_COACH_Update(updatedata.user.id,updatedata).then((response)=>{
        if (response.status==200)
        {
            setInst();
            Success_light("Coach Updated successfully")
            setIsLoading(false)
        }
        else{
        Error_light("Try Again ")
            setIsLoading(false)

        }
    })
   }
   else{
    Error_light("Please Enter Complete Data")
    setIsLoading(false)
   }
}
const DeleteCoach=async()=>{
    setIsLoading(true);
   if(deleteuser=="Delete" && updatedata.user.id!=""){
    await SPECIFIC_COACH_DELETE(updatedata.user.id).then((response)=>{
        if (response.status==200)
        {
            setInst();
            Success_light("Coach Deleted successfully")
            setIsLoading(false)
            setdeleteuser("");
            setnewdata(true)
        }
        else{
        Error_light("Try Again ")
            setIsLoading(false)

        }
    })
   }
   else{
    Error_light("Please Write Delete")
    setIsLoading(false)
   }
}


  return (
<div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& user_details!=null&&<AdminSideNavBar  name={user_details.name} level="Coach" image_path={user_details.profile_image}/>}
        <div className="content">
        {user_details!=null&&<AdminHeader onClickHandler={toggleDrop} name={user_details.name} total_events={"5"} image_path={user_details.profile_image}  />  }
        <Loader show={isLoading} message="Loading..."/>          
        {!isLoading && <div className='container-fluid   ml-auto mr-auto mt-4 d-flex flex-column flex-lg-row flex-xl-row' style={{columnGap:"10px", rowGap:"10px"}} >
        <div className='w-100 mt-4 d-flex p-3' style={{columnGap:"10px" ,backgroundColor:"#ECECEC", borderRadius:"7px"}}>
                <select  onChange={changeCoachID} className=' col-lg-5 col-xl-5 col-md-5 col-7'  style={{height:"45px",backgroundColor:"#FFFFFF"}}>
                <option value="">Select Coach ... </option>
                {inst_ids.map((obj)=>(<option value={obj.user.id}>{obj.name}</option>))}
                </select>
                <button className='btn btn-primary ' style={{width:"120px", height:"45px"}} onClick={displayCoach} ><FontAwesomeIcon icon={faSearch} style={{paddingRight:"5px"}} />Search</button>
            </div>
        </div> 
        }
        {!isLoading&&  newdata&&
        <div className='container-fluid   ml-auto mr-auto mt-4' style={{columnGap:"10px", rowGap:"10px"}} >
            <div className='w-100 mt-4 d-flex flex-column p-3' style={{columnGap:"10px" ,backgroundColor:"#ECECEC", borderRadius:"7px"}}>
                <div className='w-100 d-flex flex-column flex-lg-row flex-xl-row '>
                    <div className='col-12 col-lg-6 col-xl-6 '>
                        <label>Coach Name</label>
                        <input name='name' type='text' 
                          style={{backgroundColor:"#FFFFFF",border:"none"}}
                          onChange={(e) =>{ setdata({ ...data, name: e.target.value , username:"I-"+e.target.value.trim().replace(/\s/g, '')+randomNumber})}}/>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-6 mt-2 '>
                        <label>Coach PKF-ID</label>
                        <input name="coach_pkf_id" type='text' onChange={onChangeHandle} style={{backgroundColor:"#FFFFFF",border:"none"}}/>
                    </div>
                </div>
                <div className='w-100 d-flex flex-column flex-lg-row flex-xl-row '>
                    <div className='col-12 col-lg-6 col-xl-6 '>
                        <label>Address</label>
                        <input name="address" type='text' onChange={onChangeHandle} style={{backgroundColor:"#FFFFFF",border:"none"}}/>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-6'>
                        <label>CNIC</label>
                        <input name="cnic" type='number' onChange={onChangeHandle} style={{backgroundColor:"#FFFFFF",border:"none",marginTop:"7px"}}/>
                    </div>
                </div>
                <div className='w-100 d-flex flex-column flex-lg-row flex-xl-row  mt-1'>
                    <div className='col-12 col-lg-6 col-xl-6 '>
                        <label>Gender</label>
                        <select  name={"gender"} onChange={onChangeHandle} style={{backgroundColor:"#FFFFFF",border:"none",height:"45px"}}>
                        <option value={"Male"} selected>Male</option>
                        <option value={"Female"}>Female</option>
                        </select>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-6'>
                        <label>Coach of (Male/Female) </label>
                        <select  name={"coach_of"} onChange={onChangeHandle} style={{backgroundColor:"#FFFFFF",border:"none",height:"45px"}}>
                        <option value={"Male"} selected>Male</option>
                        <option value={"Female"}>Female</option>
                        </select>
                    </div>
                </div>
                <div className='w-100 d-flex flex-column flex-lg-row flex-xl-row mt-3'>
                    <div className='col-12 col-lg-6 col-xl-6 '>
                        <label>Coach Email</label>
                        <input name="email" type='email' onChange={onChangeHandle} style={{backgroundColor:"#FFFFFF",border:"none"}}/>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-6' >
                        <label>Username</label>
                        <input name="username" readOnly type='text' value={data.username} onChange={onChangeHandle} style={{backgroundColor:"#FFFFFF",border:"none",marginTop:"-2px"}}/>
                    </div>
                </div>
                <div className='w-100 d-flex flex-column flex-lg-row flex-xl-row mt-2'>
                    <div className='col-12 col-lg-6 col-xl-6 '>
                        <label>Password</label>
                        <input name="password" type='text' readonly value={"Dummy123"}  onChange={onChangeHandle} style={{backgroundColor:"#FFFFFF",border:"none"}}/>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-6'>
                        <label>Date of Birth</label>
                        <input name="DOB"  type='date' onChange={onChangeHandle} style={{backgroundColor:"#FFFFFF",border:"none",marginTop:"7px"}}/>
                    </div>
                </div>
                <div className='w-100 d-flex flex-column flex-lg-row flex-xl-row mt-2'>
                <div className='col-12 col-lg-6 col-xl-6 '>
                        <label>Contact</label>
                        <input name="phone_number" type='phone'  onChange={onChangeHandle} style={{backgroundColor:"#FFFFFF",border:"none"}}/>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-6'>
                        <label>Profile Image</label>
                        <input name="profile_image"  type='file' onChange={handleImageSelect} style={{backgroundColor:"#ECECEC",border:"none"}}/>
                    </div>
                </div>
                <div className='w-100 d-flex justify-content-end mt-2' >
                <button type="button" className='btn btn-primary' style={{width:"170px",marginRight:"15px"}} onClick={SendCoach} ><FontAwesomeIcon icon={faAdd} style={{paddingRight:"5px"}} />ADD Coach</button>
                </div>
            </div>
        </div>
        }
        {/* search result  */}
        {!isLoading&& !newdata&&
        <div className='container-fluid   ml-auto mr-auto mt-4' style={{columnGap:"10px", rowGap:"10px"}} >
            <button className='btn btn-primary' onClick={showdiv}>Create Coach</button>
            <div className='w-100 mt-4 d-flex flex-column p-3' style={{columnGap:"10px" ,backgroundColor:"#ECECEC", borderRadius:"7px"}}>
                <div className='w-100 d-flex flex-column flex-lg-row flex-xl-row '>
                    <div className='col-12 col-lg-6 col-xl-6 '>
                        <label>Name</label>
                        <input name='name' type='text' value={updatedata.name}  onChange={onChangeHandles}  style={{backgroundColor:"#FFFFFF",border:"none"}}/>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-6 mt-2 '>
                        <label>Contact Number</label>
                        <input name="contact" type='tel' value={updatedata.phone_number} onChange={onChangeHandles} style={{backgroundColor:"#FFFFFF",border:"none"}}/>
                    </div>
                </div>
                <div className='w-100 d-flex flex-column flex-lg-row flex-xl-row mt-2'>
                    <div className='col-12 col-lg-6 col-xl-6 '>
                        <label>Address</label>
                        <input name="address" type='text' value={updatedata.address} onChange={onChangeHandles} style={{backgroundColor:"#FFFFFF",border:"none"}}/>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-6'>
                     
                        <label>Coach of (Male/Female) </label>
                        <select  name={"coach_of"} value={updatedata.coach_of} onChange={onChangeHandles} style={{backgroundColor:"#FFFFFF",border:"none",height:"45px"}}>
                        <option value={"Male"}>Male</option>
                        <option value={"Female"}>Female</option>
                        </select>
                    </div>
                </div>
                <div className='w-100 d-flex flex-column flex-lg-row flex-xl-row mt-2 '>
                    <div className='col-12 col-lg-6 col-xl-6 '>
                        <label>Email</label>
                        <input name="email" type='email' value={updatedata.user.email} onChange={(e)=>{setupdatedata({...updatedata,email:e.target.value})}} style={{backgroundColor:"#FFFFFF",border:"none"}}/>
                    </div>
                  
                </div>
                <div className='w-100 d-flex justify-content-end mt-2' >
                <button type="button" className='btn btn-primary' style={{width:"170px",marginRight:"15px"}} onClick={updateCoach} ><FontAwesomeIcon icon={faUpload} style={{paddingRight:"5px"}} />Update</button>
                </div>
            </div>
          
        </div>
        }
        {!isLoading&& !newdata&&
        <div className='container-fluid   ml-auto mr-auto mt-4' style={{columnGap:"10px", rowGap:"10px"}} >
                <div className='container-fluid ml-auto mr-auto mt-4 pl-3 mb-4 pb-4 pt-4' style={{backgroundColor:"#ECECEC", borderRadius:"7px",columnGap:"10px", rowGap:"10px"}} >
                    <h3 className='text-danger' style={{fontWeight:"bold",fontStyle:"italic"}} > Delete Coach Account</h3>
                    <div className='col-12 col-lg-6 col-xl-6'>
                        <label>Type "Delete" To Remove this Account</label>
                        <input type={'text'} maxLength={6}  onChange={(e)=>{setdeleteuser(e.target.value)}} style={{backgroundColor:"#FFFFFF",border:"none"}}/>
                    </div>
                    <div className='w-100 d-flex justify-content-end mt-2' >
                        <button type="button" className='btn btn-danger' style={{width:"170px",marginRight:"15px"}} onClick={DeleteCoach} ><FontAwesomeIcon icon={faTrash} style={{paddingRight:"5px"}} />Delete</button>
                    </div>
                </div>
        </div>}
           
        
    </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  AdminCoaches;