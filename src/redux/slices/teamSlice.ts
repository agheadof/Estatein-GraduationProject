import { createGenericSlice } from "./createGenericSlice";
import type { Team } from "../types/team";

const { slice, fetchEntities } = createGenericSlice<Team, Team>({
  name: "team",
  itemsPerPage: 4,
});

export const fetchTeams = fetchEntities;
export default slice.reducer;

