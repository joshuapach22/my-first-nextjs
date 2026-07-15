import type { Metadata } from "next";
import { LegalPageShell, Section, SubHeading, P, UL, ContactCard } from "../components/legal";

export const metadata: Metadata = {
  title: "Terms of Use - Sterling",
  description: "The Terms of Use governing your access to and use of the Sterling mobile application.",
  alternates: {
    canonical: "/terms",
  },
};

const EFFECTIVE_DATE = "July 15, 2026";
const LAST_UPDATED = "July 15, 2026";

export default function TermsPage() {
  return (
    <LegalPageShell title="Terms of Use" effectiveDate={EFFECTIVE_DATE} lastUpdated={LAST_UPDATED}>

      <Section title="1. Acceptance of Terms">
        <P>
          Welcome to Sterling, operated by JEFGROWZZ LLC (&quot;JEFGROWZZ,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms of Use (&quot;Terms&quot;) govern your access to and use of the Sterling mobile application and related services (collectively, the &quot;App&quot;).
        </P>
        <P>
          By creating an account, accessing, or using the App, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, you may not use the App.
        </P>
        <P>
          Sterling is a community platform for people at every stage of real estate, from studying for a license to active agents, investors, and landlords, to connect, learn, share knowledge, and participate in community discussions.
        </P>
      </Section>

      <Section title="2. Eligibility and Account Responsibilities">
        <SubHeading>2.1 Eligibility</SubHeading>
        <P>
          You must be at least 18 years old and able to form a binding contract to use the App. The App is not intended for children under 13. By using the App, you represent that you meet these requirements.
        </P>

        <SubHeading>2.2 Account Registration</SubHeading>
        <P>
          You agree to provide accurate, current, and complete information when creating your account and profile, including your name, career stage, and contact details. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.
        </P>
        <P>
          Notify us immediately at contact@sterlinghollow.com if you suspect unauthorized access to your account.
        </P>

        <SubHeading>2.3 Respectful Conduct</SubHeading>
        <P>
          You agree to use the App in a respectful manner consistent with community standards. Misrepresenting your identity, credentials, licenses, affiliations, or where you are in your real estate journey is prohibited.
        </P>
      </Section>

      <Section title="3. Community Standards and Acceptable Use">
        <P>Sterling is built on trust and respectful community standards. The following conduct is strictly prohibited:</P>

        <SubHeading>3.1 Harassment, Profanity, and Toxic Behavior</SubHeading>
        <P>
          Profanity, hate speech, bullying, harassment, threats, intimidation, discrimination, or any other toxic or abusive behavior is not tolerated in any part of the App, including feed posts, comments, direct messages, community discussions, area discussions, events, and profiles.
        </P>
        <P>
          Content that is obscene, excessively vulgar, or intended to demean, humiliate, or provoke others may be removed without notice.
        </P>

        <SubHeading>3.2 Unsolicited Promotion</SubHeading>
        <P>
          Businesses, contractors, vendors, and service providers may not advertise, promote, solicit, or market products or services within the App.
        </P>
        <P>This includes, without limitation:</P>
        <UL items={[
          "Unsolicited promotional posts, comments, or direct messages",
          "Repeated self-promotion or spam in feeds or communities",
          "Posting discount codes, referral links, or lead-generation funnels",
          "Using profiles, events, or area discussions primarily as ad space",
          "Mass outreach to members for commercial purposes",
        ]} />
        <P>
          A profile that accurately describes where you are in real estate and your interests is permitted. Sharing relevant experience in response to a genuine question is generally acceptable only when it is honest, non-incentivized, and does not function as advertising or solicitation.
        </P>

        <SubHeading>3.3 Spam, Manipulation, and Misuse</SubHeading>
        <P>You may not:</P>
        <UL items={[
          "Post duplicate, misleading, or artificially inflated content",
          "Manipulate ratings, streaks, leaderboards, or referral counts",
          "Create fake accounts or impersonate another person or organization",
          "Scrape, crawl, or harvest data from the App without authorization",
          "Use automated tools, bots, or scripts to access or interact with the App",
          "Circumvent security, moderation, or access controls",
        ]} />

        <SubHeading>3.4 Illegal and Harmful Content</SubHeading>
        <P>
          You may not use the App to engage in or promote illegal activity, fraud, phishing, malware distribution, or any conduct that could harm Sterling, its users, or the public.
        </P>
      </Section>

      <Section title="4. User Content and Community Features">
        <SubHeading>4.1 Your Content</SubHeading>
        <P>
          You retain ownership of content you submit to the App (&quot;User Content&quot;), including posts, comments, photos, videos, messages, property details, event information, and area discussion contributions.
        </P>
        <P>
          By submitting User Content, you grant JEFGROWZZ LLC a non-exclusive, worldwide, royalty-free license to host, store, display, reproduce, and distribute your User Content solely as needed to operate and improve the App. This license ends when your content is deleted from our systems, except where retention is required by law or for legitimate business purposes such as dispute resolution.
        </P>

        <SubHeading>4.2 Communities and Feeds</SubHeading>
        <P>
          Communities may have additional rules set by community owners and moderators. You agree to follow those rules in addition to these Terms. Community moderators may remove content or restrict members within their communities in accordance with community guidelines and App policies.
        </P>

        <SubHeading>4.3 Direct Messages and Connections</SubHeading>
        <P>
          Direct messages are intended for respectful communication between members. Unsolicited commercial outreach, harassment, or abusive messaging is prohibited and may result in account restrictions.
        </P>

        <SubHeading>4.4 Events</SubHeading>
        <P>
          When you create or RSVP to events, you agree to provide accurate event details and to conduct yourself respectfully at events you organize or attend through the App. Sterling is not responsible for off-platform conduct at physical or virtual gatherings.
        </P>

        <SubHeading>4.5 Area Discussions and Map Features</SubHeading>
        <P>
          Area discussions, star ratings, and map-based opinions reflect community member views only. They are not verified by Sterling and do not constitute official market data, appraisals, investment advice, or neighborhood endorsements.
        </P>
        <P>
          You agree not to post false, defamatory, or deliberately misleading area ratings or location-based claims. Manipulating ratings or coordinating fake reviews is prohibited.
        </P>

        <SubHeading>4.6 Property and Location Content</SubHeading>
        <P>
          Property details, location pins, financial estimates, and other real-estate-related information you share are your responsibility. You represent that you have the right to store and share any content you upload.
        </P>
        <P>
          Map data, market news, and third-party information are provided for convenience and may be incomplete or outdated. Always verify information independently before making decisions.
        </P>

        <SubHeading>4.7 Market News and Analytics</SubHeading>
        <P>
          Market news, charts, ETF analytics, and related content in the App are for general informational purposes only. They do not constitute investment, financial, legal, or tax advice. Past performance does not guarantee future results. Consult qualified professionals before making financial decisions.
        </P>
      </Section>

      <Section title="5. Reporting, Moderation, and Enforcement">
        <P>
          We reserve the right, but are not obligated, to review, monitor, remove, or restrict User Content and accounts that violate these Terms or harm the community.
        </P>
        <P>Members may report posts, users, and area discussions through in-app reporting tools. We may take action including:</P>
        <UL items={[
          "Removing or limiting visibility of content",
          "Issuing warnings",
          "Temporarily suspending account features",
          "Permanently banning accounts",
          "Reporting activity to law enforcement where required",
        ]} />
        <P>
          Enforcement decisions are made at our sole discretion. Repeated or severe violations, including profanity, toxic behavior, and unauthorized commercial advertising, may result in immediate account termination.
        </P>
      </Section>

      <Section title="6. Referrals, Streaks, and Leaderboards">
        <P>
          Referral programs, app streaks, leaderboards, and similar engagement features are subject to these Terms and any additional rules we publish in the App.
        </P>
        <P>
          Gaming, fake referrals, multi-account abuse, or any attempt to manipulate rankings or rewards is prohibited and may result in forfeiture of recognition and account action.
        </P>
      </Section>

      <Section title="7. Intellectual Property">
        <P>
          The App, including its design, branding, software, and original content (excluding User Content), is owned by JEFGROWZZ LLC and protected by intellectual property laws. You may not copy, modify, distribute, sell, or reverse engineer any part of the App without our prior written consent.
        </P>
        <P>
          &quot;Sterling&quot; and related logos are our trademarks. You may not use them without permission.
        </P>
      </Section>

      <Section title="8. Third-Party Services and Links">
        <P>
          The App may integrate with or link to third-party services, including mapping providers, property data sources, news feeds, and external websites. We do not control and are not responsible for third-party content, policies, or practices. Your use of third-party services is at your own risk and subject to their terms.
        </P>
      </Section>

      <Section title="9. Disclaimers">
        <P>
          THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </P>
        <P>JEFGROWZZ LLC does not guarantee:</P>
        <UL items={[
          "Uninterrupted or error-free operation of the App",
          "The accuracy of user-generated content, community opinions, or third-party data",
          "That you will find specific deals, connections, or outcomes through the App",
          "That any member's credentials, experience, or representations are accurate",
        ]} />
        <P>You use the App and rely on information within it at your own risk.</P>
      </Section>

      <Section title="10. Limitation of Liability">
        <P>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, JEFGROWZZ LLC AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AFFILIATES WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, GOODWILL, OR BUSINESS OPPORTUNITIES, ARISING FROM YOUR USE OF THE APP.
        </P>
        <P>
          OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE APP WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US, IF ANY, IN THE TWELVE (12) MONTHS BEFORE THE CLAIM OR (B) ONE HUNDRED U.S. DOLLARS ($100).
        </P>
      </Section>

      <Section title="11. Indemnification">
        <P>
          You agree to indemnify and hold harmless JEFGROWZZ LLC from any claims, damages, losses, and expenses (including reasonable attorneys&apos; fees) arising from your use of the App, your User Content, your violation of these Terms, or your violation of any rights of another person or entity.
        </P>
      </Section>

      <Section title="12. Termination">
        <P>
          You may stop using the App and request account deletion at any time by contacting contact@sterlinghollow.com.
        </P>
        <P>
          We may suspend or terminate your access to the App at any time, with or without notice, for conduct that we believe violates these Terms or is otherwise harmful to JEFGROWZZ LLC, Sterling, or its community.
        </P>
        <P>
          Sections that by their nature should survive termination, including content licenses granted to us, disclaimers, limitation of liability, indemnification, and governing law, will survive.
        </P>
      </Section>

      <Section title="13. Changes to These Terms">
        <P>
          We may update these Terms from time to time. When we do, we will update the &quot;Last Updated&quot; date at the top of this document and, for material changes, provide notice through the App or by email.
        </P>
        <P>
          Your continued use of the App after updated Terms take effect constitutes your acceptance of the revised Terms.
        </P>
      </Section>

      <Section title="14. Governing Law and Disputes">
        <P>
          These Terms are governed by the laws of the United States and the State of Delaware, without regard to conflict-of-law principles, except where mandatory consumer protection laws in your jurisdiction provide otherwise.
        </P>
        <P>
          Before filing a formal legal claim, you agree to contact us at contact@sterlinghollow.com and attempt to resolve the dispute informally.
        </P>
      </Section>

      <Section title="15. Contact Us">
        <P>If you have questions about these Terms or need to report a violation, please contact us:</P>
        <ContactCard />
        <P>
          <span style={{ display: "block", marginTop: 14 }}>
            We will respond to inquiries within a reasonable timeframe.
          </span>
        </P>
      </Section>

    </LegalPageShell>
  );
}
