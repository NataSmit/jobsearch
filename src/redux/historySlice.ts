import { createSlice } from "@reduxjs/toolkit";

import { SearchParams } from "../types/types";
import { getSearchHistoryFromLS } from "../utils/utils";

const currentUserID = localStorage.getItem("currentUserID") || "";
const history: SearchParams[] = getSearchHistoryFromLS(currentUserID);

export const historySlice = createSlice({
  name: "history",
  initialState: {
    history,
  },
  reducers: {
    addHistory: (state, action) => {
      state.history.push({
        jobTitle: action.payload.jobTitle,
        location: action.payload.location,
      });
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const { addHistory, clearHistory } = historySlice.actions;
