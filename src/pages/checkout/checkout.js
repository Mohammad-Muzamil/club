import React, { Fragment, useEffect, useState, useSyncExternalStore } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import HeaderTwo from "../../wrappers/header/HeaderTwo";
import Shoe from "../../assets/img/shoes/product1.png";
import CartIcon from "../../assets/img/icons/shipping-cart.png";
import Cross from "../../assets/img/icons/cross.png";
import baseButton from "../../assets/img/buttons/basebutton.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { setDiscount } from "../../redux/actions/discountAction";
import { useNavigate } from 'react-router-dom'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { get_countries_list, submit_order } from "../../helpers/api";
import { Throw_Error } from "../../helpers/NotifiyToasters";
import { deleteFromCart } from "../../redux/actions/cartActions";





const CheckOut = (props) => {
  const [orderId, setorderId]=useState("");
  const [submit_data, set_submitted_data]=useState({});
  const [discount, setdiscount]=useState(useSelector((state) => state.discount));
  const [dilivery, set_divilery]=useState(0);
  const [countries, set_countries]= useState([]);
  const dispatch= useDispatch();
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    email: "",
    phone_number: "",
    state: "",
    country: "",
    postal_code:"",
    shipping_address:""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone_number: "",
    state: "",
    country: "",
    postal_code:"",
    shipping_address:""
  });

  const SubtotalFunction = ()=>{
    let totalAmount = 0
      props.cartItems.forEach(element => {
        let singleProductAmount = element.price * element.Cartquantity;
        totalAmount = totalAmount + singleProductAmount
      });

      return totalAmount;
  }

  const totalprice=()=>{
     return parseInt([(SubtotalFunction()+dilivery) ]-[(SubtotalFunction())*(discount==0?100:discount/100)]);
  }

  const setdeliveryprices=(event)=>{
    const selectedCountryData = countries.find((country) => country.country === event.target.value);
    if (selectedCountryData) {
    set_divilery(selectedCountryData.price);
    setShippingDetails((prevContactDetails) => ({
      ...prevContactDetails,
      ["country"]: selectedCountryData.country,
    }));
    } else {
      set_divilery(0);
    }
  }

  const populate_country_list= async ()=>{
    await get_countries_list().then((response)=>{
      if (response.status==200)
      {
          set_countries(response.data)}
      else{
            Throw_Error("Countries data not loaded ")
      }
    })
    }
    useEffect(() => {
    populate_country_list();
    }, []);

  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const isOrderSuccessful = false;
  const handleSubmitOrder = () => {
    checkerrors();
    const keyValuePairs = Object.entries(shippingDetails);
    const nonEmptyPairs = keyValuePairs.filter(([key, value]) => value === "");
    const numberOfKeys = Object.keys(nonEmptyPairs).length;
    if (numberOfKeys > 0 || props.cartItems.length == 0 ) {
      return;
    }
    
    set_submitted_data({products:props.cartItems, shipping:shippingDetails});
    // cal the api for and set the order id
    const submit_order_to_server=async ()=>{
      await submit_order(submit_data).then((response)=>{
        if (response.status ==200)
        {
              isOrderSuccessful=true;
              setorderId(response.data.order_id);
        }
        else
        {
            return;
        }
      });
    }


   // Replace with your actual order ID
    navigate('/'); // Use navigate instead of history.push

  
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

const checkerrors=()=>{
  const fields = ["name", "email",  "phone_number","state","country", "postal_code","shipping_address"  ];
  fields.forEach((field) => {
    if (!shippingDetails[field].trim()) {
      errors[field] = `k`;
      Throw_Error(`Please Enter the ${field}`);
    } else {
      errors[field] = "";
      setErrors((error)=>({...errors,field:""}))
    }
});
}

const handleChange = (e) => {
  const { name, value} = e.target;
  setShippingDetails((prevContactDetails) => ({
    ...prevContactDetails,
    [name]: value,
  }));
}

 

 

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
               
                <div className="orange-text text">Shipping Address</div>
              </div>
            </div>

            <div className="seperator pt-30" />
            <div className="row m-0">
              <div className="Address-Area col-xl-7 col-lg-7 col-md-12 col-sm-12">
                <div className="input-area row m-0 justify-content-between">
                  <div className="single-input col-lg-5 col-md-12 col-sm-12">
                    <p>Name { shippingDetails.name ==""  &&<span style={{color:'#FE7831'}}>*</span>}</p>
                    <input
                     type="text"
                     name="name"
                     value={shippingDetails.name}
                     onChange={handleChange}
                     required
                    
                    />
                  </div>

                  <div className="single-input col-lg-5 col-md-12 col-sm-12">
                    <p>E-Mail{ shippingDetails.email==""  &&<span style={{color:'#FE7831'}}>*</span>}</p>
                    <input
                     type="text"
                     name="email"
                     value={shippingDetails.email}
                     onChange={handleChange}
                     required
                      />
                  </div>
                </div>

                <div className="input-area row m-0 justify-content-between">
                  <div className="single-input col-lg-5 col-md-12 col-sm-12">
                    <p>Phone Number { shippingDetails.phone_number==""  &&<span style={{color:'#FE7831'}}>*</span>}</p>
                    <input 
                     type="text"
                     name="phone_number"
                     value={shippingDetails.phone_number}
                     onChange={handleChange}
                     required
                     />
                  </div>

                  <div className="single-input col-lg-5 col-md-12 col-sm-12">
                    <p>State { shippingDetails.state==""  &&<span style={{color:'#FE7831'}}>*</span>}</p>
                
                    <input
                      type="text"
                      name="state"
                      value={shippingDetails.state}
                      onChange={handleChange}
                      required
                      />
                  </div>
                </div>
        

                <div className="input-area row m-0 justify-content-between">
                      
                      <div className="single-input col-lg-5 col-md-12 col-sm-12">
                          <p>Country{ shippingDetails.country==""  &&<span style={{color:'#FE7831'}}>*</span>}</p>
                        
                            <select onChange={setdeliveryprices} name="country" style={{backgroundColor:'#f5f5f5', borderRadius:'3px', height:'50px', width:'100%',border: "1px solid #3f3636"}}>
                            <option value=""></option>
                            {
                              countries.map((val)=>(
                                <option value={val.country}>{val.country}</option>
                              ))
                            }
                          </select>
                        </div>

                  <div className="single-input col-lg-5 col-md-12 col-sm-12">
                    <p>Postal code {shippingDetails.postal_code==""  &&<span style={{color:'#FE7831'}}>*</span>}</p>
                   
                    <input
                     type="text"
                     name="postal_code"
                     value={shippingDetails.postal_code}
                     onChange={handleChange}
                     required
                      />
                  </div>
                </div>

                <div className="input-area">
                  <div className="single-input col-lg-12 col-md-12 col-sm-12">
                    <div className="row justify-content-between m-0">
                      <p>Shipping address { shippingDetails.shipping_address==""  &&<span style={{color:'#FE7831'}}>*</span>}</p>
                    </div>
                   

                    <textarea
                     name= "shipping_address"
                     onChange={handleChange}
                     required
                     />
                  </div>
                </div>
                <div className="seperator  col-12" />

              </div>

              <div className="Cart-Items col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <div className="row m-0">
                  <p className="my-cart">My cart</p>
                  <p className="total-items">({props.cartItems.length} Items)</p>
                </div>
                <div className="seperator  pt-20 mb-50" />

                <div className="All-Cart-Items">
                  {props.cartItems.map((val) => (
                    <div className="itemView">
                      <img src={process.env.REACT_APP_LOCAL_API+val.thumbnail} />
                      <div className="item-description">
                        <p className="product-name">{val.name}</p>
                        <p className="product-price">${val.price}</p>
                        <img src={CartIcon} />
                      </div>

                      <img className="cross-icon" src={Cross}   onClick={()=>dispatch( deleteFromCart(val.product))} />
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
                        <p className="light">{discount}%</p>
                      </div>
                      <div className="row-view">
                        <p className="bold">Delivery</p>
                        <p className="light">${dilivery}</p>
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
                  <p className="price">${totalprice()}</p>
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

