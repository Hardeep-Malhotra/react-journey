import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "../features/SearchSlice";
export const Store = configureStore({
  reducer: {
    search: SearchReducer,
  },
});
