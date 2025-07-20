import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Certificates } from "../../types/StoreTypes";

interface CertificatesState {
  entries: Certificates[];
}

const initialState: CertificatesState = {
  entries: [],
};

export const certificatesSlice = createSlice({
  name: "certificates",
  initialState,
  reducers: {
    updateEntry: (
      state,
      action: PayloadAction<Partial<Certificates>>,
    ) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateEntry } = certificatesSlice.actions;
export default certificatesSlice.reducer;
