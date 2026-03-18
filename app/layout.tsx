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
  metadataBase: new URL("https://caprasecurity.ca"),
  title: {
    default: "Capra Security | Security You Can Trust",
    template: "%s | Capra Security",
  },
  description:
    "Emergency Security Management providing REIT Security, Property Management, Commercial & Industrial Logistics, Mobile Patrol, and more nationwide. Over 20 years of combined management experience.",
  keywords: [
    "security company",
    "security guard services",
    "security services Ontario",
    "REIT security",
    "property management security",
    "mobile patrol",
    "fire watch security",
    "event security",
    "loss prevention",
    "construction site security",
    "Capra Security",
    "security guards Canada",
    "commercial security",
    "industrial security",
    "Mississauga security",
    "Windsor security",
  ],
  authors: [{ name: "Capra Security Services Inc." }],
  creator: "Capra Security Services Inc.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://caprasecurity.ca",
    siteName: "Capra Security",
    title: "Capra Security | Security You Can Trust",
    description:
      "Emergency Security Management providing REIT Security, Property Management, Commercial & Industrial Logistics, Mobile Patrol, and more nationwide.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Capra Security Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capra Security | Security You Can Trust",
    description:
      "Emergency Security Management providing REIT Security, Property Management, Mobile Patrol, and more nationwide.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    canonical: "https://caprasecurity.ca",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} ${dmMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SecurityGuardService",
              name: "Capra Security Services Inc.",
              url: "https://caprasecurity.ca",
              logo: "https://caprasecurity.ca/logoo.jpg",
              telephone: "+1-416-953-0539",
              email: "info@caprasecurity.ca",
              description:
                "Emergency Security Management providing REIT Security, Property Management, Commercial & Industrial Logistics, Mobile Patrol, and more nationwide.",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "3129 Marentette Ave, Unit #5",
                  addressLocality: "Windsor",
                  addressRegion: "ON",
                  addressCountry: "CA",
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Mississauga",
                  addressRegion: "ON",
                  addressCountry: "CA",
                },
              ],
              areaServed: {
                "@type": "Country",
                name: "Canada",
              },
              serviceType: [
                "REIT Security",
                "Property Management Security",
                "Commercial & Industrial Logistics",
                "Mobile Patrol",
                "Loss Prevention",
                "Event Security",
                "Construction Site Security",
                "Fire Watch Security",
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
            }),
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

