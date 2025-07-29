import { type Website } from "../../types/StoreTypes";
import { createGenericSlide } from "./genericSliceFactory";

const websitesSlice = createGenericSlide<Website>("websites");

export const { addEntry, removeEntry } = websitesSlice.actions;
export default websitesSlice.reducer;
