
type NavItem = {
  name: string;
  href: string;
};

export const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Components', href: '/components/data-table' },
  { name: 'Docs', href: '/docs/introduction' },
];

export const introItems: NavItem[] = [
  {
    name: "Introduction",
    href: "/docs/introduction",
  },
  {
    name: "Install Next.js",
    href: "/docs/install-nextjs",
  },
  {
    name: "Install Tailwind CSS",
    href: "/docs/install-tailwindcss",
  },
];

export const primaryItems: NavItem[] = [];

export const eliteItems: NavItem[] = [
  { name: 'Data Table', href: '/components/data-table' },
  { name: 'Multi Step Wizard', href: '/components/multi-step-wizard' },
  { name: 'AI Processing', href: '/components/ai-processing' },
  { name: 'Blockchain Tracker', href: '/components/blockchain-tracker' },
];
