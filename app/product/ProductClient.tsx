"use client";

import { SiteHeader, SiteFooter } from "../components/SiteChrome";
import { JourneySection } from "../components/sections";

export default function ProductClient() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text-primary)", minHeight: "100vh" }}>
      <SiteHeader />
      <main>
        <JourneySection as="h1" />
      </main>
      <SiteFooter />
    </div>
  );
}
