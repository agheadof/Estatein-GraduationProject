import type { ElementType, ReactNode } from "react";

export type CommonCardProps = {
    HeadingTag?: ElementType;
    titleLink?: string;
    cardStyle?: string;
    cardImg: string;
    cardTitle?: string;
    titleStyle?: string;
    titleSize?: string;
    cardDesc?: string;
    isArrow?: boolean,
    children?: ReactNode;
    links?: LinkItem[]
}

type LinkItem = {
    title: string;
    link: string;
}
