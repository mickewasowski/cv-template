import { type IdNamePair } from "../../types/StoreTypes";
import { createGenericSlide } from "./genericSliceFactory";

const languagesSlice = createGenericSlide<IdNamePair>("languages");

export const { addEntry, removeEntry } = languagesSlice.actions;
export default languagesSlice.reducer;
