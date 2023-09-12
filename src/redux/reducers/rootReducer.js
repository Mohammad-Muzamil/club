
import { combineReducers } from "redux";
import LoginReducer from "./LoginReducers";
import UserReducer from "./userReducer";
import OTPReducers from "./OTPReducers";

const rootReducer = combineReducers({
  login:LoginReducer,
  user:UserReducer,
  otp:OTPReducers
});

export default rootReducer;
