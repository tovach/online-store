import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Product} from "types/Product";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.escuelajs.co/api/v1/'}),
    endpoints: (build) => ({
        getAllProducts: build.query<Product[], void>({
            query: () => 'products/'
        }),
        getProductsByPage: build.query<Product[], { offset: number, limit: number }>({
            query: ({offset = 0, limit = 12}) => `/products/?offset=${offset}&limit=${limit}`
        })
    })
})

export const {useGetAllProductsQuery, useGetProductsByPageQuery} = productsApi
