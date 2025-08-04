import type { RootState } from '../store'
import type { PropertyType } from '../slices/propertiesSlice'

export const selectPropertiesCardsData = (state: RootState) =>
    state.properties.all

export const selectPropertyById = (id: string) => (state: RootState): PropertyType | undefined =>
    state.properties.all.find((property) => property.id === id)

// export type additionalFees = {
//     transferTax: number;
//     legalFees: number;
//     homeInspection: number;
//     propertyInsurance: number;
// }

// export type MonthlyCosts = {
//     propertyTaxes: number;
//     hoaFees: number;
// }

// export type TotalCosts = {
//     listingPrice: number;
//     additionalFees: number;
//     downPayment: number;
//     mortgageAmount: number;
// }

// export type MonthlyExpenses = {
//     // propertyTaxes: number;
//     // hoaFees: number;
//     propertyInsurance: number;
// }


