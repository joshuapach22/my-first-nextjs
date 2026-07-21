import { pageMetadata } from "../lib/seo";
import { LegalPageShell, Section, P, UL, ContactCard } from "../components/legal";

export const metadata = pageMetadata({
  title: "Community Guidelines - Sterling",
  description: "The Community Guidelines that keep Sterling a safe, respectful, and useful community for everyone in real estate.",
  path: "/guidelines",
});

const EFFECTIVE_DATE = "July 15, 2026";
const LAST_UPDATED = "July 15, 2026";

export default function GuidelinesPage() {
  return (
    <LegalPageShell title="Community Guidelines" effectiveDate={EFFECTIVE_DATE} lastUpdated={LAST_UPDATED}>

      <Section title="Overview">
        <P>
          Sterling, operated by JEFGROWZZ LLC, is intended to be a safe, respectful, and useful community. These guidelines apply to all users and to all content and activity in the app, including profiles, usernames, posts, comments, discussions, messages, images, videos, links, communities, and events.
        </P>
        <P>By using the app, you agree to follow these guidelines.</P>
      </Section>

      <Section title="1. No Threats or Violence">
        <P>Do not:</P>
        <UL items={[
          "Threaten, encourage, praise, plan, or depict credible violence against any person, group, animal, or property.",
          "Promote terrorism, violent extremism, organized violence, or criminal organizations.",
          "Share instructions intended to help someone cause physical harm.",
          "Glorify severe injury, abuse, death, or graphic violence.",
          "Encourage suicide, self-harm, or dangerous challenges.",
        ]} />
        <P>
          Content discussing violence for legitimate educational, documentary, news, or safety purposes may still be restricted if it is graphic, exploitative, or likely to cause harm.
        </P>
        <P>
          If we believe there is a credible and immediate threat, we may contact emergency services or law enforcement.
        </P>
      </Section>

      <Section title="2. No Nudity or Sexual Content">
        <P>Do not post, send, request, or link to:</P>
        <UL items={[
          "Nudity, pornography, sexually explicit material, or sexual activity.",
          "Sexually suggestive or inappropriate images, videos, messages, or comments.",
          "Sexual solicitation, sexual services, or content intended for sexual gratification.",
          "Intimate content shared without the depicted person's consent.",
          "Any sexual content involving, depicting, targeting, or exploiting a minor.",
        ]} />
        <P>
          Sexual exploitation of minors is strictly prohibited and may be reported to the appropriate authorities.
        </P>
      </Section>

      <Section title="3. No Inappropriate or Harmful Content">
        <P>
          Do not share content that is obscene, excessively graphic, abusive, exploitative, dangerous, or otherwise inappropriate for the community. This includes content that promotes illegal activity, animal cruelty, self-harm, dangerous behavior, or the sale of illegal or regulated goods.
        </P>
      </Section>

      <Section title="4. No Harassment, Bullying, or Hateful Conduct">
        <P>Do not:</P>
        <UL items={[
          "Harass, bully, intimidate, stalk, shame, or repeatedly target another person.",
          "Attack or demean people based on race, ethnicity, nationality, religion, sex, gender, gender identity, sexual orientation, disability, age, or another protected characteristic.",
          "Use slurs or promote hatred, discrimination, exclusion, or dehumanization.",
          "Encourage others to abuse, threaten, or harass someone.",
          "Share another person's private or identifying information without permission.",
        ]} />
        <P>Disagreement is allowed, but personal attacks and abusive conduct are not.</P>
      </Section>

      <Section title="5. No Marketing or Promotion of Vendor Services">
        <P>The app may not be used to market, advertise, solicit, promote, or sell vendor or commercial services.</P>
        <P>Prohibited activity includes:</P>
        <UL items={[
          "Advertising a business, contractor, supplier, professional service, or paid offering.",
          "Posting prices, promotions, discount codes, referral codes, sales links, lead-generation forms, or calls to purchase a service.",
          "Soliciting customers or contacting users for commercial purposes.",
          "Repeatedly recommending a vendor when the recommendation is paid, incentivized, affiliated, or intended to generate business.",
          "Using profiles, posts, comments, discussions, communities, or direct messages as commercial marketing channels.",
          "Creating fake recommendations, reviews, or endorsements.",
        ]} />
        <P>
          This restriction applies to vendors, their employees, representatives, affiliates, marketers, and users promoting services on their behalf. An honest, non-incentivized discussion of a personal experience may be allowed, but it must not function as an advertisement or solicitation.
        </P>
        <P>
          JEFGROWZZ LLC may remove commercial content and suspend or terminate accounts used to market vendor services.
        </P>
      </Section>

      <Section title="6. No Spam, Scams, or Deceptive Activity">
        <P>Do not:</P>
        <UL items={[
          "Post repetitive, irrelevant, or unsolicited content or messages.",
          "Impersonate another person, organization, or app representative.",
          "Engage in fraud, phishing, manipulation, or attempts to obtain money, credentials, or personal information deceptively.",
          "Artificially manipulate engagement, votes, reviews, followers, or other app activity.",
          "Use bots, unauthorized automation, or coordinated accounts to disrupt the community.",
        ]} />
      </Section>

      <Section title="7. Respect Privacy and Consent">
        <P>
          Do not share another person's private information, confidential communications, precise location, financial information, medical information, or private images without authorization. Do not record, photograph, or distribute content involving another person where doing so violates their privacy or consent.
        </P>
      </Section>

      <Section title="8. Follow the Law and Respect Others' Rights">
        <P>
          Do not use the app to commit, facilitate, or promote unlawful activity. Only share content you have the right to use. Copyright infringement may be reported under our DMCA / Copyright Infringement Policy.
        </P>
      </Section>

      <Section title="9. Reporting Violations">
        <P>
          If you see content or conduct that may violate these guidelines, use the app&apos;s reporting tools or contact us at contact@sterlinghollow.com.
        </P>
        <P>For an immediate emergency or threat of harm, contact local emergency services first.</P>
        <P>Do not misuse the reporting system or knowingly submit false reports.</P>
      </Section>

      <Section title="10. Enforcement">
        <P>
          We may review and investigate reported or detected activity. Depending on the circumstances, we may:
        </P>
        <UL items={[
          "Remove or limit access to content.",
          "Issue a warning.",
          "Restrict features or account visibility.",
          "Temporarily suspend or permanently terminate an account.",
          "Preserve relevant information.",
          "Notify affected users.",
          "Report conduct to law enforcement or other appropriate authorities when required or reasonably necessary.",
        ]} />
        <P>
          We may consider the severity of the violation, context, intent, potential harm, and prior violations. Serious conduct may result in immediate account termination without a prior warning.
        </P>
        <P>
          Attempts to evade enforcement, including creating another account after suspension or termination, are prohibited.
        </P>
      </Section>

      <Section title="11. Changes to These Guidelines">
        <P>
          We may update these guidelines to address new risks, features, laws, or community needs. The effective date above will identify the latest version.
        </P>
      </Section>

      <Section title="Contact">
        <P>Questions about these guidelines may be sent to JEFGROWZZ LLC:</P>
        <ContactCard />
      </Section>

    </LegalPageShell>
  );
}
