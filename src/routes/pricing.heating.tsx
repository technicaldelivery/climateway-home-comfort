import { createFileRoute } from "@tanstack/react-router";
import { OfferLandingPage } from "@/components/offer-landing-page";

const image = "https://images.unsplash.com/photo-1776860150305-108ed577d7d4?fm=jpg&q=85&w=1600&auto=format&fit=crop";
export const Route = createFileRoute("/pricing/heating")({
  head: () => ({ meta: [
    { title: "Heat Pumps — Climateway" }, { name: "description", content: "Replace an old boiler with a Daikin heat pump designed for your home, with the £7,500 BUS grant managed for you." },
    { property: "og:title", content: "Heat Pumps — Climateway" }, { property: "og:description", content: "Warm, efficient heat-pump systems with grant support managed for you." }, { property: "og:type", content: "product" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/pricing/heating" }] }),
  component: () => <OfferLandingPage eyebrow="Heating" title="Modern heating, designed around your home." intro={["Replace an ageing boiler with a warm, efficient Daikin heat pump designed for your property rather than chosen from a standard package.", "We handle the £7,500 Boiler Upgrade Scheme application and give you a fixed installation price at design stage."]} image={image} imageAlt="Modern heat pump installed beside a brick home" />,
});