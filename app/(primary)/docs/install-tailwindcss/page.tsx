import TailwindInstallationPage from "@/components/docs/tailwindinstallationpage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Install Tailwind CSS | KeerUI",
  description:
    "Set up Tailwind CSS in your KeerUI project with this detailed installation guide. Learn how to configure Tailwind, optimize it for React components, and start building responsive, modern UIs with ease.",
  keywords: [
    "Tailwind CSS Installation",
    "Setup Tailwind CSS KeerUI",
    "Tailwind CSS Next.js Guide",
    "Tailwind Configuration",
    "Responsive UI with Tailwind",
    "KeerUI Tailwind Setup",
    "Frontend Design System",
    "KeerUI Documentation",
    "React Tailwind Integration",
    "UI Library Tailwind CSS",
    "Developer Tools",
    "KeerUI by venkatateja",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Next.js Tailwind Setup",
  ],
  authors: [{ name: "venkatateja", url: "https://www.linkedin.com/in/uvenkatateja" }],
  creator: "venkatateja",
  publisher: "venkatateja",
  openGraph: {
    title: "Install Tailwind CSS for KeerUI — Full Setup Guide | KeerUI Docs",
    description:
      "Follow this step-by-step guide to install and configure Tailwind CSS for your KeerUI project. Build beautiful, responsive UIs with React and Tailwind.",
    url: "https://keerui.dev/docs/install-tailwindcss",
    siteName: "KeerUI",
    images: [],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Install Tailwind CSS for KeerUI — Full Setup Guide | KeerUI Docs",
    description:
      "Learn how to install Tailwind CSS for KeerUI with this easy-to-follow guide. Configure Tailwind with React to start building modern, responsive UIs.",
    images: [],
    site: "@uvteja99",
    creator: "@uvteja99",
  },
  icons: {
    icon: "/logo.png",
  },
  category: "developer",
};
const TailwindInstallation = () => {
  return <TailwindInstallationPage />;
};

export default TailwindInstallation;
