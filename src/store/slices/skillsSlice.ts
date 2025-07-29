import { type IdNamePair } from "../../types/StoreTypes";
import { createGenericSlide } from "./genericSliceFactory";

const skillsSlice = createGenericSlide<IdNamePair>("skills");

export const { removeEntry, addEntry } = skillsSlice.actions;
export default skillsSlice.reducer;
