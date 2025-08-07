import { createAsyncThunk } from "@reduxjs/toolkit"
import { getDatabase, ref, get, child } from "firebase/database"

interface Client {
  id: string
  category: string
  domain: string
  name: string
  review: string
  since: string
}

export const fetchClients = createAsyncThunk<Client[]>(
  "clients/fetchClients",
  async (_, thunkAPI) => {
    try {
      const db = getDatabase()
      const snapshot = await get(child(ref(db), "clients"))
      if (!snapshot.exists()) return []

      const data = snapshot.val()
      const clients: Client[] = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }))

      return clients
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch clients")
    }
  }
)
