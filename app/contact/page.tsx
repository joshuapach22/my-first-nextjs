import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact - Sterling",
  description:
    "Get in touch with Sterling. Sign up for early access, ask a question, or reach out directly at Contact@sterlinghollow.com.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
