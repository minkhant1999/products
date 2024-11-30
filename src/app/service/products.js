import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),

  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductQuery } = productsApi;