import { configureStore } from "@reduxjs/toolkit";
import pageState from '../modules/pageState';
import isMobile from '../modules/isMobile';
import modalOpen from '../modules/globalModalOpen';
import guide from '../modules/guide';
import darkMode from "../modules/darkMode";
import fontSize from "../modules/fontSize";

const store = configureStore({
    reducer: {
        pageState,
        isMobile,
        modalOpen,
        guide,
        darkMode,
        fontSize
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;