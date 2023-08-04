import React, { Fragment, useState, useEffect } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Single_Product_Variants } from "../../helpers/api";
import { useParams } from "react-router-dom";
import { Success, Warning, Throw_Error } from "../../helpers/NotifiyToasters";
import Rating from "../../components/rating/rating";
import { Cover_Products, get_size,get_varaiant_images} from "../../helpers/api";


const Product = (props) => {
  const { product_id } = useParams();
  const [converData, setcoverData] = useState([]);
  const [product_image, set_product_image]=useState("");
  const [quantity, setquantity] = useState(1);
  const[size, setsize]=useState([]);
  const [product, setProduct] = useState({});
  const [variant_images, set_varaint_images]=useState([]);
  const [shoes_size, set_shoe_size]= useState(0);
  const [selectedSize, setSelectedSize] = useState({});

  const handleSizeClick = (val) => {
    setSelectedSize(val);
  };

  const populatevaraintimages= async (suuid)=>{
    await get_varaiant_images(suuid).then( (response)=>{
      if (response.status==200){
      set_varaint_images(response.data)}
    else{
      Throw_Error("varaint images data not loaded");}
    })
  }
  const populatesize=async ()=>{
  await get_size().then((response)=>{

    if (response.status==200){
      setsize(response.data)}
    else{
      Throw_Error('sizes Data Not Loaded');}
  });
  }
  const coverdatapopulate= async ()=>{
    await Cover_Products().then((response) => {
      if (response.status === 200) {
        setcoverData(response.data);
      } else {
  
          Throw_Error('Cover Products Data Not Loaded');
      }
    });
  }
  const handleImageClick = (imagePath) => {
    set_product_image(imagePath);
   };
 
  useEffect(() => {
    GetProduct();
    coverdatapopulate();
    populatesize();
   
  }, []);

  const GetProduct = async () => {
    await Single_Product_Variants(product_id).then((response) => {
      console.log("Product Single Varient", response.data);
      if (response.status === 200) {
        setProduct(response.data);
        set_product_image(response.data.thumbnail);
        populatevaraintimages(response.data.uuid);
     
      } else {
        alert("Something Went Wrong");
      }
    });
  };


  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <div className="BackgroundPicture pt-100 pb-100">
          <div className="container">
            {/* <HeaderTwo brand={product.product.brand.name} name={product.name} /> */}
            <p className="categories-text pb-70">{product.name} </p>
            <div className="row m-0">
              <div className="d-flex flex-column justify-content-between col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" >
                <div className="item-picture-view ">
                  <img  className="Product-Image" src= { process.env.REACT_APP_LOCAL_API+product_image} />
                </div>

                <div className="d-flex flex-row justify-content-between" style={{columnGap:"8px"}}>
                  {
                    variant_images.map((val)=>(
                      <div className="item-more-picture">
                    <img src={process.env.REACT_APP_LOCAL_API+val.image_path} 
                    onClick={() => handleImageClick(val.image_path)}
                    />
                  </div>
                     ) )
                  }
                </div>
              </div>

              <div className="item-description-area col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="m-0 row justify-content-between align-items-center description-view">
                  <p className="description-heading">Discription</p>
                  <div className="m-0 row">
                    <div style={{marginTop:'-20px'}}>
                    <Rating rating={product.rating} height={20} width={20}></Rating>
                    </div>
                  </div>
                </div>
                <p className="item-description">{product.long_description}</p>
                <p className="price-tag">
                  <p className="price-hider">Price:</p>
                  {product.price}$
                </p>
                <p className="size-tag">Size (EU)</p>
                <div className="row mr-0 ml-0 mt-4">
                  {size.map((val)=>(
                      <div
                       className="size-item-view "
                       key={val.name}
                       style={val.name === selectedSize.name ? { border: "4px solid #FE7831" } : { border: "4px solid #f5f5f5" }}
                       onClick={() => handleSizeClick(val)}
                      >
                        <p>{val.name}/{val.name-34}</p>
                      </div>

                  ))}
                </div>
                <p className="quantity">Quantity</p>

                <div className="d-flex flex-row quantity-selector-view mt-4">
                  <div
                    onClick={() => {
                      if (quantity === 1) {
                        Warning("Quantity cannot be less than 0");
                      } else {
                        Success("Quantity decreased");
                        setquantity(quantity - 1);
                      }
                    }}
                    className="minus-view"
                  >
                    <p>-</p>
                  </div>

                  <div className="value-view">
                    <p>{quantity}</p>
                  </div>
                  <div
                    onClick={() => {
                      if (product.stock_count === quantity) {
                        Warning(
                          `We only have ${product.stock_count} item left`
                        );
                      } else {
                        Success("Quantity increased");
                        setquantity(quantity + 1);
                      }
                    }}
                    className="minus-view"
                  >
                    <p>+</p>
                  </div>
                </div>

                <img
                  onClick={() =>
                    props.addToCart({ ...product, Cartquantity: quantity,size:selectedSize })
                  }
                  className="add-cart-btn"
                  src={AddCartBtn}
                />
              </div>
            </div>

            <p className="may-like-txt pt-100">You May Also Like</p>

            <div className="row">
              {converData.map((val) => (
                <div className="col-xl-4 col-lg-4 col-6 mb-4">
                  <div className="ItemView">
                    <img className="item-image" src={process.env.REACT_APP_LOCAL_API+val.thumbnail} />
                    <div className="item-description">
                    <Rating rating={val.rating} height={13} width={13}/>
                        <p className="item-info" style={{paddingTop:'7px'}}>
                            {val.name}
                        </p>
                        <p className="" style={{paddingTop:'10px', marginBottom:'-10px',fontSize:'16px',fontWeight:'100px',color:'#454545'}} >
                         {val.short_description}
                        </p>
                      <div className="price-view">
                        <p className="price-text">${val.price}</p>
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
export default connect(null, mapDispatchToProps)(Product);
