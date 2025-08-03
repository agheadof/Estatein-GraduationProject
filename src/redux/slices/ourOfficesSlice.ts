// redux/slices/officeSlice.ts
import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchOffices } from "../thunks/officesThunks";

export type OfficeLocation = {
  id: string;
  branch: string;
  address: string;
  details: string;
  email: string;
  phone: string;
  city: string;
  category: string;
};

interface OfficeLocationState {
  offices: OfficeLocation[];
  loading: boolean;
  error: string | null;
  activeTab: "all" | "regional" | "international";
}

const initialState: OfficeLocationState = {
  offices: [],
  loading: true,
  error: null,
  activeTab: "all",
};

const officesSlice = createSlice({
  name: "offices",
  initialState,
  reducers: {
    setActiveTab: (
      state,
      action: PayloadAction<OfficeLocationState["activeTab"]>
    ) => {
      state.activeTab = action.payload;
    },
  },
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

export const { setActiveTab } = officesSlice.actions;

export default officesSlice.reducer;
