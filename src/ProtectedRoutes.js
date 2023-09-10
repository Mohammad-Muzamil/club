import React from "react";
import { Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = (props) => {
  const isAuthenticated= useSelector((state) => state.login)
  const nevigate=useNavigate();
  const {Component}=props;
  if(isAuthenticated==null){
    nevigate("/login")
  }
  return(
    <Component/>
    );
  
 
};

export default ProtectedRoutes;
