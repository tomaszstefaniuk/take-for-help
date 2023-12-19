import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RegisterUserPayload } from "@/types";
import {
  LoginUserPayload,
  LoginUserResponse,
  RegisterUserResponse,
} from "@/types/auth";
import { logout } from "../user";
import { userApi } from ".";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_REACT_APP_SERVER_API}/auth`,
});

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    registerUser: builder.mutation<RegisterUserResponse, RegisterUserPayload>({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(authApi.endpoints.loginUser.initiate(args));
        } catch (error) {
          console.log("loginUser error: ", error);
        }
      },
    }),
    loginUser: builder.mutation<LoginUserResponse, LoginUserPayload>({
      query(data) {
        return {
          url: "/login",
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {
          console.log("loginUser error: ", error);
        }
      },
    }),
    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: "/logout",
          credentials: "include",
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logout());
        } catch (error) {
          console.error("Logout error: ", error);
        }
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = authApi;
