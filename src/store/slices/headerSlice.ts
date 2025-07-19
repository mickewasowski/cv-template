import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Header } from "../../types/StoreTypes";

const initialState: Header = {
  name: "",
  title: "",
  image: "",
  initials: false,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    updateEntry: (
      state,
      action: PayloadAction<Partial<Header>>
    ) => {
      return {...state, ...action};
    },
  },
});

export const { updateEntry } = headerSlice.actions;
export default headerSlice.reducer;
