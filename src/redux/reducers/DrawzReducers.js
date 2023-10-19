import {GET_DRAWZ,SET_DRAWZ} from "../actions/DrawzActions";

const initialState = {}; 
const   DrawzReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DRAWZ:
      return action.payload;
    default:
      return state;
  }
};

export default DrawzReducer;