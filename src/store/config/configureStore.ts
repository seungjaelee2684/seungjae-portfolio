import { configureStore } from "@reduxjs/toolkit";
import pageState from '../modules/pageState';
import isMobile from '../modules/isMobile';
import modalOpen from '../modules/globalModalOpen';
import guidePage from '../modules/guide';

const store = configureStore({
    reducer: {
        pageState,
        isMobile,
        modalOpen,
        guidePage
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;