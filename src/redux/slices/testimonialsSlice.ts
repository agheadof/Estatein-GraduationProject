import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref } from "firebase/database";
import { db } from "../../firebaseConfig";
import type { testimonials } from "../types/Testimonial";


interface testimonialsState {
    items: testimonials[];
    visibleItems: testimonials[];
    loading: boolean;
    error: string | null;
    // itemsPerPage: number;
}

const initialState: testimonialsState = {
    items: [],
    visibleItems: [],
    loading: false,
    error: null,
    // itemsPerPage: 3,
};


export const fetchTestimonials = createAsyncThunk(
    "testimonials/fetch",
    async () => {
        const snapshot = await get(ref(db, "testimonials"));
        const data = snapshot.val();
        return Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
        }));
    }
);

const testimonialsSlice = createSlice({
    name: "testimonials",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTestimonials.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTestimonials.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
                state.visibleItems = state.items;
            })
            .addCase(fetchTestimonials.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "an error happend";
            });
    },
});

export default testimonialsSlice.reducer;