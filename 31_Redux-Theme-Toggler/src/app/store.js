import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/COUNTERS/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
