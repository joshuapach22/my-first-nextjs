"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  UsersThree,
  ShareNetwork,
  ChartLineUp,
  Handshake,
  CaretDown,
} from "@phosphor-icons/react";

/* ─── Shape system (one radius scale for the whole page) ───────── */
const RADIUS = { pill: 9999, button: 12, card: 16 };

/* ─── Scroll-reveal (desktop web only, see DesktopApp) ──────────── */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

type TabKey = "overview" | "features" | "how" | "business" | "faq";

/* ─── Sterling Logo (actual app icon) ──────────────────────────── */
function SterlingLogo({ size = 36 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size, borderRadius: RADIUS.pill, overflow: "hidden", flexShrink: 0 }}>
      <img
        src="/Assets/Sterling Logo.png"
        alt="Sterling"
        width={size}
        height={size}
        style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.18)" }}
      />
    </div>
  );
}

/* ─── Store icons ─────────────────────────────────────────────── */
function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

/* ─── Social icons ────────────────────────────────────────────── */
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* ─── Map Screen (left phone) ────────────────────────────────── */
function MapScreen() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <img
        src="/Assets/unedited map tab.PNG"
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none", userSelect: "none" }}
      />
    </div>
  );
}

/* ─── Feed Screen (right phone) ──────────────────────────────── */
function FeedScreen() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <img
        src="/Assets/homefeedunedited.PNG"
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none", userSelect: "none" }}
      />
    </div>
  );
}

/* ─── iPhone 15-style frame ──────────────────────────────────── */
function IPhoneFrame({ screen, scale = 1 }: { screen: React.ReactNode; scale?: number }) {
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

/* ─── Early Access lead form (GHL-connected) ────────────────────── */
function EarlyAccessModal({ open, onClose }: { open: boolean; onClose: () => void }) {
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

/* ─── Store buttons ───────────────────────────────────────────── */
function StoreButtons() {
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);

  return (
    <div className="flex flex-col items-center lg:items-start gap-3">
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

/* ─── FAQ accordion ────────────────────────────────────────────── */
const FAQS = [
  {
    q: "Is Sterling free to use?",
    a: "Yes. Sterling is completely free for every real estate professional.",
  },
  {
    q: "Do I need a real estate license to join?",
    a: "No license required. Sterling is open to real estate professionals of all kinds.",
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

function FAQAccordion() {
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

/* ─── Overview panel (hero) ─────────────────────────────────────── */
function OverviewPanel() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10 w-full max-w-6xl mx-auto">
      <div className="flex-1 max-w-md w-full text-center lg:text-left">
        <span style={{
          display: "inline-block", background: "var(--card-bg-07)",
          border: "1px solid var(--border-14)", borderRadius: RADIUS.pill,
          padding: "5px 14px", fontSize: "clamp(0.65rem, 2vw, 0.78rem)", color: "var(--text-78)", marginBottom: "clamp(10px,2vh,20px)",
        }}>The social network for real estate people</span>
        <h1 style={{
          fontSize: "clamp(1.8rem, 6vw, 3.4rem)", fontWeight: 800,
          lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 clamp(8px,1.5vh,16px)",
        }}>
          <span style={{ background: "linear-gradient(135deg,var(--heading-gradient-start) 0%,var(--heading-gradient-end) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Connect. Share. Grow.
          </span>
        </h1>
        <p style={{ fontSize: "clamp(0.8rem, 2.2vw, 0.98rem)", color: "var(--text-62)", lineHeight: 1.6, marginBottom: "clamp(12px,2vh,24px)", maxWidth: 380, marginLeft: "auto", marginRight: "auto" }}>
          Sterling is free for every real estate professional to connect, share insights, and grow their business.
        </p>
        <StoreButtons />
      </div>

      {/* Mobile / tablet: unchanged scale */}
      <div className="flex lg:hidden justify-center items-end gap-2 sm:gap-3 w-full" style={{ flex: 1 }}>
        <IPhoneFrame screen={<MapScreen />} scale={0.53} />
        <IPhoneFrame screen={<FeedScreen />} scale={0.53} />
      </div>
      {/* Desktop: larger, more visible */}
      <div className="hidden lg:flex justify-center items-end gap-4" style={{ flex: 1 }}>
        <IPhoneFrame screen={<MapScreen />} scale={0.88} />
        <IPhoneFrame screen={<FeedScreen />} scale={0.88} />
      </div>
    </div>
  );
}

/* ─── Features panel ───────────────────────────────────────────── */
function FeaturesPanel() {
  const items = [
    { Icon: UsersThree, title: "Connect with agents near you", desc: "Build a professional network with agents, brokers, and specialists working in your market." },
    { Icon: ShareNetwork, title: "Share listings and insights", desc: "Post listings, market insights, and wins to a feed built for real estate professionals." },
    { Icon: ChartLineUp, title: "Grow with local deal flow", desc: "Discover nearby opportunities on the map and turn connections into closed deals." },
  ];
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 style={{ fontSize: "clamp(1.3rem, 3.5vw, 1.9rem)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 clamp(14px,3vh,28px)", textAlign: "center" }}>
        Everything you need in one place
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-[var(--border-08)] md:divide-y-0 md:divide-x">
        {items.map(({ Icon, title, desc }) => (
          <div key={title} style={{ padding: "clamp(10px,2vh,20px) clamp(12px,3vw,28px)", textAlign: "center" }}>
            <div style={{ width: 40, height: 40, background: "transparent", border: "1px solid rgba(129,140,248,0.35)", borderRadius: RADIUS.card, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto clamp(8px,1.5vh,14px)" }}>
              <Icon size={19} color="#818CF8" weight="regular" />
            </div>
            <h3 style={{ fontWeight: 700, fontSize: "0.98rem", margin: "0 0 6px" }}>{title}</h3>
            <p style={{ color: "var(--text-52)", lineHeight: 1.5, margin: 0, fontSize: "0.82rem" }}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── How It Works panel ───────────────────────────────────────── */
function HowItWorksPanel() {
  const steps = [
    { img: "/Assets/uneditedcommunityscreen.PNG", pos: "10% 8%", title: "Build your profile", desc: "Add your name, brokerage, and specialties so other agents know who they're connecting with." },
    { img: "/Assets/homefeedunedited.PNG", pos: "50% 15%", title: "Post to the feed", desc: "Share listings, market insights, and wins with your network." },
    { img: "/Assets/unedited map tab.PNG", pos: "50% 45%", title: "Find deals on the map", desc: "Browse nearby listings and connections, and turn activity into closed deals." },
  ];
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 style={{ fontSize: "clamp(1.1rem, 2.8vh, 1.9rem)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 clamp(8px,1.6vh,28px)", textAlign: "center" }}>
        How Sterling works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-[var(--border-08)] md:divide-y-0 md:divide-x">
        {steps.map(({ img, pos, title, desc }) => (
          <div key={title} style={{ padding: "clamp(8px,1.6vh,20px) clamp(12px,3vw,28px)", textAlign: "center" }}>
            <div
              className="mx-auto w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-80 overflow-hidden"
              style={{ borderRadius: RADIUS.card, border: "1px solid rgba(129,140,248,0.35)", marginBottom: "clamp(6px,1.2vh,14px)" }}
            >
              <img
                src={img}
                alt=""
                aria-hidden="true"
                draggable={false}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: pos, pointerEvents: "none", userSelect: "none" }}
              />
            </div>
            <h3 style={{ fontWeight: 700, fontSize: "0.98rem", margin: "0 0 4px" }}>{title}</h3>
            <p style={{ color: "var(--text-52)", lineHeight: 1.5, margin: 0, fontSize: "0.82rem" }}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── For Business panel ───────────────────────────────────────── */
function ForBusinessPanel() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full max-w-4xl mx-auto">
      <div className="text-center lg:text-left">
        <h2 style={{ fontSize: "clamp(1.1rem, 2.8vh, 1.9rem)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 clamp(6px,1.2vh,16px)" }}>
          Where real estate professionals connect
        </h2>
        <p style={{ color: "var(--text-58)", lineHeight: 1.5, fontSize: "clamp(0.72rem,1.9vh,0.85rem)", marginBottom: "clamp(8px,1.5vh,18px)", maxWidth: "48ch", marginLeft: "auto", marginRight: "auto" }}>
          Sterling puts you in front of the people who matter in your market: agents and brokers worth knowing, investors actively looking to buy, and a community that answers real questions no matter where you&apos;re starting from. It&apos;s also where you&apos;ll find what&apos;s happening in your market and create your own events, right on the map.
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 clamp(10px,1.5vh,20px)", display: "inline-flex", flexDirection: "column", gap: "clamp(3px,0.8vh,7px)", textAlign: "left" }}>
          {[
            "Meet the agents and brokers worth knowing in your market",
            "Get in front of investors actively looking for their next deal",
            "Ask real questions and get answers from people who've done it",
            "Build a reputation and a network that follows your whole career",
          ].map((line) => (
            <li key={line} className="justify-center lg:justify-start" style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "var(--text-72)", fontSize: "clamp(0.72rem,1.9vh,0.85rem)", lineHeight: 1.4, textAlign: "left" }}>
              <span style={{ width: 5, height: 5, borderRadius: RADIUS.pill, background: "#818CF8", marginTop: 7, flexShrink: 0 }} />
              {line}
            </li>
          ))}
        </ul>
        <StoreButtons />
      </div>

      <div className="hidden lg:flex" style={{
        background: "var(--card-bg-04)", border: "1px solid var(--border-08)",
        borderRadius: RADIUS.card, padding: "clamp(24px,4vh,48px) clamp(20px,4vw,40px)",
        alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div className="glow-blob" style={{ position: "absolute", bottom: -60, left: -60, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(61,60,245,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />
        <Handshake size={56} color="#818CF8" weight="regular" style={{ position: "relative", zIndex: 1 }} />
      </div>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */
/* ─── Mobile app shell (single viewport, tab-switched) ─────────── */
function MobileApp() {
  const [tab, setTab] = useState<TabKey>("overview");
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, [tab]);

  const navItems: { key: TabKey; label: string }[] = [
    { key: "features", label: "Features" },
    { key: "how", label: "How It Works" },
    { key: "business", label: "For Business" },
    { key: "faq", label: "FAQ" },
  ];

  return (
    <div className="flex flex-col lg:hidden" style={{ height: "100svh", background: "var(--bg)", color: "var(--text-primary)", overflow: "hidden" }}>

      {/* ── Navbar ── */}
      <header style={{
        flexShrink: 0, position: "relative", zIndex: 50,
        background: "var(--nav-bg)", backdropFilter: "blur(18px)",
        borderBottom: "1px solid var(--border-06)",
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <Link href="/" onClick={() => setTab("overview")} className="flex items-center gap-2 no-underline">
            <SterlingLogo size={36} />
            <span style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)" }}>Sterling</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setTab(item.key)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: tab === item.key ? "var(--text-primary)" : "var(--text-62)",
                  fontWeight: tab === item.key ? 700 : 400,
                  textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s", padding: 0,
                }}
              >{item.label}</button>
            ))}
          </nav>
          <a href="#" style={{
            background: "#3D3CF5", color: "#fff", borderRadius: RADIUS.button,
            padding: "8px 18px", fontWeight: 600, fontSize: "0.82rem",
            textDecoration: "none", transition: "background 0.2s, transform 0.15s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#322fd4"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#3D3CF5"; (e.currentTarget as HTMLElement).style.transform = ""; }}
          >Download</a>
        </div>
        {/* Mobile tab strip */}
        <div className="flex md:hidden gap-1 overflow-x-auto px-3 pb-1 -mt-1" style={{ WebkitOverflowScrolling: "touch" }}>
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setTab(item.key)}
              style={{
                background: "none", border: "none", cursor: "pointer", whiteSpace: "nowrap",
                color: tab === item.key ? "var(--text-primary)" : "var(--text-55)",
                fontWeight: tab === item.key ? 700 : 400,
                fontSize: "0.78rem", padding: "8px 7px",
                WebkitTapHighlightColor: "transparent", touchAction: "manipulation",
              }}
            >{item.label}</button>
          ))}
        </div>
      </header>

      {/* ── Content (single viewport, tab-switched) ── */}
      <main
        ref={mainRef}
        className={`relative flex flex-1 min-h-0 justify-center ${tab === "how" ? "items-start overflow-y-auto overflow-x-hidden overscroll-contain" : tab === "faq" ? "items-start overflow-hidden" : "items-center overflow-hidden"}`}
        style={{
          padding: "clamp(12px,2.5vh,32px) clamp(16px,4vw,32px)",
          WebkitOverflowScrolling: tab === "how" ? "touch" : undefined,
          touchAction: tab === "how" ? "pan-y" : undefined,
        }}
      >
        <div className="glow-blob" style={{ position: "absolute", top: -100, left: -100, width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle, rgba(61,60,245,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="glow-blob" style={{ position: "absolute", bottom: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,53,236,0.14) 0%, transparent 70%)", pointerEvents: "none", animationDelay: "2s" }} />
        <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
          {tab === "overview" && <OverviewPanel />}
          {tab === "features" && <FeaturesPanel />}
          {tab === "how" && <HowItWorksPanel />}
          {tab === "business" && <ForBusinessPanel />}
          {tab === "faq" && (
            <div className="w-full max-w-2xl mx-auto">
              <h2 style={{ fontSize: "clamp(1.3rem, 3.5vw, 1.9rem)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 clamp(10px,2vh,20px)", textAlign: "center" }}>
                Frequently asked questions
              </h2>
              <FAQAccordion />
            </div>
          )}
        </div>
      </main>

      {/* ── Footer strip ── */}
      <footer style={{
        flexShrink: 0, background: "var(--bg)", borderTop: "1px solid var(--border-06)",
        padding: "10px 16px",
      }}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-2">
          <div className="flex items-center gap-2">
            <SterlingLogo size={24} />
            <span style={{ color: "var(--text-4)", fontSize: "0.72rem" }}>© 2026 Sterling</span>
          </div>
          <Link href="/privacy" style={{ color: "var(--text-45)", textDecoration: "none", fontSize: "0.72rem" }}>Privacy Policy</Link>
          <div className="flex gap-2">
            {[
              { Icon: InstagramIcon, href: "https://www.instagram.com/sterlingtheapp/?utm_source=ig_web_button_share_sheet", label: "Instagram" },
              { Icon: XIcon, href: "https://x.com/sterlingtheapp", label: "X (Twitter)" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={{
                width: 26, height: 26, borderRadius: RADIUS.button,
                background: "var(--card-bg-06)", border: "1px solid var(--border-08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--text-58)", textDecoration: "none",
              }}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─── Desktop site (stacked, scrollable) ─────────────────────────── */
function DesktopApp() {
  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#for-business", label: "For Business" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <div className="hidden lg:block" style={{ background: "var(--bg)", color: "var(--text-primary)" }}>

      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50" style={{
        background: "var(--nav-bg)", backdropFilter: "blur(18px)",
        borderBottom: "1px solid var(--border-06)",
      }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <SterlingLogo size={40} />
            <span style={{ fontWeight: 700, fontSize: "1.12rem", color: "var(--text-primary)" }}>Sterling</span>
          </Link>
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} style={{ color: "var(--text-68)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-68)")}
              >{item.label}</a>
            ))}
          </nav>
          <a href="#" style={{
            background: "#3D3CF5", color: "#fff", borderRadius: RADIUS.button,
            padding: "9px 22px", fontWeight: 600, fontSize: "0.9rem",
            textDecoration: "none", transition: "background 0.2s, transform 0.15s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#322fd4"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#3D3CF5"; (e.currentTarget as HTMLElement).style.transform = ""; }}
          >Download</a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ padding: "100px 0 90px" }}>
        <div className="glow-blob" style={{ position: "absolute", top: -100, left: -100, width: 550, height: 550, borderRadius: "50%", background: "radial-gradient(circle, rgba(61,60,245,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="glow-blob" style={{ position: "absolute", top: 80, right: -120, width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,53,236,0.18) 0%, transparent 70%)", pointerEvents: "none", animationDelay: "2s" }} />
        <div className="max-w-7xl mx-auto px-6 relative" style={{ zIndex: 1 }}>
          <div className="flex items-center gap-12">
            <div className="flex-1 max-w-xl">
              <span style={{
                display: "inline-block", background: "var(--card-bg-07)",
                border: "1px solid var(--border-14)", borderRadius: RADIUS.pill,
                padding: "6px 18px", fontSize: "0.85rem", color: "var(--text-78)", marginBottom: 28,
              }}>The social network for real estate people</span>
              <h1 style={{ fontSize: "4rem", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 20px" }}>
                <span style={{ background: "linear-gradient(135deg,var(--heading-gradient-start) 0%,var(--heading-gradient-end) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Connect. Share. Grow.
                </span>
              </h1>
              <p style={{ fontSize: "1.05rem", color: "var(--text-62)", lineHeight: 1.7, marginBottom: 32, maxWidth: 420 }}>
                Sterling is free for every real estate professional to connect, share insights, and grow their business.
              </p>
              <StoreButtons />
            </div>
            <div className="flex justify-center items-end gap-4" style={{ flex: 1 }}>
              <IPhoneFrame screen={<MapScreen />} scale={0.88} />
              <IPhoneFrame screen={<FeedScreen />} scale={0.88} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" style={{ background: "linear-gradient(180deg,var(--bg-alt) 0%,var(--bg) 100%)", padding: "110px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 64px", textAlign: "center" }}>
              Everything you need in one place
            </h2>
          </Reveal>
          <div className="grid grid-cols-3 divide-x divide-[var(--border-08)]">
            {[
              { Icon: UsersThree, title: "Connect with agents near you", desc: "Build a professional network with agents, brokers, and specialists working in your market." },
              { Icon: ShareNetwork, title: "Share listings and insights", desc: "Post listings, market insights, and wins to a feed built for real estate professionals." },
              { Icon: ChartLineUp, title: "Grow with local deal flow", desc: "Discover nearby opportunities on the map and turn connections into closed deals." },
            ].map(({ Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="text-center px-10">
                  <div style={{ width: 56, height: 56, background: "transparent", border: "1px solid rgba(129,140,248,0.35)", borderRadius: RADIUS.card, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                    <Icon size={26} color="#818CF8" weight="regular" />
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: "1.25rem", margin: "0 0 12px" }}>{title}</h3>
                  <p style={{ color: "var(--text-52)", lineHeight: 1.7, margin: 0, fontSize: "1rem" }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" style={{ background: "var(--bg)", padding: "110px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 64px", textAlign: "center" }}>
              How Sterling works
            </h2>
          </Reveal>
          <div className="grid grid-cols-3 divide-x divide-[var(--border-08)]">
            {[
              { img: "/Assets/uneditedcommunityscreen.PNG", pos: "10% 8%", title: "Build your profile", desc: "Add your name, brokerage, and specialties so other agents know who they're connecting with." },
              { img: "/Assets/homefeedunedited.PNG", pos: "50% 15%", title: "Post to the feed", desc: "Share listings, market insights, and wins with your network." },
              { img: "/Assets/unedited map tab.PNG", pos: "50% 45%", title: "Find deals on the map", desc: "Browse nearby listings and connections, and turn activity into closed deals." },
            ].map(({ img, pos, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="text-center px-10">
                  <div className="mx-auto overflow-hidden" style={{ width: 220, height: 280, borderRadius: RADIUS.card, border: "1px solid rgba(129,140,248,0.35)", marginBottom: 24 }}>
                    <img
                      src={img}
                      alt=""
                      aria-hidden="true"
                      draggable={false}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: pos, pointerEvents: "none", userSelect: "none" }}
                    />
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: "1.25rem", margin: "0 0 12px" }}>{title}</h3>
                  <p style={{ color: "var(--text-52)", lineHeight: 1.7, margin: 0, fontSize: "1rem" }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── For Business ── */}
      <section id="for-business" style={{ background: "linear-gradient(180deg,var(--bg) 0%,var(--bg-alt) 100%)", padding: "110px 0" }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 20px" }}>
                Where real estate professionals connect
              </h2>
              <p style={{ color: "var(--text-58)", lineHeight: 1.7, fontSize: "1rem", marginBottom: 28, maxWidth: "52ch" }}>
                Sterling puts you in front of the people who matter in your market: agents and brokers worth knowing, investors actively looking to buy, and a community that answers real questions no matter where you&apos;re starting from. It&apos;s also where you&apos;ll find what&apos;s happening in your market and create your own events, right on the map.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Meet the agents and brokers worth knowing in your market",
                  "Get in front of investors actively looking for their next deal",
                  "Ask real questions and get answers from people who've done it",
                  "Build a reputation and a network that follows your whole career",
                ].map((line) => (
                  <li key={line} style={{ display: "flex", gap: 12, alignItems: "flex-start", color: "var(--text-72)", fontSize: "1rem" }}>
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
              borderRadius: RADIUS.card, padding: "64px 48px",
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative", overflow: "hidden",
            }}>
              <div className="glow-blob" style={{ position: "absolute", bottom: -60, left: -60, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(61,60,245,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />
              <Handshake size={72} color="#818CF8" weight="regular" style={{ position: "relative", zIndex: 1 }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ background: "var(--bg-alt)", padding: "110px 0" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
          <Reveal>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 48px", textAlign: "center" }}>
              Frequently asked questions
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border-06)", padding: "48px 24px" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <SterlingLogo size={32} />
            <span style={{ color: "var(--text-4)", fontSize: "0.9rem" }}>© 2026 Sterling</span>
          </div>
          <Link href="/privacy" style={{ color: "var(--text-45)", textDecoration: "none", fontSize: "0.9rem" }}>Privacy Policy</Link>
          <div className="flex gap-3">
            {[
              { Icon: InstagramIcon, href: "https://www.instagram.com/sterlingtheapp/?utm_source=ig_web_button_share_sheet", label: "Instagram" },
              { Icon: XIcon, href: "https://x.com/sterlingtheapp", label: "X (Twitter)" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={{
                width: 38, height: 38, borderRadius: RADIUS.button,
                background: "var(--card-bg-06)", border: "1px solid var(--border-08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--text-58)", textDecoration: "none",
              }}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <MobileApp />
      <DesktopApp />
    </>
  );
}
