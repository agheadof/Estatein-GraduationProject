import { configureStore } from "@reduxjs/toolkit";
import faqsReducer from './slices/faqsSlice';

const store = configureStore({
    reducer : {
        faqs: faqsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
export type AppDispatch = typeof store.dispatch;

