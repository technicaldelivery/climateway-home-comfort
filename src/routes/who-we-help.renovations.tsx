import { createFileRoute } from "@tanstack/react-router";
import { OfferLandingPage } from "@/components/offer-landing-page";

const image = "https://images.unsplash.com/photo-1680965585463-386646047473?fm=jpg&q=85&w=1600&auto=format&fit=crop";
export const Route = createFileRoute("/who-we-help/renovations")({
  head: () => ({ meta: [
    { title: "Climate Design for Renovations — Climateway" }, { name: "description", content: "Integrated heating, cooling and ventilation design for extensions and home renovations." },
    { property: "og:title", content: "Climate Design for Renovations — Climateway" }, { property: "og:description", content: "Bring climate design into your renovation before key decisions are fixed." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/who-we-help/renovations" }] }),
  component: () => <OfferLandingPage eyebrow="Who we help" title="Extensions and renovations" intro={["The best time to plan comfort is while your architect is still shaping the space — not after the build is finished.", "We work alongside your design team so heating, cooling, ventilation and controls become one resolved part of the project."]} image={image} imageAlt="Warm, design-led renovated living room" />,
});