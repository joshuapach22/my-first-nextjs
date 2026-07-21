import { pageMetadata } from "../lib/seo";
import AboutClient from "./AboutClient";

export const metadata = pageMetadata({
  title: "About - Sterling",
  description:
    "See what Sterling offers: connect with agents, brokers, and investors, share wins and questions in the feed, find deal flow on the map, and get answers from real estate people who've done it.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutClient />;
}
