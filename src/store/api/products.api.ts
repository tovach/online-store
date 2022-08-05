import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Product} from "types/Product";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.escuelajs.co/api/v1/'}),
    endpoints: (build) => ({
        getAllProducts: build.query<Product[], void>({
            query: () => 'products/'
        })
    })
})

export const {useGetAllProductsQuery} = productsApi
