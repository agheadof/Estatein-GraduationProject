import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref } from "firebase/database";
import { db } from "../../firebaseConfig";
import type { Team } from "../types/team";


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


export const fetchTeams = createAsyncThunk(
  "team/fetch",
  async () => {
    const snapshot = await get(ref(db, "team"));
    const data = snapshot.val();

    return Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
  }
);

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