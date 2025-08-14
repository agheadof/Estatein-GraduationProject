import { createGenericSlice } from "./createGenericSlice"
import type { Faqs } from "../types/FAQ"

const { slice, startListening } = createGenericSlice<Faqs, Faqs>({
  name: "faqs",
  path: "faqs",
  itemsPerPage: 3,
})

export const fetchFaqs = startListening

export default slice.reducer
