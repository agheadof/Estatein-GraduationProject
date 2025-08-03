import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const selectFilteredOffices = createSelector(
  [
    (state: RootState) => state.offices.offices,
    (state: RootState) => state.offices.activeTab,
  ],
  (offices, activeTab) =>
    activeTab === "all"
      ? offices
      : offices.filter((office) =>
          office.category.toLowerCase().includes(activeTab)
        )
);
