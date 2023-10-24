import React, { Fragment, useEffect, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import { Link, useNavigate } from "react-router-dom";
import { AllBrands, GET_COMPEPTITIONS, SEND_TEAM_REGISTRATION, VERIFY_COMPETITIONS_DETAILS } from "../../helpers/api";
import btnArrowLt from "../../assets/img/hero-btn-arrow-lt.svg";
import btnArrowGt from "../../assets/img/hero-btn-arrow-gt.svg";
import login from "../../assets/img/login.png"
import googleicon from "../../assets/img/googleicon.png"
import { Error_light, Success, Success_light, Throw_Error, Warning, Warning_light } from "../../helpers/NotifiyToasters";
import { Forget_Password_OTP } from "../../helpers/api";
import { useDispatch } from "react-redux";
import {setOTPDATA} from "../../redux/actions/OTPActions"
import { HashLoader,RingLoader } from 'react-spinners';
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { decrypt } from '../../helpers/encryption_decrption';




const WebLoader=(prop)=>{
  const isMobilemodeActive = useMediaQuery({ maxWidth:767 });
  return(
    <div className="col-12 d-flex justify-content-center align-items-center flex-column">
      
      <RingLoader color="#FFFFFF"  className={`${isMobilemodeActive?"ml-2":"ml-0"}`} size={ isMobilemodeActive?50:100}/>
      <h4 className={`text-white mt-4 ${isMobilemodeActive?"ml-3":"ml-2"}`}>{prop.text}....</h4>

    </div>
  );
}

const RegisterTeam = (props) => {
  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const dispatch=useDispatch();
  const nevigate=useNavigate();
  const [isLoading,setIsLoading]=useState(false)
  const [weight,setweight]=useState([])
  const [competition,setcompetition]=useState([])
  const [league,setleague]=useState(false)
  const [id,setid]=useState("");
  const [selected,setselected]=useState({})
  const [indiviual,setindiviual]=useState("")
  const [teamname,setteamname]=useState("")
  const [team_kumite_team,set_team_kumite_team]=useState({
    player_1:"",
    player_2:"",
    player_3:"",
    player_4:"",
    player_5:"",
    player_6:"",
    player_7:"",
  })
  const [team_kata_team,set_team_kata_team]=useState({
    kata_player_1:"",
    kata_player_2:"",
    kata_player_3:"",
  })

  const [fightweight,setfightweight]=useState({
    weight_20_kg:"",
    weight_25_kg:"",
    weight_30_kg:"",
    weight_35_kg:"",
    weight_40_kg:"",
    weight_45_kg:"",
    weight_50_kg:"",
    weight_55_kg:"",
    weight_60_kg:"",
    weight_61_kg:"",
    weight_67_kg:"",
    weight_68_kg:"",
    weight_above68_kg:"",
    weight_75_kg:"",
    weight_84_kg:"",
    weight_above84_kg:"",
  })
  const comp=async()=>{
    setIsLoading(true);
    await GET_COMPEPTITIONS().then((response)=>{
        if(response.status==200){
            setcompetition(response.data);
            setIsLoading(false);
        }
        else{
            setIsLoading(false);
        }
    })
  }
  useEffect(()=>{
    comp();
  },[])


  const setFightWeightHandle=(e)=>{
    if(e.target.name == 68){
      setfightweight({...fightweight, weight_above68_kg:e.target.value})
    }
    else if(e.target.name==84){
      setfightweight({...fightweight, weight_above84_kg:e.target.value})
    }
    else if(e.target.name==-68){
      setfightweight({...fightweight,weight_68_kg:e.target.value})
    }
    else if(e.target.name==-84){
      setfightweight({...fightweight,weight_84_kg:e.target.value})
    }
    else{
      setfightweight({...fightweight,[`weight_${e.target.name}_kg`]:e.target.value})
    }

    
  }


  const findSelected=(id)=>{
    setIsLoading(true);
    for (var i=0;i<competition.length;i++){
        if (id==competition[i].id){
          setselected(competition[i]);
          if (competition[i].start_weight==0 && competition[i].end_weight==0){
            setleague(true);
          }else{
            setleague(false);
            const boys=[20,25,30,35,40,45,50,55,60,67,75,-84,84]
            const girls=[20,25,30,35,40,45,50,55,61,-68,68]
            const temp=[]
            var start=competition[i].start_weight;
            var end=competition[i].end_weight;
            var gender=competition[i].competition_of;
            var i=0;
            if(gender=="Boys"){
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
            else{
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
          setIsLoading(false);
          return;
        }
        
    }
    setselected({});
    setleague(false)
    setIsLoading(false);
  }
 
const deInitization=()=>{
  setid("");
  setteamname("");
  setfightweight({
    weight_20_kg:"",
    weight_25_kg:"",
    weight_30_kg:"",
    weight_35_kg:"",
    weight_40_kg:"",
    weight_45_kg:"",
    weight_50_kg:"",
    weight_55_kg:"",
    weight_60_kg:"",
    weight_61_kg:"",
    weight_67_kg:"",
    weight_68_kg:"",
    weight_above68_kg:"",
    weight_75_kg:"",
    weight_84_kg:"",
    weight_above84_kg:"",
  })
}
const formatedTeamFight=()=>{
  let z=[]
      for (let i = 0; i < 7; i++) {
        let playerKey = `player_${i + 1}`;
        if (team_kumite_team[playerKey]!="")
            z.push(team_kumite_team[playerKey])
      }
      let output = z.join(',');
      return output;
}

const formatedTeamkata=()=>{
  let z=[]
      for (let i = 0; i < 3; i++) {
        let playerKey = `kata_player_${i + 1}`;
        z.push(team_kata_team[playerKey])
      }
      let output = z.join(',');
      return output;
}


const sendCredentials=async()=>{
  if (selected.start_weight==0&& selected.end_weight==0){
    if ( teamname==""||id=="" ||team_kumite_team.player_1==""||team_kumite_team.player_2==""||team_kumite_team.player_3==""||team_kumite_team.player_4==""||team_kumite_team.player_5=="")
    {
      Warning("Please enter the names of at least five players first.");
    }
    else{
      let output = formatedTeamFight()
      const data={
        competition_id:id,
        team_name:teamname,
        team_fight:output

      }
      deInitization();
      setIsLoading(true);
      await SEND_TEAM_REGISTRATION("Team_Fight",data).then((response)=>{
        if (response.status==200){
          setIsLoading(false);
          Success("Successfully Register Team");
        }
        else{
        setIsLoading(false);
        Throw_Error("Registration Failed");
        }
      })
    }
  }
  else{
        
        var data={
          competition_id:id,
          team_name:teamname,
          kata:selected.individual_kata==true?indiviual:"",
          team_kata:selected.team_kata==true?formatedTeamkata():"",
          team_fight:selected.team_kumite==true?formatedTeamFight():"",
          ...fightweight
        }
        setIsLoading(true);
        await SEND_TEAM_REGISTRATION("Championship_Fight",data).then((response)=>{
          if (response.status==200){
        
              setIsLoading(false);
              Success("Successfully Register Team");
              deInitization();
         
          }
          else{
          setIsLoading(false);
          Throw_Error("Registration Failed");
          }
        })

      
  }



 

}
  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className=" BackgroundPicture  pt-100 pb-100  " >
          {isLoading&&<WebLoader text="Verifing ... "/>}
          <div className="container" >
          {!isLoading&&
          <div className="row bg-white d-flex p-lg-3 p-xl-3 " style={{borderRadius:"7px"}}>
            <div className="col-12 d-flex flex-column align-items-center">
                {!isMobileactive&&<h1 className="mt-3" style={{fontFamily: "Ethnocentric"}}>TEAM REGISTRATION</h1>}
                {isMobileactive&&<h4 className="mt-3 " style={{fontFamily: "Ethnocentric"}}>TEAM REGISTRATION</h4>}
                <p className="" style={{color:"orange"}}>( only filled Team Coach )</p>
            </div>
            <div className="row mb-1 mt-2">
            <h3 style={{fontWeight:"bold"}}>Team Name </h3>
                <input type="text" autocomplete="off" onChange={(e)=>setteamname(e.target.value)} className="col-lg-5 col-xl-5 col-12" style={{borderColor:"#ECEFF8",backgroundColor:"#ECEFF8",height:"45px"}}/>
            </div>
            <div className="row mb-3 ">
                <h3 style={{fontWeight:"bold"}}>Event </h3>
                <select className="col-lg-5 col-xl-5 col-12"  onChange={(e)=>{setid(e.target.value);findSelected(e.target.value)}} style={{borderColor:"#ECEFF8",backgroundColor:"#ECEFF8",height:"45px"}}>
                    <option value={""}>Select Competition ...</option>
                    {competition.map((obj)=>( <option value={obj.id}>{obj.competition_name}</option>))}
                </select>
            </div>
        
           
            {id!=""&& league&&<div className="row mb-3 mt-2">
                <h3 style={{fontWeight:"bold",fontFamily: "Ethnocentric"}}>Team Kumite </h3>
                <div className="col-12 pb-2 " style={{borderRadius:"5px",backgroundColor:"#ECEFF8"}}>
                 {[1,2,3,4,5,6,7].map((obj)=>( 
                 <div className="d-flex mt-2">
                    <h4 style={{width:"100px"}} className="pt-3">Player {obj}</h4>
                    <input  type="text" autocomplete="off" name={`player_${obj.toString()}`} onChange={(e)=>set_team_kumite_team({...team_kumite_team,[e.target.name]:e.target.value})} style={{backgroundColor:"white", borderRadius:"4px",border:"none"}}/>
                  </div>))}
               
                </div>
            </div>}
            {id!=""&& !league&& <div className="row mb-3 mt-2">
                <h3 style={{fontWeight:"bold",fontFamily: "Ethnocentric"}}>Weight Category </h3>
                <div className="col-12 pb-2 " style={{borderRadius:"5px",backgroundColor:"#ECEFF8"}}>
                {weight.map((obj)=>( 
                 <div className="d-flex mt-2">
                    <h4 style={{width:"120px"}} className="pt-3">{(obj!=84 && obj!=68)  ? (obj>0?"-":"") :(obj==84 ||obj==68 ?"+":"")}{obj} KG</h4>
                    <input  type="text" autocomplete="off"  name={`${obj.toString()}`} onChange={setFightWeightHandle} style={{backgroundColor:"white", borderRadius:"4px",border:"none"}}/>
                  </div>))}
                </div>
            </div>}
            {id!=""&&!league&& selected.team_kata==true &&<div className="row mb-3 mt-2">
                <h3 style={{fontWeight:"bold",fontFamily: "Ethnocentric"}}>Team Kata </h3>
                <div className="col-12 pb-2 " style={{borderRadius:"5px",backgroundColor:"#ECEFF8"}}>
                 {[1,2,3].map((obj)=>( 
                 <div className="d-flex mt-2">
                    <h4 style={{width:"120px"}} className="pt-3">Player {obj}</h4>
                    <input  type="text"  autocomplete="off" name={`kata_player_${obj.toString()}`} onChange={(e)=>set_team_kata_team({...team_kata_team,[e.target.name]:e.target.value})} style={{backgroundColor:"white", borderRadius:"4px",border:"none"}}/>
                  </div>))}
               
                </div>
            </div>}
            {id!=""&&!league&& selected.team_kumite ==true&&<div className="row mb-3 mt-2">
                <h3 style={{fontWeight:"bold",fontFamily: "Ethnocentric"}}>Team Kumite </h3>
                <div className="col-12 pb-2" style={{borderRadius:"5px",backgroundColor:"#ECEFF8"}}>
                {[1,2,3,4,5,6,7].map((obj)=>( 
                 <div className="d-flex mt-2">
                    <h4 style={{width:"120px"}} className="pt-3">Player {obj}</h4>
                    <input  type="text" autocomplete="off" name={`player_${obj.toString()}`} onChange={(e)=>set_team_kumite_team({...team_kumite_team,[e.target.name]:e.target.value})} style={{backgroundColor:"white", borderRadius:"4px",border:"none"}}/>
                  </div>))}
                </div>
            </div>}
            {id!=""&&!league&& selected.individual_kata ==true && <div className="row mb-3 mt-2">
                <h3 style={{fontWeight:"bold",fontFamily: "Ethnocentric"}}>Individual Kata </h3>
                <div className="col-12 pb-2" style={{borderRadius:"5px",backgroundColor:"#ECEFF8"}}>
                  <div className="d-flex mt-2">
                    <h4 style={{width:"120px"}} className="pt-3">Player</h4>
                    <input autocomplete="off"  type="text" onChange={(e)=>setindiviual(e.target.value)} style={{backgroundColor:"white", borderRadius:"4px",border:"none"}}/>
                  </div>
                </div>
            </div>}
            {id!=""&&<div className="row mb-3 mt-2 d-flex justify-content-end">
                <button className="btn text-white" style={{width:"170px",backgroundColor:"orange"}} onClick={sendCredentials} >Register Team</button>
            </div>}
            
          
          </div>}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default RegisterTeam;





