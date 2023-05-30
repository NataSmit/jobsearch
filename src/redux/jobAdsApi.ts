import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { JobAd } from "../types/types";

export const jobAdsApi = createApi({
  reducerPath: "jodAdsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api/users?page=2",
  }),
  endpoints: (builder) => ({
    getJobAds: builder.query({
      query: () => "/",
    }),
  }),
});

export const { useGetJobAdsQuery } = jobAdsApi;
