import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers/RootReducer";

/*This is Store of the Redux which we have to pass in the index.js file so that it will access all 
 over the app */
const store = configureStore({
  reducer: rootReducer,
});

export default store;
