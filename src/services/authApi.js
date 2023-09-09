import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const authApi = createApi({
    reducerPath: "CurrencyExchange",
    tagTypes: ["CurrencyExchange"],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.apilayer.com/fixer",
    }),
    endpoints: build => ({
        getExchange:build.mutation({
            query:({currency1, currency2,amount})=> ({
                url:`convert`,
                headers:{
                    apikey : "D04rYMknELftvvkPZoC3byCArdtYagFk"
                },
                params:{
                    from : currency1,
                    to : currency2,
                    amount:amount
                }
            }),
            invalidatesTags:['CurrencyExchange']
        }),
    })
})
export const {useGetExchangeMutation} = authApi