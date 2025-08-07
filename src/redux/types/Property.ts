import type { PropertyType } from '../../types/Property'
import type { RootState } from '../store'

export const selectPropertiesCardsData = (state: RootState) =>
    state.properties.items

export const selectPropertyById = (id: string) => (state: RootState): PropertyType | undefined =>
    state.properties.items.find((property) => property.id === id)
