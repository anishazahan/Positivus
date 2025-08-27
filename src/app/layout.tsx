import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Positivus - Digital Marketing Agency",
  description:
    "Navigating the digital landscape for success. Professional digital marketing services including SEO, PPC, social media marketing, and more.",
  keywords:
    "digital marketing, SEO, PPC, social media marketing, email marketing, analytics",
  authors: [{ name: "Positivus Team" }],
  creator: "Positivus",
  publisher: "Positivus",
  robots: "index, follow",
  openGraph: {
    title: "Positivus - Digital Marketing Agency",
    description: "Navigating the digital landscape for success",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Positivus - Digital Marketing Agency",
    description: "Navigating the digital landscape for success",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
