import { createFileRoute } from "@tanstack/react-router";
import { OfferLandingPage } from "@/components/offer-landing-page";

const image = "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?fm=jpg&q=85&w=1600&auto=format&fit=crop";
export const Route = createFileRoute("/who-we-help/families")({
  head: () => ({ meta: [
    { title: "Comfort for Families — Climateway" }, { name: "description", content: "Heating and cooling designed around family life, from calm summer bedrooms to warm winter mornings." },
    { property: "og:title", content: "Comfort for Families — Climateway" }, { property: "og:description", content: "A climate system designed around the people who live in your home." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/who-we-help/families" }] }),
  component: () => <OfferLandingPage eyebrow="Who we help" title="Families with young children" intro={["A comfortable family home works in every season — especially when bedrooms need to stay cool and winter mornings need to feel easy.", "We design heating, cooling, ventilation and controls around your routines, your rooms and the way your family actually lives."]} image={image} imageAlt="Calm, light-filled family living space" />,
});