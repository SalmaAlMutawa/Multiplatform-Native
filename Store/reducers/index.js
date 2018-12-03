import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";
import itemsReducer from "./items";
import itemReducer from "./item";
import cartReducer from "./cart";
import addressReducer from "./address";
import ordersReducer from "./orders";

export default combineReducers({
  auth: authReducer,
  items: itemsReducer,
  item: itemReducer,
  errors: errorReducer,
  cart: cartReducer,
  address: addressReducer,
  orders: ordersReducer
});
