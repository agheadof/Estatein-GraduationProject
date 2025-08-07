import { createSlice } from "@reduxjs/toolkit"
import { fetchClients } from "../thunks/clientThunk"

interface Client {
  id: string
  category: string
  domain: string
  name: string
  review: string
  since: string
}

interface ClientsState {
  data: Client[]
  loading: boolean
  error: string | null
}

const initialState: ClientsState = {
  data: [],
  loading: false,
  error: null,
}

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClients.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchClients.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchClients.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export default clientsSlice.reducer
