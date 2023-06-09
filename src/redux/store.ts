import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { jobAdsApi } from "./jobAdsApi";
import { historySlice } from "./historySlice";
import { manageLocalStorageMiddleware } from "./middleware";

const rootReducer = combineReducers({
  [jobAdsApi.reducerPath]: jobAdsApi.reducer,
  historySlice: historySlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      jobAdsApi.middleware,
      manageLocalStorageMiddleware,
    ]),
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
