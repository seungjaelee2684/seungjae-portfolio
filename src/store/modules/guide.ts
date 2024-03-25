import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "loby",
        length: 0,
        transverse: 0
    },
    {
        id: "about",
        length: 0,
        transverse: 0
    },
    {
        id: "skill",
        length: 0,
        transverse: 0
    },
    {
        id: "project",
        length: 0,
        transverse: 0
    },
];

const guideSlice = createSlice({
    name: "guidePage",
    initialState,
    reducers: {
        guideStep: (state, action) => {

        }
    }
});

export default guideSlice.reducer;
export const { guideStep } = guideSlice.actions;