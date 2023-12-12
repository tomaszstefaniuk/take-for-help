import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RegisterUserPayload, RegisterUserResponse } from "@/types";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_REACT_APP_SERVER_API}/auth`,
});

export const authApi = createApi({
  baseQuery,
  endpoints: (builder) => ({
    registerUser: builder.mutation<RegisterUserResponse, RegisterUserPayload>({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = authApi;
