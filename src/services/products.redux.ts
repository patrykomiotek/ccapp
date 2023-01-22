import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Product } from '@apptypes/Product';
import type { ProductsResponse } from './products';

const baseUrl = process.env.REACT_APP_API_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${apiKey}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductsResponse, void>({
      query: () => '/products'
    }),
    getAllProductById: builder.query<Product, string>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery, useGetAllProductByIdQuery } = productsApi;

