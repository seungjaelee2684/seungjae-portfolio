import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const guideSlice = createSlice({
    name: "guide",
    initialState,
    reducers: {
        guideOpen: (state, action: PayloadAction<boolean>) => {
            return action.payload;
        }
    }
});

export default guideSlice.reducer;
export const { guideOpen } = guideSlice.actions;