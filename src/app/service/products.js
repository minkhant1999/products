import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),

  endpoints: (builder) => ({
    getAllProduct: builder.mutation({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),

    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/products/add",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newProduct,
      }),
    }),

    searchProduct: builder.mutation({
      query: (q) => ({
        url: `/products/search`,
        method: "GET",
        params: { q },
      }),
    }),

    getDetailProduct: builder.mutation({
      query: (q) => ({
        url: `/products/${q}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllProductMutation,
  useAddNewProductMutation,
  useSearchProductMutation,
  useGetDetailProductMutation,
} = productsApi;
