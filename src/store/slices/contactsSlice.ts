import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Contacts } from "../../types/StoreTypes";

const initialState: Contacts = {
  email: '',
  phoneNumber: '',
  address: '',
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    updateEntry: (
      state,
      action: PayloadAction<Partial<Contacts>>,
    ) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateEntry } = contactsSlice.actions;
export default contactsSlice.reducer;
