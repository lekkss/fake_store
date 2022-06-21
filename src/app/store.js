import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import singleProductReducer from "../features/singleProductSlice";
import themeReducer from "../features/themeSlice";

export const store = configureStore({
  reducer: {
    allProducts: productReducer,
    singleProduct: singleProductReducer,
    setTheme: themeReducer,
  },
});
