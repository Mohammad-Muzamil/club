import React, { Fragment, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import HeaderTwo from "../../wrappers/header/HeaderTwo";
import Shoe from "../../assets/img/shoes/product1.png";
import CartIcon from "../../assets/img/icons/shipping-cart.png";
import Cross from "../../assets/img/icons/cross.png";
import baseButton from "../../assets/img/buttons/basebutton.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { useNavigate } from 'react-router-dom'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const CheckOut = (props) => {
  const [discount, setdiscount]=useState(0);
  const SubtotalFunction = ()=>{
    let totalAmount = 0
      props.cartItems.forEach(element => {
        let singleProductAmount = element.price * element.Cartquantity;
        totalAmount = totalAmount + singleProductAmount
      });

      return totalAmount;
  }
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const isOrderSuccessful = false;
  const handleSubmitOrder = () => {
    // Assuming you have the order ID after submitting the order
    const orderId = 'ABC123'; // Replace with your actual order ID

    // Redirect to the homepage
    navigate('/'); // Use navigate instead of history.push

    // Show the toast with the order ID
    if (isOrderSuccessful) {
    toast.success( <div>
      <p style={{ marginBottom: '4px' }}>Order submitted Successfully!!</p>
      <p ><b>Order ID</b>: {orderId}</p>
    </div>, {
      position: 'top-right',
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }else{
    toast.error('Order failed. Please try again.', {
      position: 'top-right',
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

};

 

 

  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="BackgroundPicture pt-100 pb-100">
          <div className="container">
            <HeaderTwo brand={"My Cart"} name={"Checkout"} />
            <p className="checkout-text pb-100">Checkout</p>

            <div className="row m-0 justify-content-between">
              <div className="d-flex flex-row align-items-center">
                {/* <div className="orange-background round">
                  <p>1</p>
                </div> */}
                <div className="orange-text text">Shipping Address</div>
              </div>

              {/* <div className="d-flex flex-row align-items-center">
                <div className="grey-background round">
                  <p>2</p>
                </div>
                <div className="grey-text text">Payment Details</div>
              </div> */}
            </div>

            <div className="seperator pt-30" />
            <div className="row m-0">
              <div className="Address-Area col-xl-7 col-lg-7 col-md-12 col-sm-12">
                <div className="input-area row m-0 justify-content-between">
                  <div className="single-input col-lg-5 col-md-12 col-sm-12">
                    <p>Name</p>
                    <input />
                  </div>

                  <div className="single-input col-lg-5 col-md-12 col-sm-12">
                    <p>E-Mail</p>
                    <input />
                  </div>
                </div>

                <div className="input-area row m-0 justify-content-between">
                  <div className="single-input col-lg-5 col-md-12 col-sm-12">
                    <p>Phone Number</p>
                    <input />
                  </div>

                  <div className="single-input col-lg-5 col-md-12 col-sm-12">
                    <p>State</p>
                    <input />
                  </div>
                </div>
        

                <div className="input-area row m-0 justify-content-between">
                  <div className="single-input col-lg-5 col-md-12 col-sm-12">
                    <p>Country</p>
                    <select  style={{backgroundColor:'#f5f5f5', borderRadius:'3px', height:'50px', width:'100%',border: "1px solid #3f3636"}}>
                      <option></option>
                      <option>Pakistan</option>
                      <option>USA</option>
                      <option>India</option>
                    </select>
                  </div>

                  <div className="single-input col-lg-5 col-md-12 col-sm-12">
                    <p>Postal code</p>
                    <input />
                  </div>
                </div>

                <div className="input-area">
                  <div className="single-input col-lg-12 col-md-12 col-sm-12">
                    <div className="row justify-content-between m-0">
                      <p>Shipping address</p>
                    </div>

                    <textarea />
                  </div>
                </div>
                <div className="seperator  col-12" />

              </div>

              <div className="Cart-Items col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <div className="row m-0">
                  <p className="my-cart">My cart</p>
                  <p className="total-items">(3 Items)</p>
                </div>
                <div className="seperator  pt-20 mb-50" />

                <div className="All-Cart-Items">
                  {props.cartItems.map((val) => (
                    <div className="itemView">
                      <img src={Shoe} />
                      <div className="item-description">
                        <p className="product-name">Adidas falcon shoes</p>
                        <p className="product-price">$720</p>
                        <img src={CartIcon} />
                      </div>

                      <img className="cross-icon" src={Cross} />
                    </div>
                  ))}
               
                </div>
                  <div>
                    <div className="seperator pt-5" />
                      <div className="row-view">
                        <p className="bold">Subtotal</p>
                        <p className="light">${SubtotalFunction()}</p>
                      </div>
                      <div className="row-view">
                        <p className="bold">Discount</p>
                        <p className="light">${discount}</p>
                      </div>
                      <div className="row-view">
                        <p className="bold">Delivery</p>
                        <p className="light">$60</p>
                      </div>
                    <div className="seperator pt-4" />
                  </div>

              </div>
          

            </div>
           

              

               
           

            <div className="row m-0 pt-50">
              <div className="btn-view col-xl-8 col-lg-8 col-md-12 col-sm-12"style={{position: 'relative',display: 'inline-block'}} onClick={handleSubmitOrder}  >
                  <img className="proceed-btn " src={baseButton}   />
                  <p className="text-on-image" style={{width:'70%'}}>Submit Order</p>
           
              </div>

              <div className="d-flex align-items-center col-xl-4 col-lg-4 col-md-12 col-sm-12 total-head">
                <div className="row justify-content-between total-view" >
                  <p className="total">Total</p>
                  <p className="price">${SubtotalFunction()+60-discount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
  };
};


export default connect(mapStateToProps)(CheckOut);

