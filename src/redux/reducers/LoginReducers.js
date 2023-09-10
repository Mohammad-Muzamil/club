import {GET_TOKEN,SET_TOKEN} from "../actions/LoginActions";



const initialState = ""; // Default discount value
const TokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload;
    default:
      return state;
  }
};

export default TokenReducer;