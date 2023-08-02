import {GET_DISCOUNT,SET_DISCOUNT} from "../actions/discountAction";



const initialState = 0; // Default discount value
const discountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DISCOUNT:
      return action.payload;
    default:
      return state;
  }
};

export default discountReducer;
