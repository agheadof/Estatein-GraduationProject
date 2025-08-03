import { createSlice } from "@reduxjs/toolkit";
import { fetchOffices } from "../thunks/officesThunks";

export type OfficeLocation = {
  id: string;
  branch: string;
  address: string;
  description: string;
  email: string;
  phone: string;
  city: string;
  category: string;
};

interface OfficeLocationState {
  offices: OfficeLocation[];
  loading: boolean;
  error: string | null;
}

const initialState: OfficeLocationState = {
  offices: [],
  loading: true,
  error: null,
};

const officesSlice = createSlice({
  name: "offices",
  initialState,
  reducers: {}, // no synchronous reducers for now
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOffices.fulfilled, (state, action) => {
        state.loading = false;
        state.offices = action.payload;
      })
      .addCase(fetchOffices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load offices.";
      });
  },
});

export default officesSlice.reducer;
