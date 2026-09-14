import { createFileRoute } from "@tanstack/react-router";
import { OfferLandingPage } from "@/components/offer-landing-page";

const image = "https://images.unsplash.com/photo-1759238136854-a43787126db7?fm=jpg&q=85&w=1600&auto=format&fit=crop";
export const Route = createFileRoute("/who-we-help/forever-homes")({
  head: () => ({ meta: [
    { title: "Climate-Ready Forever Homes — Climateway" }, { name: "description", content: "Long-term comfort systems for downsizers and homeowners planning to stay for decades." },
    { property: "og:title", content: "Climate-Ready Forever Homes — Climateway" }, { property: "og:description", content: "Design your home to remain comfortable, efficient and simple for decades." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/who-we-help/forever-homes" }] }),
  component: () => <OfferLandingPage eyebrow="Who we help" title="Downsizers and forever-homes" intro={["A home you plan to keep should stay comfortable, efficient and straightforward as your needs change.", "We design for dependable year-round comfort now, with sensible choices that continue to work for decades."]} image={image} imageAlt="Comfortable modern living room with fireplace" />,
});