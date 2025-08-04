import type { RootState } from '../store'
import type { PropertyType } from '../slices/propertiesSlice'

export const selectPropertiesCardsData = (state: RootState) =>
    state.properties.all

export const selectPropertyById = (id: string) => (state: RootState): PropertyType | undefined =>
    state.properties.all.find((property) => property.id === id)
