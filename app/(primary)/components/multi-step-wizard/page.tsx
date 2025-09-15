import React from "react";
import MultiStepWizardComponent from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi Step Wizard | KeerUI",
  description:
    "KeerUI's Multi Step Wizard component helps developers create powerful, interactive form wizards with progress tracking, validation, and smooth step transitions using React, Tailwind CSS, and Framer Motion. Perfect for onboarding flows, checkout processes, and complex forms with beautiful animations and responsive design. Easily copy-paste and integrate this high-quality wizard component into your projects.",
  keywords: [
    "Multi Step Wizard Component",
    "React Form Wizard",
    "Step by Step Form",
    "Progress Tracker",
    "Form Validation",
    "Onboarding Flow",
    "Tailwind CSS Wizard",
    "KeerUI Components",
    "UI Wizard Library",
    "Responsive Wizard",
    "React UI Kit",
    "Open Source UI Components",
    "Frontend Design System",
    "Accessible React Components",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Beautiful Wizard UI",
    "Developer Tools",
    "SaaS UI Components",
    "Checkout Flow Components",
    "Registration Form",
    "KeerUI by venkatateja",
    "React Multi Step Form",
    "Wizard with Progress",
    "Motion UI React",
    "Frontend Engineer Tools",
  ],
  authors: [{ name: "venkatateja", url: "https://www.linkedin.com/in/uvenkatateja" }],
  creator: "venkatateja",
  publisher: "venkatateja",
  openGraph: {
    title:
      "Multi Step Wizard Component for React — Interactive Form Wizard with Progress Tracking | KeerUI",
    description:
      "Build powerful multi-step forms with KeerUI's React wizard component. Features progress tracking, validation, and smooth animations. Perfect for onboarding and checkout flows.",
    url: "https://keerui.dev/components/multi-step-wizard",
    siteName: "KeerUI",
    images: [],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Multi Step Wizard Component for React — Interactive Form Wizard with Progress Tracking | KeerUI",
    description:
      "KeerUI's Multi Step Wizard component enables powerful, interactive form wizards in React apps. Features progress tracking, validation with TailwindCSS & Framer Motion.",
    images: [],
    site: "@uvteja99",
    creator: "@uvteja99",
  },
  icons: {
    icon: "/logo.png",
  },
  category: "developer",
};

const Page = () => {
  return <MultiStepWizardComponent />;
};

export default Page;
