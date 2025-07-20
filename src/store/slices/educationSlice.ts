import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Education } from "../../types/StoreTypes";

interface EducationState {
  entries: Education[];
}

const initialState: EducationState = {
  entries: [],
};

let currentId = 1;

export const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    addEntry: (state, action: PayloadAction<Education>) => {
      const educationObject: Education = { ...action.payload, id: currentId };
      state.entries.push(educationObject);
      currentId++;
    },
    removeEntry: (state, action: PayloadAction<number>) => {
      state.entries = state.entries.filter((x) => x.id !== action.payload);
    },
    updateEntry: (
      state,
      action: PayloadAction<Education>
    ) => {
      const stateEntries = state.entries.filter((x) => x.id !== action.payload.id);
      state.entries = [...stateEntries, action.payload];
    },
  },
});

export const { addEntry, removeEntry, updateEntry } = educationSlice.actions;
export default educationSlice.reducer;
