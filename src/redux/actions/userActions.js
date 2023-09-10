// actions/discountActions.js
export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";

export const getUser = () => {
  return {
    type: GET_USER,
  };
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};