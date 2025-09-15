import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import BlockchainTracker from "@/app/(primary)/components/blockchain-tracker/_components/blockchain-tracker";

export const metadata: Metadata = {
  title: "Blockchain Tracker Live Preview | KeerUI",
  description:
    "Experience the Blockchain Tracker component from KeerUI in a live interactive preview. Built with React, Tailwind CSS, and Framer Motion, this component visualizes real-time blockchain transactions with animated flows between network nodes.",
  keywords: [
    "Blockchain Tracker Preview",
    "Blockchain Visualization",
    "React Blockchain Component",
    "KeerUI Blockchain Tracker",
    "Framer Motion Blockchain",
    "Tailwind CSS Blockchain Component",
    "KeerUI Component Preview",
    "React UI Playground",
    "Interactive Blockchain Demo",
    "Cryptocurrency UI",
    "Copy Paste Blockchain Components",
    "Open Source Blockchain UI Kit",
    "KeerUI by venkatateja",
    "Animated Transaction Flow",
    "Blockchain Network Visualization",
    "Real-time Transaction Tracking",
  ],
  authors: [{ name: "venkatateja", url: "https://www.linkedin.com/in/uvenkatateja" }],
  creator: "venkatateja",
  publisher: "venkatateja",
  openGraph: {
    title: "Blockchain Tracker Live Preview | KeerUI",
    description:
      "See KeerUI's Blockchain Tracker component in action with this live interactive demo. Built with React, Tailwind CSS & Framer Motion for smooth transaction animations and real-time blockchain visualization.",
    url: "https://keerui.dev/preview/blockchain-tracker",
    siteName: "KeerUI",
    images: [],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blockchain Tracker Live Preview | KeerUI",
    description:
      "Interactive live demo of KeerUI's Blockchain Tracker component built with React, Tailwind CSS, and Framer Motion featuring real-time transaction flows and blockchain network visualization.",
    images: [],
    site: "@uvteja99",
    creator: "@uvteja99",
  },
  icons: {
    icon: "/logo.png",
  },
  category: "developer",
};

const Preview = () => {
  return (
    <LivePreviewComponent>
      <BlockchainTracker />
    </LivePreviewComponent>
  );
};

export default Preview;