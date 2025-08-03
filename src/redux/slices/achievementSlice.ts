import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref } from "firebase/database";
import { db } from "../../firebaseConfig";
import type { Achievement } from "../types/achievement";


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


export const fetchAchievements = createAsyncThunk(
  "achievements/fetch",
  async () => {
    const snapshot = await get(ref(db, "achievements"));
    const data = snapshot.val();
    return Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
  }
);

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
