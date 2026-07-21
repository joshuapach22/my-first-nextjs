import { pageMetadata } from "../lib/seo";
import ProductClient from "./ProductClient";

export const metadata = pageMetadata({
  title: "Product - Sterling",
  description:
    "See how Sterling works: show up, learn from people who've done it, rank up, and find your next move. Your journey starts here, from your first question to your next deal.",
  path: "/product",
});

export default function ProductPage() {
  return <ProductClient />;
}
