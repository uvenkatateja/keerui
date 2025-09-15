import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import Provider from "@/provider/provider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KeerUI - Beautiful React Components for Modern Web Apps",
  description:
    "Copy and paste beautifully designed React components built with Tailwind CSS. Free, open source, accessible UI components for Next.js applications. Start building faster with KeerUI.",
  keywords: [
    "KeerUI",
    "UI Library",
    "Component Library",
    "React Components",
    "Next.js",
    "Tailwind CSS",
    "Open Source",
    "Frontend",
    "Design System",
    "venkatateja",
    "KeerUI by venkatateja",
    "Copy and Paste Components",
    "Developer Tools",
    "Frontend Engineer",
    "Beautiful UI",
    "React UI Kit",
    "Free React Components",
    "Open Source UI Kit",
    "Tailwind UI Components",
    "Headless UI",
    "Reusable React Components",
    "UI Templates",
    "Accessible React Components",
    "Copy-Paste UI",
    "Next.js Component Library",
    "Open Source Developer Tools",
    "Frontend Design System",
    "Minimal UI Kit",
    "Clean React UI",
  ],
  authors: [{ name: "venkatateja", url: "https://www.linkedin.com/in/uvenkatateja" }],
  creator: "venkatateja",
  publisher: "venkatateja",
  openGraph: {
    title: "KeerUI",
    description:
      "Beautifully designed components you can copy and paste into your apps. Open Source. Customizable. Accessible.",
    url: "https://keerui.dev",
    siteName: "KeerUI",
    images: [],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KeerUI",
    description:
      "Open source component library built with accessibility and customization in mind.",
    images: [],
    site: "@uvteja99",
    creator: "@uvteja99",
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  category: "developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "KeerUI",
    "description": "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
    "url": "https://keerui.dev",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Person",
      "name": "venkatateja",
      "url": "https://www.linkedin.com/in/uvenkatateja"
    },
    "sameAs": [
      "https://github.com/venkatateja",
      "https://www.linkedin.com/in/uvenkatateja"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      {/* <Script
        defer
        data-site="217027c0-3557-4a81-8f84-92043de74a6a"
        src="https://statsio.venkatateja.dev/tracker.js"
      /> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          {children}
          <Toaster />
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}