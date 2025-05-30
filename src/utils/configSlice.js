import { createSlice } from "@reduxjs/toolkit";
import lang from "./languageConstants";
import reducer from "./userSlice";

const configSlice = createSlice({
  name: "configure",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = configSlice.actions;

export default configSlice.reducer;
