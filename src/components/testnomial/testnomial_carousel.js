import Slider from "react-slick";
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import testing from "../../assets/img/testing/testing-cartoon.jpg";
import Rating from "../rating/rating";
import { get_testinomials } from "../../helpers/api";
import { Throw_Error } from "../../helpers/NotifiyToasters";



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
      populate_testonomial();
    },[])
    return (
      <div  style={{width:'86%', marginBottom:'80px', marginTop:'55px', marginLeft:'25px' }}>
        <Slider {...settings} >
          {testonomail.map((card) => (
            <div>
              <div className="card" style={{display:'flex', flexDirection:'column' , alignItems:'center' , border:'none', marginBottom:'50px'}}>
                <img style={{width:'80px', height:'80px', borderRadius:'50%'}} src={process.env.REACT_APP_LOCAL_API+card.display_image}/>
                <h3 style={{fontWeight:"bolder", fontFamily: 'Ethnocentric'}}>{card.customer_name}</h3>
                <Rating rating={card.rating}/>
                <span className="description-testnomial" style={{paddingTop:'25px' ,marginLeft:'35px', marginRight:'35px', fontFamily: 'Mont', textAlign:'center', fontWeight:'100px'}}>"{card.message}"</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
    };



   
export default TestonomialCarousel;