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


import { useEffect } from 'react';

import "../../assets/css/profile.css"


const ApprovalGenericTemplate=(prop)=> {
    const isMobileactive = useMediaQuery({ maxWidth:767 });
 
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
                            <img className="profile_img" src={"https://source.unsplash.com/600x300/?student"} alt="student dp"/>
                            <h3>Ishmam Ahasan Samin</h3>
                        </div>
                        <div className="card-body">
                            <p className="mb-0"><strong className="pr-1">Student ID:</strong>321000001</p>
                            <p className="mb-0"><strong className="pr-1">className:</strong>4</p>
                            <p className="mb-0"><strong className="pr-1">Section:</strong>A</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-8" style={{marginTop:isMobileactive?"20px":"0px"}}>
                        <div className="card shadow-sm"style={{backgroundColor:"#ECECEC", border:"1px solid #ECECEC"}}>
                        <div className="card-header bg-transparent border-0">
                            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>General Information</h3>
                        </div>
                        <div className="card-body pt-0">
                            <table className="table table-bordered">
                            <tr>
                                <th style={{width:"30%"}}>Roll</th>
                              
                                <td>125</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>Academic Year	</th>
                               
                                <td>2020</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>Gender</th>
                                
                                <td>Male</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>Religion</th>
                              
                                <td>Group</td>
                            </tr>
                            <tr>
                                <th style={{width:"30%"}}>blood</th>
                            
                                <td>B+</td>
                            </tr>
                            </table>
                        </div>
                        </div>
                        <div style={{height: "20px"}}></div>
                        <div className="card shadow-sm"style={{backgroundColor:"#ECECEC", border:"1px solid #ECECEC"}}>
                        <div className="card-header bg-transparent border-0">
                            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Approval Status</h3>
                        </div>
                        <div className="card-body pt-0">
                            <div className='w-100' >
                            {/* <input type="textarea" className='form-control'/> */}
                            <textarea rows="2" style={{maxHeight:"70px"}}></textarea>
                            </div>
                            <div className='w-100 d-flex justify-content-end mt-2' style={{columnGap:"7px"}}>
                                <button className='btn btn-danger' >Reject</button>
                                <button className='btn btn-success' >Approved</button>
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