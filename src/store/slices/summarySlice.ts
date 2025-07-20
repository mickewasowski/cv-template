import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Summary } from "../../types/StoreTypes";

interface SummaryState {
  summary: Summary;
}

const initialState: SummaryState = {
  summary: '',
};

export const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    updateEntry: (
      state,
      action: PayloadAction<Partial<Summary>>,
    ) => {
      return { ...state, summary: action.payload };
    },
  },
});

export const { updateEntry } = summarySlice.actions;
export default summarySlice.reducer;
