import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref } from "firebase/database";
import { db } from "../../firebaseConfig";

export const fetchOffices = createAsyncThunk("locations/fetch", async () => {
  const snapshot = await get(ref(db, "locations"));
  const data = snapshot.val();

  return Object.keys(data).map((key) => ({
    id: key,
    ...data[key],
  }));
});
