import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import PrivacyPolicyPage from "@/components/docs/privacypolicy";
import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | KeerUI",
  description:
    "Read KeerUI's Privacy Policy to understand how we collect, use, and protect your personal information when you use our open-source React components library built with Tailwind CSS and Framer Motion. Transparency, data protection, and user privacy are our priorities.",
  keywords: [
    "KeerUI Privacy Policy",
    "Privacy Policy",
    "Data Protection",
    "User Privacy",
    "KeerUI Data Usage",
    "Open Source UI Library Policy",
    "React Components Privacy",
    "Tailwind CSS UI Components",
    "KeerUI Documentation",
    "KeerUI by venkatateja",
    "Developer Tools Policy",
    "Frontend Design System Policy",
  ],
  authors: [{ name: "venkatateja", url: "https://www.linkedin.com/in/uvenkatateja" }],
  creator: "venkatateja",
  publisher: "venkatateja",
  openGraph: {
    title: "Privacy Policy | KeerUI — Open Source UI Components Library",
    description:
      "Learn how KeerUI collects, uses, and protects your data. Read our Privacy Policy to stay informed about data privacy when using KeerUI's React component library.",
    url: "https://keerui.dev/privacypolicy",
    siteName: "KeerUI",
    images: [],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | KeerUI — Open Source UI Components Library",
    description:
      "Understand how KeerUI handles your data. Read our Privacy Policy for transparency on data collection, usage, and privacy practices.",
    images: [],
    site: "@uvteja99",
    creator: "@uvteja99",
  },
  icons: {
    icon: "/logo.png",
  },
  category: "legal",
};

const PrivacyPolicy = () => {
  return (
    <main>
      <Navbar />
      <PrivacyPolicyPage />
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
