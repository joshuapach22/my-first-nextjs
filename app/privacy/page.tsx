import type { Metadata } from "next";
import { LegalPageShell, Section, SubHeading, P, UL, Group, ContactCard } from "../components/legal";

export const metadata: Metadata = {
  title: "Privacy Policy - Sterling",
  description: "Sterling's privacy policy explains how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy",
  },
};

const EFFECTIVE_DATE = "July 15, 2026";
const LAST_UPDATED = "July 15, 2026";

export default function PrivacyPage() {
  return (
    <LegalPageShell title="Privacy Policy" effectiveDate={EFFECTIVE_DATE} lastUpdated={LAST_UPDATED}>

      <Section title="1. Introduction">
        <P>
          Welcome to Sterling, a mobile platform operated by JEFGROWZZ LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) for everyone in real estate, including people studying for their license, active agents, investors, and landlords, to connect, learn, and grow their networks.
        </P>
        <P>
          This Privacy Policy explains how we collect, use, disclose, and protect your information when you use the Sterling mobile application (the &quot;App&quot;). Please read this policy carefully. By creating an account or using the App, you acknowledge that you have read and understood this Privacy Policy.
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
        <Group label="Profile" items={[
          "Full name and profile photo (avatar and banner image)",
          "Bio and where you are in your real estate journey (e.g., studying for your license, aspiring investor, first-year agent, part-time in RE, active agent, landlord)",
          "Main focus areas and interest categories selected during onboarding",
          "Date of birth (used to verify eligibility and suggest relevant communities; exact age is not shown on your public profile by default)",
        ]} />
        <Group label="Posts & Community Content" items={[
          "Text, photos, and videos posted to community feeds",
          "Comments, likes, and reactions to other members' content",
          "Location pins, map notes, and property-related attachments shared within posts or messages",
        ]} />
        <Group label="Direct Messages" items={[
          "Content of private conversations, including text, photos, and shared location links",
        ]} />
        <Group label="Map & Location Content" items={[
          "Locations you pin, share, or discuss on the map",
          "Area discussion ratings and notes you submit",
          "Approximate location used to center the map (with permission)",
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
          "Approximate or precise location, used to center the map around you and display nearby events and discussions. You may revoke this permission at any time in device settings.",
        ]} />
        <Group label="Camera" items={[
          "Access to your device camera when you choose to capture new photos or videos within the App.",
        ]} />
        <Group label="Photo Library" items={[
          "Access to media on your device when you upload photos to posts, profiles, or chat.",
        ]} />
        <Group label="Microphone" items={[
          "Audio access for recording audio content within the App.",
        ]} />
      </Section>

      <Section title="3. How We Use Your Information">
        <P>We use the information we collect to:</P>
        <UL items={[
          "Create and manage your account and verify your identity",
          "Deliver core App features: feed, communities, events, direct messaging, and maps",
          "Display property and real estate content relevant to your interests",
          "Surface relevant members, communities, and content through search and discovery",
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
          We may disclose your information if required by law, court order, or governmental authority, or when we reasonably believe disclosure is necessary to protect the rights, property, or safety of Sterling, our users, or the public.
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
          Sterling is intended for use by adults and is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected information from a child under 13, please contact us immediately and we will take steps to delete the information promptly.
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
        <ContactCard />
        <P>
          <span style={{ display: "block", marginTop: 14 }}>
            We will respond to all inquiries within a reasonable timeframe and no later than 30 days of receipt.
          </span>
        </P>
      </Section>

    </LegalPageShell>
  );
}
