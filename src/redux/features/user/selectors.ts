import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store";

export const getUserSlice = (state: RootState) => state.user;

export const getIsAuthenticated = createSelector(
  getUserSlice,
  (user) => user.isAuthenticated
);
export const getUser = createSelector(getUserSlice, (user) => user.user);
