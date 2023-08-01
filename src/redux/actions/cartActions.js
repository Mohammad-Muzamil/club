
import {Success, Error, Warning} from "../../helpers/NotifiyToasters"

export const ADD_TO_CART = "ADD_TO_CART";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const DELETE_ALL_FROM_CART = "DELETE_ALL_FROM_CART";
//add to cart
export const addToCart = (item) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: item,
    });
  };
};

//delete from cart
export const deleteFromCart = (item) => {
  return (dispatch) => {
    Success("Item Deleted from the Cart")
    dispatch({ type: DELETE_FROM_CART, payload: item });
  };
};

export const IncreaseQuantity = (item) => {
  return (dispatch) => {
    if (item.stock_count === item.Cartquantity) {
      Warning(`We only have ${item.stock_count} amount left `)
      
    }else{
      Success("Quantity increased")
      dispatch({ type: INCREASE_QUANTITY, payload: item });
    }

   
  };
};

export const DecreaseQuantity = (item) => {
  return (dispatch) => {
    if (item.Cartquantity < 2) {
      Error(item)
    } else {
      Success("Quantity Decreased")
      
      dispatch({ type: DECREASE_QUANTITY, payload: item });
    }
  };
};

//delete all from cart
export const deleteAllFromCart = (addToast) => {
  return (dispatch) => {
    Success("Quantity increased")
    dispatch({ type: DELETE_ALL_FROM_CART });
  };
};

// get stock of cart item
export const cartItemStock = (item) => {
  if (item.quantity === 0) {
    return false;
  } else {
    return true;
  }
};
