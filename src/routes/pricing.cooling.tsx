import { createFileRoute } from "@tanstack/react-router";
import { OfferLandingPage } from "@/components/offer-landing-page";

const image = "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?fm=jpg&q=85&w=1600&auto=format&fit=crop";
export const Route = createFileRoute("/pricing/cooling")({
  head: () => ({ meta: [
    { title: "Home Cooling from £2,950 — Climateway" }, { name: "description", content: "Quiet, efficient air-to-air cooling for one room, with Climateway's Comfort Promise included." },
    { property: "og:title", content: "Home Cooling from £2,950 — Climateway" }, { property: "og:description", content: "Make one room liveable in summer with a quiet, efficient cooling system." }, { property: "og:type", content: "product" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/pricing/cooling" }] }),
  component: () => <OfferLandingPage eyebrow="Cooling · From £2,950" title="A cooler room. A better summer." intro={["Start with the bedroom, loft or home office that becomes unbearable when temperatures rise.", "We design and install a quiet air-to-air system, identify the grants available, and include our Comfort Promise from day one."]} image={image} imageAlt="Cool, calm living space with soft natural light" />,
});