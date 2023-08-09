
import React from 'react'
import "../../assets/css/videos.css"
import kumite from "../../assets/videos/kumite.mp4"
import kata from "../../assets/videos/kata.mp4"

 const Videos=()=> {
  return (
    <div className="about_section layout_padding margin_bottom90">
    <div className="container">
       <div className="row">
          <div className="col-md-6">
             <div className="about_taital_main">
                <div className="about_taital">Your Choice</div>
                <p className="about_text"  style={{ marginTop: '-10px', textAlign: 'justify' }}>Karate is a Japanese martial art whose physical aspects seek the development of defensive and counterattacking body movements.
                    The themes of traditional karate training are fighting and self-defense, though its mental and moral aspects target the overall improvement of the individual.</p>
                <div className="read_more_bt_1"><a href="#">Learn More</a></div>
             </div>
          </div>
          <div className="col-md-6">
             <div className="about_box">
                <div className="image_1">
                   <video id="myVideo" controls style={{width: "100%"}}>
                      <source src={kumite} type="video/mp4"/>
                    </video>
                </div>
                <h4 className="making_text">Kumite</h4>
             </div>
             <div className="about_box_2">
                <div className="image_1">
                   <video id="myVideo" controls style={{width: "100%"}}>
                      <source src={kata} type="video/mp4"/>
                    </video>
                </div>
                <h4 className="making_text">Kata</h4>
             </div>
          </div>
       </div>
    </div>
 </div>
  )
}
export default Videos;  
