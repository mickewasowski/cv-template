import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Experience } from "../../types/StoreTypes";

interface ExperienceState {
  entries: Experience[];
}

const initialState: ExperienceState = {
  entries: [],
};

export const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addEntry: (
      state,
      action: PayloadAction<Partial<Experience>>,
    ) => {
      return { ...state, ...action.payload };
    },

    // TODO: rework this
    // updateEntry: (
    //   state,
    //   action: PayloadAction<Partial<Education>>
    // ) => {
    //   return {...state, ...action};
    // },
  },
});

export const { addEntry } = experienceSlice.actions;
export default experienceSlice.reducer;
