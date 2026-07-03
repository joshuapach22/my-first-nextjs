import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Sterling",
  description: "Sterling's privacy policy explains how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy",
  },
};

const EFFECTIVE_DATE = "July 1, 2026";
const LAST_UPDATED = "July 1, 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ fontSize: "1.02rem", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 12px" }}>
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ margin: "0 0 14px" }}>{children}</p>;
}

function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ margin: "0 0 14px", paddingLeft: 24 }}>
      {items.map((item, i) => (
        <li key={i} style={{ marginBottom: 6 }}>{item}</li>
      ))}
    </ul>
  );
}

function Group({ label, items }: { label: string; items: string[] }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p style={{ fontWeight: 600, color: "var(--text-88)", margin: "0 0 8px" }}>{label}</p>
      <UL items={items} />
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text-primary)", minHeight: "100vh" }}>

      {/* Navbar */}
      <header style={{ background: "var(--nav-bg-solid)", borderBottom: "1px solid var(--border-06)", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 38, height: 38, borderRadius: 9999, overflow: "hidden", flexShrink: 0 }}>
              <img
                src="/Assets/Sterling Logo.png"
                alt="Sterling"
                width={38}
                height={38}
                style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.18)" }}
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
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px 80px" }}>

        {/* Title */}
        <div style={{ marginBottom: 48 }}>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, margin: "0 0 12px", background: "linear-gradient(135deg,var(--heading-gradient-start) 0%,var(--heading-gradient-end) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Privacy Policy
          </h1>
          <p style={{ color: "var(--text-45)", fontSize: "0.9rem", margin: "0 0 4px" }}>Effective date: {EFFECTIVE_DATE}</p>
          <p style={{ color: "var(--text-45)", fontSize: "0.9rem" }}>Last updated: {LAST_UPDATED}</p>
        </div>

        <Section title="1. Introduction">
          <P>
            Welcome to Sterling Hollow (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). Sterling Hollow is a mobile platform designed for real estate professionals, including agents, investors, landlords, and contractors, to connect, collaborate, manage property operations, and grow their networks.
          </P>
          <P>
            This Privacy Policy explains how we collect, use, disclose, and protect your information when you use the Sterling Hollow mobile application (the &quot;App&quot;). Please read this policy carefully. By creating an account or using the App, you acknowledge that you have read and understood this Privacy Policy.
          </P>
          <P>
            If you do not agree with any part of this policy, please discontinue use of the App.
          </P>
        </Section>

        <Section title="2. Information We Collect">
          <SubHeading>2.1 Information You Provide Directly</SubHeading>
          <Group label="Account Registration" items={[
            "Email address",
            "Phone number",
            "Username and password",
          ]} />
          <Group label="Professional Profile" items={[
            "Full name and profile photo (avatar and banner image)",
            "Bio and professional role (e.g., Real Estate Agent, Investor, Landlord, Vendor/Contractor)",
            "Areas of specialization, operating markets, and professional goals",
            "Interest categories selected during onboarding",
          ]} />
          <Group label="Posts & Community Content" items={[
            "Text, photos, and videos posted to community feeds",
            "Comments, likes, and reactions to other members' content",
            "Property attachments shared within posts",
          ]} />
          <Group label="Direct Messages" items={[
            "Content of private conversations, including text, photos, and shared property or location links",
          ]} />
          <Group label="Property & Operations Data" items={[
            "Property address, type, and physical details (bedrooms, bathrooms, square footage)",
            "Photos associated with a property",
            "User-entered financial estimates, including market value, after-repair value (ARV), cap rate, cash flow projections, and rehab budget",
          ]} />
          <Group label="Events" items={[
            "Event details you create (title, location, date, time, type)",
            "RSVPs and attendee information",
          ]} />
          <Group label="Reports" items={[
            "Content and context submitted when reporting a post or user",
          ]} />

          <SubHeading>2.2 Information Collected Automatically</SubHeading>
          <UL items={[
            "Device type, operating system version, and unique device identifiers",
            "App version, screens viewed, features accessed, and interaction timestamps",
            "Notification tokens used to deliver alerts to your device",
            "IP address, crash reports, and performance diagnostics",
          ]} />

          <SubHeading>2.3 Information Collected With Your Permission</SubHeading>
          <Group label="Location" items={[
            "Approximate or precise location, used to center the Property Map around you and display nearby listings and events. You may revoke this permission at any time in device settings.",
          ]} />
          <Group label="Camera" items={[
            "Access to your device camera when you choose to capture new photos or videos within the App.",
          ]} />
          <Group label="Photo Library" items={[
            "Access to media on your device when you upload photos to posts, profiles, property listings, or chat.",
          ]} />
          <Group label="Microphone" items={[
            "Audio access for recording audio content within the App.",
          ]} />
        </Section>

        <Section title="3. How We Use Your Information">
          <P>We use the information we collect to:</P>
          <UL items={[
            "Create and manage your account and verify your identity",
            "Deliver core App features: feed, communities, events, direct messaging, property operations, and maps",
            "Display property and real estate data relevant to your markets",
            "Surface relevant professionals, communities, and content through search and discovery",
            "Send push notifications about community activity, new messages, event updates, and connection requests",
            "Moderate content and enforce our Community Guidelines",
            "Respond to support requests and resolve disputes",
            "Analyze usage patterns to improve performance and develop new features",
            "Comply with applicable legal obligations",
          ]} />
        </Section>

        <Section title="4. How We Share Your Information">
          <P>We do not sell your personal information. We may share information only in the following circumstances:</P>

          <SubHeading>4.1 With Other Community Members</SubHeading>
          <P>
            Content you post publicly, including feed posts, comments, profile details, and connection counts, is visible to other members of your communities. Direct messages are visible only to you and the intended recipient(s). Community owners and moderators may see member activity within communities they manage.
          </P>

          <SubHeading>4.2 With Service Providers</SubHeading>
          <P>To operate the App, we engage trusted third-party service providers in the following categories:</P>
          <UL items={[
            "Cloud infrastructure and database hosting",
            "User authentication and account security",
            "Mapping and location services",
            "Property data and real estate information",
            "Mobile notification delivery",
            "Application performance monitoring",
          ]} />
          <P>
            All service providers are contractually obligated to process your data only as directed by us, maintain appropriate security measures, and are prohibited from using your information for their own independent purposes.
          </P>

          <SubHeading>4.3 For Legal Reasons</SubHeading>
          <P>
            We may disclose your information if required by law, court order, or governmental authority, or when we reasonably believe disclosure is necessary to protect the rights, property, or safety of Sterling Hollow, our users, or the public.
          </P>

          <SubHeading>4.4 Business Transfers</SubHeading>
          <P>
            In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change and the applicable choices you may have.
          </P>
        </Section>

        <Section title="5. Data Retention">
          <P>
            We retain your personal information for as long as your account is active or as needed to provide our services. You may request deletion of your account and associated data at any time by contacting us.
          </P>
          <P>
            Please note that some information may be retained for a limited period following account deletion to comply with legal obligations, resolve disputes, or enforce our agreements. Financial and property data you enter is stored solely for your own operational use and is not shared with third parties for their own purposes.
          </P>
        </Section>

        <Section title="6. Data Security">
          <P>We implement industry-standard security measures to protect your information, including:</P>
          <UL items={[
            "Encrypted data transmission in transit",
            "Secure on-device credential storage",
            "Access controls and authentication on all backend systems",
            "Regular assessments of our data handling practices",
          ]} />
          <P>
            While we take reasonable steps to protect your data, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security and encourage you to use a strong, unique password for your account.
          </P>
        </Section>

        <Section title="7. Children's Privacy">
          <P>
            Sterling Hollow is intended for use by adults and is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected information from a child under 13, please contact us immediately and we will take steps to delete the information promptly.
          </P>
        </Section>

        <Section title="8. Your Rights and Choices">
          <P>Depending on your jurisdiction, you may have the right to:</P>
          <UL items={[
            <><strong style={{ color: "var(--text-primary)" }}>Access</strong> - Request a copy of the personal information we hold about you.</>,
            <><strong style={{ color: "var(--text-primary)" }}>Correct</strong> - Request that we correct inaccurate or incomplete information in your account.</>,
            <><strong style={{ color: "var(--text-primary)" }}>Delete</strong> - Request deletion of your account and associated personal data.</>,
            <><strong style={{ color: "var(--text-primary)" }}>Portability</strong> - Request a machine-readable export of your data where technically feasible.</>,
            <><strong style={{ color: "var(--text-primary)" }}>Opt Out</strong> - Opt out of push notifications at any time through your device notification settings.</>,
            <><strong style={{ color: "var(--text-primary)" }}>Revoke Permissions</strong> - Withdraw location, camera, photo library, or microphone permissions at any time through your device settings. Note that revoking certain permissions may limit App functionality.</>,
          ]} />
          <P>To exercise any of these rights, please contact us using the information provided in Section 11.</P>
        </Section>

        <Section title="9. Third-Party Links and Services">
          <P>
            The App may contain links to third-party websites, listings, or services. We are not responsible for the privacy practices of those third parties. We encourage you to review the privacy policies of any external services you access through the App.
          </P>
        </Section>

        <Section title="10. Changes to This Privacy Policy">
          <P>
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will:
          </P>
          <UL items={[
            "Update the \"Last Updated\" date at the top of this document",
            "Notify you through the App or via email for material changes",
          ]} />
          <P>
            Your continued use of the App after any update constitutes your acceptance of the revised Privacy Policy. We encourage you to review this policy periodically.
          </P>
        </Section>

        <Section title="11. Contact Us">
          <P>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out to us:</P>
          <div style={{ background: "var(--card-bg-04)", border: "1px solid var(--border-08)", borderRadius: 16, padding: "20px 24px", marginTop: 8 }}>
            <p style={{ margin: "0 0 8px", fontWeight: 600, color: "var(--text-primary)" }}>Sterling Hollow</p>
            <p style={{ margin: "0 0 6px" }}>
              Email: <a href="mailto:Contact@sterlinghollow.com" style={{ color: "#818CF8" }}>Contact@sterlinghollow.com</a>
            </p>
            <p style={{ margin: 0 }}>
              Website: <a href="https://sterlingtheapp.com" style={{ color: "#818CF8" }}>sterlingtheapp.com</a>
            </p>
          </div>
          <P>
            <span style={{ display: "block", marginTop: 14 }}>
              We will respond to all inquiries within a reasonable timeframe and no later than 30 days of receipt.
            </span>
          </P>
        </Section>

      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid var(--border-06)", padding: "24px", textAlign: "center", color: "var(--text-28)", fontSize: "0.82rem" }}>
        <p style={{ margin: "0 0 4px" }}>© 2026 Sterling Hollow. All rights reserved.</p>
        <a href="/privacy" style={{ color: "var(--text-4)", textDecoration: "none" }}>Privacy Policy</a>
      </div>
    </div>
  );
}
