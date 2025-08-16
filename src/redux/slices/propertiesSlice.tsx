import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { createFetchThunk } from "../thunks/createFetchThunk";
import { fetchFilteredProperties } from "../thunks/filteredProperties";
import { fetchPropertyById } from "../thunks/propertyByIdThunk";

export type PropertyType = {
  id: string;
  image: string;
  title: string;
  desc: string;
  details: { label: string; icon: string }[];
  Price: string;

  descriptionLong?: string;
  gallery?: string[];
  location?: string;
  [key: string]: any;
  tags?: string;
  features?: string[];
  additionalFees?: {
    inspection: number;
    insurance: number;
    legalFees: number;
    mortgageFees: number;
    transferTax: number;
  };
};

const transformProperty = (property: any, id: string): PropertyType => ({
  id,
  image: property.images?.[0] || "",
  title: property.type || "Property",
  desc: property.description?.slice(0, 100) + "...",
  Price: `$${property.price?.toLocaleString() || "N/A"}`,
  details: [
    { label: `${property.bedrooms || 0}-Bedroom`, icon: "bed" },
    { label: `${property.bathrooms || 0}-Bathroom`, icon: "bath" },
    { label: `Villa`, icon: "villa" },
  ],

  descriptionLong: property.description,
  gallery: property.images,
  location: property.location,
  tags: "Coastal Escapes - Where Waves Beckon",
  features: property.features || [],

  additionalFees: property.additionalFees || {},
  monthlyCosts: property.monthlyCosts || {},
  monthlyExpenses: property.monthlyExpenses || {},
  totalInitialCosts: property.totalInitialCosts || {},
});

export const fetchProperties = createFetchThunk<PropertyType>(
  "properties",
  "properties",
  transformProperty
);

type PropertiesState = {
  all: PropertyType[];
  current?: PropertyType | null;
  loading: boolean;
  error: string | null;
};

const initialState: PropertiesState = {
  all: [],
  current: null,
  loading: true,
  error: null,
};

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    setProperties: (state, action: PayloadAction<PropertyType[]>) => {
      state.all = action.payload ?? [];
      state.loading = false;
      state.error = null;
    },
    setCurrentProperty: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.current = state.all.find((prop) => prop.id === id) || null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredProperties.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.all = [];
      })
      .addCase(
        fetchFilteredProperties.fulfilled,
        (state, action: PayloadAction<PropertyType[]>) => {
          state.loading = false;
          state.all = action.payload;
        }
      )
      .addCase(fetchFilteredProperties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchPropertyById.fulfilled, (state, action) => {
      const property = action.payload;
      state.current = property;
      state.loading = false;
    })
    .addCase(fetchPropertyById.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchPropertyById.rejected, (state, action) => {
      state.loading = false;
      state.error = "not-found";
    });
  },
});

export const { setProperties, setCurrentProperty, setLoading, setError } =
  propertiesSlice.actions;

export default propertiesSlice.reducer;
