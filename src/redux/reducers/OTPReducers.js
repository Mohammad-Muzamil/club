import {GET_OTP_DATA,SET_OTP_DATA} from "../actions/OTPActions";



const initialState = {}; // Default OTP object value
const OTPReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OTP_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default OTPReducer;