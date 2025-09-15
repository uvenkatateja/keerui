import React from "react";
import TermsOfServicePage from "@/components/docs/termsofservice";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Service | KeerUI",
  description:
    "Review KeerUI's Terms of Service to understand your rights, responsibilities, and the rules for using our open-source React component library built with Tailwind CSS and Framer Motion. Ensure proper usage and compliance while integrating KeerUI components into your projects.",
  keywords: [
    "KeerUI Terms of Service",
    "Terms of Service",
    "Usage Policy",
    "Open Source UI Components License",
    "KeerUI Documentation",
    "React Component Library Terms",
    "Tailwind CSS UI Components",
    "Developer Tools Usage Terms",
    "Frontend Design System Terms",
    "KeerUI by venkatateja",
    "Component Library Usage Rights",
    "KeerUI Legal Policy",
  ],
  authors: [{ name: "venkatateja", url: "https://www.linkedin.com/in/uvenkatateja" }],
  creator: "venkatateja",
  publisher: "venkatateja",
  openGraph: {
    title: "Terms of Service | KeerUI — Open Source UI Components Library",
    description:
      "Understand the rules, rights, and responsibilities for using KeerUI's open-source React component library. Read our Terms of Service for detailed guidelines.",
    url: "https://keerui.dev/termsofservice",
    siteName: "KeerUI",
    images: [],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | KeerUI — Open Source UI Components Library",
    description:
      "Review KeerUI's Terms of Service to understand the guidelines and responsibilities when using our open-source React components.",
    images: [],
    site: "@uvteja99",
    creator: "@uvteja99",
  },
  icons: {
    icon: "/logo.png",
  },
  category: "legal",
};

const TermsOfService = () => {
  return (
    <main>
      <Navbar />
      <TermsOfServicePage />
      <Footer />
    </main>
  );
};

export default TermsOfService;
