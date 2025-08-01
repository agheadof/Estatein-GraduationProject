
export type LinkItem = {
  label: string
  to: string
}

export type LinkGroup = {
  title: string
  to: string
  items: LinkItem[]
}
export const defaultLinks: LinkGroup[] = [
  {
    title: "Home",
    to: "/",
    items: [
      { label: "Hero Section", to: "/" },
      { label: "Features", to: "/" },
      { label: "Properties", to: "/properties" },
      { label: "Testimonials", to: "/" },
      { label: "FAQ's", to: "/" },
    ],
  },
  {
    title: "About Us",
    to: "/about",
    items: [
      { label: "Our Story", to: "/about" },
      { label: "Our Works", to: "/about" },
      { label: "How It Works", to: "/about" },
      { label: "Our Team", to: "/about" },
      { label: "Our Clients", to: "/about" },
    ],
  },
  {
    title: "Properties",
    to: "/properties",
    items: [
      { label: "Portfolio", to: "/properties" },
      { label: "Categories", to: "/properties" },
    ],
  },
  {
    title: "Services",
    to: "/services",
    items: [
      { label: "Valuation Mastery", to: "/services" },
      { label: "Strategic Marketing", to: "/services" },
      { label: "Negotiation Wizardry", to: "/services" },
      { label: "Closing Success", to: "/services" },
      { label: "Property Management", to: "/services" },
    ],
  },
  {
    title: "Contact Us",
    to: "/contact",
    items: [
      { label: "Contact Form", to: "/contact" },
      { label: "Our Offices", to: "/contact" },
    ],
  },
]