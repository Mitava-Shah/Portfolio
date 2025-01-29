import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "./ScrollSlice";

export const store = configureStore({
  reducer: {
    scroll: scrollReducer
  }
});
