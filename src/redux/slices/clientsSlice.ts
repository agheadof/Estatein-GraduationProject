import { createGenericSlice } from "./createGenericSlice";
import type { Client } from "../types/client";

const { slice, fetchEntities } = createGenericSlice<Client, Client>({
  name: "clients",
  path: "clients",
  itemsPerPage: 3,
});

export const fetchClients = fetchEntities;
export default slice.reducer;
