// actions/discountActions.js
export const GET_DISCOUNT = "GET_DISCOUNT";
export const SET_DISCOUNT = "SET_DISCOUNT";

export const getDiscount = () => {
  return {
    type: GET_DISCOUNT,
  };
};

export const setDiscount = (price) => {
  return {
    type: SET_DISCOUNT,
    payload: price,
  };
};