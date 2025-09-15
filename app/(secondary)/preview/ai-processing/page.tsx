import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import AIProcessing from "@/app/(primary)/components/ai-processing/_components/ai-processing";

export const metadata: Metadata = {
  title: "AI Processing Live Preview | KeerUI",
  description:
    "Experience the AI Processing component from KeerUI in a live interactive preview. Built with React, Tailwind CSS, and Framer Motion, this neural network visualization delivers smooth animations and real-time processing indicators.",
  keywords: [
    "AI Processing Preview",
    "Neural Network Visualization",
    "React AI Component",
    "KeerUI AI Processing",
    "Framer Motion Neural Network",
    "Tailwind CSS AI Component",
    "KeerUI Component Preview",
    "React UI Playground",
    "Interactive AI Demo",
    "Machine Learning UI",
    "Copy Paste AI Components",
    "Open Source AI UI Kit",
    "KeerUI by venkatateja",
    "Animated Neural Network",
    "AI Data Processing",
    "Real-time AI Visualization",
  ],
  authors: [{ name: "venkatateja", url: "https://www.linkedin.com/in/uvenkatateja" }],
  creator: "venkatateja",
  publisher: "venkatateja",
  openGraph: {
    title: "AI Processing Live Preview | KeerUI",
    description:
      "See KeerUI's AI Processing component in action with this live interactive demo. Built with React, Tailwind CSS & Framer Motion for smooth neural network animations and real-time processing visualization.",
    url: "https://keerui.dev/components/ai-processing/preview",
    siteName: "KeerUI",
    images: [],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Processing Live Preview | KeerUI",
    description:
      "Interactive live demo of KeerUI's AI Processing component built with React, Tailwind CSS, and Framer Motion featuring neural network visualization and real-time processing indicators.",
    images: [],
    site: "@uvteja99",
    creator: "@uvteja99",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Preview = () => {
  return (
    <LivePreviewComponent>
      <AIProcessing />
    </LivePreviewComponent>
  );
};

export default Preview;