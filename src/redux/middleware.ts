import { Middleware } from "redux";

import { addSearchParamsToLS, deleteUserHistoryFromLS } from "../utils/utils";

import { RootState } from "./store";

export const manageLocalStorageMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const currentUserID = localStorage.getItem("currentUserID") || "";
    if (action.type === "history/addHistory") {
      addSearchParamsToLS(currentUserID, {
        jobTitle: action.payload.jobTitle,
        location: action.payload.location,
      });
    }
    if (action.type === "history/clearHistory") {
      deleteUserHistoryFromLS(currentUserID);
    }

    return next(action);
  };
