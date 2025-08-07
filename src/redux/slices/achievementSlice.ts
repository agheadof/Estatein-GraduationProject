import { createGenericSlice } from "./createGenericSlice";
import type { Achievement } from "../types/achievement";

const { slice, fetchEntities } = createGenericSlice<Achievement, Achievement>({
  name: "achievements",
  path: "achievements",
  itemsPerPage: 3,
});

export const fetchAchievements = fetchEntities;
export default slice.reducer;