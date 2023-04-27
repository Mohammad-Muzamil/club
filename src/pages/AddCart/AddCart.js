import React, { Fragment, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Shoe from "../../assets/img/shoes/product1.png";
import CheckOut from "../../assets/img/buttons/checkout.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {addToCart, deleteAllFromCart, IncreaseQuantity, DecreaseQuantity, deleteFromCart } from "../../redux/actions/cartActions"

const AddCart = (props) => {
  console.log(props.cartItems);
  const [quantity, setquantity] = useState(0);
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
              <p className="light">(3 Items)</p>
            </div>

            {props.cartItems.map((val) => (
              <div className="cart-item-view">
                <img src={Shoe} />

                <div className="product-info">
                  <p className="product-name">Adidas falcon shoes</p>
                  <p className="product-size">
                    <p>Red</p> 42/7
                  </p>
                </div>

                <div className="product-stats-view">
                  <div className="price-view">
                    <p className="price">Price</p>
                    <p className="amount">$360</p>
                  </div>

                  <div className="price-view">
                    <p className="price">Quantity</p>
                    <div className="quantity-enter-view">
                      <p
                        onClick={() => {
                          if (val.Cartquantity === 0) {
                            alert("Quantity Cannot be 0");
                          } else {
                            props.DecreaseQuantityCart(val)
                          }
                        }}
                        className="arith"
                      >
                        -
                      </p>
                      <p className="quantity-val">{val.Cartquantity}</p>
                      <p
                        onClick={() => {
                          props.increaseQuantityCart(val);
                        }}
                        className="arith"
                      >
                        +
                      </p>
                    </div>
                  </div>
                  <div className="price-view">
                    <p className="price">Subtotal</p>
                    <p className="total-amount">$360</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="seperator pt-5" />
            <div className="row-view">
              <p className="bold">Subtotal</p>
              <p className="light">$1080</p>
            </div>

            <div className="row-view">
              <p className="bold">Delivery</p>
              <p className="light">$60</p>
            </div>

            <div className="seperator pt-60" />

            <div className="row-view pt-30">
              <p className="Eth-bold">Total</p>
              <p className="Eth-bold-orange">$1140</p>
            </div>
            <Link to={process.env.PUBLIC_URL + "/checkout"}>
              <img className="check-out-btn pt-60" src={CheckOut} />
            </Link>
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
const mapDispatchToProps = (dispatch) => {
  return {
    DecreaseQuantityCart: (item, addToast) => {
      dispatch(DecreaseQuantity(item, addToast));
    },
    increaseQuantityCart: (item, addToast) => {
      dispatch(IncreaseQuantity(item, addToast));
    },
    addToCart: (item, addToast, quantityCount) => {
      dispatch(addToCart(item, addToast, quantityCount));
    },

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCart);
