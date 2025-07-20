import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Skills } from "../../types/StoreTypes";

interface SkillsState {
  entries: Skills;
}

const initialState: SkillsState = {
  entries: [],
};

export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    updateEntries: (
      state,
      action: PayloadAction<Skills>,
    ) => {
      state.entries.push(...action.payload);
    },
  },
});

export const { updateEntries } = skillsSlice.actions;
export default skillsSlice.reducer;
