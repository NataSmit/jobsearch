import { createSlice } from "@reduxjs/toolkit";

import { SearchParams } from "../types/types";
import { getSearchHistoryFromLS } from "../utils/utils";

const history: SearchParams[] = [];

export const historySlice = createSlice({
  name: "history",
  initialState: {
    history,
  },
  reducers: {
    addHistory: (state, action) => {
      ("addHistory working");
      state.history.push({
        jobTitle: action.payload.jobTitle,
        location: action.payload.location,
      });
    },
    clearHistory: (state) => {
      state.history = [];
    },
    getHistoryFromLS: (state, action) => {
      state.history = getSearchHistoryFromLS(action.payload.uid);
    },
  },
});

export const { addHistory, clearHistory, getHistoryFromLS } =
  historySlice.actions;
