import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Websites } from "../../types/StoreTypes";

interface WebsitesState {
  entries: Websites;
}

const initialState: WebsitesState = {
  entries: [],
};

export const websitesSlice = createSlice({
  name: "websites",
  initialState,
  reducers: {
    updateEntries: (
      state,
      action: PayloadAction<Websites>,
    ) => {
      state.entries.push(...action.payload);
    },
  },
});

export const { updateEntries } = websitesSlice.actions;
export default websitesSlice.reducer;
