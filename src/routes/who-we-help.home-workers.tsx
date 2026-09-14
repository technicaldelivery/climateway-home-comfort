import { createFileRoute } from "@tanstack/react-router";
import { OfferLandingPage } from "@/components/offer-landing-page";

const image = "https://images.unsplash.com/photo-1714153760214-5e86aa688fc3?fm=jpg&q=85&w=1600&auto=format&fit=crop";
export const Route = createFileRoute("/who-we-help/home-workers")({
  head: () => ({ meta: [
    { title: "Comfort for Home Workers — Climateway" }, { name: "description", content: "Quiet, efficient room comfort for home offices, studios and creative spaces." },
    { property: "og:title", content: "Comfort for Home Workers — Climateway" }, { property: "og:description", content: "Make the room you work in work better in every season." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/who-we-help/home-workers" }] }),
  component: () => <OfferLandingPage eyebrow="Who we help" title="Homeworkers and creators" intro={["Your office, studio or treatment room should stay comfortable while the weather changes outside.", "We can start with one quiet, efficient room solution or design it as the first step in a wider plan for your home."]} image={image} imageAlt="Calm room with warm sunlight through a window" />,
});