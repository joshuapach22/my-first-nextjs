import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Sterling - The Social Network for Real Estate People",
  description:
    "Sterling is the real estate networking app. Connect with agents, brokers, and investors, share listings and insights, find events on the map, and learn from people who've done it before.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <HomeClient />;
}
