export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Masaka Town Church",
  description:
    "Welcome to Seventh-day adventist Church Masaka Town, Uganda website. We are a Christian community and would love to have you join our family. To learn more about what we believe you can visit our About Us page. Please join us for Bible study, worship, and prayer.",
  navItems: [
    { label: "Home", href: "/" },
    {
      label: "Membership",
      href: "/membership",
    },
    {
      label: "Ministries",
      href: "/ministries",
    },
    {
      label: "Resources",
      href: "/resources",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Media",
      href: "/media",
    },
  ],
  navMenuItems: [
    {
      label: "Membership",
      href: "/membership",
    },
    {
      label: "Ministries",
      href: "/ministries",
    },
    {
      label: "Resources",
      href: "/resources",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Media",
      href: "/media",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
  ],
  links: {
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
