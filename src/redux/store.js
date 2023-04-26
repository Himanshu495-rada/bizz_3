import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";

const store = configureStore(
  {
    reducer: rootReducers,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
