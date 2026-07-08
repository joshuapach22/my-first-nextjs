"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { UsersThree, ShareNetwork, ChartLineUp, Handshake } from "@phosphor-icons/react";
import { RADIUS, Reveal, StoreButtons, FAQAccordion, IPhoneFrame, JOURNEY_STAGES, PlaceholderScreen } from "./shared";

/* ═══════════════════════════ Features ═══════════════════════════ */
const FEATURES = [
  { Icon: UsersThree, title: "Connect with people in your market", desc: "Build a network with agents, brokers, investors, and specialists, wherever you're starting from." },
  { Icon: ShareNetwork, title: "Share wins and ask questions", desc: "Post listings, insights, and wins, or just ask what everyone else already knows, to a feed built for anyone serious about real estate." },
  { Icon: ChartLineUp, title: "Grow with local deal flow", desc: "Discover nearby opportunities on the map and turn connections into closed deals." },
];

export function FeaturesSection({ as = "h2" }: { as?: "h1" | "h2" }) {
  const Heading = as;
  return (
    <section style={{ background: "linear-gradient(180deg,var(--bg-alt) 0%,var(--bg) 100%)", padding: "clamp(60px,10vh,110px) 0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <Heading style={{ fontSize: "clamp(1.8rem,5vw,2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 clamp(32px,6vh,64px)", textAlign: "center" }}>
            Everything you need in one place
          </Heading>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-[var(--border-08)] md:divide-y-0 md:divide-x">
          {FEATURES.map(({ Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="text-center px-4 md:px-10 py-6 md:py-0">
                <div
                  className="feature-icon"
                  style={{
                    width: 56, height: 56, background: "transparent", border: "1px solid rgba(129,140,248,0.35)",
                    borderRadius: RADIUS.card, display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 24px", transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1), background 0.25s",
                  }}
                >
                  <Icon size={26} color="#818CF8" weight="regular" />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "1.15rem", margin: "0 0 12px" }}>{title}</h3>
                <p style={{ color: "var(--text-52)", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ Community ═══════════════════════════ */
const COMMUNITY_POINTS = [
  "Meet the agents and brokers worth knowing in your market",
  "Get in front of investors actively looking for their next deal",
  "Ask real questions and get answers from people who've done it",
  "Build a reputation and a network that follows your whole journey",
];

export function CommunitySection() {
  const reduce = useReducedMotion();
  return (
    <section style={{ background: "linear-gradient(180deg,var(--bg) 0%,var(--bg-alt) 100%)", padding: "clamp(60px,10vh,110px) 0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <Reveal>
          <div className="text-center lg:text-left">
            <h2 style={{ fontSize: "clamp(1.6rem,4vw,2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 20px" }}>
              The real estate app for everyone in the industry
            </h2>
            <p style={{ color: "var(--text-58)", lineHeight: 1.7, fontSize: "clamp(0.9rem,1.8vw,1rem)", marginBottom: 28, maxWidth: "52ch", marginLeft: "auto", marginRight: "auto" }}>
              Sterling puts you in front of the people who matter: agents and brokers worth knowing, investors actively looking to buy, and a community that answers real questions no matter where you&apos;re starting from. It&apos;s also where you&apos;ll find what&apos;s happening in your market and create your own events, right on the map.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "inline-flex", flexDirection: "column", gap: 12, textAlign: "left" }}>
              {COMMUNITY_POINTS.map((line) => (
                <li key={line} style={{ display: "flex", gap: 12, alignItems: "flex-start", color: "var(--text-72)", fontSize: "clamp(0.88rem,1.8vw,1rem)" }}>
                  <span style={{ width: 6, height: 6, borderRadius: RADIUS.pill, background: "#818CF8", marginTop: 9, flexShrink: 0 }} />
                  {line}
                </li>
              ))}
            </ul>
            <StoreButtons />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{
            background: "var(--card-bg-04)", border: "1px solid var(--border-08)",
            borderRadius: RADIUS.card, padding: "clamp(40px,8vh,64px) clamp(24px,6vw,48px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", overflow: "hidden",
          }}>
            <div className="glow-blob" style={{ position: "absolute", bottom: -60, left: -60, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(61,60,245,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />
            <motion.div
              style={{ position: "relative", zIndex: 1 }}
              animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Handshake size={72} color="#818CF8" weight="regular" />
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════ FAQ ═══════════════════════════ */
export function FAQSection() {
  return (
    <section style={{ background: "var(--bg-alt)", padding: "clamp(60px,10vh,110px) 0" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
        <Reveal>
          <h2 style={{ fontSize: "clamp(1.6rem,4vw,2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 clamp(24px,5vh,48px)", textAlign: "center" }}>
            Frequently asked questions
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <FAQAccordion />
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════ Journey / motion-graphic phone ═══════════════════════════ */
// Phone rotation per stage: a subtle turn, not a full spin, per stage boundary.
const PHONE_ANGLES: { rotateY: number; rotateX: number }[] = [
  { rotateY: 0, rotateX: 0 },
  { rotateY: 24, rotateX: -5 },
  { rotateY: -24, rotateX: 5 },
  { rotateY: 0, rotateX: 0 },
];

function MobileJourney() {
  return (
    <div className="lg:hidden w-full max-w-lg mx-auto px-4" style={{ paddingTop: 24, paddingBottom: 64 }}>
      <div className="flex flex-col gap-10">
        {JOURNEY_STAGES.map(({ Icon, title, desc, img, pos }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <div style={{ marginBottom: 16 }}>
              <IPhoneFrame
                scale={0.6}
                screen={img ? (
                  <Image src={img} alt="" aria-hidden="true" draggable={false} fill sizes="250px" style={{ objectFit: "cover", objectPosition: pos, pointerEvents: "none", userSelect: "none" }} />
                ) : <PlaceholderScreen />}
              />
            </div>
            <Icon size={22} color="#818CF8" weight="regular" style={{ marginBottom: 8 }} />
            <h3 style={{ fontWeight: 700, fontSize: "1.1rem", margin: "0 0 8px" }}>{title}</h3>
            <p style={{ color: "var(--text-52)", lineHeight: 1.6, margin: 0, fontSize: "0.9rem", maxWidth: "34ch" }}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DesktopJourney() {
  const stageRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const n = JOURNEY_STAGES.length;

  useEffect(() => {
    if (reduce || !stageRef.current || !phoneRef.current) return;
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled || !stageRef.current) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const texts = gsap.utils.toArray<HTMLElement>(".journey-text", stageRef.current!);
        const screens = gsap.utils.toArray<HTMLElement>(".journey-screen", stageRef.current!);

        gsap.set(texts, { autoAlpha: 0, y: 16 });
        gsap.set(texts[0], { autoAlpha: 1, y: 0 });
        gsap.set(screens, { autoAlpha: 0 });
        gsap.set(screens[0], { autoAlpha: 1 });
        gsap.set(phoneRef.current, { transformPerspective: 1200, ...PHONE_ANGLES[0] });

        // CSS `position: sticky` (on the inner frame, see render below) does the
        // actual pinning — rock solid, no pin/endTrigger interdependency to fight.
        // GSAP only drives the crossfade + phone turn, scrubbed against how far
        // you've scrolled through the tall outer wrapper. The wrapper is (n + 1)
        // viewports tall, so the last stage's extra viewport is a built-in hold:
        // nothing left to animate, so it just sits there until you scroll back up.
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stageRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
          },
        });

        texts.forEach((text, i) => {
          if (i === 0) return;
          const at = i - 1;
          tl.to(texts[i - 1], { autoAlpha: 0, y: -16, ease: "power1.in", duration: 0.8 }, at);
          tl.to(text, { autoAlpha: 1, y: 0, ease: "power1.out", duration: 0.8 }, at + 0.2);
          tl.to(screens[i - 1], { autoAlpha: 0, ease: "power1.in", duration: 0.8 }, at);
          tl.to(screens[i], { autoAlpha: 1, ease: "power1.out", duration: 0.8 }, at + 0.2);
          tl.to(phoneRef.current, { ...PHONE_ANGLES[i], ease: "power2.inOut", duration: 1 }, at);

          // Defensive hard-reset: force every non-adjacent stage fully invisible
          // at this transition point, so no stage can ever linger as a ghost
          // regardless of any subtle tween-overlap edge case.
          texts.forEach((t, j) => { if (j !== i && j !== i - 1) tl.set(t, { autoAlpha: 0 }, at); });
          screens.forEach((s, j) => { if (j !== i && j !== i - 1) tl.set(s, { autoAlpha: 0 }, at); });
        });
      }, stageRef);
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [reduce, n]);

  if (reduce) {
    return (
      <div className="max-w-6xl mx-auto px-6" style={{ display: "flex", flexDirection: "column", gap: 80, paddingBottom: 80 }}>
        {JOURNEY_STAGES.map(({ Icon, title, desc, img, pos }, i) => (
          <div key={title} className="grid grid-cols-2 gap-16 items-center">
            <div style={i % 2 === 1 ? { order: 2 } : undefined}>
              <div style={{ width: 56, height: 56, border: "1px solid rgba(129,140,248,0.35)", borderRadius: RADIUS.card, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <Icon size={26} color="#818CF8" weight="regular" />
              </div>
              <h3 style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 16px" }}>{title}</h3>
              <p style={{ color: "var(--text-58)", lineHeight: 1.7, fontSize: "1.05rem", maxWidth: "42ch" }}>{desc}</p>
            </div>
            <div className="flex justify-center">
              <IPhoneFrame scale={0.85} screen={img ? (
                <Image src={img} alt="" aria-hidden="true" draggable={false} fill sizes="300px" style={{ objectFit: "cover", objectPosition: pos }} />
              ) : <PlaceholderScreen />} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={stageRef} style={{ position: "relative", height: `${(n + 1) * 100}dvh` }}>
      <div style={{ position: "sticky", top: 0, height: "100dvh", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 gap-16 items-center w-full">
          <div style={{ position: "relative", height: 300 }}>
            {JOURNEY_STAGES.map(({ Icon, title, desc }) => (
              <div key={title} className="journey-text" style={{ position: "absolute", inset: 0, willChange: "opacity, transform" }}>
                <div style={{ width: 64, height: 64, border: "1px solid rgba(129,140,248,0.35)", borderRadius: RADIUS.card, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                  <Icon size={30} color="#818CF8" weight="regular" />
                </div>
                <h3 style={{ fontSize: "2.25rem", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 16px" }}>{title}</h3>
                <p style={{ color: "var(--text-58)", lineHeight: 1.7, fontSize: "1.1rem", maxWidth: "42ch" }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", perspective: 1200 }}>
            <motion.div
              className="glow-blob"
              style={{
                position: "absolute", width: 480, height: 480, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(61,60,245,0.32) 0%, rgba(139,53,236,0.18) 45%, transparent 72%)",
                pointerEvents: "none", zIndex: 0,
              }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div ref={phoneRef} style={{ position: "relative", zIndex: 1, transformStyle: "preserve-3d", willChange: "transform" }}>
              <IPhoneFrame
                scale={1.15}
                screen={
                  <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    {JOURNEY_STAGES.map(({ img, pos }, i) => (
                      <div key={i} className="journey-screen" style={{ position: "absolute", inset: 0, willChange: "opacity" }}>
                        {img ? (
                          <Image
                            src={img}
                            alt=""
                            aria-hidden="true"
                            draggable={false}
                            fill
                            sizes="300px"
                            priority
                            style={{ objectFit: "cover", objectPosition: pos, pointerEvents: "none", userSelect: "none" }}
                          />
                        ) : <PlaceholderScreen />}
                      </div>
                    ))}
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function JourneySection({ as = "h2" }: { as?: "h1" | "h2" }) {
  const Heading = as;
  return (
    <section style={{ background: "var(--bg)" }}>
      <div style={{ textAlign: "center", padding: "clamp(48px,10vh,110px) 24px clamp(32px,6vh,64px)", position: "relative", zIndex: 1 }}>
        <Reveal>
          <Heading style={{ fontSize: "clamp(1.8rem,5vw,2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", margin: 0 }}>
            Your journey starts here
          </Heading>
          <p style={{ color: "var(--text-58)", fontSize: "clamp(0.9rem,2vw,1.05rem)", margin: "16px auto 0", maxWidth: "48ch" }}>
            From your first question to your next deal, here&apos;s what the next week in Sterling looks like.
          </p>
        </Reveal>
      </div>

      <MobileJourney />
      <div className="hidden lg:block">
        <DesktopJourney />
      </div>
    </section>
  );
}
