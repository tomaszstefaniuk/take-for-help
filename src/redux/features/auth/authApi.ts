import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RegisterUserPayload } from "@/types";
import {
  GenericResponse,
  LoginUserPayload,
  LoginUserResponse,
  RegisterUserResponse,
  ResetPasswordPayload,
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
          console.error(error);
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
          console.error(error);
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
    forgotPassword: builder.mutation<GenericResponse, { email: string }>({
      query(body) {
        return {
          url: `/forgot-password`,
          method: "POST",
          credentials: "include",
          body,
        };
      },
    }),
    resetPassword: builder.mutation<GenericResponse, ResetPasswordPayload>({
      query({ resetToken, password, passwordConfirm }) {
        return {
          url: `/reset-password/${resetToken}`,
          method: "PATCH",
          body: { password, passwordConfirm },
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
