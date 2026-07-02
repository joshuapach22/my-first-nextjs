import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Sterling - The Social Network for Real Estate Professionals",
  description:
    "Join Sterling and connect with top agents, share listings and insights, and grow your real estate business.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body style={{ fontFamily: "var(--font-geist), Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
