import React from 'react'
import "../../assets/css/coach.css"
import shahbaz_ahmad from "../../assets/img/coachimages/shahbazahmad.jpg"
import shahbaz_saleem from "../../assets/img/coachimages/shahbazsaleem.jpg"
import majid from "../../assets/img/coachimages/majidbutt.jpeg"
import yasir from "../../assets/img/coachimages/yasirarafat.jpg"
const Img=(prop)=>{
    return(
        <div className="col-md-3">
        <div className="team-column style-2">
           <img src={prop.img} className="zoomable-img" style={{height: "370px", width: "260px"}} alt=""/>
           <div className="player-name" style={{width:"260px"}}>
              <div className="desination-2">{prop.type}</div>
              <h5>{prop.name}</h5>
              <span className="player-number">{prop.number}</span>
           </div>
        </div>
     </div>
    )
}


 const Coach=()=> {
  return (
    <div className="team-holder theme-padding" style={{marginTop:"-30px"}} >
  <div className="container">
     <div className="main-heading-holder">
        <div className="main-heading sytle-2">
           <h2> Coaches</h2>
        </div>
     </div>
     <div id="team-slider">
        <div className="container d-flex  small-screen " style={{paddingLeft:"35px"}} >
            <Img number="1" img={majid} type="Chief Coach" name="Majid Butt"/>
            <Img number="2" img={yasir} type="Chief Coach" name="Yasir Arafat"/>
            <Img number="3" img={shahbaz_ahmad} type="Coach" name="Shahbaz Ahmad"/>
            <Img number="4" img={shahbaz_saleem} type="Coach" name="Shahbaz Saleem"/>
        </div>
     </div>
  </div>
</div>
  )
}
export default Coach;
