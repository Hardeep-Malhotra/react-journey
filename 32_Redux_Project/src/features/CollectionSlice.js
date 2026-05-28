import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const showToast = (message, type = "success") => {
  toast[type](message, {
    position: "top-center",
    autoClose: 2000,
    theme: "dark",
    transition: Zoom,
  });
};

const initialState = {
  // Check if localStorage exists to prevent SSR errors
  items:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("collection")) || []
      : [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const alreadyExits = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (!alreadyExits) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
        showToast("Added to Collection ✅"); // Direct call
      } else {
        showToast("Already in Collection! ⚠️", "info");
      }
    },

    removeCollection: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("collection", JSON.stringify(state.items));
      showToast("Removed from Collection ❌", "error");
    },

    clearCollection: (state) => {
      state.items = [];
      localStorage.removeItem("collection");
      showToast("Collection Cleared! 🧹", "info");
    },
  },
});

export const { addCollection, removeCollection, clearCollection } =
  collectionSlice.actions;

export default collectionSlice.reducer;
