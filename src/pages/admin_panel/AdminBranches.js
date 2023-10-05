import React from 'react'
import "../../assets/panel_css/style.css"
import "../../assets/panel_css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import { faSearch,faBell,faBars,faAngleUp,faAngleDown,faUser, faUserGroup, faPeopleArrows, faUserCheck,
     faQuestionCircle,  faUniversity, faCity, faLocation, faMap, faAddressCard, faAddressBook, faUsers,faKey, faEye, faEyeSlash, faAdd, faEdit, faUpload } from '@fortawesome/free-solid-svg-icons';
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
import { Reset_Password } from '../../helpers/api';
import AdminHeader from './AdminHeader';
import AdminSideNavBar from './AdminSideNavBar';
import {GET_BRANCHES,GET_INSTRUCTORS,CREATE_BRANCHE,UPDATE_BRANCHE} from '../../helpers/api'

const AdminBranches=()=> {
 const nevigate = useNavigate();
 const [newdata,setnewdata]=useState(true);
 const [data,setdata]=useState({
    "instructor_id":"",
    "name":"",
    "contact":"",
    "address":"",
    "location":"",
    "email":""
 })
 const [updatedata,setupdatedata]=useState({})
 const onChangeHandle=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
   
 }

  const isAuthenticated= useSelector((state) => state.login)
  const user_details= useSelector((state) => state.user)
  
  const [isLoading,setIsLoading]=useState(false)
  const [branch,setbranches]=useState([])
  const [instructor_id, setinstructor_id]=useState([])
  const [id,setid]=useState("")

  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const toggleDrop = () => {
    setDropOpen(!isDropOpen);
  };
  const setallbranches=async()=>{
    setIsLoading(true);
    await GET_BRANCHES("1").then((response)=>{
        if (response.status==200){
            setbranches(response.data);
            setIsLoading(false);
        }
        else{
            setIsLoading(false);
        }
    })
  }
  const setInstructors=async()=>{
    setIsLoading(true)
    await GET_INSTRUCTORS().then((response)=>{
        if(response.status==200){
        setIsLoading(false)
            setinstructor_id(response.data)
        }
        else{
            setIsLoading(false)
        }
    })
  }

  const changeBranchID=(e)=>{
    setid(e.target.value);
  }

 const  displayBranch=async()=>{
    setIsLoading(true)
    if(id!="")
    {
        await GET_BRANCHES(id).then((response)=>{
            if (response.status==200){
                setupdatedata(response.data)
                setnewdata(false);
                setIsLoading(false)
            }
            else{
                 setIsLoading(false)

            }
        })
    }
    else{
        Error_light("Please select branch ....")
        setIsLoading(false)

    }
  }
  
  useEffect(()=>{
    if (isAuthenticated === "" || user_details.user.username[0].toLowerCase()!='a'){
        nevigate('/login');
     }
     else{
       setallbranches();
       setInstructors();
       
     }
  },[]);
  const onChangeHandles=(e)=>{
    setupdatedata({...updatedata,[e.target.name]:e.target.value})

 }

const showdiv=()=>{
setnewdata(true);
}
const sendBranch=async()=>{
    setIsLoading(true)
    const isDataValid = Object.values(data).every(value => value !== "");
    if (isDataValid){
        await CREATE_BRANCHE(data).then((response)=>{
            if (response.status==200){
                setIsLoading(false)
                setallbranches();
                setdata({
                    "instructor_id":"",
                    "name":"",
                    "contact":"",
                    "address":"",
                    "location":"",
                    "email":""
                 })
                Success_light("Branch Created Successfully")
            }
            else if (response.status==500){
                Error_light("This Instructor is already assign to other branch")
                setIsLoading(false)
            }
            else{
                Error_light("Try Again")
                setIsLoading(false)

            }
        })
    }
    else{
        Error_light("Please Enter Complete Data")
        setIsLoading(false)
    }
}
const UpdateBranch=async()=>{
    setIsLoading(true)
    const isDataValid = Object.values(updatedata).every(value => value !== "");
    if (isDataValid){
        await UPDATE_BRANCHE(updatedata).then((response)=>{
            if (response.status==200){
                setIsLoading(false)
                Success_light("Branch Updated Successfully")
            }
            else if (response.status==500){
                Error_light("This Instructor is already assign to other branch")
                setIsLoading(false)
            }
            else{
                Error_light("Try Again")
                setIsLoading(false)

            }
        })
    }
    else{
        Error_light("Please Enter Complete Data")
        setIsLoading(false)
    }
}
 


  return (
<div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& <AdminSideNavBar  name={user_details.name} level="Coach" image_path={user_details.profile_image}/>}
        <div className="content">
        <AdminHeader onClickHandler={toggleDrop} name={user_details.name} total_events={"5"} image_path={user_details.profile_image}  />  
        <Loader show={isLoading} message="Loading..."/>          
        {!isLoading && <div className='container-fluid   ml-auto mr-auto mt-4 d-flex flex-column flex-lg-row flex-xl-row' style={{columnGap:"10px", rowGap:"10px"}} >
        <div className='w-100 mt-4 d-flex p-3' style={{columnGap:"10px" ,backgroundColor:"#ECECEC", borderRadius:"7px"}}>
                <select  onChange={changeBranchID} className=' col-lg-5 col-xl-5 col-md-5 col-8'  style={{height:"45px",backgroundColor:"#FFFFFF"}}>
                <option value="">Select Branch ...</option>
                {branch.map((obj)=>(<option value={obj.id}>{obj.name}</option>))}
                </select>
                <button className='btn btn-primary ' style={{width:"120px", height:"45px"}} onClick={displayBranch} ><FontAwesomeIcon icon={faSearch} style={{paddingRight:"5px"}} />Search</button>
            </div>
        </div> 
        }
        {!isLoading&&  newdata&&
        <div className='container-fluid   ml-auto mr-auto mt-4' style={{columnGap:"10px", rowGap:"10px"}} >
            <div className='w-100 mt-4 d-flex flex-column p-3' style={{columnGap:"10px" ,backgroundColor:"#ECECEC", borderRadius:"7px"}}>
                <div className='w-100 d-flex flex-column flex-lg-row flex-xl-row '>
                    <div className='col-12 col-lg-6 col-xl-6 '>
                        <label>Branch Name</label>
                        <input name='name' type='text' onChange={onChangeHandle}  style={{backgroundColor:"#FFFFFF",border:"none"}}/>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-6 mt-2 '>
                        <label>Branch Contact Number</label>
                        <input name="contact" type='tel' onChange={onChangeHandle} style={{backgroundColor:"#FFFFFF",border:"none"}}/>
                    </div>
                </div>
                <div className='w-100 d-flex flex-column flex-lg-row flex-xl-row '>
                    <div className='col-12 col-lg-6 col-xl-6 '>
                        <label>Branch Address</label>
                        <input name="address" type='text' onChange={onChangeHandle} style={{backgroundColor:"#FFFFFF",border:"none"}}/>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-6'>
                        <label>Branch Location on Map</label>
                        <input name="location" type='text' onChange={onChangeHandle} style={{backgroundColor:"#FFFFFF",border:"none"}}/>
                    </div>
                </div>
                <div className='w-100 d-flex flex-column flex-lg-row flex-xl-row '>
                    <div className='col-12 col-lg-6 col-xl-6 '>
                        <label>Branch Email</label>
                        <input name="email" type='email' onChange={onChangeHandle} style={{backgroundColor:"#FFFFFF",border:"none"}}/>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-6'>
                        <label>Instructor</label>
                        <select name="instructor_id" onChange={onChangeHandle} style={{backgroundColor:"#FFFFFF",border:"none", height:"45px"}}>
                            <option value={""}></option>
                            {instructor_id.map((obj)=>(
                                <option value={obj.user.id}>{obj.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='w-100 d-flex justify-content-end mt-2' >
                <button type="button" className='btn btn-primary' style={{width:"170px",marginRight:"15px"}} onClick={sendBranch} ><FontAwesomeIcon icon={faAdd} style={{paddingRight:"5px"}} />ADD Branch</button>
                </div>
            </div>
        </div>
        }
        {/* search result  */}
        {!isLoading&& !newdata&&
        <div className='container-fluid   ml-auto mr-auto mt-4' style={{columnGap:"10px", rowGap:"10px"}} >
            <button className='btn btn-primary' onClick={showdiv}>Create Branch</button>
            <div className='w-100 mt-4 d-flex flex-column p-3' style={{columnGap:"10px" ,backgroundColor:"#ECECEC", borderRadius:"7px"}}>
                <div className='w-100 d-flex flex-column flex-lg-row flex-xl-row '>
                    <div className='col-12 col-lg-6 col-xl-6 '>
                        <label>Branch Name</label>
                        <input name='name' type='text' value={updatedata.name}  onChange={onChangeHandles}  style={{backgroundColor:"#FFFFFF",border:"none"}}/>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-6 mt-2 '>
                        <label>Branch Contact Number</label>
                        <input name="contact" type='tel' value={updatedata.contact} onChange={onChangeHandles} style={{backgroundColor:"#FFFFFF",border:"none"}}/>
                    </div>
                </div>
                <div className='w-100 d-flex flex-column flex-lg-row flex-xl-row '>
                    <div className='col-12 col-lg-6 col-xl-6 '>
                        <label>Branch Address</label>
                        <input name="address" type='text' value={updatedata.address} onChange={onChangeHandles} style={{backgroundColor:"#FFFFFF",border:"none"}}/>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-6'>
                        <label>Branch Location on Map</label>
                        <input name="location" type='text'  value={updatedata.location} onChange={onChangeHandles} style={{backgroundColor:"#FFFFFF",border:"none"}}/>
                    </div>
                </div>
                <div className='w-100 d-flex flex-column flex-lg-row flex-xl-row '>
                    <div className='col-12 col-lg-6 col-xl-6 '>
                        <label>Branch Email</label>
                        <input name="email" type='email' value={updatedata.email} onChange={onChangeHandles} style={{backgroundColor:"#FFFFFF",border:"none"}}/>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-6'>
                        <label>Instructor</label>
                        <select name="instructor_id" value={updatedata.instructor_id} onChange={onChangeHandles} style={{backgroundColor:"#FFFFFF",border:"none", height:"45px"}}>
                            <option value={""}></option>
                            {instructor_id.map((obj)=>(
                                <option value={obj.user.id}>{obj.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='w-100 d-flex justify-content-end mt-2' >
                <button type="button" className='btn btn-primary' style={{width:"170px",marginRight:"15px"}} onClick={UpdateBranch} ><FontAwesomeIcon icon={faUpload} style={{paddingRight:"5px"}} />Update</button>
                </div>
            </div>
        </div>
        }
        
    </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  AdminBranches;