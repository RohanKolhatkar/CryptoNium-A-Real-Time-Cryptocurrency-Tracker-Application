import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'X-RapidAPI-Key': 'd8d3c32ae8msh95b3e6c27ff793dp1f55ffjsn09d03603825e',
  'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
};
const baseUrl = "https://crypto-news16.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest(`/news/top/5`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;