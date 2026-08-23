import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/section";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/guarantees")({
  head: () => ({
    meta: [
      { title: "Climateway Cover — Three layers of protection" },
      {
        name: "description",
        content:
          "Honest cover, not marketing cover. Manufacturer warranty, 6-year workmanship guarantee, and an insurance-backed guarantee on every Climateway installation.",
      },
      {
        property: "og:title",
        content: "Climateway Cover — Three layers of protection",
      },
      {
        property: "og:description",
        content:
          "Manufacturer warranty, 6-year workmanship guarantee, and an insurance-backed guarantee on every Climateway installation.",
      },
    ],
    links: [{ rel: "canonical", href: "/guarantees" }],
  }),
  component: GuaranteesPage,
});

function GuaranteesPage() {
  return (
    <>
      <Section>
        <Eyebrow>
          <span style={{ color: "#0E4F4A" }}>Climateway Cover</span>
        </Eyebrow>
        <h1 className="max-w-3xl font-display text-5xl leading-tight md:text-6xl">
          Three layers of protection on every installation.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/75">
          Honest cover, not marketing cover. Here's exactly what's
          protected, how, and for how long.
        </p>
      </Section>

      <Section>
        <Eyebrow>
          <span style={{ color: "#0E4F4A" }}>Layer 1 — Product</span>
        </Eyebrow>
        <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
          Your equipment, covered by the maker.
        </h2>
        <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-foreground/80">
          Every heat pump, cooling unit and major component we install
          carries a manufacturer warranty of 5 to 10 years depending on the
          model. This covers defects in the equipment itself. We choose
          manufacturers whose warranties and UK service networks we trust —
          Mitsubishi, Daikin, Vaillant, Samsung. Your design specification
          sets out the exact warranty on each component before you commit.
        </p>
      </Section>

      <section
        className="px-6 py-20 md:py-28"
        style={{ backgroundColor: "#B8D4E0" }}
      >
        <div className="mx-auto max-w-7xl">
          <Eyebrow>
            <span style={{ color: "#0E4F4A" }}>Layer 2 — Workmanship</span>
          </Eyebrow>
          <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            The installation itself, covered for 6 years.
          </h2>
          <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-foreground/80">
            Every Climateway installation carries a 6-year workmanship
            guarantee, exceeding the MCS minimum. This covers anything that
            fails because of how it was fitted — pipework, electrical work,
            commissioning, system integration. If anything goes wrong
            because of our installation, we come back and fix it at no cost
            to you.
          </p>
        </div>
      </section>

      <Section>
        <Eyebrow>
          <span style={{ color: "#0E4F4A" }}>Layer 3 — Insurance-backed</span>
        </Eyebrow>
        <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
          Protection even if we're no longer here.
        </h2>
        <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-foreground/80">
          Our 6-year workmanship guarantee is underwritten by an independent
          insurer through a TrustMark-approved IBG provider. If Climateway
          ceases trading during the guarantee period, the insurer steps in
          to cover any workmanship issues. Your installation is protected
          even in the unlikely event we are not.
        </p>
      </Section>

      <Section tone="teal">
        <Eyebrow>Comfort Promise</Eyebrow>
        <h2 className="max-w-3xl font-display text-4xl leading-tight text-ivory md:text-5xl">
          On top of the cover, our Comfort Promise.
        </h2>
        <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-ivory/85">
          For every project we deliver, we agree the comfort temperatures
          your home will reach in winter and summer. We design the system to
          meet those temperatures. If it doesn't, we come back at our cost
          until it does. This is in addition to the three-layer Climateway
          Cover.
        </p>
      </Section>

      <Section>
        <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
          Questions about how it all fits together?
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            to="/score"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 text-base font-medium text-accent-foreground hover:opacity-90"
          >
            Start with your Climate Score
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="text-base text-foreground underline underline-offset-4 hover:opacity-80"
          >
            Talk to us directly
          </Link>
        </div>
      </Section>
    </>
  );
}
