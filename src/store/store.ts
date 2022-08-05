import {configureStore} from "@reduxjs/toolkit";
import {productsApi} from "store/api/products.api";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),

})
