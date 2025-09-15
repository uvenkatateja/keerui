import React from "react";
import DataTableComponent from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Table | KeerUI",
  description:
    "KeerUI's Data Table component helps developers create powerful, interactive tables with sorting, filtering, pagination, and search functionality using React, Tailwind CSS, and Framer Motion. Perfect for dashboards, admin panels, and data-heavy applications with smooth animations and responsive design. Easily copy-paste and integrate this high-quality table component into your projects.",
  keywords: [
    "Data Table Component",
    "React Table",
    "Interactive Table",
    "Sortable Table",
    "Filterable Table",
    "Pagination Table",
    "Tailwind CSS Table",
    "KeerUI Components",
    "UI Table Library",
    "Responsive Table",
    "React UI Kit",
    "Open Source UI Components",
    "Frontend Design System",
    "Accessible React Components",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Beautiful Table UI",
    "Developer Tools",
    "SaaS UI Components",
    "Dashboard Components",
    "Admin Panel Components",
    "KeerUI by Venkatateja",
    "React Data Grid",
    "Table with Search",
    "Motion UI React",
    "Frontend Engineer Tools",
  ],
  authors: [{ name: "Venkatateja", url: "https://venkatateja.dev" }],
  creator: "Venkatateja",
  publisher: "Venkatateja",
  openGraph: {
    title:
      "Data Table Component for React — Interactive Tables with Sorting & Filtering | KeerUI",
    description:
      "Build powerful data tables with KeerUI's React component. Features sorting, filtering, pagination, and search with smooth animations. Perfect for dashboards and admin panels.",
    url: "https://keerui.dev/components/data-table",
    siteName: "KeerUI",
    images: [],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Data Table Component for React — Interactive Tables with Sorting & Filtering | KeerUI",
    description:
      "KeerUI's Data Table component enables powerful, interactive tables in React apps. Features sorting, filtering, pagination with TailwindCSS & Framer Motion.",
    images: [],
    site: "@uvteja99",
    creator: "@uvteja99",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <DataTableComponent />;
};

export default Page;
