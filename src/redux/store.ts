import { configureStore } from "@reduxjs/toolkit";
import faqsReducer from './slices/faqsSlice';
import achievementReducer from "./slices/achievementSlice";

const store = configureStore({
    reducer : {
        faqs: faqsReducer,
        achievements: achievementReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
export type AppDispatch = typeof store.dispatch;

