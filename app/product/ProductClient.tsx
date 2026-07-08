"use client";

import { SiteHeader, SiteFooter } from "../components/SiteChrome";
import { JourneySection } from "../components/sections";

export default function ProductClient() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text-primary)", minHeight: "100vh" }}>
      <SiteHeader />
      <JourneySection as="h1" />
      <SiteFooter />
    </div>
  );
}
