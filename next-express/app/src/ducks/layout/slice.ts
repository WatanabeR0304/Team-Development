import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type LayoutState = {
  process: boolean;
};

export const initialState: LayoutState = {
  process: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setProcess: (state, action: PayloadAction<boolean>) => ({
      ...state,
      process: action.payload,
    }),
  },
});

export default layoutSlice;
