import React from 'react'
import "../../assets/css/upcomming_event.css"
import { Wave } from "react-animated-text";


 const Wave1=()=> {
  return (
    <div style={{ fontSize: "18px"}}>
       <Wave text="UPCOMMING EVENT" effect="fadeOut" effectChange={1.0} />
    </div>
  )
}


const Upcomming_Event=()=> {
  return (
    <div className="team-holder theme-padding">
    <div className="container">
       <div className="main-heading-holder">
          <div className="main-heading sytle-2">
                <h2 className="word " ><Wave1></Wave1></h2>
          </div>
                <div className="w-100 checking " style={{ display: "flex", flexDirection: "row", flexWrap:" wrap"}}>
                   <div className="col-md-5 col-lg-5 col-sm-12 mt-lg-5">
                      <h1>NATIONAL GAMES 2023</h1>
                      <p style={{textAlign: "justify"}}>
                         We are all set to hold the 34th edition of the National Games in Quetta from May 15. The arrangements are being given the final touches. Hopefully, it would be one of the best Games ever to be held in Pakistan
                      </p>
                      <div className="w-100 text-end">
                         <span style={{textAlign: "end"}}>(Khalid Mehmood, Secretary of POA.)</span>
                      </div>
                   </div>
                   <div className="col-md-7 col-lg-7 col-12">
                      <div className="about_box">
                         <div className="image_1">
                            <img src={{}} style={{height: "300px", width: "100%"}}/>
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
