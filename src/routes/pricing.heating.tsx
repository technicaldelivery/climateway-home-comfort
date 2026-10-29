import { createFileRoute } from "@tanstack/react-router";
import heatPumpExterior from "@/assets/heat-pump-exterior.jpg";
import { OfferLandingPage } from "@/components/offer-landing-page";

const image = heatPumpExterior;
export const Route = createFileRoute("/pricing/heating")({
  head: () => ({ meta: [
      { name: "twitter:title", content: "Climateway — Climate-ready homes for British weather — Heating" },
      { name: "twitter:description", content: "Replace an old boiler with a Daikin heat pump designed for your home, with the £7,500 BUS grant managed for you." },
    { title: "Climateway — Climate-ready homes for British weather — Heating" }, { name: "description", content: "Replace an old boiler with a Daikin heat pump designed for your home, with the £7,500 BUS grant managed for you." },
    { property: "og:title", content: "Climateway — Climate-ready homes for British weather — Heating" }, { property: "og:description", content: "Warm, efficient heat-pump systems with grant support managed for you." }, { property: "og:type", content: "product" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "https://climateway-home-comfort.lovable.app/pricing/heating" }] }),
  component: () => <OfferLandingPage eyebrow="Heating" title="Modern heating, designed around your home." intro={["Replace an ageing boiler with a warm, efficient Daikin heat pump designed for your property rather than chosen from a standard package.", "We handle the £7,500 Boiler Upgrade Scheme application and give you a fixed installation price at design stage."]} image={image} imageAlt="Modern heat pump installed beside a brick home" />,
});