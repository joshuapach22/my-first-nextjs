"use client";

import Link from "next/link";

/* ─── Sterling Logo (actual app icon) ──────────────────────────── */
function SterlingLogo({ size = 36 }: { size?: number }) {
  return (
    <img
      src="/Assets/Sterling Logo.png"
      alt="Sterling"
      width={size}
      height={size}
      style={{ borderRadius: "44px", objectFit: "contain" }}
    />
  );
}

/* ─── Small S icon for nav center button ──────────────────────── */
function SIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      <path
        d="M 138,30 C 162,30 178,50 172,70 C 166,90 146,98 124,96 C 102,94 80,88 62,96 C 50,102 46,114 52,122 L 38,118 C 30,106 34,88 50,80 C 68,70 94,76 118,78 C 142,80 158,72 162,56 C 166,40 154,26 138,24 C 128,22 118,24 110,28 L 116,38 C 122,34 130,30 138,30 Z"
        fill="white"
      />
      <path
        d="M 62,118 C 38,118 22,138 28,158 C 34,178 54,186 76,184 C 98,182 120,172 136,160 L 126,152 C 112,162 94,170 76,172 C 58,174 44,164 40,150 C 36,136 48,122 66,118 C 84,114 108,118 128,118 C 148,118 164,108 170,94 C 176,80 168,64 154,60 L 148,70 C 158,74 162,86 156,96 C 150,106 136,112 120,112 C 104,112 82,112 62,118 Z"
        fill="rgba(255,255,255,0.85)"
      />
    </svg>
  );
}

/* ─── Store icons ─────────────────────────────────────────────── */
function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

/* ─── Feature section icons ───────────────────────────────────── */
function ConnectIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="17" cy="7" r="3" /><circle cx="7" cy="17" r="3" /><circle cx="7" cy="7" r="3" />
      <path d="M14 7h3" /><path d="M7 14v3" /><path d="M14 14h3a3 3 0 0 1 3 3v1" />
    </svg>
  );
}
function ShareIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 17.5h7" /><path d="M17.5 14v7" />
    </svg>
  );
}
function GrowIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" /><path d="M7 16l4-4 4 4 4-6" />
    </svg>
  );
}

/* ─── Social icons ────────────────────────────────────────────── */
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* ─── Map Screen (left phone) ────────────────────────────────── */
function MapScreen() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <img
        src="/Assets/IMG_0716.png"
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
        src="/Assets/IMG_0715.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none", userSelect: "none" }}
      />
    </div>
  );
}

/* ─── iPhone 15-style frame ──────────────────────────────────── */
function IPhoneFrame({ screen, animClass }: { screen: React.ReactNode; animClass: string }) {
  return (
    <div className={animClass} style={{
      width: 255, height: 528, position: "relative", flexShrink: 0,
    }}>
      {/* Chassis */}
      <div style={{
        position: "absolute", inset: 0, borderRadius: 50,
        background: "linear-gradient(145deg, #1e1e1e 0%, #111 60%, #1a1a1a 100%)",
        border: "1px solid rgba(255,255,255,0.13)",
        boxShadow: `
          0 0 0 0.5px rgba(255,255,255,0.08),
          0 50px 120px rgba(0,0,0,0.75),
          0 20px 50px rgba(0,0,0,0.5),
          inset 0 1px 0 rgba(255,255,255,0.12),
          inset 0 -1px 0 rgba(255,255,255,0.04)
        `,
      }} />

      {/* Left side buttons */}
      <div style={{ position: "absolute", left: -3, top: 108, width: 3, height: 30, background: "#252525", borderRadius: "2px 0 0 2px", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }} />
      <div style={{ position: "absolute", left: -3, top: 155, width: 3, height: 52, background: "#252525", borderRadius: "2px 0 0 2px", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }} />
      <div style={{ position: "absolute", left: -3, top: 218, width: 3, height: 52, background: "#252525", borderRadius: "2px 0 0 2px", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }} />
      <div style={{ position: "absolute", right: -3, top: 168, width: 3, height: 76, background: "#252525", borderRadius: "0 2px 2px 0", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }} />

      {/* Screen bezel */}
      <div style={{
        position: "absolute", inset: 6, borderRadius: 45, overflow: "hidden",
        background: "#000",
      }}>
        {screen}
        {/* Dynamic Island */}
        <div style={{
          position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)",
          width: 118, height: 34, background: "#000",
          borderRadius: 20, zIndex: 30,
          boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
        }} />
      </div>

      {/* Bottom USB-C indicator */}
      <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", width: 42, height: 5, background: "#1a1a1a", borderRadius: 3 }} />
    </div>
  );
}

/* ─── Store buttons ───────────────────────────────────────────── */
function StoreButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <a href="#" style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        padding: "10px 20px", background: "#000",
        border: "1.5px solid rgba(255,255,255,0.16)", borderRadius: 12,
        color: "#fff", textDecoration: "none",
        transition: "background 0.2s, transform 0.15s",
      }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#1a1040"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#000"; (e.currentTarget as HTMLElement).style.transform = ""; }}
      >
        <AppleIcon />
        <span>
          <span style={{ display: "block", fontSize: 9, opacity: 0.65, lineHeight: 1, marginBottom: 2 }}>Download on the</span>
          <span style={{ fontSize: 14, fontWeight: 600 }}>App Store</span>
        </span>
      </a>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div style={{ background: "#06061a", color: "#fff", minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── Navbar ── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(6,6,26,0.82)", backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <SterlingLogo size={34} />
            <span style={{ fontWeight: 700, fontSize: "1.12rem", color: "#fff" }}>Sterling</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {["Features", "How It Works", "For Business", "FAQ"].map((item) => (
              <a key={item} href="#" style={{ color: "rgba(255,255,255,0.68)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.68)")}
              >{item}</a>
            ))}
          </nav>
          <a href="#" style={{
            background: "#3D3CF5", color: "#fff", borderRadius: 10,
            padding: "9px 22px", fontWeight: 600, fontSize: "0.9rem",
            textDecoration: "none", transition: "background 0.2s, transform 0.15s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#322fd4"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#3D3CF5"; (e.currentTarget as HTMLElement).style.transform = ""; }}
          >Download</a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section style={{
        background: "#06061a",
        position: "relative", padding: "60px 0 0",
      }}>
        {/* Ambient blobs */}
        <div className="glow-blob" style={{ position: "absolute", top: -100, left: -100, width: 550, height: 550, borderRadius: "50%", background: "radial-gradient(circle, rgba(61,60,245,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="glow-blob" style={{ position: "absolute", top: 80, right: -120, width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,53,236,0.18) 0%, transparent 70%)", pointerEvents: "none", animationDelay: "2s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6" style={{ position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <div className="animate-fade-up-1" style={{ textAlign: "center" }}>
            <span style={{
              display: "inline-block", background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.14)", borderRadius: 100,
              padding: "6px 18px", fontSize: "clamp(0.75rem, 2.5vw, 0.85rem)", color: "rgba(255,255,255,0.78)", marginBottom: 28,
            }}>The social network for real estate people</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Copy */}
            <div className="flex-1 max-w-xl w-full text-center lg:text-left">
              <h1 className="animate-fade-up-2" style={{
                fontSize: "clamp(2.5rem, 12vw, 5.5rem)", fontWeight: 800,
                lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 20px",
              }}>
                <span style={{ background: "linear-gradient(135deg,#fff 0%,#c7d2fe 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Connect.<br />Share.<br />Grow.
                </span>
              </h1>
              <p className="animate-fade-up-3" style={{ fontSize: "clamp(0.95rem, 3.5vw, 1.1rem)", color: "rgba(255,255,255,0.62)", lineHeight: 1.72, marginBottom: 32, maxWidth: 420, marginLeft: "auto", marginRight: "auto" }}>
                Join a community built for real estate professionals to connect, share insights, and grow their business.
              </p>
              <div className="animate-fade-up-4" style={{ display: "flex", justifyContent: "center" }}>
                <StoreButtons />
              </div>
            </div>

            {/* iPhone mockups */}
            <div style={{
              flex: 1, display: "flex",
              justifyContent: "center", alignItems: "flex-end",
              gap: "clamp(6px, 3vw, 20px)",
              paddingBottom: 0, width: "100%",
            }}>
              <div className="phone-left" style={{
                flexShrink: 0,
                marginBottom: 50,
              }}>
                <div style={{ transform: "scale(0.75)", transformOrigin: "bottom center" }}>
                  <IPhoneFrame screen={<MapScreen />} animClass="" />
                </div>
              </div>
              <div className="phone-right" style={{
                flexShrink: 0,
              }}>
                <div style={{ transform: "scale(0.75)", transformOrigin: "bottom center" }}>
                  <IPhoneFrame screen={<FeedScreen />} animClass="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ background: "linear-gradient(180deg,#0d0b2e 0%,#06061a 100%)", padding: "80px 0 100px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { Icon: ConnectIcon, title: "Connect", desc: "Build meaningful relationships with top agents and professionals." },
              { Icon: ShareIcon, title: "Share", desc: "Share listings, insights, and opportunities with your network." },
              { Icon: GrowIcon, title: "Grow", desc: "Expand your network and grow your real estate business." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} style={{
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20, padding: "40px 32px", textAlign: "center",
                transition: "background 0.25s, transform 0.25s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.transform = ""; }}
              >
                <div style={{ width: 64, height: 64, background: "rgba(61,60,245,0.15)", borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <Icon />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "1.3rem", margin: "0 0 12px" }}>{title}</h3>
                <p style={{ color: "rgba(255,255,255,0.52)", lineHeight: 1.65, margin: 0, fontSize: "0.95rem" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "linear-gradient(160deg,#0d0b2e 0%,#1a1060 60%,#0d0b2e 100%)", padding: "90px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div className="glow-blob" style={{ position: "absolute", inset: 0, margin: "auto", width: 600, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(61,60,245,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16, background: "linear-gradient(135deg,#fff 0%,#c7d2fe 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Your network. Your success.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.58)", fontSize: "clamp(0.95rem, 3vw, 1.05rem)", marginBottom: 36 }}>
            Download Sterling today and join the future of real estate networking.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}><StoreButtons /></div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: "#06061a", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "60px 24px 32px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-1 text-center sm:text-left">
              <div className="flex items-center gap-2.5 mb-4 justify-center sm:justify-start">
                <SterlingLogo size={32} />
                <span style={{ fontWeight: 700, fontSize: "1.05rem" }}>Sterling</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.875rem", lineHeight: 1.65, maxWidth: 200, margin: "0 auto" }}>
                The social network for real estate professionals to connect, share, and grow together.
              </p>
            </div>

            {/* Company */}
            <div>
              <h4 style={{ fontWeight: 600, fontSize: "0.95rem", margin: "0 0 16px" }}>Company</h4>
              <div className="flex flex-col">
                {["About Us", "Careers", "Blog", "Press"].map((item) => (
                  <a key={item} href="#" style={{ color: "rgba(255,255,255,0.42)", textDecoration: "none", fontSize: "0.875rem", lineHeight: "2.2", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.42)")}
                  >{item}</a>
                ))}
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 style={{ fontWeight: 600, fontSize: "0.95rem", margin: "0 0 16px" }}>Support</h4>
              <div className="flex flex-col">
                {[
                  { label: "Help Center", href: "#" },
                  { label: "Contact Us", href: "#" },
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms of Service", href: "#" },
                ].map(({ label, href }) => (
                  <a key={label} href={href} style={{ color: "rgba(255,255,255,0.42)", textDecoration: "none", fontSize: "0.875rem", lineHeight: "2.2", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.42)")}
                  >{label}</a>
                ))}
              </div>
            </div>

            {/* Follow — Instagram + X only */}
            <div>
              <h4 style={{ fontWeight: 600, fontSize: "0.95rem", margin: "0 0 16px" }}>Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { Icon: InstagramIcon, href: "https://www.instagram.com/sterlingtheapp/?utm_source=ig_web_button_share_sheet", label: "Instagram" },
                  { Icon: XIcon, href: "https://x.com/sterlingtheapp", label: "X (Twitter)" },
                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.58)", textDecoration: "none",
                    transition: "background 0.2s, color 0.2s",
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(61,60,245,0.22)"; (e.currentTarget as HTMLElement).style.color = "#818CF8"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.58)"; }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, textAlign: "center", color: "rgba(255,255,255,0.28)", fontSize: "0.82rem" }}>
            © 2026 Sterling. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}