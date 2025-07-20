import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Education } from "../../types/StoreTypes";

interface EducationState {
  entries: Education[];
}

const initialState: EducationState = {
  entries: [],
};

export const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    addEntry: (
      state,
      action: PayloadAction<Partial<Education>>,
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

export const { addEntry } = educationSlice.actions;
export default educationSlice.reducer;
