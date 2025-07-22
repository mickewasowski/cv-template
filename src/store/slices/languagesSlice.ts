import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Languages, type IdNamePair } from "../../types/StoreTypes";

interface LanguagesState {
  entries: Languages;
}

const initialState: LanguagesState = {
  entries: [],
};

let id = 1;
export const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    addEntry: (
      state,
      action: PayloadAction<IdNamePair>,
    ) => {
      const newLang = {...action.payload, id: id};
      state.entries.push(newLang);
      id++;
    },
    removeEntry: (
      state,
      action: PayloadAction<number>,
    ) => {
      state.entries = state.entries.filter((x) => x.id !== action.payload);
    },
  },
});

export const { addEntry, removeEntry } = languagesSlice.actions;
export default languagesSlice.reducer;
