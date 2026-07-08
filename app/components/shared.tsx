"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  CaretDown,
  RocketLaunch,
  ChatCircleText,
  Path,
  Trophy,
} from "@phosphor-icons/react";

/* ─── Shape system (one radius scale for the whole site) ────────── */
export const RADIUS = { pill: 9999, button: 12, card: 16 };

/* ─── Scroll-reveal (desktop web; plays once on scroll-into-view) ─ */
export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Same fade-up, but plays once on mount instead of on scroll-into-view —
// for above-the-fold content (hero) that's visible immediately, where
// whileInView would never get a chance to trigger.
export function MountReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Sterling Logo (actual app icon) ──────────────────────────── */
export function SterlingLogo({ size = 36 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size, borderRadius: RADIUS.pill, overflow: "hidden", flexShrink: 0, position: "relative" }}>
      <Image
        src="/Assets/Sterling Logo.png"
        alt="Sterling"
        fill
        sizes={`${size}px`}
        style={{ objectFit: "cover", transform: "scale(1.18)" }}
      />
    </div>
  );
}

/* ─── Store / social icons ─────────────────────────────────────── */
export function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
export function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* ─── Map / Feed real app screens ───────────────────────────────── */
export function MapScreen() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <Image
        src="/Assets/unedited map tab.PNG"
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
export function FeedScreen() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <Image
        src="/Assets/homefeedunedited.PNG"
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

/* ─── iPhone 15-style frame ─────────────────────────────────────── */
export function IPhoneFrame({ screen, scale = 1 }: { screen: React.ReactNode; scale?: number }) {
  const s = (n: number) => n * scale;
  return (
    <div style={{ width: s(255), height: s(528), position: "relative", flexShrink: 0 }}>
      <div style={{
        position: "absolute", inset: 0, borderRadius: s(50),
        background: "linear-gradient(145deg, #1e1e1e 0%, #111 60%, #1a1a1a 100%)",
        border: "1px solid rgba(255,255,255,0.13)",
        boxShadow: `
          0 0 0 0.5px rgba(255,255,255,0.08),
          0 ${s(50)}px ${s(120)}px rgba(0,0,0,0.75),
          0 ${s(20)}px ${s(50)}px rgba(0,0,0,0.5),
          inset 0 1px 0 rgba(255,255,255,0.12),
          inset 0 -1px 0 rgba(255,255,255,0.04)
        `,
      }} />
      <div style={{ position: "absolute", left: -s(3), top: s(108), width: s(3), height: s(30), background: "#252525", borderRadius: "2px 0 0 2px", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }} />
      <div style={{ position: "absolute", left: -s(3), top: s(155), width: s(3), height: s(52), background: "#252525", borderRadius: "2px 0 0 2px", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }} />
      <div style={{ position: "absolute", left: -s(3), top: s(218), width: s(3), height: s(52), background: "#252525", borderRadius: "2px 0 0 2px", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }} />
      <div style={{ position: "absolute", right: -s(3), top: s(168), width: s(3), height: s(76), background: "#252525", borderRadius: "0 2px 2px 0", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }} />
      <div style={{ position: "absolute", inset: s(6), borderRadius: s(45), overflow: "hidden", background: "#000" }}>
        {screen}
        <div style={{
          position: "absolute", top: s(12), left: "50%", transform: "translateX(-50%)",
          width: s(118), height: s(34), background: "#000", borderRadius: s(20), zIndex: 30,
          boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
        }} />
      </div>
      <div style={{ position: "absolute", bottom: s(10), left: "50%", transform: "translateX(-50%)", width: s(42), height: s(5), background: "#1a1a1a", borderRadius: s(3) }} />
    </div>
  );
}

/* ─── Early Access lead form (GHL-connected), as a modal ────────── */
export function EarlyAccessModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, phone, consent }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "10px 12px", borderRadius: RADIUS.button,
    border: "1px solid var(--border-14)", background: "var(--card-bg-04)",
    color: "var(--text-primary)", fontSize: "0.92rem", outline: "none",
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.55)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: 16,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: 420, background: "var(--bg-alt)", border: "1px solid var(--border-08)",
          borderRadius: RADIUS.card, padding: "28px 24px", position: "relative",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{ position: "absolute", top: 14, right: 14, background: "none", border: "none", cursor: "pointer", color: "var(--text-52)", fontSize: "1.2rem", lineHeight: 1 }}
        >
          ×
        </button>

        {status === "success" ? (
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, margin: "0 0 8px", color: "var(--text-primary)" }}>You&apos;re on the list</h3>
            <p style={{ color: "var(--text-58)", fontSize: "0.9rem", margin: 0 }}>We&apos;ll text you as soon as early access opens up.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, margin: "0 0 6px", color: "var(--text-primary)" }}>Get early access</h3>
            <p style={{ color: "var(--text-58)", fontSize: "0.85rem", margin: "0 0 20px" }}>Be first to know when Sterling opens up in your market.</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 14 }}>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", color: "var(--text-62)", marginBottom: 6 }}>First name</label>
                  <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", color: "var(--text-62)", marginBottom: 6 }}>Last name</label>
                  <input required value={lastName} onChange={(e) => setLastName(e.target.value)} style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.78rem", color: "var(--text-62)", marginBottom: 6 }}>Phone number</label>
                <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 555-5555" style={inputStyle} />
              </div>
            </div>

            <label style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 16, cursor: "pointer" }}>
              <input
                required
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                style={{ marginTop: 3, flexShrink: 0 }}
              />
              <span style={{ fontSize: "0.76rem", color: "var(--text-52)", lineHeight: 1.5 }}>
                By checking this box, I consent to receive text messages and calls from Sterling, including automated messages, at the phone number provided. Message and data rates may apply. Message frequency varies. Reply STOP at any time to opt out.
              </span>
            </label>

            {status === "error" && (
              <p style={{ color: "#f87171", fontSize: "0.8rem", margin: "0 0 12px" }}>{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              style={{
                width: "100%", background: "#3D3CF5", color: "#fff", border: "none",
                borderRadius: RADIUS.button, padding: "12px 0", fontWeight: 700, fontSize: "0.92rem",
                cursor: status === "submitting" ? "default" : "pointer",
                opacity: status === "submitting" ? 0.7 : 1,
              }}
            >
              {status === "submitting" ? "Submitting..." : "Get Early Access"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

/* ─── Store buttons (App Store + Get Early Access) ──────────────── */
export function StoreButtons() {
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);

  return (
    <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-3">
      <div className="flex flex-wrap gap-3 justify-center">
        <a href="#" style={{
          display: "inline-flex", alignItems: "center", gap: 9,
          padding: "9px 18px", background: "#000",
          border: "1.5px solid rgba(255,255,255,0.16)", borderRadius: RADIUS.button,
          color: "#fff", textDecoration: "none",
          transition: "background 0.2s, transform 0.15s",
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#1a1040"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#000"; (e.currentTarget as HTMLElement).style.transform = ""; }}
        >
          <AppleIcon />
          <span>
            <span style={{ display: "block", fontSize: 8, opacity: 0.65, lineHeight: 1, marginBottom: 2 }}>Download on the</span>
            <span style={{ fontSize: 13, fontWeight: 600 }}>App Store</span>
          </span>
        </a>
      </div>
      <button
        type="button"
        onClick={() => setShowEarlyAccess(true)}
        style={{
          background: "none", border: "1.5px solid #3D3CF5", color: "#818CF8",
          borderRadius: RADIUS.button, padding: "8px 18px", fontWeight: 700,
          fontSize: "0.78rem", letterSpacing: "0.02em", cursor: "pointer",
          transition: "background 0.2s",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(61,60,245,0.1)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "none"; }}
      >
        GET EARLY ACCESS
      </button>
      <EarlyAccessModal open={showEarlyAccess} onClose={() => setShowEarlyAccess(false)} />
    </div>
  );
}

/* ─── FAQ data + accordion ───────────────────────────────────────── */
export const FAQS = [
  {
    q: "Is Sterling free to use?",
    a: "Yes. Sterling is completely free for every real estate professional.",
  },
  {
    q: "Is Sterling available on Android?",
    a: "Not yet. Sterling is currently available on iOS, with Android support planned for a future release.",
  },
  {
    q: "How is my data used?",
    a: "See our Privacy Policy for the full details on how we collect, use, and protect your information.",
    link: { href: "/privacy", label: "Read the Privacy Policy" },
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="w-full">
      {FAQS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} style={{ borderBottom: "1px solid var(--border-08)" }}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                gap: 16, background: "none", border: "none", cursor: "pointer",
                padding: "14px 4px", textAlign: "left", color: "var(--text-primary)",
                fontSize: "0.95rem", fontWeight: 600,
              }}
            >
              {item.q}
              <CaretDown
                size={16}
                color="var(--text-55)"
                style={{ flexShrink: 0, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
              />
            </button>
            <div
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 0.25s ease",
              }}
            >
              <div style={{ overflow: "hidden", minHeight: 0 }}>
                <div style={{ padding: "0 4px 14px", color: "var(--text-6)", fontSize: "0.85rem", lineHeight: 1.55, maxWidth: "65ch" }}>
                  <p style={{ margin: item.link ? "0 0 6px" : 0 }}>{item.a}</p>
                  {item.link && (
                    <Link href={item.link.href} style={{ color: "#818CF8", textDecoration: "none" }}>
                      {item.link.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── The journey (About page) ──────────────────────────────────── */
export const JOURNEY_STAGES = [
  { Icon: RocketLaunch, title: "Show up", desc: "Join in minutes, whether you're brand new or a seasoned pro. Build a profile that shows who you are.", img: "/Assets/uneditedcommunityscreen.PNG", pos: "10% 8%" },
  { Icon: ChatCircleText, title: "Learn from people who've done it", desc: "Ask real questions in the feed and get real, direct answers from people with real experience.", img: "/Assets/homefeedunedited.PNG", pos: "50% 15%" },
  { Icon: Trophy, title: "Rank up", desc: "Share the app and earn trophies as you go. The more active you are, the more recognition you build in the community.", img: null as string | null },
  { Icon: Path, title: "Find your next move", desc: "Discover deals and events on the map, and turn connections into momentum.", img: "/Assets/unedited map tab.PNG", pos: "50% 45%" },
];

export function PlaceholderScreen() {
  return (
    <div style={{
      position: "absolute", inset: 0, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: 10,
      background: "linear-gradient(160deg, rgba(61,60,245,0.16) 0%, rgba(139,53,236,0.1) 100%)",
      color: "rgba(129,140,248,0.8)",
    }}>
      <Trophy size={40} weight="regular" />
      <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)" }}>Coming soon</span>
    </div>
  );
}

/* ─── Nav items shared by header (and footer quick links) ───────── */
export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
