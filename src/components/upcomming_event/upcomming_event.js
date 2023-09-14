import React, { useEffect } from 'react'
import "../../assets/css/upcomming_event.css"
import { Wave } from "react-animated-text";
import national_games from "../../assets/img/nationalgames.jpg"
import Timer from '../timer/timer';
import { UPCOMMING_EVENTS } from '../../helpers/api';
import { useState } from 'react';


 const Wave1=(prop)=> {
  return (
    <div style={{ fontSize: "25px" }}>
       <Wave text={prop.name}effect="fadeOut" effectChange={0.5} />
    </div>
  )
}


const Upcomming_Event=()=> {
   const [listofevents, setlistofevents]=useState([])
   const etting=async()=>{
      await UPCOMMING_EVENTS().then((response)=>{
         if(response.status==200){
            console.log(response.data)
            setlistofevents(response.data);
         }
         else{
            console.log("Error is here")
         }
      });  
   }
   useEffect(()=>{
      etting()
   },[])
 
     return (
    <div className="team-holder theme-padding" style={{marginBottom:"-80px"}}>
    <div className="container">
       <div className="main-heading-holder">
          <div className="main-heading sytle-2">
                <h2  style={{fontFamily:"Ethnocentric", fontSize:"25px"}} >Events</h2>
          </div>

            {listofevents.map((obj)=>( <div>
               <div className='col-5 timer'>
                        <Timer time={obj.seconds}/>
               </div>
               <div className="w-100 checking " style={{ display: "flex", flexDirection: "row", flexWrap:" wrap"}}>
                   <div className="col-md-5 col-lg-5 col-sm-12 mt-lg-5">
                      <h1 style={{fontFamily: 'Ethnocentric'}}>  <Wave1 name={obj.event_name}/></h1>
                      <p style={{textAlign: "justify",fontFamily: 'mont'}}>
                        
                         {obj.description}
                      </p>
                      <div className="w-100  ">
                         <span className='name_of_ann'>{"("+obj.announcer+")"}</span>
                      </div>
                   </div>
                   <div className="col-md-7 col-lg-7 col-12">
                      <div className="about_box " style={{marginLeft:"-1px"}}>
                         <div className="image_1">
                            <img src={national_games} style={{maxHeight:"300px", width: "100%"}}/>
                         </div>
                      </div>
                   </div>
               </div>
            </div>))}
       </div>
    </div>
 </div>
  )
}
export default Upcomming_Event;
