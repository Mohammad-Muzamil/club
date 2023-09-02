import React, { Fragment, useEffect, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";

import LeftBranch from"./left_branch"
import RightBranch from"./right_branch"







const Branch = (props) => {
  const [iseven, setiseven]=useState(1);
  const [branches, setbaranches]=useState([])
    
  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        {branches.map( branch=>{
          if (iseven %2!=0){
            setiseven(iseven+1);
            <LeftBranch branch={branch.branch}   location={branch.location} instructor={branch.instructor} address={branch.address} contact={branch.contact}/>
          }
          else{
            setiseven(iseven+1);
            <RightBranch branch={branch.branch}   location={branch.location} instructor={branch.instructor} address={branch.address} contact={branch.contact}/>

          }
        })}
          <LeftBranch branch="National Youth Karate Academy, Faisalabad"   location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d555.2850704383209!2d73.06586310330195!3d31.38517994657137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39225d5223864577%3A0x747cb90558c2e124!2sNational%20Youth%20Martial%20Arts!5e0!3m2!1sen!2s!4v1693596610837!5m2!1sen!2s" instructor="Harris Nadeem" address="Smanabad Sports Complex Pakistan faislabad lahore questtta speshsha " contact="+92 3007675885"/>
          <RightBranch branch="National Youth Karate Academy, Faisalabad"   location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d555.2850704383209!2d73.06586310330195!3d31.38517994657137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39225d5223864577%3A0x747cb90558c2e124!2sNational%20Youth%20Martial%20Arts!5e0!3m2!1sen!2s!4v1693596610837!5m2!1sen!2s" instructor="Harris Nadeem" address="Smanabad Sports Complex Pakistan faislabad lahore questtta speshsha " contact="+92 3007675885"/>
      </LayoutOne>
    </Fragment>
  );
};

export default Branch;





