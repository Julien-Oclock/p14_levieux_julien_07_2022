import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./employeeSlice";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
