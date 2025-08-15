import type { ElementType } from "react";

export type CardLink = {
  title: string;
  href: string;
};

export type CommonCardProps = {
  cardImg: string;
  links?: CardLink[];      
  HeadingTag?: ElementType;
  cardDesc?: string;
  cardStyle?: string;
  titleStyle?: string;
  titleSize?: string;
  isArrow?: boolean;
};
