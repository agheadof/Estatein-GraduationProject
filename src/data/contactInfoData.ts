import { Link } from "react-router-dom";
import type { CommonCardProps } from "../types/CommonCard";

export const contactInfoData: CommonCardProps[] = [
    {
        cardTitle_1: "info@estatein.com",
        cardImg: "/assets/icons/CardUnderHero/email.svg",
        HeadingTag: Link,
        titleLink_1: "/"
    },
    {
        cardTitle_1: "+1 (123) 456-7890",
        cardImg: "/assets/icons/CardUnderHero/phone.svg",
        HeadingTag: Link,
        titleLink_1: "/"
    },
    {
        cardTitle_1: "Main Headquarters",
        cardImg: "/assets/icons/CardUnderHero/location.svg",
        HeadingTag: Link,
        titleLink_1: "/"
    },
    {
        cardTitle_1: "Instagram",
        cardTitle_2: "LinkedIn",
        cardTitle_3: "Facebook",
        cardImg: "/assets/icons/CardUnderHero/estatein.svg",
        HeadingTag: Link,
        titleLink_1: "/",
        titleLink_2: "/",
        titleLink_3: "/"
    },
]


