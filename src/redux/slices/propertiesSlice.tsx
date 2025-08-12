import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { PropertyType } from "../types/PropertyType"

type PropertiesState = {
  all: PropertyType[]
  current?: PropertyType | null
  loading: boolean
  error: string | null
}

const initialState: PropertiesState = {
  all: [],
  current: null,
  loading: true,
  error: null,
}

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    setProperties: (state, action: PayloadAction<PropertyType[]>) => {
      state.all = action.payload ?? []
      state.loading = false
      state.error = null
    },
    setCurrentProperty: (state, action: PayloadAction<string>) => {
      const id = action.payload
      state.current = state.all.find((prop) => prop.id === id) || null
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
      state.loading = false
    },
  },
})

export const { setProperties, setCurrentProperty, setLoading, setError } =
  propertiesSlice.actions

export default propertiesSlice.reducer
