import { createSlice } from "@reduxjs/toolkit";

const jobAdSlice = createSlice({
  name: "jobAds",
  initialState: {
    jobAds: [],
  },
  reducers: {},
});

//export {} = jobAdSlice.actions

export default jobAdSlice.reducer;
