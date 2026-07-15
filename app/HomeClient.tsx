"use client";

import Image from "next/image";
import { SiteHeader, SiteFooter } from "./components/SiteChrome";
import { MountReveal, StoreButtons, IPhoneFrame } from "./components/shared";
import { FeaturesSection, JourneySection, CommunitySection, FAQSection } from "./components/sections";

function HeroScreenLeft() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <Image
        src="/Assets/sterling front.jpg"
        alt=""
        aria-hidden="true"
        draggable={false}
        fill
        sizes="300px"
        style={{ objectFit: "cover", pointerEvents: "none", userSelect: "none" }}
      />
    </div>
  );
}

function HeroScreenRight() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <Image
        src="/Assets/map.PNG"
        alt=""
        aria-hidden="true"
        draggable={false}
        fill
        sizes="300px"
        style={{ objectFit: "cover", pointerEvents: "none", userSelect: "none" }}
      />
    </div>
  );
}

export default function HomeClient() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text-primary)", minHeight: "100vh" }}>
      <SiteHeader />

      <section className="relative overflow-hidden" style={{ padding: "clamp(40px,8vh,100px) 0 clamp(50px,9vh,90px)" }}>
        <div className="glow-blob" style={{ position: "absolute", top: -100, left: -100, width: 550, height: 550, borderRadius: "50%", background: "radial-gradient(circle, rgba(61,60,245,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="glow-blob" style={{ position: "absolute", top: 80, right: -120, width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,53,236,0.18) 0%, transparent 70%)", pointerEvents: "none", animationDelay: "2s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative" style={{ zIndex: 1 }}>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 max-w-xl w-full text-center lg:text-left">
              <MountReveal>
                <span style={{
                  display: "inline-block", background: "var(--card-bg-07)",
                  border: "1px solid var(--border-14)", borderRadius: 9999,
                  padding: "6px 18px", fontSize: "clamp(0.72rem,2vw,0.85rem)", color: "var(--text-78)", marginBottom: 24,
                }}>The social network for real estate people</span>
              </MountReveal>
              <MountReveal delay={0.08}>
                <h1 style={{ fontSize: "clamp(2.2rem,7vw,4rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 20px" }}>
                  <span style={{ background: "linear-gradient(135deg,var(--heading-gradient-start) 0%,var(--heading-gradient-end) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Connect. Share. Grow.
                  </span>
                </h1>
              </MountReveal>
              <MountReveal delay={0.16}>
                <p style={{ fontSize: "clamp(0.92rem,2.2vw,1.05rem)", color: "var(--text-62)", lineHeight: 1.7, marginBottom: 32, maxWidth: 420, marginLeft: "auto", marginRight: "auto" }}>
                  Sterling is the real estate app: connect with the right people and learn from those who&apos;ve done it, from your first deal to your fiftieth.
                </p>
              </MountReveal>
              <MountReveal delay={0.24}>
                <StoreButtons />
              </MountReveal>
            </div>

            <MountReveal delay={0.15}>
              {/* Mobile / tablet */}
              <div className="flex lg:hidden justify-center items-end gap-2 sm:gap-3 w-full" style={{ flex: 1 }}>
                <div className="phone-left"><IPhoneFrame screen={<HeroScreenLeft />} scale={0.47} /></div>
                <div className="phone-right"><IPhoneFrame screen={<HeroScreenRight />} scale={0.47} /></div>
              </div>
              {/* Desktop: larger */}
              <div className="hidden lg:flex justify-center items-end gap-4" style={{ flex: 1 }}>
                <div className="phone-left"><IPhoneFrame screen={<HeroScreenLeft />} scale={0.88} /></div>
                <div className="phone-right"><IPhoneFrame screen={<HeroScreenRight />} scale={0.88} /></div>
              </div>
            </MountReveal>
          </div>
        </div>
      </section>

      <FeaturesSection />
      <JourneySection />
      <CommunitySection />
      <FAQSection />

      <SiteFooter />
    </div>
  );
}
