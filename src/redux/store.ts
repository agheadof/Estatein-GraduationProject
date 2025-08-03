import { configureStore } from "@reduxjs/toolkit";
import faqsReducer from "./slices/faqsSlice";
import achievementReducer from "./slices/achievementSlice";
import teamReducer from "./slices/teamSlice";
import themeReducer from "./slices/themeSlice";
import officesReducer from "./slices/ourOfficesSlice"

const store = configureStore({
  reducer: {
    theme: themeReducer,
    faqs: faqsReducer,
    achievements: achievementReducer,
    team: teamReducer,
    offices: officesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
export type AppDispatch = typeof store.dispatch;
