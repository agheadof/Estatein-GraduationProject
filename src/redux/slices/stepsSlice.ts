import type { ExperienceSectionCardProps } from "../../types/Experience";
import { createGenericSlice } from "./createGenericSlice";

const { slice, fetchEntities } = createGenericSlice<ExperienceSectionCardProps, ExperienceSectionCardProps>({
  name: "steps",
  path: "steps",
  itemsPerPage: 6,
});

export const fetchSteps = fetchEntities;
export default slice.reducer;