
import { combineReducers } from "redux";
import LoginReducer from "./LoginReducers";
import UserReducer from "./userReducer";
import OTPReducers from "./OTPReducers";
import BranchReducers from "./BranchReducers";
import DrawzReducer from "./DrawzReducers";

const rootReducer = combineReducers({
  login:LoginReducer,
  user:UserReducer,
  otp:OTPReducers,
  branch:BranchReducers,
  drawz:DrawzReducer,
});

export default rootReducer;
