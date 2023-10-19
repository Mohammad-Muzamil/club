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
import { Success_light, Warning_light } from '../../helpers/NotifiyToasters';
import { useEffect } from 'react';

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Error_light } from '../../helpers/NotifiyToasters';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { DELETE_COMPEPTITIONS, GET_COMPEPTITIONS, Reset_Password, SEND_COMPEPTITIONS } from '../../helpers/api';
import AdminHeader from './AdminHeader';
import AdminSideNavBar from './AdminSideNavBar';
import {GET_BRANCHES,GET_INSTRUCTORS,CREATE_BRANCHE,UPDATE_BRANCHE} from '../../helpers/api'

const AdminCompetition=()=> {
 const nevigate = useNavigate();
 const [newdata,setnewdata]=useState(true);
 const [league,setleague]=useState("");
 const [data,setdata]=useState({
    "competition_name":"",
    "date":"",
    "start_weight":"",
    "end_weight":"",
    "competition_of":"",
    "individual_kata":'true',
    "team_kata":'true',
    "team_kumite":'true',

 })

 const [start_weight,set_start_weight]=useState([])
 const [end_weight,set_end_weight]=useState([])

 const [updatedata,setupdatedata]=useState({})
 const onChangeHandle=(e)=>{
    if (e.target.name=="comp-type")
    {
        setleague(e.target.value);
        return;

    }
   
 }

  const isAuthenticated= useSelector((state) => state.login)
  const user_details= useSelector((state) => state.user)
  const [isLoading,setIsLoading]=useState(false)
  const [competition,setcompetition]=useState([])
  const [instructor_id, setinstructor_id]=useState([])
  const [id,setid]=useState("")

  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const toggleDrop = () => {
    setDropOpen(!isDropOpen);
  };
  const setallCompetitions=async()=>{
    setIsLoading(true);
    await GET_COMPEPTITIONS().then((response)=>{
        if (response.status==200){
            setcompetition(response.data);
            setIsLoading(false);
        }
        else{
            setIsLoading(false);
        }
    })
  }




  const changeCompetionID=(e)=>{
    setid(e.target.value);
  }

 const  displayBranch=async()=>{
  
    if(id!="")
    {
       setnewdata(false)
    }
    else{
        Warning_light("Please select Competition ....")
        setnewdata(true);

    }
  }
  
  useEffect(()=>{
    if (isAuthenticated === "" || user_details.user.username[0].toLowerCase()!='a'){
        nevigate('/login');
     }
     else{
        setallCompetitions();     
     }
  },[]);


 const onsetlistweight=(e)=>{
    if (e.target.value=="Boys"){
        set_start_weight([20,25,30,35,40,45,50,55,60,67,75,-84,+84])
        set_end_weight([20,25,30,35,40,45,50,55,60,67,75,-84,+84])
    }else if (e.target.value=="Girls"){
        set_start_weight([20,25,30,35,40,45,50,55,61,-68,+68])
        set_end_weight([20,25,30,35,40,45,50,55,61,-68,+68])
    }
    else{
        set_start_weight([])
        set_end_weight([])
    }
    
 }




const sendCompetition=async()=>{ 
    if (data["competition_of"]==""){
        Warning_light("Please select  Boys or Girls ")
    }
    else if ( data['date']!=""&& data['competition_name'] &&  data['password']&&league=="League"){
        const senddata={
            "competition_name":data[ "competition_name"],
            "date":data["date"],
            "start_weight":0,
            "end_weight":0,
            "password":data['password'],
            "competition_of":data["competition_of"],
            "individual_kata":false,
            "team_kata":false,
            "team_kumite":true,
         }
         setIsLoading(true);
         await SEND_COMPEPTITIONS(senddata).then((response)=>{
            if (response.status==200){
            setIsLoading(false);
            setdata({
                "competition_name":"",
                "date":"",
                "start_weight":"",
                "end_weight":"",
                "competition_of":"",
                "individual_kata":'true',
                "team_kata":'true',
                "team_kumite":'true',
            
             });
             setallCompetitions();
            Success_light("Competition Successfully created");

            }
            else{
                setIsLoading(false);
                Error_light("Try Again");
            }
         });
      
    }
    else if (data['password']&&data['start_weight']!=""&& data['end_weight']!=""&& data['date']!=""&& data['competition_name'] &&league=="Championship"){
        const senddata={
            "competition_name":data[ "competition_name"],
            "date":data["date"],
            "password":data['password'],
            "start_weight":parseInt( data[ "start_weight"]),
            "end_weight": parseInt( data["end_weight"]),
            "competition_of":data["competition_of"],
            "individual_kata": data["individual_kata"]=='true'?true:false,
            "team_kata":data["team_kata"]=='true'?true:false,
            "team_kumite":data["team_kumite"]=='true'?true:false,
        
         }
         setIsLoading(true);
         await SEND_COMPEPTITIONS(senddata).then((response)=>{
            if (response.status==200){
            setIsLoading(false);
            setdata({
                "competition_name":"",
                "date":"",
                "start_weight":"",
                "end_weight":"",
                "competition_of":"",
                "individual_kata":'true',
                "team_kata":'true',
                "team_kumite":'true',
            
             });
             setallCompetitions();
            Success_light("Competition Successfully created");
            }
            else{
                setIsLoading(false);
                Error_light("Try Again");
            }
         });

    }
    else{
        Error_light("Please Select complete details")
    }

}
const deleteCompetition=async()=>{
    setIsLoading(true);
    let data=document.getElementById("delete-section").value;
    if (id!=""&&data=="Delete"){
        await DELETE_COMPEPTITIONS(id).then((response)=>{
            if (response.status==200){
                Success_light("Competition Deleted Successfully");
                setallCompetitions();
                setid("");
                setnewdata(true);
                setIsLoading(false);
            }
            else{
                Error_light("Try Again")
                setIsLoading(false);
            }
        });

    }
    else if (data==""){
        Warning_light("Please write  Delete ")
        setIsLoading(false);

    }
    else{
        Warning_light("Please enter correct spelling")
        setIsLoading(false);

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
                <select  onChange={changeCompetionID} className=' col-lg-5 col-xl-5 col-md-5 col-8'  style={{height:"45px",backgroundColor:"#FFFFFF"}}>
                <option value="">Select Competition ...</option>
                {competition.map((obj)=>(<option value={obj.id}>{obj.competition_name}</option>))}
                </select>
                <button className='btn btn-primary ' style={{width:"120px", height:"45px"}} onClick={displayBranch} ><FontAwesomeIcon icon={faSearch} style={{paddingRight:"5px"}} />Search</button>
            </div>
        </div> 
        }
        {!isLoading&&  newdata&&
        <div className='container-fluid   ml-auto mr-auto mt-4' style={{columnGap:"10px", rowGap:"10px"}} >
            <div className='w-100 mt-4 d-flex flex-column p-3 ' style={{columnGap:"10px" ,backgroundColor:"#ECECEC", borderRadius:"7px"}}>
                <div className='w-100 d-flex flex-column flex-lg-row flex-xl-row '>
                    <div className='col-12 col-lg-6 col-xl-6 '>
                        <label>Competion Name</label>
                        <input name='name' type='text' onChange={(e)=>setdata({...data,competition_name:e.target.value})}  style={{backgroundColor:"#FFFFFF",border:"none",height:"45px"}}/>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-6  '>
                        <label>Date</label>
                        <input className='mt-2' onChange={(e)=>setdata({...data,date:e.target.value})} name="contact" type='date' style={{backgroundColor:"#FFFFFF",border:"none",height:"45px"}}/>
                    </div>
                </div>
                <div className='w-100 d-flex flex-column flex-lg-row flex-xl-row mt-1'>
                    <div className='col-12 col-lg-6 col-xl-6 '>
                        <label>password</label>
                        <input name="text" type='text'  onChange={(e)=>setdata({...data,password:e.target.value})} style={{backgroundColor:"#FFFFFF",border:"none",marginTop:"-1px"}}/>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-6'>
                        <label>Competition Type</label>
                        <select name="comp-type" onChange={onChangeHandle} style={{backgroundColor:"#FFFFFF",border:"none", height:"45px"}}>
                        <option value={""}>{""}</option>
                        <option value={"League"}>{"League"}</option>
                        <option value={"Championship"}>{"Championship"}</option>
                        </select>
                    </div>
                </div>
                <div className='w-100 d-flex flex-column flex-lg-row flex-xl-row mt-1 mb-2'>
                    <div className='col-12 col-lg-6 col-xl-6 '>
                        <label>Competition (Boys/Girls)</label>
                        <select name="competition_of" onChange={(e)=>{setdata({...data,competition_of:e.target.value});onsetlistweight(e)}} style={{backgroundColor:"#FFFFFF",border:"none",height:"45px"}}>
                        <option value={""}></option>
                        <option value={"Boys"}>Boys</option>
                        <option value={"Girls"}>Girls</option>
                        </select>
                    </div>
                    
                </div>
                {league!=""&&league=="League" &&<div className='w-100 d-flex justify-content-end mt-2' >
                <button type="button" className='btn btn-primary' style={{width:"270px",marginRight:"15px"}} onClick={sendCompetition} ><FontAwesomeIcon icon={faAdd} style={{paddingRight:"5px"}} />ADD COMPETITION</button>
            </div>}
            </div>
        </div>
        }
      
        {!isLoading&& league!=""&& league=="Championship"&&  newdata&&
        <div className='container-fluid   ml-auto mr-auto mt-4 mb-5' style={{columnGap:"10px", rowGap:"10px"}} >
            <div className='w-100 mt-4 d-flex flex-column p-3' style={{columnGap:"10px" ,backgroundColor:"#ECECEC", borderRadius:"7px"}}>
            <div className='w-100 d-flex flex-column flex-lg-row flex-xl-row  mt-1'>
                    <div className='col-12 col-lg-6 col-xl-6 '>
                        <label className='mt-1'>Start Weight</label>
                        <select name="start_weight"  type='number' onChange={(e)=>setdata({...data,start_weight:e.target.value})} style={{backgroundColor:"#FFFFFF",border:"none",height:"45px"}}>
                        {start_weight.map((obj)=>(<option value={obj}>{obj==68 || obj==84 ?"Above "+ obj : obj }</option>))}
                        </select>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-6 '>
                        <label className='mt-1'>End Weight</label>
                        <select name="end_weight"  type='number' onChange={(e)=>setdata({...data,end_weight:e.target.value})} style={{backgroundColor:"#FFFFFF",border:"none",height:"45px"}}>
                        {end_weight.map((obj)=>(<option value={obj}>{obj==68 || obj==84 ?"Above "+ obj : obj }</option>))}

                        </select>
                    </div>
                </div>
                <div className='w-100 d-flex flex-column flex-lg-row flex-xl-row mt-2'>
                <div className='col-12 col-lg-6 col-xl-6 flex-column'>
                    <label>Individual Kata</label>
                    <select  style={{ backgroundColor: "#FFFFFF", border: "none",height:"45px"}} onChange={(e)=>setdata({...data,individual_kata:e.target.value})} >
                        <option  selected value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>
                <div className='col-12 col-lg-6 col-xl-6 d-flex flex-column '>
                    <label>Team Kata </label>
                    <select  style={{ backgroundColor: "#FFFFFF", border: "none",height:"45px"}} onChange={(e)=>setdata({...data,team_kata:e.target.value})} >
                        <option  selected value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>
            </div>

            <div className='w-100 d-flex flex-column flex-lg-row flex-xl-row mt-2'>
                <div className='col-12 col-lg-6 col-xl-6 flex-column'>
                    <label>Team Kumite</label>
                    <select  style={{ backgroundColor: "#FFFFFF", border: "none",height:"45px"}} onChange={(e)=>setdata({...data,team_kumite:e.target.value})} >
                        <option  selected value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>
            </div>
        
                <div className='w-100 d-flex justify-content-end mt-2' >
                <button type="button" className='btn btn-primary' style={{width:"270px",marginRight:"15px"}} onClick={sendCompetition} ><FontAwesomeIcon icon={faAdd} style={{paddingRight:"5px"}} />ADD COMPETITION</button>
                </div>
            </div>
        </div>}
        {!isLoading&& id!="" && newdata==false&&
        <div className='container-fluid   ml-auto mr-auto mt-4' style={{columnGap:"10px", rowGap:"10px"}} >
            <div className='w-100 mt-4 d-flex flex-column p-3' style={{columnGap:"10px" ,backgroundColor:"#ECECEC", borderRadius:"7px"}}>
                <div>
                    <p>Are you sure to want Delete the competition. Type "Delete"</p>
                    <input id="delete-section" className='col-lg-6 col-xl-6 col-md-6 col-12' type='text' maxLength={6} minLength={6} style={{backgroundColor:"#FFFFFF",border:"none",marginTop:"-7px"}}/>
                </div>
            <div className='w-100 d-flex justify-content-end mt-2' >
                <button type="button" className='btn btn-primary' style={{width:"230px",marginRight:"15px"}} onClick={()=>setnewdata(true)} ><FontAwesomeIcon icon={faAdd} style={{paddingRight:"5px"}} />ADD COMPETITION</button>
                <button type="button" className='btn btn-danger' style={{width:"230px",marginRight:"15px"}} onClick={deleteCompetition} ><FontAwesomeIcon icon={faTrash} style={{paddingRight:"5px"}} />Delete COMPETITION</button>
            </div>

            </div>
           
        </div>}
        
        
    </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}

export default  AdminCompetition;