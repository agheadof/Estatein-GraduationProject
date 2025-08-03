export type additionalFees = {
    transferTax: number;
    legalFees: number;
    homeInspection: number;
    propertyInsurance: number;
}

export type MonthlyCosts = {
    propertyTaxes: number;
    hoaFees: number;
}

export type TotalCosts = {
    listingPrice: number;
    additionalFees: number;
    downPayment: number;
    mortgageAmount: number;
}

export type MonthlyExpenses = {
    // propertyTaxes: number;
    // hoaFees: number;
    propertyInsurance: number;
}


