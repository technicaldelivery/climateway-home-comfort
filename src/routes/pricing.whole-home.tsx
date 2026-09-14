import { createFileRoute } from "@tanstack/react-router";
import { OfferLandingPage } from "@/components/offer-landing-page";

const image = "https://images.unsplash.com/photo-1680965585463-386646047473?fm=jpg&q=85&w=1600&auto=format&fit=crop";
export const Route = createFileRoute("/pricing/whole-home")({
  head: () => ({ meta: [
    { title: "Whole-Home Climate Systems — Climateway" }, { name: "description", content: "Heating, cooling, ventilation and controls designed as one system, from £14,500 after grants." },
    { property: "og:title", content: "Whole-Home Climate Systems — Climateway" }, { property: "og:description", content: "The full Climateway: one integrated system for comfort in every season." }, { property: "og:type", content: "product" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/pricing/whole-home" }] }),
  component: () => <OfferLandingPage eyebrow="Whole home · From £14,500 after grants" title="One home. One climate system." intro={["Heating, cooling, ventilation and controls work better when they are designed together, around the fabric and character of your home.", "We create the plan, identify every grant, coordinate our partner network and stand behind the result with the Comfort Promise."]} image={image} imageAlt="Comfortable design-led living room suited to a whole-home climate system" />,
});