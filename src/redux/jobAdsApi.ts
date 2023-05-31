import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { JobAd, JodAdDetails, JobAdDTO, JobAdInfoDTO } from "../types/types";

export const jobAdsApi = createApi({
  reducerPath: "jodAdsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://indeed12.p.rapidapi.com/",
    prepareHeaders(headers) {
      headers.set("X-RapidAPI-Key", process.env.REACT_APP_RAPIDAPI_KEY || "");
      headers.set("X-RapidAPI-Host", "indeed12.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getJobAds: builder.query<JobAd[], { position: string; city: string }>({
      query: (args) => {
        const { position, city } = args;
        return {
          url: `jobs/search?query=${position}&location=${city}`,
        };
      },
      transformResponse: ({ hits }: JobAdDTO) =>
        hits.map(
          ({ company_name, formatted_relative_time, id, location, title }) => {
            return {
              companyName: company_name,
              publicationTime: formatted_relative_time,
              id,
              location,
              title,
            };
          }
        ),
    }),
    getJobAdById: builder.query<JodAdDetails, string>({
      query: (id) => `job/${id}`,
      transformResponse: ({
        company,
        creation_date,
        description,
        job_title,
        location,
        job_type,
      }: JobAdInfoDTO) => {
        return {
          companyName: company.name,
          logo: company.logo_url,
          link: company.indeed_absolute_link,
          creationDate: creation_date,
          description: description,
          jobTitle: job_title,
          location,
          jobType: job_type,
        };
      },
    }),
  }),
});

export const { useGetJobAdsQuery, useGetJobAdByIdQuery } = jobAdsApi;
