import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | KeerUI",
  description:
    "Explore the official KeerUI documentation to learn how to install, customize, and build modern, accessible React components using Tailwind CSS and Framer Motion. Get started with setup guides, usage instructions, and best practices for frontend developers.",
  keywords: [
    "KeerUI Documentation",
    "React Component Library Guide",
    "Tailwind CSS UI Library",
    "Open Source UI Components",
    "KeerUI Docs",
    "Frontend Design System",
    "Reusable React Components",
    "Framer Motion UI Components",
    "Accessible UI Components",
    "KeerUI by venkatateja",
    "Developer Tools",
    "Next.js UI Library",
    "Copy Paste UI Components",
    "Modern UI Kit Documentation",
    "Frontend Developer Resources",
  ],
  authors: [{ name: "venkatateja", url: "https://www.linkedin.com/in/uvenkatateja" }],
  creator: "venkatateja",
  publisher: "venkatateja",
  openGraph: {
    title: "KeerUI Documentation — React Component Library Guide | KeerUI",
    description:
      "Browse KeerUI's official documentation to integrate open-source React components with Tailwind CSS and Framer Motion. Learn setup, usage, and best practices.",
    url: "https://keerui.dev/docs",
    siteName: "KeerUI",
    images: [],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KeerUI Documentation — React Component Library Guide | KeerUI",
    description:
      "Official KeerUI documentation for integrating React UI components with Tailwind CSS. Find installation guides, usage patterns, and developer resources.",
    images: [],
    site: "@uvteja99",
    creator: "@uvteja99",
  },
  icons: {
    icon: "/logo.png",
  },
  category: "developer",
};

export default function DocsPage() {
  redirect("/docs/introduction");
}
