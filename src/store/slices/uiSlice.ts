import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type UI } from "../../types/StoreTypes";

const initialState: UI = {
  pageLayout: {
    main: [],
    side: [],
  },
  primaryColor: '',
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    updateEntry: (
      state,
      action: PayloadAction<Partial<UI>>,
    ) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateEntry } = uiSlice.actions;
export default uiSlice.reducer;
