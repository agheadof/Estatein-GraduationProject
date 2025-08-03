import { configureStore } from "@reduxjs/toolkit";
import faqsReducer from './slices/faqsSlice';
import achievementReducer from "./slices/achievementSlice";
import teamReducer from "./slices/teamSlice";
import propertiesReducer from "./slices/propertiesSlice";

const store = configureStore({
    reducer : {
        faqs: faqsReducer,
        achievements: achievementReducer,
            team: teamReducer,
            properties : propertiesReducer, 

    }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
export type AppDispatch = typeof store.dispatch;

