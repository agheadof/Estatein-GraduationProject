import { createGenericSlice } from "./createGenericSlice";
import type { testimonials } from "../types/Testimonial";

const { slice, fetchEntities } = createGenericSlice<testimonials, testimonials>({
  name: "testimonials",
  itemsPerPage: 3,
});

export const fetchTestimonials = fetchEntities;
export default slice.reducer;
