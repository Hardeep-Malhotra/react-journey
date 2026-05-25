import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/COUNTERS/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
