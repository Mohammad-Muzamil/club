
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  DELETE_ALL_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY
} from "../actions/cartActions";
import { Warning, Success } from "../../helpers/NotifiyToasters";

const initState = [];

const cartReducer = (state = initState, action) => {
  const cartItems = state,
  product = action.payload;

  if (action.type === ADD_TO_CART) {
    
    const cartItem = cartItems.filter(
      item => item.uuid === product.uuid
    )[0];
    if (cartItem === undefined) {
      console.log("new Items");
      Success("Item Added to Cart")
      return [...cartItems, product];
    } else {
      console.log("Item Already");
      Warning("Item Already Exits")
      return cartItems;
    }
  }

  if (action.type === INCREASE_QUANTITY) {  

    cartItems.map(val =>{
      if (val.uuid ===product.uuid){
          val.Cartquantity = val.Cartquantity + 1
      }
    });
    return cartItems;
  }

  if (action.type === DECREASE_QUANTITY) {
      
      cartItems.map(val =>{
        if (val.uuid ===product.uuid){
          let temp = val.Cartquantity - 1;
          val.Cartquantity = null;
          val.Cartquantity = temp;
        }
      }); 
      return cartItems;   
  }

  if (action.type === DELETE_FROM_CART) {
    const remainingItems = (cartItems, product) =>
      cartItems.filter(cartItem => cartItem.id !== product.id);
    return remainingItems(cartItems, product);
  }

  if (action.type === DELETE_ALL_FROM_CART) {
    return cartItems.filter(item => {
      return false;
    });
  }

  return state;
};

export default cartReducer;
