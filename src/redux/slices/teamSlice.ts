import { createSlice } from "@reduxjs/toolkit";
import type { Team } from "../types/team";
import { createFetchThunk } from "../thunks/createFetchThunk";


interface TeamState {
  items: Team[];
  visibleItems: Team[];
  loading: boolean;
  error: string | null;
  itemsPerPage: number;
}

const initialState: TeamState = {
  items: [],
  visibleItems: [],
  loading: false,
  error: null,
  itemsPerPage: 4, 
};

export const fetchTeams = createFetchThunk<Team>("team", "team");

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.visibleItems = state.items.slice(0, state.itemsPerPage);
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "an error happend";
      });
  },
});

export default teamSlice.reducer;