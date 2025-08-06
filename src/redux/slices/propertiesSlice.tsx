
import { createSlice } from '@reduxjs/toolkit'
import { createFetchThunk } from '../thunks/createFetchThunk'


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
    tags?: string;
}

const transformProperty = (property: any, id: string): PropertyType => ({
    id,
    image: property.images?.[0] || '',
    title: property.type || 'Property',
    desc: property.description?.slice(0, 100) + '...',
    Price: `$${property.price?.toLocaleString() || 'N/A'}`,
    details: [
        {
            label: `${property.bedrooms|| 0}-Bedroom`,
            icon: "bed",
        },
        {
            label: `${property.bathrooms|| 0}-Bathroom`,
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
})

export const fetchProperties = createFetchThunk<PropertyType>("properties", "properties",  transformProperty);

type PropertiesState = {
  all: PropertyType[]
  loading: boolean
  error: string | null
}

const initialState: PropertiesState = {
    all: [],
    // properties: [],
    loading: false,
    error: null,
}

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
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
  },
})

export default propertiesSlice.reducer
