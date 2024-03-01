import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type initialStateType = boolean;

const initialState : initialStateType = false;

const isMobileSlice = createSlice({
    name: "isMobile",
    initialState,
    reducers: {
        mobileView: (state, action : PayloadAction<boolean>) => {
            return action.payload;
        }
    }
});

export default isMobileSlice.reducer;
export const { mobileView } = isMobileSlice.actions