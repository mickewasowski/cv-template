import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Experience } from "../../types/StoreTypes";

interface ExperienceState {
  entries: Experience[];
}

const initialState: ExperienceState = {
  entries: [],
};

let currentId = 1;
export const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addEntry: (state, action: PayloadAction<Experience>) => {
      const educationObject: Experience = { ...action.payload, id: currentId };
      state.entries.push(educationObject);
      currentId++;
    },
    removeEntry: (state, action: PayloadAction<number>) => {
      state.entries = state.entries.filter((x) => x.id !== action.payload);
    },
    updateEntry: (
      state,
      action: PayloadAction<Experience>
    ) => {
      const stateEntries = state.entries.filter((x) => x.id !== action.payload.id);
      state.entries = [...stateEntries, action.payload];
    },
  },
});

export const { addEntry, updateEntry, removeEntry } = experienceSlice.actions;
export default experienceSlice.reducer;
