import React, { Fragment, useState } from "react";
import { bindActionCreators } from 'redux';

import LayoutOne from "../../layouts/LayoutOne";
import Shoe from "../../assets/img/shoes/product1.png";
import CheckOut from "../../assets/img/buttons/checkout.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {addToCart, IncreaseQuantity, DecreaseQuantity } from "../../redux/actions/cartActions"
import cross from "../../assets/img/icons/cross.png"

const AddCart = ({cartItems,DecreaseQuantityCart,increaseQuantityCart }) => {
  const [vouchercoder, setvouchercode]=useState("");
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const [Data, setData] = useState([]);


  const handleVoucherCodeChange = (event) => {
    setvouchercode(event.target.value);
  };
  const SubtotalFunction = ()=>{
    let totalAmount = 0
      cartItems.forEach(element => {
        let singleProductAmount = element.price * element.Cartquantity;
        totalAmount = totalAmount + singleProductAmount
      });

      return totalAmount;
  }
  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="BackgroundPicture pt-100 pb-100">
          <div className="container">
            <div className="header-text pb-30">
              <p className="bold">My Cart</p>
              <p className="light pt-2">({cartItems.length} Items)</p>
            </div>

            {cartItems.map((val, key) => {
              
              return(
              <div 
              key={key}
              className="cart-item-view">
            
              <img src={Shoe} />

                <div className="product-info">
                  <p className="product-name">{val.name}</p>
                  <div className="product-size">
                    <p>Red</p> 42/7
                  </div>
                </div>

                <div className="product-stats-view">
                  <div className="price-view">
                    <p className="price">Price</p>
                    <p className="amount">${val.price}</p>
                  </div>

                  <div 
                    className="price-view">
                    <p className="price">Quantity</p>
                    <div className="quantity-enter-view">
                      <p
                        onClick={() => {
                          if (val.Cartquantity === 1) {
                            alert("Quantity Cannot be 0");
                          } else {
                            DecreaseQuantityCart(val)
                          }

                        }}
                        className="arith"
                      >
                        -
                      </p>
                      
                      <p className="quantity-val">{val.Cartquantity}</p>
                      <p
                        onClick={() => {
                          increaseQuantityCart(val);

                          console.log("New",  cartItems) 
                        }}
                        className="arith"
                      >
                        +
                      </p>
                    </div>
                  </div>
                  <div className="price-view">
                    <p className="price">Subtotal</p>
                    <p className="total-amount">${val.Cartquantity * val.price}</p>
                  </div>
                </div>
                <img className="crossbtn" src={cross}  style={{ height: isMobile ? '8px' : '8px', width: isMobile ? '10px' : '15px' }} />
              </div>
            )})}

            <div className="seperator pt-5" />
              <div className="row-view">
                <p className="light">Add Voucher Code</p>
                <input type="text" 
                 className="col-lg-3 col-6 "
                 value={vouchercoder}
                 onChange={handleVoucherCodeChange}
                 />
      
              </div>


                <div className="row-view pt-30">
                  <p className="Eth-bold">Total</p>
                  <p className="Eth-bold-orange">${SubtotalFunction() + 60}</p>
                </div>
                <Link to={vouchercoder===""? process.env.PUBLIC_URL + "/checkout":process.env.PUBLIC_URL + "/checkout"+`/${vouchercoder}`}>
                  <img className="check-out-btn pt-60" src={CheckOut} />
                </Link>
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
const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    DecreaseQuantityCart: (item) => {
      dispatch(DecreaseQuantity(item));
    },
    increaseQuantityCart: (item) => {
      dispatch(IncreaseQuantity(item));
    },
    addToCart: (item, quantityCount) => {
      dispatch(addToCart(item, quantityCount));
    }
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCart);
