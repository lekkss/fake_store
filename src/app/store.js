import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";

export const store = configureStore({
  reducer: {
    allProducts: productReducer,
    oneProduct: productReducer,
  },
});