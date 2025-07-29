import { createSlice, type PayloadAction, type Draft } from "@reduxjs/toolkit";

export function createGenericSlide<T extends { name: string }>(
  sliceName: string
) {
  let id = 1;

  const initialState: {entries: Array<T & {id: number}>} = {
    entries: [],
  };

  const slice = createSlice({

    name: sliceName,
    initialState,
    reducers: {
      addEntry: (state, action: PayloadAction<T>) => {
        const newItem = {...action.payload, id: id++};
        state.entries.push(newItem as Draft<T & {id: number}>);
      },
      removeEntry: (state, action: PayloadAction<number>) => {
        state.entries = state.entries.filter((item) => item.id !== action.payload);
      },
    }
  });

  return slice;
};

