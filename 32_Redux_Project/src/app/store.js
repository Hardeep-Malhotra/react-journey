import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "../features/SearchSlice";
import CollectionReducer from "../features/CollectionSlice";
const Store = configureStore({
  reducer: {
    search: SearchReducer,
    collection: CollectionReducer,
  },
});

export default Store;
