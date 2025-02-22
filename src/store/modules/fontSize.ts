import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = '16px';

const fontSizeSlice = createSlice({
  name: 'fontSize',
  initialState,
  reducers: {
    sizeAction: (state, action: PayloadAction<string>) => {
      return action.payload;
    }
  }
});

export default fontSizeSlice.reducer;
export const { sizeAction } = fontSizeSlice.actions;