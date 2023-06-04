import { Middleware } from "redux";

import { addSearchPramsToLS, deleteUserHistoryFromLS } from "../utils/utils";

import { RootState } from "./store";

export const manageLocalStorageMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (action.type === "history/addHistory") {
      addSearchPramsToLS(action.payload.userId, {
        jobTitle: action.payload.jobTitle,
        location: action.payload.location,
      });
    }
    if (action.type === "history/clearHistory") {
      deleteUserHistoryFromLS(action.payload.currentUserID);
    }

    return next(action);
  };
