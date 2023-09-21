
import { combineReducers } from "redux";
import LoginReducer from "./LoginReducers";
import UserReducer from "./userReducer";
import OTPReducers from "./OTPReducers";
import BranchReducers from "./BranchReducers";

const rootReducer = combineReducers({
  login:LoginReducer,
  user:UserReducer,
  otp:OTPReducers,
  branch:BranchReducers,
});

export default rootReducer;
