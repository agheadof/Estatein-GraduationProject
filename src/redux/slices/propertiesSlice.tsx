
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { get, ref } from 'firebase/database'
import { db } from '../../firebaseConfig'
import { Icon1 as BedIcon, Icon2 as BathIcon, Icon3 as VillaIcon } from '../../components/icons/PropertiesIcons'
import type { ReactNode } from 'react'

export type PropertyType = {
    id: string
    image: string
    title: string
    desc: string
    details: { label: string; icon: ReactNode }[]
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
            label: `${property.bedrooms || 0}-Bedroom`,
            icon: <BedIcon />,
        },
        {
            label: `${property.bathrooms || 0}-Bathroom`,
            icon: <BathIcon />,
        },
        {
            label: `-Villa`,
            icon: <VillaIcon />,
        },
    ],

    descriptionLong: property.description,
    gallery: property.images,
    location: property.location,
    tags: "Coastal Escapes - Where Waves Beckon",
})

export const fetchProperties = createAsyncThunk(
    'properties/fetchAll',
    async () => {
        const snapshot = await get(ref(db, 'properties'))
        const data = snapshot.val()
        console.log(data);

        return Object.entries(data).map(([id, prop]) =>
            transformProperty(prop, id)
        )
    }
)

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
