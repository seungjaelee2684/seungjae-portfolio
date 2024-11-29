import { configureStore } from "@reduxjs/toolkit";
import pageState from '../modules/pageState';
import isMobile from '../modules/isMobile';
import modalOpen from '../modules/globalModalOpen';
import guide from '../modules/guide';
import darkMode from "../modules/darkMode";

const store = configureStore({
    reducer: {
        pageState,
        isMobile,
        modalOpen,
        guide,
        darkMode,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;