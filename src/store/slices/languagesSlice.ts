import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Languages } from "../../types/StoreTypes";

interface LanguagesState {
  entries: Languages;
}

const initialState: LanguagesState = {
  entries: [],
};

export const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    updateEntries: (
      state,
      action: PayloadAction<Languages>,
    ) => {
      state.entries.push(...action.payload);
    },
  },
});

export const { updateEntries } = languagesSlice.actions;
export default languagesSlice.reducer;
