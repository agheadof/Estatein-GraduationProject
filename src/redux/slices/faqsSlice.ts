import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get } from "firebase/database";
import { db } from "../../firebaseConfig";
import type { Faqs } from "../types/FAQ";

interface FaqsState {
  faqs: Faqs[];
  currentFaqs: Faqs[];
  currentPage: number;
  itemsPerPage: 6;
  totalPages: number;
  loading: boolean;
  error: string | null;
}

const initialState: FaqsState = {
  faqs: [],
  currentFaqs: [],
  currentPage: 1,
  itemsPerPage: 6,
  totalPages: 0,
  loading: true,
  error: null,
};

export const fetchFaqs = createAsyncThunk("faqs/fetchFaqs", async () => {
  try {
    const snapshot = await get(ref(db, "faqs"));
    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.keys(data).map((key) => ({ id: key, ...data[key] }));
    }
    return [];
  } catch (error) {
    throw new Error("Error");
  }
});

const faqsSlice = createSlice({
  name: "faqs",
  initialState,
  reducers: {
    getFaqsByPag: (state, action) => {
      const page = action.payload;
      const start = (page - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;

      state.currentPage = page;
      state.currentFaqs = state.faqs.slice(start, end);
      state.totalPages = Math.ceil(state.faqs.length / state.itemsPerPage);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaqs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFaqs.fulfilled, (state, action) => {
        state.loading = false;
        state.faqs = action.payload;
        state.totalPages = Math.ceil(action.payload.length / state.itemsPerPage);
        state.currentPage = 1;
        state.currentFaqs = action.payload.slice(0, state.itemsPerPage);
      })
      .addCase(fetchFaqs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "there is an error";
      });
  },
});

export const { getFaqsByPag } = faqsSlice.actions;
export default faqsSlice.reducer;

