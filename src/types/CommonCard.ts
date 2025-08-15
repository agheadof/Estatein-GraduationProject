import type { ElementType, ReactNode } from "react";

export type CommonCardProps = {
    HeadingTag?: ElementType;
    titleLink_1?: string;
    titleLink_2?: string;
    titleLink_3?: string;
    cardStyle?: string;
    cardImg: string;
    cardTitle_1: string;
    cardTitle_2?: string;
    cardTitle_3?: string;
    titleStyle?: string;
    titleSize?: string;
    cardDesc?: string;
    isArrow?: boolean,
    children?: ReactNode;
}