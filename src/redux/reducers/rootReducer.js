
import cartReducer from "./cartReducer";
import userReducer from "./userinfoReducer";
import categoriesReducer from "./categoryReducer";
import LoginReducer from "./LoginReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cartData: cartReducer,
  categories : categoriesReducer,
  userData:userReducer,
  login:LoginReducer
});

export default rootReducer;
