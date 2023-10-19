import {React,useRef} from 'react'
import "../../assets/panel_css/style.css"
import "../../assets/panel_css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import { faBell,faBars,faAngleUp,faAngleDown,faUser, faUserGroup, faPeopleArrows, faUserCheck,
     faQuestionCircle,  faUniversity, faCity, faLocation, faMap, faAddressCard, faAddressBook, faUsers,faKey, faEye, faEyeSlash, faCloud, faCamera, faUpload, faCross, faTrash, faImage, faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import test_img from "../../assets/test_img.jpg"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import TruncateText from '../../helpers/TruncatedText';
import { Success_light } from '../../helpers/NotifiyToasters';
import { useEffect } from 'react';

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Error_light } from '../../helpers/NotifiyToasters';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { GALLERY_IMAGES, Reset_Password, SEND_GALLERY_DATA } from '../../helpers/api';
import AdminHeader from './AdminHeader';
import AdminSideNavBar from './AdminSideNavBar';
import majid from "../../assets/img/coachimages/majidbutt.jpeg"
import "../../assets/css/animation-shake.css"

const AdminGallery=()=> {
 const nevigate = useNavigate();
  const isAuthenticated= useSelector((state) => state.login)
  const user_details= useSelector((state) => state.user)
  const [count,setCouunt]=useState(0);
  const[images,setimages]=useState([]);
  useEffect(()=>{
    if (isAuthenticated === "" || user_details.user.username[0].toLowerCase()!='a'){
        nevigate('/login');
     }
     else{
       
     }
  },[]);
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [isLoading,setIsLoading]=useState(false)
  const isMobileactive = useMediaQuery({ maxWidth:767 });
  const [isDropOpen, setDropOpen] = useState(!isMobileactive);
  const toggleDrop = () => {
    setDropOpen(!isDropOpen);
  };
  const dragStart = (e, position) => {
    dragItem.current = position;
    e.currentTarget.classList.add('dragging');
  };
 
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    e.currentTarget.classList.add('dragging');

  };
 
  const drop = (e) => {
    const copyListItems = [...images];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setimages(copyListItems);
    e.currentTarget.classList.remove('dragging'); 
  };

const uploadimages=()=>{
    document.getElementById("uploadimages").click();
}
const getimages=(e)=>{
  const list=[];

for (var i=0; i<e.target.files.length && i+count<20;i++){
    const imge={image:e.target.files[i]};
    list.push(imge);
}
if (e.target.files.length>=21){
    Error_light("You can upload maximum 10 Images")
}
setimages([...images,...list]);
setCouunt(count+list.length);
}

const removeImage=(name)=>{
    setIsLoading(true);
    let z=[]
    for (var i=0;i<count;i++){
         if (images[i].image.name==name){
            setCouunt(count-1);
        }
        else{
            z.push(images[i])
         }
    }
    setimages(z);
    setIsLoading(false);
}

const uploaddata=async()=>{
    setIsLoading(true);
    let formdata=new  FormData();
    for(var i=0;i<images.length;i++){
        formdata.append('file'+i.toString(),images[i].image)
    }
    await SEND_GALLERY_DATA(formdata).then((response)=>{
        if(response.status==200){
            setimages([]);
            setCouunt(0);
            setIsLoading(false);
            Success_light("Imgaes Added to gallery");
        }
        else{
            Error_light("Try Again")
            setIsLoading(false);
        }
    })
}

  return (
<div className="container-xxl position-relative bg-white d-flex p-0">
    {isDropOpen&& <AdminSideNavBar  name={user_details.name} level="Coach" image_path={user_details.profile_image}/>}
        <div className="content">
        <AdminHeader onClickHandler={toggleDrop} name={user_details.name} total_events={"5"} image_path={user_details.profile_image}  />  
        <Loader show={isLoading} message="Loading..."/>  
        <div className='mt-3 pl-3'>
            <span>You can Upload maximum <span style={{fontWeight:"bold"}}>20</span> Images</span> 
        </div>
        {!isLoading && <div className='container-fluid  mb-5 ml-auto mr-auto d-flex flex-column flex-lg-row flex-xl-row' style={{columnGap:"10px", rowGap:"20px"}} >

            <div   div className='w-100 d-flex p-3 flex-row  justify-content-center' style={{columnGap:"10px",rowGap:"15px" ,backgroundColor:"#ECECEC", borderRadius:"7px", flexWrap:"wrap"}}>
                {images.map((obj,index)=>(

                    <div className=''  style={{width:"170px",height:"208px",border:"2px dashed black", backgroundColor:"white"}} 
                    onDragStart={(e) => dragStart(e, index)}
                    onDragEnter={(e) => dragEnter(e, index)}
                    onDragEnd={drop}
                    key={index}
                    draggable
                    >
                    <FontAwesomeIcon className='animated-things'  onClick={()=>removeImage(obj.image.name)}  icon={faTrash} style={{color:"red",fontSize:"17px" ,paddingTop:"5px", fontWeight:"bold",marginLeft:"140px",zIndex:"999"}} />
                        
                        <div className='' >
                    
                        <img src={URL.createObjectURL(obj.image)} style={{height:"180px",width:"167px",padding:"3px",paddingBottom:"6px"}}/>
                        </div>
                    </div>
                ))}
               { count<20&& <div  className=' d-flex justify-content-center align-items-center' onClick={uploadimages} style={{width:"170px",height:"208px",border:"2px dashed black", backgroundColor:"white"}}>
                    <div>
                        <FontAwesomeIcon icon={faImage} style={{color:"#007BFF",fontSize:"40px",marginLeft:"45px"}} />
                        <p style={{color:"#007BFF",fontSize:"15px"}}>Upload Image <FontAwesomeIcon icon={faCameraRetro} style={{color:"#007BFF",fontSize:"20px",marginLeft:"2px"}} /></p>
                        <input type='file' id="uploadimages" multiple accept="image/*" onChange={getimages} style={{display:"none"}}/>
                    </div>

                   
                </div>
                }
              
                {count >1&&<div className='w-100 d-flex justify-content-end'>
                        <button className='btn btn-primary' onClick={uploaddata}><FontAwesomeIcon icon={faUpload} style={{paddingRight:"5px"}} />Upload Images</button>
                </div>}
            </div>
        </div>}       
    
        
    </div>
     <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faAngleUp} /></a>
</div>
  )
}



export default  AdminGallery;