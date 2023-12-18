import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types";

export type UserState = {
  isAuthenticated: boolean;
  user: User | null;
};

const initialState: UserState = {
  isAuthenticated: false,
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<User>) => {
      console.log("setUSER: ", action.payload);
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
