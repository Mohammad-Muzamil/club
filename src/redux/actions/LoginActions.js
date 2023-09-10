// actions/LoginActions.js
export const GET_TOKEN = "GET_TOKEN";
export const SET_TOKEN = "SET_TOKEN";

export const getToken = () => {
  return {
    type: GET_TOKEN,
  };
};

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};