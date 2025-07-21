// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "bookAPi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/books/" }),
  endpoints: (builder) => ({
    getAllBOoks: builder.query({
      query: () => "/",
    }),
  }),
});

export const { useGetAllBOoksQuery } = baseApi;
