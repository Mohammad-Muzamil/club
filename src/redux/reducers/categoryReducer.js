import {
    SET_CATEGORY
  } from "../actions/categoryActions";
  
  const initState = [];
  
  const userReducer = (state = initState, action) => {
    switch (action.type) {
      case SET_CATEGORY:
        state = action.payload
        return state;

      default:
        return state;
    }
  };
  export default userReducer;
  