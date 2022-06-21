import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") || "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload === "light" ? "dark" : "light";
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
