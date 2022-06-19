import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import singleProductReducer from "../features/singleProductSlice";

export const store = configureStore({
  reducer: {
    allProducts: productReducer,
    singleProduct: singleProductReducer,
  },
});
