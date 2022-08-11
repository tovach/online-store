import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Product} from "types/Product";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.escuelajs.co/api/v1/'}),
    endpoints: (build) => ({
        getProducts: build.query<Product[], { categoryId?: number, offset: number, limit?: number }>({
            query: ({categoryId, offset = 0, limit = 8}) => {
                if (categoryId) {
                    return `/categories/${categoryId}/products/?offset=${offset}&limit=${limit}`
                } else {
                    return `/products/?offset=${offset}&limit=${limit}`
                }
            }
        }),
        getProductsByCategory: build.query<Product[], { categoryId?: number, offset: number, limit?: number }>({
            query: ({
                        categoryId = 1,
                        offset = 0,
                        limit = 8
                    }) => `/categories/${categoryId}/products/?offset=${offset}&limit=${limit}`
        })
    })
})

export const {useGetProductsQuery, useGetProductsByCategoryQuery} = productsApi
