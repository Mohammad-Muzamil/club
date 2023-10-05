import React from 'react'
import "../../assets/panel_css/style.css"
import "../../assets/panel_css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import { } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Error_light, Success_light, Throw_Error } from '../../helpers/NotifiyToasters';
import { ACCOUNT_APPROVED, ACCOUNT_APPROVED_ADMIN } from '../../helpers/api';


import { useEffect } from 'react';

import "../../assets/css/profile.css"


const ApprovalGenericTemplate=(prop)=> {
    const isMobileactive = useMediaQuery({ maxWidth:767 });
    const [data,setdata]=useState(prop.data)


    const onHandleChange=async(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
        console.log(data)
        
        
    }
    const accept= async()=>{
        prop.func(true)
   
    if (data.weight!="" && data.weight!=null && data.player_level!==""&& data.date_of_joinning!=""&& data.date_of_birth!=""&& data.monthly_fee!=null&& data.monthly_fee!=""){
        
        console.log(data)
        const response =await ACCOUNT_APPROVED_ADMIN({...data,['is_approved']:true});
        if (response.status==200){
            prop.func(false)
            prop.new_list(response.data)
            Success_light("Successfully Approved")
           
        }
        else{
        prop.func(false)
        Error_light("Try Again")
        }
    }
    else{
        prop.func(false);
        Error_light("Please Enter complete Data")
         }
    }

    const reject=async()=>{
        if (data.comment!=null&& data.comment!=""){
            const response =await ACCOUNT_APPROVED_ADMIN(data);
            if (response.status==200){
                prop.func(false)
                prop.new_list(response.data)
                Success_light("Sucessfully Rejected")
            }
            else{
            prop.func(false)
            Error_light("Please give some reason for rejection")
            }
        }
    }
  return (

    <section>
    <div className="rt-container">
      <div className="col-rt-12">
            <div className="Scriptcontent">
                <div className="student-profile py-4" >
                <div className="container">
                    <div className="row">
                    <div className="col-lg-4 " >
                        <div className="card shadow-sm"style={{backgroundColor:"#ECECEC", border:"1px solid #ECECEC"}}>
                        <div className="card-header bg-transparent text-center">
                            <img className="profile_img" src={ `//${window.location.host}/media/` +data.profile_image}alt="student dp"/>
                            <h3>{data.player_name}</h3>
                        </div>
                        <div className="card-body">
                            <p className="mb-0"style={{color:"gray"}}><strong className="pr-1"style={{color:"black"}} >Username:</strong>{data.user.username}</p>
                            <p className="mb-0"style={{color:"gray"}}><strong className="pr-1"style={{color:"black"}} >Father:</strong>{data.father_name}</p>
                            <p className="mb-0"style={{color:"gray"}}><strong className="pr-1"style={{color:"black"}} >email:</strong>{data.user.email}</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-8" style={{marginTop:isMobileactive?"20px":"0px"}}>
                        <div className="card shadow-sm"style={{backgroundColor:"#ECECEC", border:"1px solid #ECECEC"}}>
                        <div className="card-header bg-transparent border-0">
                            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>General Information</h3>
                        </div>
                        <div className="card-body pt-0">
                            <div>
                                <label>Weight (KG)</label>
                                <input type='number' name='weight' onChange={onHandleChange} value={data.weight} style={{backgroundColor:"#F8F8F8",marginTop:"-5px",height:"40px"}}/>
                            </div>
                            <div>
                                <label>Date of Birth</label>
                                <input type='date' name='date_of_birth' onChange={onHandleChange} value={data.date_of_birth} style={{backgroundColor:"#F8F8F8",marginTop:"-5px",height:"40px" }}/>
                            </div>
                            <div style={{marginTop:"5px"}}>
                                <label>Date of Joinning</label>
                                <input type='date'name='date_of_joinning' onChange={onHandleChange} value={data.date_of_joinning} style={{backgroundColor:"#F8F8F8",marginTop:"-5px",height:"40px" }}/>
                            </div>
                           
                        </div>
                        </div>
                        <div style={{height: "20px"}}></div>
                        <div className="card shadow-sm"style={{backgroundColor:"#ECECEC", border:"1px solid #ECECEC"}}>
                            
                        <div className="card-header bg-transparent border-0">
                            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>For Coach</h3>
                        </div>
                        <div className="card-body pt-0">
                        <div style={{marginTop:"5px"}}>
                                <label>Monthly Fee</label>
                                <input type='number' name='monthly_fee' value={data.monthly_fee} onChange={onHandleChange} style={{backgroundColor:"#F8F8F8",marginTop:"-5px",height:"40px" }}/>
                            </div>
                            <div style={{marginTop:"5px"}}>
                                <label>Player Level</label>
                                <select type='number' name='player_level' onChange={onHandleChange} style={{backgroundColor:"#F8F8F8",marginTop:"-5px",height:"40px" }}>
                                    <option selected value={"District"}>District</option>
                                    <option value={"National Player"}>National Player</option>
                                    <option value={"HEC"}>HEC</option>
                                    <option value={"Provincial Level"}>Provincial Level</option>
                                    <option value={"Department"}>Department</option>
                                </select>
                            </div>
                            <div className='w-100' style={{marginTop:"9px"}} >
                            <label>Comment</label>
                            <textarea rows="2"  name='comment' onChange={onHandleChange}  style={{maxHeight:"70px"}}></textarea>
                            </div>
                            <div className='w-100 d-flex justify-content-end mt-2' style={{columnGap:"7px"}}>
                                <button className='btn btn-danger' onClick={reject} >Reject</button>
                                <button className='btn btn-success' onClick={accept} >Approved</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default  ApprovalGenericTemplate;