import { configureStore } from "@reduxjs/toolkit";

import { jobAdsApi } from "./jobAdsApi";

import jobAdReducer from "./jobAdSlice";

const store = configureStore({
  reducer: {
    jobAdReducer,
    [jobAdsApi.reducerPath]: jobAdsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobAdsApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
