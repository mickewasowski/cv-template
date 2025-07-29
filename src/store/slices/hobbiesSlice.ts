import { type IdNamePair } from "../../types/StoreTypes";
import { createGenericSlide } from "./genericSliceFactory";

const hobbiesSlice = createGenericSlide<IdNamePair>("hobbies");

export const { addEntry, removeEntry } = hobbiesSlice.actions;
export default hobbiesSlice.reducer;
