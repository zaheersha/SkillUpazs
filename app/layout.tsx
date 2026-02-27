import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import BackgroundEffects from "@/components/BackgroundEffects";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkillUp - Professional Website Development",
  description: "SkillUp is a technology-driven platform that empowers students and businesses through practical, industry-focused skills. We build modern, responsive websites and mentor learners with hands-on, career-oriented training.",
  keywords: ["web design", "web development", "business website", "ecommerce", "seo", "skillup"],
  openGraph: {
    title: "SkillUp - Professional Website Development",
    description: "Transform your digital presence with high-performance websites.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CustomCursor />
          <BackgroundEffects />
          <Navbar />
          {children}
          <ThemeToggle />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
