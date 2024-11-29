import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number = 0;

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    darkModeAction: (state, action: PayloadAction<number>) => {
      return action.payload;
    }
  }
});

export default darkModeSlice.reducer;
export const { darkModeAction } = darkModeSlice.actions;