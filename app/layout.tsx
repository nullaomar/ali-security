import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Capra Security | Security You Can Trust",
  description:
    "Emergency Security Management providing REIT Security, Property Management, Commercial & Industrial Logistics, Mobile Patrol, and more nationwide. Over 20 years of combined management experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} ${dmMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

