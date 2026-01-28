import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/PageTransition";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { GlowingCursor } from "@/components/GlowingCursor";
import { ConditionalHeader } from "@/components/ConditionalHeader";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Portfolio | Creative Developer",
  description: "Full-stack developer specializing in building beautiful, performant web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${firaCode.variable} font-sans antialiased bg-[#0a0a0f] text-white`}
      >
        <FloatingOrbs />
        <GlowingCursor />
        <ConditionalHeader />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
