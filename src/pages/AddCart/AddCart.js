import React, { Fragment, useEffect, useState } from "react";
import { bindActionCreators } from 'redux';
import LayoutOne from "../../layouts/LayoutOne";
import Shoe from "../../assets/img/shoes/product1.png";
import CheckOut from "../../assets/img/buttons/checkout.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {addToCart, IncreaseQuantity, DecreaseQuantity } from "../../redux/actions/cartActions"
import cross from "../../assets/img/icons/cross.png"
import {verify_voucher_code } from "../../helpers/api";
import { useSelector, useDispatch } from "react-redux";
import { Success, Warning,Throw_Error,Error } from "../../helpers/NotifiyToasters";
import { setDiscount } from "../../redux/actions/discountAction";
import { deleteFromCart } from "../../redux/actions/cartActions";
import { data } from "jquery";









const AddCart = ({cartItems,DecreaseQuantityCart,increaseQuantityCart }) => {
  const dispatch = useDispatch();
  const [vouchercoder, setvouchercode]=useState("");
  const [vouchercodervalid, setisvouchercodevalid]=useState(true);
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const [Data, setData] = useState([]);
  
  const handleVoucherCodeChange = (event) => {
    setvouchercode(event.target.value);
    if (event.target.value===''){
      setisvouchercodevalid(true);
    }
  };

  const move_to_next_page = async () => {
    if (vouchercoder !== "") {
      try {
        const response = await verify_voucher_code(vouchercoder);
        if (response.status === 200) {
          dispatch(setDiscount(response.data.discount));
        } else {
          setisvouchercodevalid(false);
          return;
        }
      } catch (error) {
        console.error("Error occurred while verifying voucher code:", error);
        return;
      }
    }
  
    // Redirect to the checkout page after voucher verification (if applicable) or without voucher
    window.location.href = process.env.PUBLIC_URL + "/checkout";
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
            
              <img src={process.env.REACT_APP_LOCAL_API+val.thumbnail} />

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
                            
                            Warning("Quantity Cannot be 0");
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
                <img className="crossbtn" src={cross}
                  onClick={()=>dispatch( deleteFromCart(val.product))}
                  style={{ height: isMobile ? '8px' : '10px', width: isMobile ? '10px' : '18px' }} />
              </div>
            )})}

            <div className="seperator pt-5" />
              <div className="row-view">
                <p className="light">Add Voucher Code</p>
                  
                    <input type="text" 
                    className="col-lg-3 col-5 h-3 "
                    value={vouchercoder}
                    onChange={handleVoucherCodeChange}
                    />
              </div>
              <div className="container-fluid d-flex justify-content-end">
                  <p className="code-text" >{vouchercodervalid==true ?"": "Invalid Code"} </p>
              </div>


                <div className="row-view pt-30">
                  <p className="Eth-bold">Total</p>
                  <p className="Eth-bold-orange">${SubtotalFunction()}</p>
                </div>
                  <img className="check-out-btn pt-60" src={CheckOut} onClick={move_to_next_page} />
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
