import { Link } from "react-router-dom";
import type { CommonCardProps } from "../types/CommonCard";

export const SiteFeaturesServicesData: CommonCardProps[] = [
    {
        cardTitle_1: "Find Your Dream Home",
        cardImg: "/assets/icons/CardUnderHero/home.svg",
        HeadingTag: Link,
        titleLink_1: "/properties"
    },
    {
        cardTitle_1: "Unlock Property Value",
        cardImg: "/assets/icons/CardUnderHero/unlock.svg",
        HeadingTag: "a",
        titleLink_1: "/services/#property"
    },
    {
        cardTitle_1: "Effortless Property Management",
        cardImg: "/assets/icons/CardUnderHero/effortless.svg",
        HeadingTag: "a",
        titleLink_1: "/services/#management"
    },
    {
        cardTitle_1: "Smart Investments, Informed Decisions",
        cardImg: "/assets/icons/CardUnderHero/smart.svg",
        HeadingTag: "a",
        titleLink_1: "/services/#investments"
    },
]

export const SiteFeaturesHomeData: CommonCardProps[] = [
    {
        cardTitle_1: "Find Your Dream Home",
        cardImg: "/assets/icons/CardUnderHero/home.svg",
        HeadingTag: Link,
        titleLink_1: "/properties"
    },
    {
        cardTitle_1: "Unlock Property Value",
        cardImg: "/assets/icons/CardUnderHero/unlock.svg",
        HeadingTag: Link,
        titleLink_1: "/services"
    },
    {
        cardTitle_1: "Effortless Property Management",
        cardImg: "/assets/icons/CardUnderHero/effortless.svg",
        HeadingTag: Link,
        titleLink_1: "/services"
    },
    {
        cardTitle_1: "Smart Investments, Informed Decisions",
        HeadingTag: Link,
        cardImg: "/assets/icons/CardUnderHero/smart.svg",
        titleLink_1: "/services"
    },
]