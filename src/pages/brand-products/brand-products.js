import React, { Fragment, useEffect,useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Shoes from "../../assets/img/shoes/shoes.png";
import yellowstar from "../../assets/img/icons/yellowstar.png";
import star from "../../assets/img/icons/star.png";
import righarrow from "../../assets/img/icons/rightarrow.png";
import NikeLogo from "../../assets/img/logo/nike.png";
import HeaderTwo from "../../wrappers/header/HeaderTwo";
import {Brand_Products , Product_Variants} from "../../helpers/api";
import { useParams, Link } from "react-router-dom";


const BrandProducts = (props) => {
  const {product_id, productvarient_id} = useParams();
  const [brand_Products, setbrand_Products] = useState([]);
 
  const BrandProductsData = async ()=>{


    if (window.location.pathname === `/brands-products/${product_id}`){
      console.log("Brand ID",product_id);
      await Brand_Products(product_id).then(response =>{
        console.log(response);
        if(response.status === 200){
          setbrand_Products(response.data)
        }else{
          alert("Something Went Wrong");
        }
      }); 
    }else{
      console.log("Product Varient ID", productvarient_id);
      await Product_Variants(productvarient_id).then(response =>{
        console.log("Product Varient", response.data);
        if(response.status === 200){
          setbrand_Products(response.data)
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
            
              {window.location.pathname === `/brands-products/${product_id}` ? (
                <div className="brand-logo pb-80">
                   <img className="logo" src={NikeLogo} />
                 </div> 
               
              ) : (
                // <HeaderTwo 
                // brand={brand_Products[0].product && brand_Products[0].product.brand.name}
                // name={brand_Products[0].product && brand_Products[0].product.name}
                // center={true}/>
                null
              
              )}
          

            <div className="row">
              {brand_Products &&   brand_Products.map((val) => (

          
                <div className="col-xl-4 col-lg-4 col-6 p-3">

                 <Link to={window.location.pathname === `/brands-products/${product_id}` ? process.env.PUBLIC_URL + `/specific-brand-products/${val.uuid}` : process.env.PUBLIC_URL + `/product/${val.uuid}`}
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
                        {val.short_description}
                      </p>
                      <div className="price-view">
                        <p className="price-text">${val.price}</p>
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
