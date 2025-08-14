import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get } from "firebase/database";
import type { PropertyType } from "../types/PropertyType";
import { db } from "../../firebaseConfig";

export const fetchFilteredProperties = createAsyncThunk<
  PropertyType[],
  Partial<{ searchTerm: string; location: string; propertyType: string; buildYear: string; pricingRange: string; propertySize: string }>,
  { rejectValue: string }
>(
  "properties/fetchFiltered",
  async (filters, { rejectWithValue }) => {
    try {
      const propertiesRef = ref(db, "properties");
      const snapshot = await get(propertiesRef);

      if (!snapshot.exists()) return [];

      let results: PropertyType[] = Object.values(snapshot.val()) as PropertyType[];

      // معالجة نطاق السعر
      let minPrice: number | null = null;
      let maxPrice: number | null = null;

      if (filters.pricingRange) {
        if (filters.pricingRange.includes("-")) {
          const [min, max] = filters.pricingRange.split("-").map((p) => parseInt(p, 10));
          minPrice = min;
          maxPrice = max;
        } else if (filters.pricingRange.endsWith("+")) {
          minPrice = parseInt(filters.pricingRange, 10);
          maxPrice = Infinity;
        }
      }

      // معالجة حجم العقار (عدد الغرف)
      let minBedrooms: number | null = null;
      if (filters.propertySize) {
        minBedrooms = parseInt(filters.propertySize, 10);
      }

      // الفلترة
      results = results.filter((prop) => {
        const bedroomsCount = Number(prop.bedrooms);

        // فلترة بالكلمة العامة (searchTerm)
        if (filters.searchTerm) {
          const search = filters.searchTerm.toLowerCase();
          const propValues = Object.values(prop).map(v => String(v).toLowerCase());
          if (!propValues.some(val => val.includes(search))) return false;
        }

        if (filters.location && prop.location !== filters.location) return false;
        if (filters.propertyType && prop.type !== filters.propertyType) return false;
        if (filters.buildYear && prop.buildYear !== filters.buildYear) return false;

        // فلترة السعر
        if (minPrice !== null && maxPrice !== null) {
          if (prop.price < minPrice || prop.price > maxPrice) return false;
        }

        // فلترة حجم العقار
        if (minBedrooms !== null) {
          if (filters.propertySize?.endsWith("+")) {
            if (bedroomsCount < minBedrooms) return false;
          } else {
            if (bedroomsCount !== minBedrooms) return false;
          }
        }

        return true;
      });

      console.log("Results after filtering:", results);
      return results;
    } catch (err: any) {
      console.error(err);
      return rejectWithValue(err.message || "Failed to fetch properties");
    }
  }
);
