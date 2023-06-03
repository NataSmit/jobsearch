import { configureStore } from "@reduxjs/toolkit";

import { jobAdsApi } from "./jobAdsApi";
import { historySlice } from "./historySlice";

const store = configureStore({
  reducer: {
    [jobAdsApi.reducerPath]: jobAdsApi.reducer,
    historySlice: historySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobAdsApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
