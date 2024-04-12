// create your RTK Query endpoints here
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quotesApi = createApi({
    reducerPath: "quotesApi",
    tagTypes: ["Quotes"],
    baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:9009/api/` }),
    endpoints: (build) => ({
        getQuotes: build.query({
            // (Fetch) request done here
            query: () => "quotes",
            providesTags: ["Quotes"]
        }),
        createQuote: build.mutation({
            // (POST) request done here
            query: (item) => ({
                url: "quotes",
                method: "POST",
                body: item
            }),
            invalidatesTags: ["Quotes"]
        }),
        toggleFake: build.mutation({
            // (PUT) request done here
            query: ({ id, item }) => ({
                url: `quotes/${id}`,
                method: "PUT",
                body: item
            }),
            invalidatesTags: ["Quotes"]
        }),
        deleteQuote: build.mutation({
            // (DELETE) request done here
            query: (id) => ({
                url: `quotes/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Quotes"]
        })
    }),
});

export const { 
    useGetQuotesQuery,
    useCreateQuoteMutation,
    useToggleFakeMutation,
    useDeleteQuoteMutation
} = quotesApi;