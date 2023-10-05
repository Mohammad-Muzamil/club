import React, { Fragment, useEffect, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";

import LeftBranch from"./left_branch"
import RightBranch from"./right_branch"

import { GET_BRANCHES } from "../../helpers/api";





const Branch = (props) => {
  const [iseven, setiseven]=useState(1);
  const [branches, setbaranches]=useState([])
  const[show,setshow]=useState(false)
  const get_branch=async()=>{
    await GET_BRANCHES("1").then((response)=>{
      if(response.status==200){
        setbaranches(response.data)
        console.log(response.data)
      }
    })
  }
  useEffect(()=>{
    get_branch();
  },[])
    
  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        {branches.map( (branch,index)=>(
        
            <div>
             {index%2==0&&<LeftBranch branch={branch.name}   location={branch.location} instructor={branch.email} address={branch.address} contact={branch.contact}/>}
       
            {index%2!==0&&<RightBranch branch={branch.name}   location={branch.location} instructor={branch.email} address={branch.address} contact={branch.contact}/>}
            </div>
        ))}
          
      </LayoutOne>
    </Fragment>
  );
};

export default Branch;





