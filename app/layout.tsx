import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./components/ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christian Villamin - Full Stack Developer & Designer",
  description:
    "Award-winning portfolio showcasing cutting-edge web development, creative design, and innovative digital experiences.",
  keywords: [
    "web developer",
    "full stack",
    "designer",
    "portfolio",
    "freelance",
  ],
  authors: [{ name: "Christian Villamin" }],
  openGraph: {
    title: "Christian Villamin - Full Stack Developer & Designer",
    description:
      "Award-winning portfolio showcasing cutting-edge web development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
