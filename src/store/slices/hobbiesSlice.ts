import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Hobbies, type IdNamePair } from "../../types/StoreTypes";

interface HobbiesState {
  entries: Hobbies;
}

const initialState: HobbiesState = {
  entries: [],
};

let id = 1;
export const hobbiesSlice = createSlice({
  name: "hobbies",
  initialState,
  reducers: {
    addEntry: (
      state,
      action: PayloadAction<IdNamePair>,
    ) => {
      const newHobby = {...action.payload, id: id};
      state.entries.push(newHobby);
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

export const { addEntry, removeEntry } = hobbiesSlice.actions;
export default hobbiesSlice.reducer;
