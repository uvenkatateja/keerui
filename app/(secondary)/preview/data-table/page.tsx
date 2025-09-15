import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import DataTable from "@/app/(primary)/components/data-table/_components/data-table";

export const metadata: Metadata = {
  title: "Data Table Live Preview | KeerUI",
  description:
    "Experience the Data Table component from KeerUI in a live interactive preview. Built with React, Tailwind CSS, and Framer Motion, this table delivers smooth animations, search functionality, pagination, and responsive design. Easily copy and paste into your projects.",
  keywords: [
    "Data Table Preview",
    "Live UI Component Demo",
    "React Table Component",
    "KeerUI Data Table",
    "Framer Motion Tables",
    "Tailwind CSS Table Component",
    "KeerUI Component Preview",
    "React UI Playground",
    "Interactive Component Demo",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "KeerUI by venkatateja",
    "Responsive Data Table",
    "Search Table Component",
    "Pagination Table React",
  ],
  authors: [{ name: "venkatateja", url: "https://www.linkedin.com/in/uvenkatateja" }],
  creator: "venkatateja",
  publisher: "venkatateja",
  openGraph: {
    title: "Data Table Live Preview | KeerUI",
    description:
      "See KeerUI's Data Table component in action with this live interactive demo. Built with React, Tailwind CSS & Framer Motion for smooth animations, search, pagination, and responsive design.",
    url: "https://keerui.dev/components/data-table/preview",
    siteName: "KeerUI",
    images: [],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Table Live Preview | KeerUI",
    description:
      "Interactive live demo of KeerUI's Data Table component built with React, Tailwind CSS, and Framer Motion featuring search, pagination, and responsive design.",
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
      <DataTable />
    </LivePreviewComponent>
  );
};

export default Preview;