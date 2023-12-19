import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "@/types";
import { setUser, logout } from ".";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_REACT_APP_SERVER_API}/users`,
});

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query<User, null>({
      query() {
        return {
          url: "/me",
          credentials: "include",
        };
      },
      transformResponse: (result: { data: { user: User } }) => result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {
          dispatch(logout());
        }
      },
    }),
  }),
});

export const { useGetMeQuery } = userApi;
