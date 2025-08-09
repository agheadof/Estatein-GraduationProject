import { createGenericSlice } from "./createGenericSlice";
import type { Faqs } from "../types/FAQ";

const { slice, fetchEntities } = createGenericSlice<Faqs, Faqs>({
  name: "faqs",
  path: "faqs",
  itemsPerPage: 3, 
});

export const fetchFaqs = fetchEntities;

export default slice.reducer;