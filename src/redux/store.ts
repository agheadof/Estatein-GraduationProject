import { configureStore } from "@reduxjs/toolkit";
import faqsReducer from "./slices/faqsSlice";
import achievementReducer from "./slices/achievementSlice";
import teamReducer from "./slices/teamSlice";
import officesReducer from "./slices/ourOfficesSlice"
import propertiesReducer from "./slices/propertiesSlice"
import testimonialsReducer from "./slices/testimonialsSlice";
import themeReducer from "./slices/themeSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        faqs: faqsReducer,
        achievements: achievementReducer,
        properties: propertiesReducer,
        team: teamReducer,
        testimonials: testimonialsReducer,
        offices: officesReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
