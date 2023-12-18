// navigationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: "",
  reducers: {
    navigateTo: (state, action) => action.payload,
  },
});

export const { navigateTo } = navigationSlice.actions;
export default navigationSlice.reducer;
