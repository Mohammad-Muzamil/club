import {GET_USER,SET_USER} from "../actions/userActions";



const initialState = {}; // Default discount value
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export default UserReducer;