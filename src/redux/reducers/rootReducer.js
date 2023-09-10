
import cartReducer from "./cartReducer";
import userReducer from "./userinfoReducer";
import categoriesReducer from "./categoryReducer";
import { combineReducers } from "redux";
import LoginReducer from "./LoginReducers";
import UserReducer from "./userReducer";

const rootReducer = combineReducers({
  cartData: cartReducer,
  categories : categoriesReducer,
  userData:userReducer,
  login:LoginReducer,
  user:UserReducer,
});

export default rootReducer;
