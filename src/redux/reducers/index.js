import handleCart from "./handleCart";
import handleCompare from "./handleCompare";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  handleCart,
  handleCompare,
});

export default rootReducers;
