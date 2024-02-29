import { configureStore } from "@reduxjs/toolkit";
import pageState from '../modules/pageState';

const store = configureStore({
    reducer: {
        pageState
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;