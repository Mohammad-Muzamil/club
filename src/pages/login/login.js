import React, { Fragment, useEffect, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import { Link, useNavigate } from "react-router-dom";
import { ALL_USERS_API, AllBrands, GET_BRANCH_FOR_STUDENT } from "../../helpers/api";
import btnArrowLt from "../../assets/img/hero-btn-arrow-lt.svg";
import btnArrowGt from "../../assets/img/hero-btn-arrow-gt.svg";
import login from "../../assets/img/login.png"
import googleicon from "../../assets/img/googleicon.png"
import { Throw_Error, Warning_light } from "../../helpers/NotifiyToasters";
import { Login_API,USER_API_SELECTION } from "../../helpers/api";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../redux/actions/LoginActions";
import { setUser } from "../../redux/actions/userActions";
import { setBranch } from "../../redux/actions/BranchActions";
import { GET_BRANCH } from '../../helpers/api';

import { encrypt } from "../../helpers/encryption_decrption";



const Login = (props) => {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const[username,setusername]=useState(null)
  const[password,setpassword]=useState(null)
  const [validuserslist,setvaliduserslist]=useState([])
  const [userid,setuserid]=useState("")


  const set_std_branch=async(id)=>{
    
    await GET_BRANCH_FOR_STUDENT(id).then((response)=>{
      if (response.status==200)
      {
        sessionStorage.setItem('ply_branch',encrypt(response.data));
       
      }
      else{

      }
    })
  }
  const Set_Branch=async (id,person)=>{
    await GET_BRANCH(id).then((response)=>{
      if (response.status==200)
      {
        if (person=="i"){
          sessionStorage.setItem('inst_branch',encrypt(response.data));
        }
   
      }
      else{
      }
    })
  }
  const fetchData = async () => {
    try {
      const response = await ALL_USERS_API();
      if (response.status === 200) {
        setvaliduserslist(response.data);
       
      } else {
        setvaliduserslist([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(()=>{
    window.scrollTo(0, 0);
    fetchData();
  },[])

  const getUser=async(user_id)=>{
    await USER_API_SELECTION(user_id).then((response)=>{
      if(response.status==200){
        // dispatch(setUser(response.data));
        if(response.data.user.username[0].toLowerCase() == "i"){
          sessionStorage.setItem('inst_user',encrypt(response.data))

        }else if (response.data.user.username[0].toLowerCase() =="a"){
          sessionStorage.setItem('admin_user',encrypt(response.data))

        }else if (response.data.user.username[0].toLowerCase() =="p"){
          sessionStorage.setItem('ply_user',encrypt(response.data))
          set_std_branch(response.data.branch_id);

        }
      
      }
    });
  }

  const handlechangeusername=(event)=>{
    setusername(event.target.value)
  }
  const handlechangepassword=(event)=>{
    setpassword(event.target.value)
  }

  const VerifyUser=async()=>{
    if(username==null || password==null ||username==""|| password=="")
    {
      Throw_Error("Enter username and password")
      return;
    }
    let valid=false
    validuserslist.map(ply=>{
      if(ply.username.toString().toLowerCase()==username.toString().toLowerCase()){
        getUser(ply.id);
     
        if (ply.username[0].toLowerCase()=='i')
        {
          Set_Branch(ply.id,"i");
        }
        valid=true;
        return;
      }
    })
    if(valid){
      await Login_API(username,password).then((response)=>{
        if(response.status==200){
        let token=response.data.token 
        
        // dispatch(setToken(token));
        if (username[0].toLowerCase()=='i')
        {
          sessionStorage.setItem('inst_token',encrypt(token)); // added into session 
          nevigate("/coach")
        }
        else if (username[0].toLowerCase()=='a'){
          sessionStorage.setItem('admin_token',encrypt(token)); // added into session   
          nevigate("/admin")
          }
        else if (username[0].toLowerCase()=='p'){
          sessionStorage.setItem('ply_token',encrypt(token)); // added into session   
          nevigate("/student")
          }

        valid=false
        }
        else{
          Throw_Error("Invalid username or password")
        }
      });  
    }
    else if(username!="" && username!=null){
      Throw_Error("User Not Exist")
    }
   
  }

  const handleKeyPress = async(event) => {
    if (event.key === 'Enter') {
  
      VerifyUser();
    }
  };
  const googlelogin=()=>{
    Warning_light("Apologies, this service is temporarily unavailable.");
  }

  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="BackgroundPicture pt-20 pb-100">
          <div className="container">
            {/* <p className="page-info-text pb-100 ">LOGIN</p> */}
           
            <div className="row d-flex justify-content-center " >
            
            <div className="col-lg-6 col-12 col-md-6 login-container1">
                <div className="w-100 ">
                    <h1>LOGIN</h1>
                <p className="text-center pt-2"> Welcomeback! Please enter your details</p>
                </div>
                <div className="d-flex justify-content-center mt-2">
                    <img src={login} style={{height:'100px', width:'100px'}}/>
                </div>
                <div className="w-100 ">
                    <div className="input-container1">
                        <h3>Username<span style={{color:"orange"}}>*</span></h3> 
                        <input type="email" onChange={handlechangeusername} />
                      
                    </div>
                    <div className="input-container1">
                        <h3>Password<span style={{color:"orange"}}>*</span></h3> 
                        <input type="password" onKeyDown={handleKeyPress} onChange={handlechangepassword} />
                    </div>
                    <div className="input-container1 d-flex w-100" style={{justifyContent:'flex-end', marginTop:"-10px"}}>
                       <Link to={process.env.PUBLIC_URL+"/forgetpassword"}> <span> Forget Password</span></Link>
                    </div>
                    <div className="input-container1 " style={{marginTop:"-15px"}} >
                       <button className="col-12" onClick={VerifyUser} >
                          <img src={btnArrowLt} />
                          <img src={btnArrowLt} />
                          <img src={btnArrowLt} />
                          &nbsp;Submit&nbsp;
                          <img src={btnArrowGt} />
                          <img src={btnArrowGt} />
                          <img src={btnArrowGt} />
                        </button>
                    </div>
                    
                </div>
                <div className=" or-container1">
                    <div>-------------</div>
                    <div>&nbsp;&nbsp;OR&nbsp;&nbsp;</div>
                    <div>-------------</div>
                </div>
                <div className="p-3">
                    <button className="col-12 new-btn mt-2" onClick={googlelogin}  >
                        &nbsp;&nbsp;SIGN IN With &nbsp;
                            <img src={googleicon} style={{height:"25px",width:"25px"}}/>
                    
                    </button>
                </div>
                <div className=" d-flex justify-content-center" style={{marginTop:"-20px"}}>
                    <p>Don't have account? <span style={{fontFamily:'Ethnocentric', cursor:"pointer"}}> <Link to={"/registration"}> SIGN UP</Link></span></p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Login;





