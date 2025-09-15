import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components | KeerUI",
  description:
    "Browse KeerUI's collection of beautifully designed, open-source React components powered by Tailwind CSS and Framer Motion. Easily copy-paste and customize animated forms, cards, UI effects, and more for your modern web apps and SaaS projects.",
  keywords: [
    "React UI Components",
    "KeerUI Components Library",
    "Tailwind CSS UI Components",
    "Open Source Component Library",
    "Reusable React Components",
    "Framer Motion Components",
    "Next.js UI Components",
    "Frontend Design System",
    "Copy Paste UI Components",
    "Beautiful UI Library",
    "KeerUI by venkatateja",
    "Developer Tools",
    "SaaS UI Components",
    "Modern UI Kit",
    "Accessible UI Components",
    "Motion UI React",
    "Frontend Engineer Resources",
  ],
  authors: [{ name: "venkatateja", url: "https://www.linkedin.com/in/uvenkatateja" }],
  creator: "venkatateja",
  publisher: "venkatateja",
  openGraph: {
    title:
      "React UI Components Library — Beautiful & Reusable Components | KeerUI",
    description:
      "Explore KeerUI's open-source React component library featuring animated forms, cards, interactive UI effects, and more. Built with Tailwind CSS & Framer Motion.",
    url: "https://keerui.dev/components",
    siteName: "KeerUI",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "KeerUI Components Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "React UI Components Library — Beautiful & Reusable Components | KeerUI",
    description:
      "Discover KeerUI's open-source React components crafted with Tailwind CSS. Easily copy, paste, and customize beautiful UI blocks for your web apps.",
    images: [""],
    site: "@uvteja99",
    creator: "@uvteja99",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

export default function DashboardPage() {
  redirect("/components/docs");
}