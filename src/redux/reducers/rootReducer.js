
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import userReducer from "./userinfoReducer";
import categoriesReducer from "./categoryReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productData: productReducer,
  cartData: cartReducer,
  wishlistData: wishlistReducer,
  categories : categoriesReducer,
  userData:userReducer
});

export default rootReducer;
