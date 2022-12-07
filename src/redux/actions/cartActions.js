export const ADD_TO_CART = "ADD_TO_CART";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const DELETE_ALL_FROM_CART = "DELETE_ALL_FROM_CART";

//add to cart
export const addToCart = (item, addToast) => {
  return (dispatch) => {
    if (addToast) {
      addToast("Added To Cart", { appearance: "success", autoDismiss: true });
    }
    dispatch({
      type: ADD_TO_CART,
      payload: item,
    });
  };
};
//delete from cart
export const deleteFromCart = (item, addToast) => {
  return (dispatch) => {
    if (addToast) {
      addToast("Removed From Cart", { appearance: "error", autoDismiss: true });
    }
    dispatch({ type: DELETE_FROM_CART, payload: item });
  };
};

export const IncreaseQuantity = (item, addToast) => {
  return (dispatch) => {
    if (item.quantity === item.Cartquantity) {
      if (addToast) {
        addToast(`We have only ${item.quantity} Items`, {
          appearance: "error",
          autoDismiss: true,
        });
      }
    } else {
      if (addToast) {
        addToast("Quantity Increased", {
          appearance: "success",
          autoDismiss: true,
        });
      }
      dispatch({ type: INCREASE_QUANTITY, payload: item });
    }
  };
};

export const DecreaseQuantity = (item, addToast) => {
  return (dispatch) => {
    if (item.Cartquantity < 2) {
      if (addToast) {
        addToast("Value Cannot be Zero", {
          appearance: "warning",
          autoDismiss: true,
        });
      }
    } else {
      if (addToast) {
        addToast("Quantity Decreased", {
          appearance: "success",
          autoDismiss: true,
        });
      }
      dispatch({ type: DECREASE_QUANTITY, payload: item });
    }
  };
};

//delete all from cart
export const deleteAllFromCart = (addToast) => {
  return (dispatch) => {
    if (addToast) {
      addToast("Removed All From Cart", {
        appearance: "error",
        autoDismiss: true,
      });
    }
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
