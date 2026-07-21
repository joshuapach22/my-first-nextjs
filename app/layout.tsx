import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

const TITLE = "Sterling - Social Network & Networking App for Real Estate Professionals";
const DESCRIPTION =
  "Sterling is the social networking app for real estate professionals. Connect with agents, brokers, and investors, share listings and insights, find real estate events on the map, and grow your network. Free for every real estate professional.";

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sterlingtheapp.com/#organization",
      name: "Sterling Hollow",
      url: "https://sterlingtheapp.com",
      logo: "https://sterlingtheapp.com/icon.png",
    },
    {
      "@type": "MobileApplication",
      name: "Sterling",
      applicationCategory: "SocialNetworkingApplication",
      operatingSystem: "iOS",
      description: DESCRIPTION,
      publisher: { "@id": "https://sterlingtheapp.com/#organization" },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sterlingtheapp.com"),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Sterling",
    "real estate networking app",
    "social network for real estate agents",
    "real estate agent networking",
    "connect with real estate agents",
    "real estate professional community",
    "app for real estate agents",
    "real estate investor networking app",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Sterling",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body style={{ fontFamily: "var(--font-geist), Arial, sans-serif" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
