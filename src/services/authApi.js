import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const authApi = createApi({
    reducerPath: "CurrencyExchange",
    tagTypes: ["CurrencyExchange"],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://v6.exchangerate-api.com/v6/3da7f76a514bf7bb31c01553/",
//https://v6.exchangerate-api.com/v6/3da7f76a514bf7bb31c01553/pair/EUR/GBP/5
    }),
    endpoints: build => ({
        getExchange:build.mutation({
            query:({currency1, currency2,amount})=> ({
                url:`pair/${currency1}/${currency2}/${amount}`,
            }),
            invalidatesTags:['CurrencyExchange']
        }),
    })
})
export const {useGetExchangeMutation} = authApi