import { createFileRoute } from "@tanstack/react-router";
import { OfferLandingPage } from "@/components/offer-landing-page";

const image = "https://images.unsplash.com/photo-1707308029017-1f5ce047706c?fm=jpg&q=85&w=1600&auto=format&fit=crop";
export const Route = createFileRoute("/who-we-help/period-homes")({
  head: () => ({ meta: [
    { title: "Climate Systems for Period Homes — Climateway" }, { name: "description", content: "Sensitive heating, cooling and ventilation for Victorian, Edwardian, Georgian and 1930s homes." },
    { property: "og:title", content: "Climate Systems for Period Homes — Climateway" }, { property: "og:description", content: "Adapt a period home for today's climate without losing its character." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/who-we-help/period-homes" }] }),
  component: () => <OfferLandingPage eyebrow="Who we help" title="Period property owners" intro={["Victorian, Edwardian, Georgian and 1930s homes were built beautifully — but not for the climate Britain has now.", "We design discreet, fabric-aware systems that improve comfort while respecting the details and proportions that make your home special."]} image={image} imageAlt="London street lined with period brick homes" />,
});