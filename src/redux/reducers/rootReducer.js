
import cartReducer from "./cartReducer";
import userReducer from "./userinfoReducer";
import categoriesReducer from "./categoryReducer";
import discountReducer from "./discountReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cartData: cartReducer,
  categories : categoriesReducer,
  userData:userReducer,
  discount:discountReducer
});

export default rootReducer;
