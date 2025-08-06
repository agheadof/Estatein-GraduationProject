import { createSlice } from "@reduxjs/toolkit";
import type { Faqs } from "../types/FAQ";
import { createFetchThunk } from "../thunks/createFetchThunk";
import type { GenericState } from "../types/ReduxState";

const initialState : GenericState<Faqs> = {
  items: [],
  visibleItems: [],
  loading: false,
  error: null,
};

export const fetchFaqs = createFetchThunk<Faqs>("faqs", "faqs");

const FaqsSlice = createSlice({
  name: "Faqs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaqs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFaqs.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.visibleItems = state.items;
      })
      .addCase(fetchFaqs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "an error happend";
      });
  },
});

export default FaqsSlice.reducer;