"use client";

import { useState } from "react";
import { EnvelopeSimple } from "@phosphor-icons/react";
import { SiteHeader, SiteFooter } from "../components/SiteChrome";
import { RADIUS, Reveal, InstagramIcon, XIcon } from "../components/shared";

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

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

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "32px 0" }}>
        <h3 style={{ fontSize: "1.3rem", fontWeight: 800, margin: "0 0 8px", color: "var(--text-primary)" }}>You&apos;re on the list</h3>
        <p style={{ color: "var(--text-58)", fontSize: "0.92rem", margin: 0 }}>We&apos;ll text you as soon as early access opens up.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 16 }}>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-62)", marginBottom: 6 }}>First name</label>
            <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-62)", marginBottom: 6 }}>Last name</label>
            <input required value={lastName} onChange={(e) => setLastName(e.target.value)} style={inputStyle} />
          </div>
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-62)", marginBottom: 6 }}>Phone number</label>
          <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 555-5555" style={inputStyle} />
        </div>
      </div>

      <label style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 18, cursor: "pointer" }}>
        <input
          required
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          style={{ marginTop: 3, flexShrink: 0 }}
        />
        <span style={{ fontSize: "0.78rem", color: "var(--text-52)", lineHeight: 1.5 }}>
          By checking this box, I consent to receive text messages and calls from Sterling, including automated messages, at the phone number provided. Message and data rates may apply. Message frequency varies. Reply STOP at any time to opt out.
        </span>
      </label>

      {status === "error" && (
        <p style={{ color: "#f87171", fontSize: "0.82rem", margin: "0 0 14px" }}>{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        style={{
          width: "100%", background: "#3D3CF5", color: "#fff", border: "none",
          borderRadius: RADIUS.button, padding: "13px 0", fontWeight: 700, fontSize: "0.95rem",
          cursor: status === "submitting" ? "default" : "pointer",
          opacity: status === "submitting" ? 0.7 : 1,
        }}
      >
        {status === "submitting" ? "Submitting..." : "Get Early Access"}
      </button>
    </form>
  );
}

export default function ContactClient() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text-primary)", minHeight: "100vh" }}>
      <SiteHeader />

      <main>
      <section className="relative overflow-hidden" style={{ padding: "clamp(50px,10vh,110px) 0 clamp(60px,10vh,110px)" }}>
        <div className="glow-blob" style={{ position: "absolute", top: -100, left: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(61,60,245,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative" style={{ zIndex: 1 }}>
          <Reveal>
            <div className="text-center" style={{ marginBottom: "clamp(32px,6vh,56px)" }}>
              <h1 style={{ fontSize: "clamp(1.8rem,5vw,2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 16px" }}>
                Get in touch
              </h1>
              <p style={{ color: "var(--text-58)", fontSize: "clamp(0.9rem,2vw,1.05rem)", maxWidth: "48ch", margin: "0 auto" }}>
                Questions, feedback, or ready to get early access? We&apos;d love to hear from you.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <Reveal delay={0.1}>
              <div style={{
                background: "var(--card-bg-04)", border: "1px solid var(--border-08)",
                borderRadius: RADIUS.card, padding: "clamp(24px,4vh,32px)",
              }}>
                <h2 style={{ fontSize: "1.2rem", fontWeight: 800, margin: "0 0 6px" }}>Get early access</h2>
                <p style={{ color: "var(--text-58)", fontSize: "0.85rem", margin: "0 0 20px" }}>
                  Be first to know when Sterling opens up in your market.
                </p>
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-col gap-6">
                <div style={{
                  background: "var(--card-bg-04)", border: "1px solid var(--border-08)",
                  borderRadius: RADIUS.card, padding: "24px 28px",
                  display: "flex", alignItems: "center", gap: 16,
                }}>
                  <div style={{ width: 44, height: 44, borderRadius: RADIUS.card, background: "transparent", border: "1px solid rgba(129,140,248,0.35)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <EnvelopeSimple size={20} color="#818CF8" weight="regular" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-52)", marginBottom: 2 }}>Email us</div>
                    <a href="mailto:Contact@sterlinghollow.com" style={{ color: "var(--text-primary)", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem" }}>
                      Contact@sterlinghollow.com
                    </a>
                  </div>
                </div>

                <div style={{
                  background: "var(--card-bg-04)", border: "1px solid var(--border-08)",
                  borderRadius: RADIUS.card, padding: "24px 28px",
                }}>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-52)", marginBottom: 12 }}>Follow along</div>
                  <div className="flex gap-3">
                    {[
                      { Icon: InstagramIcon, href: "https://www.instagram.com/sterlingtheapp/?utm_source=ig_web_button_share_sheet", label: "Instagram" },
                      { Icon: XIcon, href: "https://x.com/sterlingtheapp", label: "X (Twitter)" },
                    ].map(({ Icon, href, label }) => (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={{
                        width: 40, height: 40, borderRadius: RADIUS.button,
                        background: "var(--card-bg-06)", border: "1px solid var(--border-08)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "var(--text-58)", textDecoration: "none",
                      }}>
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      </main>

      <SiteFooter />
    </div>
  );
}
