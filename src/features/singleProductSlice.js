import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};
export const singleProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectedProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { selectedProduct } = singleProductSlice.actions;

export default singleProductSlice.reducer;
