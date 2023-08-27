import Slider from "react-slick";
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import testing from "../../assets/img/testing/testing-cartoon.jpg";
import Rating from "../rating/rating";
import { get_testinomials } from "../../helpers/api";
import { Throw_Error } from "../../helpers/NotifiyToasters";

import Jahangir from "../../assets/testinomial_pic/jhangir.jpg"
import Andleeb from "../../assets/testinomial_pic/andleeb.jpg"
import Nadeem from "../../assets/testinomial_pic/nadeem.jpg"
import Mehboob from "../../assets/testinomial_pic/mehboob_alam.png"
import Hammad from "../../assets/testinomial_pic/hammad.jpg"
import Yasir from "../../assets/testinomial_pic/yasir.png"



const TestonomialCarousel = () => {
    const isMobile = useMediaQuery({ maxWidth:767 });
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: isMobile ? 1 : 2, // One card per slide on mobile, two cards per slide on larger screens
      slidesToScroll: isMobile ? 1 : 2, // One card at a time on mobile, two cards at a time on larger screens
    };
    const [testonomail, set_testinomail]= useState([]);

    const populate_testonomial=async ()=>{
      await get_testinomials().then((response)=>{
        if (response.status==200)
        {
            // set_testinomail(response.data);
        }else{
            Throw_Error(
              "Testinomials not loaded"
            );
        }    
        });
    }
    useEffect(()=>{
      set_testinomail([
        {display_image:Jahangir,designation:"Chairman PKF",customer_name:"M Jahangir", rating:5,message:"I am highly impressed by National Youth Karate Academies significant contributions to the martial arts community. Their dedication to fostering skilled athletes and promoting values of respect and discipline is truly commendable. With a perfect blend of tradition and innovation, National Youth Karate Academies stands as a beacon of excellence in the world of karate. I wholeheartedly endorse them for an authentic and enriching karate experience."},
        {display_image:Andleeb,designation:"G.Secretary PKF",customer_name:"Andleeb Sandhu", rating:5,message:"I am thrilled to recognize National Youth Karate Academies outstanding commitment to advancing the art of karate. Their relentless dedication to honing the skills of their members, coupled with a strong emphasis on discipline and sportsmanship, sets National Youth Karate Academies apart as a leader in the field. Their innovative approach while staying true to karate's core values is truly inspiring. I proudly endorse National Youth Karate Academies to anyone seeking top-notch karate training and a nurturing community."},
        {display_image:Nadeem,designation:"G.Secretary Punjab",customer_name:"M Nadeem", rating:4,message:"I have witnessed firsthand the remarkable impact of National Youth Karate Academies in our region. Their commitment to nurturing talent, fostering discipline, and upholding the traditions of karate is truly noteworthy. National Youth Karate Academies serves as a valuable asset to our martial arts community, consistently delivering top-tier training and instilling values that extend beyond the dojo. I confidently recommend National Youth Karate Academies to anyone seeking authentic karate education and personal growth."},
        {display_image:Hammad,designation:"DSO Faislabad",customer_name:"M Hammad", rating:5,message:"In my role as a Sports Officer in Faisalabad, I've had the privilege of observing the significant impact of National Youth Karate Academies. Their dedication to enhancing the skills of budding athletes, along with their unwavering focus on discipline and character development, truly sets them apart. National Youth Karate Academies stands as a valuable asset for our community, consistently delivering top-notch training and cultivating an environment conducive to growth. I wholeheartedly recommend National Youth Karate Academies."},
        {display_image:Mehboob,designation:"Ex-National Champion",customer_name:"Mehboob Alam", rating:5,message:"Drawing on my experience as an Ex-National Champion, I'm delighted to acknowledge the exceptional contributions of National Youth Karate Academies to the world of karate. Their dedication to refining the skills of budding athletes, alongside their unwavering commitment to discipline and character development, truly sets them apart. National Youth Karate Academies stands as a beacon of excellence, consistently delivering top-tier training and fostering an environment that nurtures growth."},
        {display_image:Yasir,designation:"FESCO Coach",customer_name:"Yasir Arafat", rating:5,message:"With my background as a FESCO Coach, I'm excited to acknowledge the remarkable contributions of National Youth Karate Academies to the realm of karate. Their dedicated approach to honing the skills of emerging athletes, coupled with their steadfast focus on discipline and character growth, truly sets them apart. National Youth Karate Academies stands as a valuable resource, consistently providing top-level training and fostering an environment conducive to development."}
      ])
    },[])
 
    return (
      <div  style={{width:'86%', marginBottom:'80px',marginTop: isMobile ? "-40px" :"50px", marginLeft:'25px' }}>
        <Slider {...settings} >
          {testonomail.map((card) => (
            <div>
              <div className="card" style={{display:'flex', flexDirection:'column' , alignItems:'center' , border:'none', marginBottom:'50px'}}>
                <img style={{width:'110px', height:'110px', borderRadius:'50%', boxShadow:"2px 5px gray"}} src={card.display_image}/>
                <h3 style={{fontWeight:"bolder", fontFamily: 'Ethnocentric', marginTop:"15px"}}>{card.customer_name}</h3>
                <p style={{fontFamily:"Mont", color:"gray"}} >{"( "+card.designation+" )"}</p>
                <Rating rating={card.rating}/>
                <span className="description-testnomial" style={{paddingTop:'25px' ,marginLeft:'35px', marginRight:'35px', fontFamily: 'Mont', textAlign:'justify', fontWeight:'100px' ,}}>"{card.message}"</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
    };



   
export default TestonomialCarousel;