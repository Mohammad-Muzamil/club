import Slider from "react-slick";
import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import testing from "../../assets/img/testing/testing-cartoon.jpg";
import Rating from "../rating/rating";



const TestonomialCarousel = () => {
    const isMobile = useMediaQuery({ maxWidth:767 });
    const [activeSlide, setActiveSlide] = useState(0);
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: isMobile ? 1 : 2, // One card per slide on mobile, two cards per slide on larger screens
      slidesToScroll: isMobile ? 1 : 2, // One card at a time on mobile, two cards at a time on larger screens
      afterChange: (current) => {setActiveSlide(current); console.log('Active slide:', current);},
      customPaging: (i) => (
        <div
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: i === activeSlide ? 'black' : 'gray',
          }}
        />
      ),
    };
    const cards = [
      { id: 1, rating:4, name: "Shafiqa Iqbal",imagescr: testing, comment: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
      { id: 2, rating:5, name: "Arslan Ahmad",imagescr:  testing, comment: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
      { id: 3, rating:1, name: "Shafiqa Iqbal",imagescr: testing, comment:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
      { id: 4, rating:2, name: "Arslan Ahmad",imagescr:  testing, comment: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
      { id: 5, rating:4, name: "Shafiqa Iqbal",imagescr: testing, comment:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
      { id: 6, rating:3, name: "Arslan Ahmad",imagescr:  testing, comment: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " }
    ]
    return (
      <div  style={{width:'86%', marginBottom:'80px', marginTop:'55px', marginLeft:'25px' }}>
        <Slider {...settings} >
          {cards.map((card) => (
            <div key={card.id}>
              <div className="card" style={{display:'flex', flexDirection:'column' , alignItems:'center' , border:'none', marginBottom:'50px'}}>
                <img style={{width:'80px', height:'80px', borderRadius:'50%'}} src={card.imagescr}/>
                <h3 style={{fontWeight:"bolder", fontFamily: 'Ethnocentric'}}>{card.name}</h3>
                <Rating rating={card.rating}/>
                <span className="description-testnomial" style={{paddingTop:'15px' ,marginLeft:'35px', marginRight:'35px', fontFamily: 'Mont', textAlign:'center', fontWeight:'100px'}}>"{card.comment}"</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
    };



   
export default TestonomialCarousel;