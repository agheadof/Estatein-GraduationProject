import { configureStore } from "@reduxjs/toolkit";
import faqsReducer from './slices/faqsSlice';
import achievementReducer from "./slices/achievementSlice";
import themeReducer from './slices/themeSlice';
import propertiesReducer from "./slices/propertiesSlice"

const store = configureStore({
    reducer: {
        theme: themeReducer,
        faqs: faqsReducer,
        achievements: achievementReducer,
        properties: propertiesReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
export type AppDispatch = typeof store.dispatch;

