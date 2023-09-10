import React, { Fragment, useEffect, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import { Link, useNavigate } from "react-router-dom";
import { ALL_USERS_API, AllBrands } from "../../helpers/api";
import btnArrowLt from "../../assets/img/hero-btn-arrow-lt.svg";
import btnArrowGt from "../../assets/img/hero-btn-arrow-gt.svg";
import login from "../../assets/img/login.png"
import googleicon from "../../assets/img/googleicon.png"
import { Throw_Error } from "../../helpers/NotifiyToasters";
import { Login_API } from "../../helpers/api";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../redux/actions/LoginActions";



const Login = (props) => {
  const dispatch = useDispatch();
  const[username,setusername]=useState(null)
  const[password,setpassword]=useState(null)
  const [validuserslist,setvaliduserslist]=useState([])
  // const[ session,setsession]=useState( useSelector((state) => state.login)); for getting data from redux
  const fetchData = async () => {
    try {
      const response = await ALL_USERS_API();
      if (response.status === 200) {
        setvaliduserslist(response.data);
        console.log(response.data);
      } else {
        setvaliduserslist([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(()=>{
    fetchData();
  },[])

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
      if(ply.username==username){
        valid=true;
        return;
      }
    })
    if(valid){
      await Login_API(username,password).then((response)=>{
        if(response.status==200){
        console.log(response.data.token)
        let token=response.data.token // save into redux 
        dispatch(setToken(token));
        // alert(session);
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

  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="BackgroundPicture pt-100 pb-100">
          <div className="container">
            {/* <p className="page-info-text pb-100 ">LOGIN</p> */}
           
            <div className="row d-flex justify-content-center " >
            
            <div className="col-lg-6 col-12 col-md-6 login-container1">
                <div className="w-100 ">
                    <h1>LOGIN</h1>
                <p className="text-center pt-2">Welcome back! Please enter your details</p>
                </div>
                <div className="d-flex justify-content-center mt-2">
                    <img src={login} style={{height:'100px', width:'100px'}}/>
                </div>
                <div className="w-100 mt-2">
                    <div className="input-container1">
                        <h3>Username<span style={{color:"orange"}}>*</span></h3> 
                        <input type="email" onChange={handlechangeusername} />
                      
                    </div>
                    <div className="input-container1">
                        <h3>Password<span style={{color:"orange"}}>*</span></h3> 
                        <input type="password" onChange={handlechangepassword} />
                    </div>
                    <div className="input-container1 d-flex w-100" style={{justifyContent:'flex-end'}}>
                       <Link to={process.env.PUBLIC_URL+"/forgetpassword"}> <span> Forget Password</span></Link>
                    </div>
                    <div className="input-container1 ">
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
                    <button className="col-12 new-btn mt-2"  >
                        &nbsp;&nbsp;SIGN IN With &nbsp;
                            <img src={googleicon} style={{height:"25px",width:"25px"}}/>
                    
                    </button>
                </div>
                <div className=" d-flex justify-content-center" style={{marginTop:"-20px"}}>
                    <p>Don't have account? <span style={{fontFamily:'Ethnocentric', cursor:"pointer"}}> <Link to={"/signup"}> SIGN UP</Link></span></p>
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





