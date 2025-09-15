import NextjsInstallationPage from "@/components/docs/nextjsinstallationpage";
import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Install Next.js | KeerUI",
  description:
    "Learn how to seamlessly integrate KeerUI into your Next.js project. Follow this comprehensive installation guide to set up Tailwind CSS, import components, and start building beautiful UIs with React and Framer Motion.",
  keywords: [
    "KeerUI Installation",
    "Next.js Component Library",
    "Install KeerUI Next.js",
    "Tailwind CSS Setup Guide",
    "React UI Components",
    "Next.js UI Library",
    "Frontend Design System",
    "KeerUI Documentation",
    "UI Library for Next.js",
    "Component Installation Guide",
    "Framer Motion in Next.js",
    "KeerUI by venkatateja",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Next.js Developer Tools",
  ],
  authors: [{ name: "venkatateja", url: "https://www.linkedin.com/in/uvenkatateja" }],
  creator: "venkatateja",
  publisher: "venkatateja",
  openGraph: {
    title:
      "Install KeerUI in Next.js — Step-by-Step Setup Guide | KeerUI Docs",
    description:
      "Integrate KeerUI into your Next.js projects with this simple installation guide. Setup Tailwind CSS and start building modern, animated UI components in minutes.",
    url: "https://keerui.dev/docs/install-nextjs",
    siteName: "KeerUI",
    images: [],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Install KeerUI in Next.js — Step-by-Step Setup Guide | KeerUI Docs",
    description:
      "Follow this step-by-step guide to install KeerUI in your Next.js project. Learn how to setup Tailwind CSS and start using beautiful, reusable components instantly.",
    images: [],
    site: "@uvteja99",
    creator: "@uvteja99",
  },
  icons: {
    icon: "/logo.png",
  },
  category: "developer",
};

const NextjsInstallation = () => {
  return <NextjsInstallationPage />;
};

export default NextjsInstallation;
