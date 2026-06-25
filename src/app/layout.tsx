import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://personal-portfolio.local"),
  title: {
    default: "Abbas Ahmed | Full Stack Software Engineer",
    template: "%s | Abbas Ahmed",
  },
  description:
    "Portfolio of Abbas Ahmed, a full stack software engineer focused on React, Next.js, FastAPI, AI/LLM workflows, LangGraph, PostgreSQL, and Azure.",
  keywords: [
    "Abbas Ahmed",
    "Full Stack Software Engineer",
    "React",
    "Next.js",
    "FastAPI",
    "LangGraph",
    "PostgreSQL",
    "Azure",
  ],
  authors: [{ name: "Abbas Ahmed" }],
  openGraph: {
    title: "Abbas Ahmed | Full Stack Software Engineer",
    description:
      "Practical software at the intersection of web development, backend systems, and AI workflows.",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
