import { createSlice } from "@reduxjs/toolkit"
import { createFetchThunk } from "../thunks/createFetchThunk"
import { fetchPropertyById } from "../thunks/propertyByIdThunk"

export type PropertyType = {
  id: string
  image: string
  title: string
  desc: string
  details: { label: string; icon: string }[]
  Price: string

  descriptionLong?: string
  gallery?: string[]
  location?: string
  [key: string]: any
  tags?: string
  features?: string[]
  additionalFees?: {
    inspection: number
    insurance: number
    legalFees: number
    mortgageFees: number
    transferTax: number
  }
}

const transformProperty = (property: any, id: string): PropertyType => ({
  id,
  image: property.images?.[0] || "",
  title: property.type || "Property",
  desc: property.description?.slice(0, 100) + "...",
  Price: `$${property.price?.toLocaleString() || "N/A"}`,
  details: [
    {
      label: `${property.bedrooms || 0}-Bedroom`,
      icon: "bed",
    },
    {
      label: `${property.bathrooms || 0}-Bathroom`,
      icon: "bath",
    },
    {
      label: `Villa`,
      icon: "villa",
    },
  ],

  descriptionLong: property.description,
  gallery: property.images,
  location: property.location,
  tags: "Coastal Escapes - Where Waves Beckon",
  features: property.features || [],
  additionalFees: {
    inspection: property.inspection || 0,
    insurance: property.insurance || 0,
    legalFees: property.legalFees || 0,
    mortgageFees: property.mortgageFees || 0,
    transferTax: property.transferTax || 0,
  },
})

export const fetchProperties = createFetchThunk<PropertyType>(
  "properties",
  transformProperty
)

type PropertiesState = {
  all: PropertyType[]
  current?: PropertyType | null
  loading: boolean
  error: string | null
}

const initialState: PropertiesState = {
  all: [],
  loading: false,
  error: null,
}

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    setCurrentProperty: (state, action) => {
      const id = action.payload
      const property = state.all.find((prop) => prop.id === id)
      state.current = property || null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.loading = false
        state.all = action.payload
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to fetch"
      })
      .addCase(fetchPropertyById.fulfilled, (state, action) => {
        state.loading = false
        state.current = transformProperty(action.payload, action.payload.id)
      })
      .addCase(fetchPropertyById.rejected, (state) => {
        state.loading = false
        state.error = "not-found"
      })
  },
})

export const { setCurrentProperty } = propertiesSlice.actions
export default propertiesSlice.reducer