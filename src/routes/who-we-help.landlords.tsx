import { createFileRoute } from "@tanstack/react-router";
import { OfferLandingPage } from "@/components/offer-landing-page";

const image = "https://images.unsplash.com/photo-1712869965218-3128c2eef88c?fm=jpg&q=85&w=1600&auto=format&fit=crop";
export const Route = createFileRoute("/who-we-help/landlords")({
  head: () => ({ meta: [
    { title: "Climate Systems for Landlords — Climateway" }, { name: "description", content: "Planned climate upgrades for rental homes and property portfolios." },
    { property: "og:title", content: "Climate Systems for Landlords — Climateway" }, { property: "og:description", content: "A practical path to more efficient, comfortable rental homes." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/who-we-help/landlords" }] }),
  component: () => <OfferLandingPage eyebrow="Who we help" title="Landlords and portfolios" intro={["Improving comfort and energy performance protects an asset while making a home better for the people renting it.", "We help landlords plan upgrades in the right sequence, identify grants and manage installation through one accountable team."]} image={image} imageAlt="Traditional British homes suited to a planned climate upgrade" />,
});