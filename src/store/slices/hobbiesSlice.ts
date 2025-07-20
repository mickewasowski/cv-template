import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Hobbies } from "../../types/StoreTypes";

interface HobbiesState {
  entries: Hobbies;
}

const initialState: HobbiesState = {
  entries: [],
};

export const hobbiesSlice = createSlice({
  name: "hobbies",
  initialState,
  reducers: {
    updateEntries: (
      state,
      action: PayloadAction<Hobbies>,
    ) => {
      state.entries.push(...action.payload);
    },
  },
});

export const { updateEntries } = hobbiesSlice.actions;
export default hobbiesSlice.reducer;
