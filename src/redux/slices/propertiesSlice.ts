import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref } from "firebase/database";
import { db } from "../../firebaseConfig";
import type { Properties } from "../types/Property";

interface PropertiesState {
  items: Properties[];
  visibleItems: Properties[];
  loading: boolean;
  error: string | null;
  itemsPerPage: number;
}

const initialState: PropertiesState = {
  items: [],
  visibleItems: [],
  loading: false,
  error: null,
  itemsPerPage: 3, 
};


export const fetchProperties = createAsyncThunk(
  "properties/fetch",
  async () => {
    const snapshot = await get(ref(db, "properties"));
    const data = snapshot.val();
        console.log("", data);

    return Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
  }
);

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.visibleItems = state.items.slice(0, state.itemsPerPage);
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "an error happend";
      });
  },
});

export default propertiesSlice.reducer;
