import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Website, type Websites } from "../../types/StoreTypes";

interface WebsitesState {
  entries: Websites;
}

const initialState: WebsitesState = {
  entries: [],
};

let id = 1;
export const websitesSlice = createSlice({
  name: "websites",
  initialState,
  reducers: {
    addEntry: (
      state,
      action: PayloadAction<Website>,
    ) => {
      const newWebsite = {...action.payload, id: id};
      state.entries.push(newWebsite);
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

export const { addEntry, removeEntry } = websitesSlice.actions;
export default websitesSlice.reducer;
