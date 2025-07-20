import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Template } from "../../types/StoreTypes";

const initialState: Template = {
  name: '',
  primaryColor: '',
};

export const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    updateEntry: (
      state,
      action: PayloadAction<Partial<Template>>,
    ) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateEntry } = templateSlice.actions;
export default templateSlice.reducer;
