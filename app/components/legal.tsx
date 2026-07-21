import Link from "next/link";
import Image from "next/image";

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid var(--border-08)" }}>
        {title}
      </h2>
      <div style={{ color: "var(--text-65)", lineHeight: 1.8, fontSize: "0.97rem" }}>
        {children}
      </div>
    </section>
  );
}

export function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ fontSize: "1.02rem", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 12px" }}>
      {children}
    </h3>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p style={{ margin: "0 0 14px" }}>{children}</p>;
}

export function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ margin: "0 0 14px", paddingLeft: 24 }}>
      {items.map((item, i) => (
        <li key={i} style={{ marginBottom: 6 }}>{item}</li>
      ))}
    </ul>
  );
}

export function Group({ label, items }: { label: string; items: string[] }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p style={{ fontWeight: 600, color: "var(--text-88)", margin: "0 0 8px" }}>{label}</p>
      <UL items={items} />
    </div>
  );
}

export function ContactCard() {
  return (
    <div style={{ background: "var(--card-bg-04)", border: "1px solid var(--border-08)", borderRadius: 16, padding: "20px 24px", marginTop: 8 }}>
      <p style={{ margin: "0 0 8px", fontWeight: 600, color: "var(--text-primary)" }}>JEFGROWZZ LLC, operator of Sterling</p>
      <p style={{ margin: "0 0 6px" }}>
        Email: <a href="mailto:contact@sterlinghollow.com" style={{ color: "#818CF8" }}>contact@sterlinghollow.com</a>
      </p>
      <p style={{ margin: 0 }}>
        Website: <a href="https://sterlingtheapp.com" style={{ color: "#818CF8" }}>sterlingtheapp.com</a>
      </p>
    </div>
  );
}

const LEGAL_NAV = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/guidelines", label: "Community Guidelines" },
  { href: "/dmca", label: "DMCA Policy" },
];

export function LegalPageShell({
  title,
  effectiveDate,
  lastUpdated,
  children,
}: {
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text-primary)", minHeight: "100vh" }}>

      {/* Navbar */}
      <header style={{ background: "var(--nav-bg-solid)", borderBottom: "1px solid var(--border-06)", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 38, height: 38, borderRadius: 9999, overflow: "hidden", flexShrink: 0, position: "relative" }}>
              <Image
                src="/Assets/Sterling Logo.png"
                alt="Sterling"
                fill
                sizes="38px"
                style={{ objectFit: "cover", transform: "scale(1.18)" }}
              />
            </div>
            <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)" }}>Sterling</span>
          </Link>
          <Link href="/" style={{ color: "var(--text-6)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}>
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px 80px" }}>

        {/* Title */}
        <div style={{ marginBottom: 48 }}>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, margin: "0 0 12px", background: "linear-gradient(135deg,var(--heading-gradient-start) 0%,var(--heading-gradient-end) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {title}
          </h1>
          <p style={{ color: "var(--text-45)", fontSize: "0.9rem", margin: "0 0 4px" }}>Effective date: {effectiveDate}</p>
          <p style={{ color: "var(--text-45)", fontSize: "0.9rem" }}>Last updated: {lastUpdated}</p>
        </div>

        {children}

      </main>

      {/* Footer */}
      <div style={{ borderTop: "1px solid var(--border-06)", padding: "24px", textAlign: "center", color: "var(--text-28)", fontSize: "0.82rem" }}>
        <p style={{ margin: "0 0 12px" }}>© 2026 JEFGROWZZ LLC. All rights reserved.</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
          {LEGAL_NAV.map((item) => (
            <a key={item.href} href={item.href} style={{ color: "var(--text-4)", textDecoration: "none" }}>{item.label}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
