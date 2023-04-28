import React, { Fragment, useEffect,useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Shoes from "../../assets/img/shoes/shoes.png";
import yellowstar from "../../assets/img/icons/yellowstar.png";
import star from "../../assets/img/icons/star.png";
import righarrow from "../../assets/img/icons/rightarrow.png";
import NikeLogo from "../../assets/img/logo/nike.png";
import HeaderTwo from "../../wrappers/header/HeaderTwo";
import { Link } from "react-router-dom";
import {Brand_Products , Product_Variants} from "../../helpers/api";
import { useLocation } from "react-router-dom";


const BrandProducts = (props) => {
  const location = useLocation();
  const [brand_Products, setbrand_Products] = useState();
  console.log(location.state);
  const BrandProductsData = async ()=>{
    

    if (window.location.pathname === '/brands-products'){
      await Brand_Products(location.state).then(response =>{
        console.log(response);
        if(response.status === 200){
          setbrand_Products(response.data)
        }else{
          alert("Something Went Wrong");
        }
      });
    }else{
      console.log(location.state);
  
      await Product_Variants(location.state).then(response =>{
        console.log("Product Varient", response.data);
        if(response.status === 200){
          setbrand_Products([1,2,3])
        }else{
          alert("Something Went Wrong");
        }
      });
    }
  




  }

  useEffect(()=>{
    BrandProductsData();
    },[window.location.pathname])


  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="BackgroundPicture pt-100 pb-100">
          <div className="container">
            
              {window.location.pathname === "/brands-products" ? (
                <div className="brand-logo pb-80">
                   <img className="logo" src={NikeLogo} />
                 </div> 
               
              ) : (
                <HeaderTwo 
                brand={"Nike"}
                name={"Adidas Falcon Shoes "}
                center={true}/>
              )}
          

            <div className="row">
              {brand_Products &&   brand_Products.map((val) => (

          
                <div className="col-xl-4 col-lg-4 col-6 p-3">

                 <Link to={window.location.pathname === "/brands-products" ? process.env.PUBLIC_URL + "/specific-brand-products" : process.env.PUBLIC_URL + "/product"}
                 state={window.location.pathname === "/brands-products"  ? location.state : val}
                 >
                  <div className="ItemView">
                    <img className="item-image" src={Shoes} />
                    <div className="item-description">
                      <div className="item-rating-view">
                        <img className="star" src={yellowstar} />
                        <img className="star" src={yellowstar} />
                        <img className="star" src={yellowstar} />
                        <img className="star" src={yellowstar} />
                        <img className="star" src={star} />
                      </div>
                      <p className="item-info">
                        Adidas Falcon Shoes for men - 2021 Edition
                      </p>
                      <div className="price-view">
                        <p className="price-text">$120.50</p>
                        <img className="right-arrow" src={righarrow} />
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              
              ))}
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default BrandProducts;
