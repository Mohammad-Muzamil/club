import React, { Fragment, useEffect, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import { Link, useNavigate } from "react-router-dom";
import { AllBrands, DRAWZING_STATUS, GET_COMPEPTITIONS, GET_DRAWZ_DATA, START_DRAWZING, VERIFY_COMPETITIONS_DETAILS } from "../../helpers/api";
import btnArrowLt from "../../assets/img/hero-btn-arrow-lt.svg";
import btnArrowGt from "../../assets/img/hero-btn-arrow-gt.svg";
import login from "../../assets/img/login.png"
import googleicon from "../../assets/img/googleicon.png"
import { Error_light, Success, Success_light, Throw_Error, Warning_light } from "../../helpers/NotifiyToasters";
import { Forget_Password_OTP } from "../../helpers/api";
import { useDispatch, useSelector } from "react-redux";
import {setOTPDATA} from "../../redux/actions/OTPActions"
import { HashLoader,RingLoader ,BarLoader,GridLoader } from 'react-spinners';
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faL } from "@fortawesome/free-solid-svg-icons";
import { setDrawz } from "../../redux/actions/DrawzActions";
import { decrypt } from '../../helpers/encryption_decrption';



const WebLoader=(prop)=>{
  const isMobilemodeActive = useMediaQuery({ maxWidth:767 });
  return(
    <div className="col-12 d-flex justify-content-center align-items-center flex-column">
      
      <RingLoader   className={`${isMobilemodeActive?"ml-2":"ml-0"}`} size={ isMobilemodeActive?50:100}/>
     
      <h4 className={`text-gray mt-4 ${isMobilemodeActive?"ml-3":"ml-2"}`}>{prop.text}....</h4>

    </div>
  );
}
const GridLoading=(prop)=>{
  const isMobilemodeActive = useMediaQuery({ maxWidth:767 });
  return(
    <div className="col-12 d-flex justify-content-center align-items-center flex-column">
      <GridLoader  color="#FFFFFF" className={`${isMobilemodeActive?"ml-2":"ml-0"}`} size={ isMobilemodeActive?50:100}/>
      <h4 className={` text-white mt-4 ${isMobilemodeActive?"ml-3":"ml-2"}`}>{prop.text}</h4>

    </div>
  );
}

const Drawzing = (props) => {
  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const dispatch=useDispatch();
  const nevigate=useNavigate();
  const [isLoading,setIsLoading]=useState(false)
  const [headingvalue,setheadingvalue]=useState("");

  const [IsGridLoading,setIsGridLoading]=useState(false)
  const [competition,setcompetition]=useState([])
  const [weight,setweight]=useState([])
  const drawz_data= decrypt(sessionStorage.getItem('drawz_info'))
  const [status,setstatus]=useState(false)

  const [isfight,setisfight]=useState(false)
  const [fightweight,setfightweight]=useState([])
  const [totalweightcategory,settotalweightcategory]=useState([])
  const [totalteamkumitecategory,settotalteamkumitecategory]=useState([])

  const [iskata,setiskata]=useState(false)
  const [totalkatacategory,settotalkatacategory]=useState([])
  const [totalteamkatacategory,settotalteamkatacategory]=useState([])
  const [poolA,setpoolA]=useState([])
  const [poolB,setpoolB]=useState([])


  const [data,setdata]=useState({
    id:"",
    password:"",
  })

  const initilizingWeights=()=>{
    setstatus(drawz_data.is_drawz_done);
    const boys=[20,25,30,35,40,45,50,55,60,67,75,-84,84]
    const girls=[20,25,30,35,40,45,50,55,61,-68,68]
    const temp=[]
    var start=drawz_data.start_weight;
    var end=drawz_data.end_weight;
    var gender=drawz_data.competition_of;
    var i=0;
    if(gender=="Boys" && start!=0  && end!=0){
      for (let j=0;j<boys.length;j++){
          if(boys[j]==start){
            i=j;
            break;
          }
      }
      for( let m=i;m<boys.length;m++)
      {
          temp.push(boys[m])
          if(boys[m]==end){
            break;
          }
      }
      setweight(temp);
    }
    else if (gender=="Girls" && start!=0 && end!=0){
      for (let j=0;j<girls.length;j++){
        if(girls[j]==start){
          i=j;
          break;
        }
      }
      for( let m=i;m<girls.length;m++)
      {
          temp.push(girls[m])
          if(girls[m]==end){
            break;
          }
      }
      setweight(temp);
    }
  }

  const teamKumiteIniliatation=async()=>{
    setIsGridLoading(true);
    await GET_DRAWZ_DATA(drawz_data.id,"Team Kumite").then((response)=>{
        if (response.status==200){
            settotalteamkumitecategory(response.data);
            setIsGridLoading(false);
        }
        else{
            Throw_Error("Enable To Load Drawz")
            setIsGridLoading(false);
        }
    })
    setIsGridLoading(false);
  }

  const ChampionshipIniliatation=async()=>{
    setIsGridLoading(true);
    await GET_DRAWZ_DATA(drawz_data.id,"Championship").then((response)=>{
        if (response.status==200){
            console.log(response.data);
            settotalteamkumitecategory(response.data.team_kumite);
            settotalteamkatacategory(response.data.team_kata)
            settotalkatacategory(response.data.individual_kata);
            settotalweightcategory(response.data.fight_weights);
        setIsGridLoading(false);

        }
        else{
            Throw_Error("Enable To Load Drawz")
        setIsGridLoading(false);

        }
    })
    setIsGridLoading(false);
  }
  useEffect(()=>{
    if (drawz_data ==null || !drawz_data.hasOwnProperty('id') ||
    !drawz_data.hasOwnProperty('competition_name') ||
    !drawz_data.hasOwnProperty('date') ||
    !drawz_data.hasOwnProperty('password') ||
    !drawz_data.hasOwnProperty('start_weight') ||
    !drawz_data.hasOwnProperty('end_weight') ||
    !drawz_data.hasOwnProperty('team_kata') ||
    !drawz_data.hasOwnProperty('individual_kata') ||
    !drawz_data.hasOwnProperty('team_kumite') ||
    !drawz_data.hasOwnProperty('competition_of') ||
    !drawz_data.hasOwnProperty('is_drawz_done')) {
    nevigate('/drawzinglogin');
    }
    else{
        setstatus(drawz_data.is_drawz_done);
        if (drawz_data.start_weight==0 && drawz_data.end_weight==0){
            teamKumiteIniliatation();
        }
        else{
            initilizingWeights();
            ChampionshipIniliatation();
        }
    }

},[])

  const logoutfunc=()=>{
    sessionStorage.removeItem('drawz_info');
    nevigate("/drawzinglogin")
    Success("Logout Successfully")
  }



const showSpecficDrawz=async(e)=>{
    if (status){
        
        if (e.target.id=="Team Kata"){
            setheadingvalue(e.target.id)
            var a=[]
            var b=[]
            totalteamkatacategory.map((obj)=>{
                if (obj.pool=="A"){
                    a.push(obj)
                }
                else{
                    b.push(obj)
                }
            })
            setpoolA(a)
            setpoolB(b)
            setiskata(true);
            setisfight(false);

        }
        else if (e.target.id=="Team Kumite"){
            setheadingvalue(e.target.id)
            setfightweight(totalteamkumitecategory);
            setisfight(true);
            setiskata(false);
            
        }
        else if (e.target.id=="Individual Kata"){
            setheadingvalue(e.target.id)
            var a=[]
            var b=[]
            totalkatacategory.map((obj)=>{
                if (obj.pool=="A"){
                    a.push(obj)
                }
                else{
                    b.push(obj)
                }
            })
            setpoolA(a)
            setpoolB(b)
            setiskata(true);
            setisfight(false);        
            
        }else{
        setheadingvalue(e.target.id);
     
        let number=e.target.id[1]+e.target.id[2]
        if (e.target.id[0]=="-"){
            if (number=="68"){
                number=-68
            }
            if(number=="84"){
                number=-84
            }
        }
     
        var temp=[]
        totalweightcategory.map((obj)=>{
            if (obj.weight == parseInt(number)){
                temp.push(obj)
            }
        })
            setfightweight(temp);
            setiskata(false);
            setisfight(true);

        }
    }
    else{
        
        Throw_Error("Please Click on start Drawzing")
    }
 
}

const startdrawzingfunc=async()=>{
    setIsGridLoading(true);
    if (!status){
        await START_DRAWZING(drawz_data.id).then((response)=>{
            if(response.status==200){
                setTimeout(() => {
                Success("Drawz completed");
                setIsGridLoading(false);
                setstatus(true);
                }, 10000);
            }
            else if (response.status==421){
                setTimeout(() => {
                    Throw_Error("At least two teams are needed for Drawzing");
                    setIsGridLoading(false);
                }, 3000);
                
            }
            else if (response.status==403){
                setTimeout(() => {
                    Throw_Error("Drawzing requires a minimum of two teams");
                    setIsGridLoading(false);
                }, 3000);
            }
            else{
                setTimeout(() => {
                    Throw_Error("Try Again")
                    setIsGridLoading(false);

                }, 3000);
            }

        })
    }
    else{
        Throw_Error("Drawzing is already completed")
        setIsGridLoading(false);

    }
}

  return (
    <Fragment>
   
        <div className="BackgroundPicture pt-10 pb-100" style={{height:"100vh", overflowY:"scroll"}} >
          <div className="container d-flex justify-content-center flex-column" >
          {isLoading&&<WebLoader text="Verifing ... "/>}
          {!isLoading&&<div className="col-12  mt-3 bg-white d-flex flex-column align-items-center" style={{borderRadius:"7px"}}>
            {!isMobileactive&&<h1 className="mt-2" style={{fontFamily: "Ethnocentric"}}>MATCH FIXTURES</h1>}
            {isMobileactive&&<h4 className="mt-2" style={{fontFamily: "Ethnocentric"}}>MATCH FIXTURES</h4>}
            <p className="mb-1" style={{color:"orange",marginTop:"-5px",fontSize:"16px"}}>( {drawz_data.competition_name} )</p>
          </div>}
          {!isLoading&&<div className="col-12 mt-2 d-flex flex-lg-row flex-xl-row flex-column justify-content-between">
            {!isLoading&&<div className="col-lg-3 col-xl-3 mt-2 bg-white d-flex flex-column align-items-center" style={{borderRadius:"4px",maxHeight:"550px" , overflowY:"scroll"}}>
            
            <div className="col-12 mt-4 d-flex flex-column">
                <h2 className="text-center" style={{fontStyle:"italic",fontWeight:"bold"}}>Categories</h2>
            <ul >
                {weight.map((obj)=>(
                    <li onClick={showSpecficDrawz}  id={`${(obj!=84 && obj!=68)?(obj>0?"-":""):(obj==84 ||obj==68 ?"+":"")}${obj} KG`}   className="bg-primary text-center text-white pt-2 mb-2 fs-5" style={{height:"35px", borderRadius:"4px",cursor:"pointer"}}>
                    {(obj!=84&& obj!=68)  ? (obj>0?"-":"") :(obj==84 ||obj==68 ?"+":"")}{obj} KG
                    </li>
                ))}
                { drawz_data.individual_kata&&
                    <li   onClick={showSpecficDrawz} id={"Individual Kata"} className="bg-primary text-center text-white pt-2 mb-2 fs-5" style={{height:"35px", borderRadius:"4px",cursor:"pointer"}}>
                     Individual Kata
                   </li>
                }
                { drawz_data.team_kata&&
                    <li  onClick={showSpecficDrawz} id={"Team Kata"} className="bg-primary text-center text-white pt-2 mb-2 fs-5" style={{height:"35px", borderRadius:"4px",cursor:"pointer"}}>
                     Team Kata
                   </li>
                }
                { drawz_data.team_kumite&&
                    <li  onClick={showSpecficDrawz} id={"Team Kumite"}  className="bg-primary text-center text-white pt-2 mb-2 fs-5" style={{height:"35px", borderRadius:"4px",cursor:"pointer"}}>
                        Team Kumite
                   </li>
                }
      
            </ul>
            </div>
            
            </div>}
            
            {!isLoading&&<div className="col-lg-8 col-xl-8 mt-2 " style={{borderRadius:"4px"}}>
           
                <div className="col-12  d-flex justify-content-between" style={{minHeight:"50px",maxHeight:"50px"}} >
                    <button className="btn btn-primary col-6" style={{height:"40px"}} onClick={startdrawzingfunc} >Start Drawzing</button>
                    <button className="btn btn-danger col-4 col-lg-2 col-xl-2" onClick={logoutfunc} style={{height:"40px"}}>Logout</button>
                </div>
                {IsGridLoading&&<div className="col-12  mt-5" >
                <GridLoading text="Drawzing is nearly finished"/>
                </div>}
                {/* For Weight Category */}
                {isfight&&<div className="col-12  mt-4 d-flex flex-column align-items-center " >
                    <h1 className="text-white"> {headingvalue} (DRAWZING) </h1>
                    { fightweight.map((obj)=>(
                    <div className="d-flex flew-row w-100 justify-content-center mt-4 mb-1" style={{}}>
                        <span className="text-center" style={{borderBottom:"3px solid white",color:"white",width:"35%",fontSize:"18px"}}>{obj.player1} </span>
                        <span className="text-center" style={{width:"20%",color:"white",fontStyle:"italic",fontSize:"30px"}}>Vs <FontAwesomeIcon icon={faBolt} style={{color:"white"}}/></span>
                        <span className="text-center" style={{borderBottom:"3px solid white",color:"white",width:"35%",fontSize:"18px"}}>{obj.player2} </span>
                    </div>))}
                </div>}

                {/* team kata system */}
                {iskata&&<div className="col-12  mt-4 d-flex flex-column align-items-center " >
                    <h1 className="text-white"> {headingvalue} (DRAWZING) </h1>
                    <div className="d-flex flew-row w-100 justify-content-center mt-4 mb-1" >
                        <div className="text-white d-flex flex-column" style={{width:"42%"}}>
                            <h2 className="text-white text-center">Pool A</h2>
                            <ol style={{listStyle:"number"}} className="mt-3">
                                {poolA.map((obj)=>(
                                <li  className=" text-white pt-2 mb-2 fs-5" style={{height:"35px", borderRadius:"4px",cursor:"pointer"}}>
                                        {obj.team_name}
                                </li>))}
                              
                            </ol>
                        </div>
                        <div className="text-white" style={{width:"15%"}}>
                          
                           <span style={{color:"white",fontStyle:"italic",fontSize:"30px"}}>Vs </span>
                            
                        </div>
                        <div className="text-white d-flex flex-column" style={{width:"42%"}}>
                        <h2 className="text-white text-center ">Pool B</h2>
                        <ol style={{listStyle:"number"}} className="mt-3">
                            {poolB.map((obj)=>(<li  className=" text-white pt-2 mb-2 fs-5" style={{height:"35px", borderRadius:"4px",cursor:"pointer"}}>
                                        {obj.team_name}
                                </li>))}
                               
                            </ol>

                        </div>
                        
                    </div>
                </div>}
            
            </div>}
          
          </div>}
    
          </div>
        </div>
    </Fragment>
  );
};

export default Drawzing;





