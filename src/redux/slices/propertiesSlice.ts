import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, ref } from "firebase/database";
import { db } from "../../firebaseConfig";
import type { additionalFees, MonthlyCosts, MonthlyExpenses, TotalCosts } from "../types/Property";



type Property = {
    id: string;
} & additionalFees & MonthlyCosts & TotalCosts & MonthlyExpenses

interface PropertiesState {
    properties: Property[];
    loading: boolean;
    error: string | null;
}

const initialState: PropertiesState = {
    properties: [],
    loading: false,
    error: null,
};

export const fetchProperties = createAsyncThunk("properties/fetchProperties", async () => {
    const snapshot = await get(ref(db, "properties"));
    if (snapshot.exists()) {
        const data = snapshot.val();
        return Object.keys(data).map((key) => ({ id: key, ...data[key] }));
    }
    return [];
});


const propertiesSlice = createSlice({
    name: "properties",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProperties.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProperties.fulfilled, (state, action) => {
                state.loading = false;
                state.properties = action.payload;
            })
            .addCase(fetchProperties.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch properties";
            });
    },
});

export default propertiesSlice.reducer;