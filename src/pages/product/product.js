import React, { Fragment } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Shoes from "../../assets/img/shoes/shoes.png";
import yellowstar from "../../assets/img/icons/yellowstar.png";
import star from "../../assets/img/icons/star.png";
import righarrow from "../../assets/img/icons/rightarrow.png";
import Product1 from "../../assets/img/shoes/product1.png";
import AddCartBtn from "../../assets/img/buttons/addCartBtn.png";
import HeaderTwo from "../../wrappers/header/HeaderTwo";
import { addToCart } from "../../redux/actions/cartActions";
import { connect } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const product = (props) => {


  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="BackgroundPicture pt-100 pb-100">
          <div className="container">
            <HeaderTwo brand={"Nike"} name={"Adidas Falcon Shoes"} />
            <p className="categories-text pb-70">Adidas Falcon Shoes </p>
            <div className="row m-0">
              <div className="d-flex flex-column justify-content-between col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="item-picture-view ">
                  <img className="Product-Image" src={Product1} />
                </div>

                <div className="d-flex flex-row justify-content-between">
                  <div className="item-more-picture">
                    <img src={Product1} />
                  </div>
                  <div className="item-more-picture">
                    <img src={Product1} />
                  </div>
                </div>
              </div>




              <div className="item-description-area col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="m-0 row justify-content-between align-items-center description-view">
                  <p className="description-heading">Discription</p>
                  <div className="m-0 row">
                    <img className="star" src={yellowstar} />
                    <img className="star" src={yellowstar} />
                    <img className="star" src={yellowstar} />
                    <img className="star" src={yellowstar} />
                    <img className="star" src={star} />
                  </div>
                </div>
                <p className="item-description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </p>
                <p className="price-tag">
                  <p className="price-hider">Price:</p>
                  15.29$
                </p>
                <p className="size-tag">Size</p>
                <div className="row mr-0 ml-0 mt-4">
                  <div className="size-item-view">
                    <p>40/6</p>
                  </div>

                  <div className="size-item-view">
                    <p>40/6</p>
                  </div>

                  <div className="size-item-view">
                    <p>40/6</p>
                  </div>

                  <div className="size-item-view">
                    <p>40/6</p>
                  </div>

                  <div className="size-item-view">
                    <p>40/6</p>
                  </div>

                  <div className="size-item-view">
                    <p>40/6</p>
                  </div>
                </div>
                <p className="quantity">Quantity</p>

                <div className="d-flex flex-row quantity-selector-view mt-4">
                  <div className="minus-view">
                    <p>-</p>
                  </div>

                  <div className="value-view">
                    <p>0</p>
                  </div>
                  <div className="minus-view">
                    <p>+</p>
                  </div>
                </div>

                <img 
                onClick={()=> props.addToCart({id:1,qauntity:1},toast)}
                className="add-cart-btn" src={AddCartBtn} />
              </div>  
            </div>

            <p className="may-like-txt pt-100">You May Also Like</p>

            <div className="row">
              {[1, 2, 3].map((val) => (
                <div className="col-xl-4 col-lg-4 col-6 mb-4">
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
                </div>
              ))}
            </div>
          </div>
        </div>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      </LayoutOne>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, addToast) => {
      dispatch(addToCart(item, addToast));
    },
  };
};
export default connect(null, mapDispatchToProps)(product);

