import { configureStore } from "@reduxjs/toolkit";
import faqsReducer from './slices/faqsSlice';
import officesReducer from "./slices/ourOfficesSlice"

const store = configureStore({
  reducer: {
    faqs: faqsReducer,
    offices: officesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
export type AppDispatch = typeof store.dispatch;

