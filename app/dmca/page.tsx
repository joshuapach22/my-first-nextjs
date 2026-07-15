import type { Metadata } from "next";
import { LegalPageShell, Section, P, UL, ContactCard } from "../components/legal";

export const metadata: Metadata = {
  title: "DMCA / Copyright Infringement Policy - Sterling",
  description: "How copyright owners may notify Sterling of allegedly infringing content, and how users may respond.",
  alternates: {
    canonical: "/dmca",
  },
};

const EFFECTIVE_DATE = "July 15, 2026";
const LAST_UPDATED = "July 15, 2026";

export default function DmcaPage() {
  return (
    <LegalPageShell title="DMCA / Copyright Infringement Policy" effectiveDate={EFFECTIVE_DATE} lastUpdated={LAST_UPDATED}>

      <Section title="Overview">
        <P>
          JEFGROWZZ LLC, operator of Sterling, respects the intellectual property rights of others and expects users of our services to do the same. This Copyright Infringement Policy explains how copyright owners may notify us of allegedly infringing content and how users may respond if their content is removed or disabled.
        </P>
      </Section>

      <Section title="Reporting Copyright Infringement">
        <P>
          If you believe that content available through Sterling infringes your copyright, you may submit a written notice under the Digital Millennium Copyright Act (&quot;DMCA&quot;) to our designated copyright agent.
        </P>
        <P>Your notice must include:</P>
        <UL items={[
          "A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.",
          "Identification of the copyrighted work claimed to have been infringed.",
          "Identification of the material claimed to be infringing, including enough information for us to locate it.",
          "Your contact information, including your name, mailing address, telephone number, and email address.",
          "A statement that you have a good-faith belief that use of the material is not authorized by the copyright owner, its agent, or the law.",
          "A statement, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on behalf of the copyright owner.",
        ]} />
        <P>Please send DMCA notices to:</P>
        <div style={{ background: "var(--card-bg-04)", border: "1px solid var(--border-08)", borderRadius: 16, padding: "20px 24px", marginTop: 8, marginBottom: 14 }}>
          <p style={{ margin: "0 0 8px", fontWeight: 600, color: "var(--text-primary)" }}>Copyright Agent</p>
          <p style={{ margin: "0 0 4px" }}>JEFGROWZZ LLC</p>
          <p style={{ margin: "0 0 8px" }}>Sterling</p>
          <p style={{ margin: 0 }}>
            Email: <a href="mailto:contact@sterlinghollow.com" style={{ color: "#818CF8" }}>contact@sterlinghollow.com</a>
          </p>
        </div>
      </Section>

      <Section title="Counter-Notification">
        <P>
          If you believe your content was removed or disabled by mistake or misidentification, you may submit a counter-notification.
        </P>
        <P>Your counter-notification must include:</P>
        <UL items={[
          "Your physical or electronic signature.",
          "Identification of the material that was removed or disabled and the location where it appeared before removal.",
          "A statement, made under penalty of perjury, that you have a good-faith belief the material was removed or disabled as a result of mistake or misidentification.",
          "Your name, mailing address, telephone number, and email address.",
          "A statement that you consent to the jurisdiction of the federal district court for the judicial district in which your address is located, or if your address is outside the United States, any judicial district in which JEFGROWZZ LLC may be found.",
          "A statement that you will accept service of process from the person who submitted the original DMCA notice or their agent.",
        ]} />
        <P>Counter-notifications should be sent to the same Copyright Agent listed above.</P>
      </Section>

      <Section title="Repeat Infringers">
        <P>
          We may terminate or restrict accounts of users who repeatedly infringe copyrights or are repeatedly the subject of valid copyright complaints.
        </P>
      </Section>

      <Section title="Removal of Content">
        <P>
          Upon receiving a valid DMCA notice, we may remove or disable access to the allegedly infringing content and notify the user who posted it. If we receive a valid counter-notification, we may restore the removed content unless the original complainant files a court action seeking to restrain the user from engaging in infringing activity.
        </P>
      </Section>

      <Section title="Misrepresentations">
        <P>
          Under the DMCA, any person who knowingly misrepresents that material is infringing, or that material was removed or disabled by mistake or misidentification, may be liable for damages, including costs and attorneys&apos; fees.
        </P>
      </Section>

      <Section title="Contact">
        <P>For questions about this policy, contact JEFGROWZZ LLC:</P>
        <ContactCard />
      </Section>

    </LegalPageShell>
  );
}
