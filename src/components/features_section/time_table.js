import React from 'react';
import { useState } from 'react';

const Timetable = () => {

    const [current,setCurrent]=useState(1);
    const changeCurrentState=(num)=>{
        setCurrent(num);
    }
  return (
    <div className="container gym-feature py-5">
      <div className="d-flex flex-column text-center mb-5">
        <h1 className="font-weight-bold" style={{fontFamily:"Ethnocentric"}}  >Timetable</h1>
   
      </div>
      <div className="tab-class">
        <ul className="nav nav-pills justify-content-center mb-4" style={{columnGap:"20px"}}>
          <li className="nav-item">
            { current==1 &&<div className="text-white text-center py-1 " onClick={()=>changeCurrentState(1)} style={{width:"200px" ,fontFamily:"Ethnocentric", backgroundColor:"orange"}}>All Classes</div>}
            {current!=1&&  <a className="nav-link" data-toggle="pill" href="#class-cardio" style={{color:"black"}} onClick={()=>changeCurrentState(1)}>All Classes</a>}
          </li>
          <li className="nav-item">
          { current==2 &&<div className="text-white text-center py-1 " onClick={()=>changeCurrentState(2)} style={{width:"200px" ,fontFamily:"Ethnocentric", backgroundColor:"orange"}}>Kumite</div>}
          {current!=2&&  <a className="nav-link" data-toggle="pill" style={{color:"black"}} onClick={()=>changeCurrentState(2)} href="#class-cardio">Kumite</a>}
          </li>
          <li className="nav-item">
          { current==3 &&<div className="text-white text-center py-1 "onClick={()=>changeCurrentState(3)} style={{width:"200px" ,fontFamily:"Ethnocentric", backgroundColor:"orange"}}>Kata</div>}
          {current!=3 &&  <a className="nav-link" data-toggle="pill" style={{color:"black"}} onClick={()=>changeCurrentState(3)} href="#class-cardio">Kata</a>}
          </li>
          <li className="nav-item">
          { current==4 &&<div className="text-white text-center py-1 " onClick={()=>changeCurrentState(4)} style={{width:"200px" ,fontFamily:"Ethnocentric", backgroundColor:"orange"}}>Fitness</div>}
          {current!=4 &&  <a className="nav-link" data-toggle="pill" style={{color:"black"}} onClick={()=>changeCurrentState(4)} href="#class-cardio">Fitness</a>}
          </li>
        </ul>
        <div className="tab-content">
          <div id="class-all" className="container tab-pane p-0 active">
            <div className="table-responsive">
              <table className="table table-bordered table-lg m-0">
                <thead className="text-white text-center" style={{backgroundColor:"black", fontFamily:"Ethnocentric"}}>
                  <tr>
                    <th>Branch</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <th className=" text-white align-middle" style={{backgroundColor:"black", fontFamily:"Ethnocentric"}}>Youth Academy</th>
                    <td style={current==3? {backgroundColor:"orange"} :{} }><h5 style={current==3? {color:"white"} :{} }>Kata</h5></td>
                    <td style={current==2? {backgroundColor:"orange"} :{} }><h5 style={current==2? {color:"white"} :{} }>Kumite</h5></td>                  
                    <td><h5>Competition</h5></td>
                    <td style={current==4? {backgroundColor:"orange"} :{} }><h5 style={current==4? {color:"white"} :{} }>Fitness</h5></td>                  
                    <td></td>
                    <td style={current==3? {backgroundColor:"orange"} :{} }><h5 style={current==3? {color:"white"} :{} }>Kata</h5></td>
                    <td style={current==2? {backgroundColor:"orange"} :{} }><h5 style={current==2? {color:"white"} :{} }>Kumite</h5></td>                  
                
                  </tr>
                  <tr>
                    <th className="text-white align-middle" style={{backgroundColor:"black", fontFamily:"Ethnocentric"}} >National Youth Academy</th>
                    <td style={current==2? {backgroundColor:"orange"} :{} }><h5 style={current==2? {color:"white"} :{} }>Kumite</h5></td>                  
                    <td style={current==3? {backgroundColor:"orange"} :{} }><h5 style={current==3? {color:"white"} :{} }>Kata</h5></td>
                    <td><h5>Competition</h5></td>
                    <td></td> 
                    <td></td> 
                    <td style={current==4? {backgroundColor:"orange"} :{} }><h5 style={current==4? {color:"white"} :{} }>Fitness</h5></td>                  
                    <td style={current==3? {backgroundColor:"orange"} :{} }><h5 style={current==3? {color:"white"} :{} }>Kata</h5></td>
                  </tr>
                  <tr>
                    <th className="text-white align-middle"style={{backgroundColor:"black", fontFamily:"Ethnocentric"}} >GM Academy</th>
                    <td style={current==2? {backgroundColor:"orange"} :{} }><h5 style={current==2? {color:"white"} :{} }>Kumite</h5></td>                  
                    <td style={current==3? {backgroundColor:"orange"} :{} }><h5 style={current==3? {color:"white"} :{} }>Kata</h5></td>
                    <td style={current==4? {backgroundColor:"orange"} :{} }><h5 style={current==4? {color:"white"} :{} }>Fitness</h5></td>                  
                    <td style={current==3 || current==2? {backgroundColor:"orange"} :{} }><h5 style={current==3? {color:"white"} :{} }>Kata & kumite</h5></td>   
                    <td><h5>Competition</h5></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
