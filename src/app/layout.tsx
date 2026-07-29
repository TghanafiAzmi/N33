import type { Metadata } from "next";
import {
  Google_Sans_Flex,
  JetBrains_Mono,
  Outfit,
} from "next/font/google";
import "./globals.css";

const displayFont = Google_Sans_Flex({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "variable",
});

const bodyFont = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: "variable",
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: {
    default: "N33 | Digital Agency",
    template: "%s | N33",
  },
  description:
    "N33 designs and builds websites, digital products, custom systems and e-commerce experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
