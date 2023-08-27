import React from 'react'
import "../../assets/css/upcomming_event.css"
import { Wave } from "react-animated-text";
import national_games from "../../assets/img/nationalgames.jpg"
import Timer from '../timer/timer';


 const Wave1=(prop)=> {
  return (
    <div style={{ fontSize: "25px" }}>
       <Wave text={prop.name}effect="fadeOut" effectChange={0.5} />
    </div>
  )
}


const Upcomming_Event=()=> {
 
     return (
    <div className="team-holder theme-padding" style={{marginBottom:"-80px"}}>
    <div className="container">
       <div className="main-heading-holder">
          <div className="main-heading sytle-2">
                <h2 className="word " >Events</h2>
          </div>
          <div className='col-5 timer'  >
                      <Timer/>
                  </div>
                <div className="w-100 checking " style={{ display: "flex", flexDirection: "row", flexWrap:" wrap"}}>
                   <div className="col-md-5 col-lg-5 col-sm-12 mt-lg-5">
                      <h1 style={{fontFamily: 'Ethnocentric'}}>  <Wave1 name="National Games 2023"/></h1>
                      <p style={{textAlign: "justify",fontFamily: 'mont'}}>
                         We are all set to hold the 34th edition of the National Games in Quetta from May 15. The arrangements are being given the final touches. Hopefully, it would be one of the best Games ever to be held in Pakistan
                      </p>
                      <div className="w-100  ">
                         <span className='name_of_ann'>(Khalid Mehmood, Secretary of POA.)</span>
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
       </div>
    </div>
 </div>
  )
}
export default Upcomming_Event;
