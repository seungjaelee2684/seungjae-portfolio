import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
    kind: string,
    isopen: boolean
};

const initialState : InitialStateType = {
    kind: "",
    isopen: false
};

const globalModalOpenSlice = createSlice({
    name: "globalModalOpen",
    initialState,
    reducers: {
        modalOpen: (state, action : PayloadAction<{
            kind: string,
            isopen: boolean
        }>) => {
            state.kind = action.payload.kind;
            state.isopen = action.payload.isopen;
        }
    }
});

export default globalModalOpenSlice.reducer;
export const { modalOpen } = globalModalOpenSlice.actions;