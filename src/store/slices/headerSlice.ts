import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Header } from "../../types/StoreTypes";

//TODO: revert the default state to empty
const initialState: Header = {
  name: "John Doe",
  title: "Frontend Developer",
  summary: "",
  image: "",
  initials: true,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    updateEntry: (
      state,
      action: PayloadAction<Partial<Header>>
    ) => {
      return {...state, ...action.payload};
    },
  },
});

export const { updateEntry } = headerSlice.actions;
export default headerSlice.reducer;
