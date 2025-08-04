import type { ReactNode } from "react";

export type CommonCardProps = {
    cardStyle?: string;
    cardImg: string;
    cardTitle: string;
    titleStyle?: string;
    titleSize?: string;
    cardDesc?: string;
    isArrow?: boolean,
    children: ReactNode;  
}