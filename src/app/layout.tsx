import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import { RESUME_DATA } from "@/data/resume-data";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${RESUME_DATA.personal.name} | ${RESUME_DATA.personal.headline}`,
    template: `%s | ${RESUME_DATA.personal.name}`,
  },
  description: RESUME_DATA.personal.summary,
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "AI Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "Founder",
    "Technical Lead",
    "Nairobi",
    "Kenya",
  ],
  authors: [{ name: RESUME_DATA.personal.name }],
  creator: RESUME_DATA.personal.name,
  publisher: RESUME_DATA.personal.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: RESUME_DATA.personal.personalWebsiteUrl,
    siteName: `${RESUME_DATA.personal.name} | Portfolio`,
    title: `${RESUME_DATA.personal.name} | ${RESUME_DATA.personal.headline}`,
    description: RESUME_DATA.personal.summary,
    images: [
      {
        url: RESUME_DATA.personal.avatarUrl,
        width: 400,
        height: 400,
        alt: RESUME_DATA.personal.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.personal.name} | ${RESUME_DATA.personal.headline}`,
    description: RESUME_DATA.personal.summary,
    images: [RESUME_DATA.personal.avatarUrl],
    creator: "@b_aragu",
  },
  verification: {
    // Add verification tokens when available
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.className}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}