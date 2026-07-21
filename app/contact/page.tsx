import { pageMetadata } from "../lib/seo";
import ContactClient from "./ContactClient";

export const metadata = pageMetadata({
  title: "Contact - Sterling",
  description:
    "Get in touch with Sterling. Sign up for early access, ask a question, or reach out directly at Contact@sterlinghollow.com.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactClient />;
}
