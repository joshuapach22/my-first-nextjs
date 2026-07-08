"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RADIUS, SterlingLogo, InstagramIcon, XIcon, NAV_ITEMS } from "./shared";

/* ─── Site header: real navigation, shared by every page ────────── */
export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50" style={{
      background: "var(--nav-bg)", backdropFilter: "blur(18px)",
      borderBottom: "1px solid var(--border-06)",
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <SterlingLogo size={36} />
          <span style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text-primary)" }}>Sterling</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: active ? "var(--text-primary)" : "var(--text-68)",
                  fontWeight: active ? 700 : 400,
                  textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s",
                }}
              >{item.label}</Link>
            );
          })}
        </nav>
        <a href="#" style={{
          background: "#3D3CF5", color: "#fff", borderRadius: RADIUS.button,
          padding: "9px 20px", fontWeight: 600, fontSize: "0.85rem",
          textDecoration: "none", transition: "background 0.2s, transform 0.15s",
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#322fd4"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#3D3CF5"; (e.currentTarget as HTMLElement).style.transform = ""; }}
        >Download</a>
      </div>
      {/* Mobile nav row */}
      <nav className="flex md:hidden gap-5 overflow-x-auto px-4 pb-2 -mt-1" style={{ WebkitOverflowScrolling: "touch" }}>
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                whiteSpace: "nowrap",
                color: active ? "var(--text-primary)" : "var(--text-55)",
                fontWeight: active ? 700 : 400,
                fontSize: "0.82rem", textDecoration: "none",
                WebkitTapHighlightColor: "transparent", touchAction: "manipulation",
              }}
            >{item.label}</Link>
          );
        })}
      </nav>
    </header>
  );
}

/* ─── Site footer: shared by every page ──────────────────────────── */
export function SiteFooter() {
  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border-06)", padding: "40px 24px" }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <SterlingLogo size={28} />
          <span style={{ color: "var(--text-4)", fontSize: "0.85rem" }}>© 2026 Sterling</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-5">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} style={{ color: "var(--text-45)", textDecoration: "none", fontSize: "0.85rem" }}>
              {item.label}
            </Link>
          ))}
          <Link href="/privacy" style={{ color: "var(--text-45)", textDecoration: "none", fontSize: "0.85rem" }}>Privacy Policy</Link>
        </nav>
        <div className="flex gap-3">
          {[
            { Icon: InstagramIcon, href: "https://www.instagram.com/sterlingtheapp/?utm_source=ig_web_button_share_sheet", label: "Instagram" },
            { Icon: XIcon, href: "https://x.com/sterlingtheapp", label: "X (Twitter)" },
          ].map(({ Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={{
              width: 34, height: 34, borderRadius: RADIUS.button,
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
  );
}
