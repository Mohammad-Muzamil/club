import {GET_BRANCH,SET_BRANCH} from "../actions/BranchActions";



const initialState = {}; // Default user value
const BranchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BRANCH:
      return action.payload;
    default:
      return state;
  }
};

export default BranchReducer;