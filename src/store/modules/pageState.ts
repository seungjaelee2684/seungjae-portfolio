import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type InitialStateType = string;

const initialState : InitialStateType = "";

const pageStateSlice = createSlice({
    name: "pageState",
    initialState,
    reducers: {
        pageMove: (state, action : PayloadAction<string | undefined>) => {
            return action.payload;
        }
    }
});

export default pageStateSlice.reducer;
export const { pageMove } = pageStateSlice.actions;