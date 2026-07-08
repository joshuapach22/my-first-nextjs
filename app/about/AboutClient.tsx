"use client";

import { SiteHeader, SiteFooter } from "../components/SiteChrome";
import { FeaturesSection, CommunitySection, FAQSection } from "../components/sections";

export default function AboutClient() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text-primary)", minHeight: "100vh" }}>
      <SiteHeader />
      <FeaturesSection as="h1" />
      <CommunitySection />
      <FAQSection />
      <SiteFooter />
    </div>
  );
}
