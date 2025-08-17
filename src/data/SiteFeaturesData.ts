import { Link } from "react-router-dom";
import type { CommonCardProps } from "../types/CommonCard";

export const SiteFeaturesServicesData: CommonCardProps[] = [
    {
        cardTitle: "Find Your Dream Home",
        cardImg: "/assets/icons/CardUnderHero/home.svg",
        HeadingTag: Link,
        titleLink: "/properties"
    },
    {
        cardTitle: "Unlock Property Value",
        cardImg: "/assets/icons/CardUnderHero/unlock.svg",
        HeadingTag: "a",
        titleLink: "/services/#property"
    },
    {
        cardTitle: "Effortless Property Management",
        cardImg: "/assets/icons/CardUnderHero/effortless.svg",
        HeadingTag: "a",
        titleLink: "/services/#management"
    },
    {
        cardTitle: "Smart Investments, Informed Decisions",
        cardImg: "/assets/icons/CardUnderHero/smart.svg",
        HeadingTag: "a",
        titleLink: "/services/#investments"
    },
]

export const SiteFeaturesHomeData: CommonCardProps[] = [
    {
        cardTitle: "Find Your Dream Home",
        cardImg: "/assets/icons/CardUnderHero/home.svg",
        HeadingTag: Link,
        titleLink: "/properties"
    },
    {
        cardTitle: "Unlock Property Value",
        cardImg: "/assets/icons/CardUnderHero/unlock.svg",
        HeadingTag: Link,
        titleLink: "/services"
    },
    {
        cardTitle: "Effortless Property Management",
        cardImg: "/assets/icons/CardUnderHero/effortless.svg",
        HeadingTag: Link,
        titleLink: "/services"
    },
    {
        cardTitle: "Smart Investments, Informed Decisions",
        HeadingTag: Link,
        cardImg: "/assets/icons/CardUnderHero/smart.svg",
        titleLink: "/services"
    },
]