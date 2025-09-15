import IntroductionPage from "@/components/docs/introductionpage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Introduction | KeerUI",
  description:
    "KeerUI, a beautifully crafted open-source React component library powered by Tailwind CSS and Framer Motion. Learn the core principles, philosophy, and how KeerUI helps developers build modern, accessible, and customizable UI components with ease.",
  keywords: [
    "KeerUI Introduction",
    "React Component Library",
    "Tailwind CSS UI Kit",
    "Open Source UI Components",
    "KeerUI Documentation",
    "Frontend Design System",
    "Framer Motion Components",
    "Reusable React Components",
    "Accessible UI Components",
    "KeerUI by Venkatateja",
    "Developer Tools",
    "UI Library for React & Next.js",
    "Copy Paste UI Components",
    "Modern UI Kit",
    "Frontend Engineer Resources",
  ],
  authors: [{ name: "venkatateja", url: "https://www.linkedin.com/in/uvenkatateja" }],
  creator: "venkatateja",
  publisher: "venkatateja",
  openGraph: {
    title:
      "Introduction to KeerUI — Open Source React Component Library | KeerUI Docs",
    description:
      "Get an overview of KeerUI, an open-source React component library designed with Tailwind CSS and Framer Motion. Learn its core principles and how to integrate it into your frontend projects.",
    url: "https://keerui.dev/docs/introduction",
    siteName: "KeerUI",
    images: [],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Introduction to KeerUI — Open Source React Component Library | KeerUI Docs",
    description:
      "Start building with KeerUI, an open-source React UI library built with Tailwind CSS & Framer Motion. Learn the core principles and how to use it in your projects.",
    images: [],
    site: "@uvteja99",
    creator: "@uvteja99",
  },
  icons: {
    icon: "/logo.png",
  },
  category: "developer",
};

export default function Introduction() {
  return <IntroductionPage />;
}
