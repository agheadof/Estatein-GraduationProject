import { createSlice } from "@reduxjs/toolkit";
import type { Achievement } from "../types/achievement";
import { createFetchThunk } from "../thunks/createFetchThunk";


interface AchievementState {
  items: Achievement[];
  visibleItems: Achievement[];
  loading: boolean;
  error: string | null;
  itemsPerPage: number;
}

const initialState: AchievementState = {
  items: [],
  visibleItems: [],
  loading: false,
  error: null,
  itemsPerPage: 3, 
};

export const fetchAchievements = createFetchThunk<Achievement>("achievements", "achievements");

const achievementSlice = createSlice({
  name: "achievements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAchievements.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAchievements.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.visibleItems = state.items.slice(0, state.itemsPerPage);
      })
      .addCase(fetchAchievements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "an error happend";
      });
  },
});

export default achievementSlice.reducer;
