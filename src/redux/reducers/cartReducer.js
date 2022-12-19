
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  DELETE_ALL_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY
} from "../actions/cartActions";

const initState = [];

const cartReducer = (state = initState, action) => {
  const cartItems = state,
  product = action.payload;

  if (action.type === ADD_TO_CART) {
    
    const cartItem = cartItems.filter(
      item => item.id === product.id
    )[0];
    if (cartItem === undefined) {
      console.log("new Items");
      return [...cartItems, product];
    } else {
      console.log("Item Already");
      return cartItems;
    }
  }

  if (action.type === INCREASE_QUANTITY) {  

    cartItems.map(val =>{
      if (val.id ===product.id){
          val.Cartquantity = val.Cartquantity + 1
      }
    });
    console.log(cartItems);
  }

  if (action.type === DECREASE_QUANTITY) {
      
      cartItems.map(val =>{
        if (val.id ===product.id){
            val.Cartquantity = val.Cartquantity - 1
        }
      });

      console.log(cartItems);
    

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
