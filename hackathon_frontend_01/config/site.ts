export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Dine Market",
  description: "An Industrial Take on Streetwear",
  mainNav: [
    {
      title: "Female",
      href: "/products/female",
    },
    {
      title: "Male",
      href: "/products/male",
    },
    {
      title: "Kids",
      href: "/products/kids",
    },
    {
      title: "All Products",
      href: "/products",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
