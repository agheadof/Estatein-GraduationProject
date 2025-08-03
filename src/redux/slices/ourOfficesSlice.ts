import { createSlice } from "@reduxjs/toolkit";
import { fetchOffices } from "../thunks/officesThunks";
import type {OfficeLocation} from "../types/OurOffices"


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
  reducers: {}, 
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
