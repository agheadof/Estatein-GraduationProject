import { createGenericSlice } from "./createGenericSlice";
import type { Value } from "../types/value";

const { slice, fetchEntities } = createGenericSlice<Value, Value>({
  name: "values",
  itemsPerPage: 4,
});

export const fetchValues = fetchEntities;
export default slice.reducer;

