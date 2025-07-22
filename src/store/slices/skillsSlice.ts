import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Skills, type Skill } from "../../types/StoreTypes";

interface SkillsState {
  entries: Skills;
}

const initialState: SkillsState = {
  entries: [],
};

let id = 1;
export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addEntry: (state, action: PayloadAction<Skill>) => {
      const newSkill = {...action.payload, id: id};
      state.entries.push(newSkill);
      id++;
    },
    removeEntry: (state, action: PayloadAction<number>) => {
      state.entries = state.entries.filter((x) => x.id !== action.payload);
    },
  },
});

export const { removeEntry, addEntry } = skillsSlice.actions;
export default skillsSlice.reducer;
