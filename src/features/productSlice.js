import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = [...action.payload];
      // return { ...state, products: action.payload };
    },
    selectedProduct: (state, action) => {
      return { products: [...state.products, action.payload] };

      // state.products.push(action.payload);

      // return { products: [...state, ...action.payload] };
    },
  },
});

export const getProductSlice = createSlice({
  name: "singleProduct",
  initialState: {},
  reducers: {
    getProduct: (state, action) => {
      // return [...state, ...action.payload];
       return [...action.payload];
    },
  },
});

export const { setProducts, selectedProduct } = productSlice.actions;
export const { getProduct } = getProductSlice.actions;

export default productSlice.reducer;
