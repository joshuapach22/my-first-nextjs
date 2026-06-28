import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Sterling",
  description: "Sterling's privacy policy explains how we collect, use, and protect your personal information.",
};

const LAST_UPDATED = "June 25, 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff", marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        {title}
      </h2>
      <div style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, fontSize: "0.97rem" }}>
        {children}
      </div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ margin: "0 0 14px" }}>{children}</p>;
}

function UL({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: "0 0 14px", paddingLeft: 24 }}>
      {items.map((item) => (
        <li key={item} style={{ marginBottom: 6 }}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <div style={{ background: "#06061a", color: "#fff", minHeight: "100vh" }}>

      {/* Navbar */}
      <header style={{ background: "rgba(6,6,26,0.95)", borderBottom: "1px solid rgba(255,255,255,0.06)", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <img
              src="/Assets/Sterling Logo.png"
              alt="Sterling"
              width={32}
              height={32}
              style={{ borderRadius: "44px", objectFit: "contain" }}
            />
            <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "#fff" }}>Sterling</span>
          </Link>
          <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}>
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px 80px" }}>

        {/* Title */}
        <div style={{ marginBottom: 48 }}>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, margin: "0 0 12px", background: "linear-gradient(135deg,#fff 0%,#c7d2fe 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Privacy Policy
          </h1>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem" }}>Last updated: {LAST_UPDATED}</p>
        </div>

        <Section title="1. Introduction">
          <P>
            Welcome to Sterling ("we," "our," or "us"). Sterling is a social networking platform built for real estate professionals, available on iOS and Android. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the "Service").
          </P>
          <P>
            Please read this policy carefully. By using Sterling, you agree to the practices described here. If you do not agree, please do not use our Service.
          </P>
        </Section>

        <Section title="2. Information We Collect">
          <P><strong style={{ color: "#fff" }}>Information you provide directly:</strong></P>
          <UL items={[
            "Account details: name, email address, and password",
            "Profile information: photo, job title, brokerage, license number, bio, and location",
            "Content you post: listings, photos, videos, comments, polls, messages, and community posts",
            "Communications: messages sent through the app's inbox and any support requests you submit",
          ]} />

          <P><strong style={{ color: "#fff" }}>Information collected automatically:</strong></P>
          <UL items={[
            "Device identifiers: device type, operating system version, unique device ID, and advertising ID (IDFA/GAID)",
            "Usage data: pages viewed, features used, search queries, and interactions within the app",
            "Location data: precise GPS location when you use map features (only with your permission)",
            "Log data: IP address, browser type, referring URLs, and timestamps of access",
            "Cookies and similar technologies: session tokens and analytics identifiers",
          ]} />

          <P><strong style={{ color: "#fff" }}>Information from third parties:</strong></P>
          <UL items={[
            "If you sign in with Apple or Google, we receive your name and email from those providers",
            "Public MLS or real estate listing data you import or link to your profile",
          ]} />
        </Section>

        <Section title="3. How We Use Your Information">
          <P>We use the information we collect to:</P>
          <UL items={[
            "Create, operate, and maintain your account",
            "Deliver the core features of the app: feed, messaging, deals map, and community boards",
            "Personalize content, suggested connections, and listing recommendations",
            "Respond to your support requests and communicate service updates",
            "Send push notifications (you can opt out at any time in device settings)",
            "Analyze usage patterns to improve app performance and develop new features",
            "Detect, investigate, and prevent fraudulent or prohibited activity",
            "Comply with applicable laws, regulations, and legal processes",
            "Enforce our Terms of Service",
          ]} />
          <P>We do not sell your personal information to third parties for their own marketing purposes.</P>
        </Section>

        <Section title="4. How We Share Your Information">
          <P>We may share your information in the following circumstances:</P>

          <P><strong style={{ color: "#fff" }}>With other users:</strong> Your profile, posts, listings, and activity are visible to other Sterling users as intended by the social features of the app. Direct messages are private between participants.</P>

          <P><strong style={{ color: "#fff" }}>Service providers:</strong> We work with trusted vendors who help us operate the Service — including cloud hosting (e.g., AWS), analytics (e.g., Mixpanel), push notifications (e.g., APNs/FCM), and customer support tools. These providers are contractually required to protect your data and may only use it to provide services to us.</P>

          <P><strong style={{ color: "#fff" }}>Business transfers:</strong> If Sterling is involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction. We will notify you before your information becomes subject to a different privacy policy.</P>

          <P><strong style={{ color: "#fff" }}>Legal compliance:</strong> We may disclose your information if required by law, subpoena, court order, or government authority, or when we believe disclosure is necessary to protect the rights, property, or safety of Sterling, our users, or the public.</P>

          <P><strong style={{ color: "#fff" }}>With your consent:</strong> We may share your information for any other purpose with your explicit consent.</P>
        </Section>

        <Section title="5. Location Data">
          <P>
            Sterling requests access to your device's precise location to power the property map and nearby-agent features. Location access is optional — you can deny or revoke it at any time in your device's Settings app. If location is disabled, map-based features will not function, but all other features remain available.
          </P>
          <P>
            We do not sell your location data. Location data is used solely to display relevant listings and connections near you.
          </P>
        </Section>

        <Section title="6. Data Retention">
          <P>
            We retain your personal information for as long as your account is active or as needed to provide you the Service. You may request deletion of your account and associated data at any time (see Section 8). We may retain certain information after deletion to comply with legal obligations, resolve disputes, and enforce our agreements.
          </P>
          <P>
            Aggregated or de-identified data (which cannot reasonably identify you) may be retained indefinitely for analytics and product improvement.
          </P>
        </Section>

        <Section title="7. Data Security">
          <P>
            We implement industry-standard technical and organizational measures to protect your information — including encryption in transit (TLS), encryption at rest, access controls, and regular security reviews.
          </P>
          <P>
            No method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security. If you believe your account has been compromised, please contact us immediately.
          </P>
        </Section>

        <Section title="8. Your Rights and Choices">
          <P>Depending on your location, you may have the following rights regarding your personal data:</P>
          <UL items={[
            "Access: Request a copy of the personal information we hold about you",
            "Correction: Request that we correct inaccurate or incomplete information",
            "Deletion: Request deletion of your account and personal information",
            "Portability: Request your data in a structured, machine-readable format",
            "Opt-out of marketing: Unsubscribe from promotional emails using the link in any email",
            "Push notifications: Disable at any time through your device's notification settings",
            "Location: Revoke location permissions through your device's Settings app",
          ]} />
          <P>
            To exercise any of these rights, contact us at <a href="mailto:contact@sterlinghollow.com" style={{ color: "#818CF8" }}>contact@sterlinghollow.com</a>. We will respond within 30 days.
          </P>
        </Section>

        <Section title="9. Children's Privacy">
          <P>
            Sterling is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at <a href="mailto:contact@sterlinghollow.com" style={{ color: "#818CF8" }}>contact@sterlinghollow.com</a>, and we will delete that information promptly.
          </P>
          <P>
            If we learn we have collected information from a child under 13 without verifiable parental consent, we will delete that information as quickly as possible.
          </P>
        </Section>

        <Section title="10. California Privacy Rights (CCPA/CPRA)">
          <P>
            If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
          </P>
          <UL items={[
            "Right to Know: You may request disclosure of the categories and specific pieces of personal information we have collected about you, the purposes for which it is used, and the categories of third parties with whom it is shared.",
            "Right to Delete: You may request deletion of your personal information, subject to certain exceptions.",
            "Right to Correct: You may request correction of inaccurate personal information.",
            "Right to Opt-Out of Sale/Sharing: Sterling does not sell personal information. We do not share personal information for cross-context behavioral advertising.",
            "Right to Limit Use of Sensitive Personal Information: We do not use sensitive personal information for purposes beyond what is necessary to provide the Service.",
            "Right to Non-Discrimination: We will not discriminate against you for exercising any of your privacy rights.",
          ]} />
          <P>
            To submit a verifiable consumer request, email us at <a href="mailto:contact@sterlinghollow.com" style={{ color: "#818CF8" }}>contact@sterlinghollow.com</a> or contact us through the app's Help Center. We will verify your identity before fulfilling a request.
          </P>
        </Section>

        <Section title="11. International Data Transfers">
          <P>
            Sterling is operated in the United States. If you access the Service from outside the United States, your information may be transferred to and processed in the United States or other countries where our service providers operate. These countries may have data protection laws that differ from those in your country. By using Sterling, you consent to such transfers.
          </P>
        </Section>

        <Section title="12. Third-Party Links and Services">
          <P>
            The app may contain links to third-party websites, services, or integrations (for example, MLS data providers). This Privacy Policy does not apply to those third parties. We encourage you to review the privacy policies of any third-party services you access through Sterling.
          </P>
        </Section>

        <Section title="13. Apple App Store Specific Disclosures">
          <P>
            Sterling is distributed through the Apple App Store. Our data practices comply with Apple's App Store Review Guidelines and App Privacy requirements. The following data types may be collected and linked to your identity:
          </P>
          <UL items={[
            "Contact Info: name, email address",
            "Location: precise location (with permission)",
            "User Content: photos, videos, posts, messages",
            "Identifiers: user ID, device ID",
            "Usage Data: in-app activity and feature usage",
          ]} />
          <P>
            You can review Sterling's App Privacy details on our App Store product page. To request deletion of your data, use the in-app Account Deletion feature (Settings → Account → Delete Account) or email us directly.
          </P>
        </Section>

        <Section title="14. Changes to This Privacy Policy">
          <P>
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or applicable law. We will notify you of material changes by updating the "Last Updated" date at the top of this page and, where appropriate, by sending a notification through the app or by email.
          </P>
          <P>
            Your continued use of Sterling after the effective date of any updates constitutes your acceptance of the revised Privacy Policy.
          </P>
        </Section>

        <Section title="15. Contact Us">
          <P>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out:</P>
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "20px 24px", marginTop: 8 }}>
            <p style={{ margin: "0 0 8px", fontWeight: 600, color: "#fff" }}>Sterling</p>
            <p style={{ margin: "0 0 6px" }}>
              Email: <a href="mailto:contact@sterlinghollow.com" style={{ color: "#818CF8" }}>contact@sterlinghollow.com</a>
            </p>
            <p style={{ margin: "0 0 6px" }}>
              Instagram: <a href="https://www.instagram.com/sterlingtheapp/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" style={{ color: "#818CF8" }}>@sterlingtheapp</a>
            </p>
            <p style={{ margin: 0 }}>
              X (Twitter): <a href="https://x.com/sterlingtheapp" target="_blank" rel="noopener noreferrer" style={{ color: "#818CF8" }}>@sterlingtheapp</a>
            </p>
          </div>
        </Section>

      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px", textAlign: "center", color: "rgba(255,255,255,0.28)", fontSize: "0.82rem" }}>
        © 2026 Sterling. All rights reserved. · <a href="/privacy" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Privacy Policy</a>
      </div>
    </div>
  );
}
