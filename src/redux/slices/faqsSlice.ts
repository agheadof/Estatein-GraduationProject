import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref } from "firebase/database";
import { db } from "../../firebaseConfig";
import type { Faqs } from "../types/FAQ";


interface FaqsState {
  items: Faqs[];
  visibleItems: Faqs[];
  loading: boolean;
  error: string | null;
  // itemsPerPage: number;
}

const initialState: FaqsState = {
  items: [],
  visibleItems: [],
  loading: false,
  error: null,
  // itemsPerPage: 3,
};


export const fetchFaqs = createAsyncThunk(
  "Faqs/fetch",
  async () => {
    const snapshot = await get(ref(db, "faqs"));
    const data = snapshot.val();
    console.log(data)
    return Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
  }
);

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