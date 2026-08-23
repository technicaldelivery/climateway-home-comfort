import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, X } from "lucide-react";
import { Section, Eyebrow } from "@/components/section";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Climateway" },
      {
        name: "description",
        content:
          "Fixed-price climate systems for British homes. Three tiers, full inclusions, grants and finance options.",
      },
      { property: "og:title", content: "Pricing — Climateway" },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Climate Ready",
    price: "From £18,000",
    target: "For homes under 100m².",
    timeline: "6–10 weeks on site.",
    includes: [
      "Heating system upgrade (heat pump or high-efficiency boiler)",
      "Smart controls and zoned thermostats",
      "Targeted cooling in 1–2 rooms",
      "Loft insulation top-up to current standard",
      "Draught-proofing and basic fabric works",
      "Twelve-month performance monitoring",
    ],
    excludes: [
      "Whole-home MVHR",
      "External wall insulation",
      "Window replacement",
    ],
  },
  {
    name: "Climate Complete",
    price: "From £32,000",
    target: "For homes 100–200m². Our most popular package.",
    timeline: "8–12 weeks on site.",
    includes: [
      "Full heating system (heat pump + low-temp emitters)",
      "Whole-home cooling distribution",
      "MVHR (mechanical ventilation with heat recovery)",
      "Whole-home smart controls",
      "Full fabric works — insulation, draught-proofing, glazing review",
      "Comfort Promise included",
    ],
    excludes: [
      "Triple-glazed window replacement (priced separately)",
      "Solar PV and battery (priced separately)",
    ],
  },
  {
    name: "Climate Estate",
    price: "From £55,000",
    target: "For larger homes and listed properties.",
    timeline: "12–20 weeks on site.",
    includes: [
      "Bespoke whole-house specification",
      "Multi-zone heating and cooling",
      "Heritage-sensitive insulation strategy",
      "Conservation officer liaison",
      "Solar PV and battery integration",
      "Dedicated project director",
    ],
    excludes: [],
  },
];

function PricingPage() {
  return (
    <>
      <Section>
        <Eyebrow>Pricing</Eyebrow>
        <h1 className="max-w-3xl font-display text-5xl leading-tight md:text-6xl">
          Fixed prices. No surprises.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/75">
          Every Climateway project is quoted as one fixed price after the home
          audit and design stage. These starting prices reflect typical
          projects after grants are applied — most homeowners qualify for
          £8,000–£15,000 in support.
        </p>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className="flex flex-col border-t-2 border-primary pt-8"
            >
              <h2 className="font-display text-2xl">{t.name}</h2>
              <p className="mt-3 font-display text-4xl text-primary">{t.price}</p>
              <p className="mt-4 text-sm text-foreground/75">{t.target}</p>
              <p className="mt-1 text-sm text-foreground/55">{t.timeline}</p>

              <p className="mt-8 text-xs uppercase tracking-[0.16em] text-foreground/55">
                Included
              </p>
              <ul className="mt-3 space-y-2.5 text-sm">
                {t.includes.map((i) => (
                  <li key={i} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {i}
                  </li>
                ))}
              </ul>

              {t.excludes.length > 0 && (
                <>
                  <p className="mt-8 text-xs uppercase tracking-[0.16em] text-foreground/55">
                    Not included
                  </p>
                  <ul className="mt-3 space-y-2.5 text-sm text-foreground/65">
                    {t.excludes.map((e) => (
                      <li key={e} className="flex gap-2">
                        <X className="mt-0.5 h-4 w-4 shrink-0" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section tone="sky">
        <Eyebrow>Grants &amp; Finance</Eyebrow>
        <h2 className="font-display text-4xl">
          Honest numbers on what you'll actually receive.
        </h2>
        <div className="mt-8 max-w-[65ch] space-y-5 text-base text-foreground/80">
          <p>
            Most homeowners qualify for £7,500 toward heat pump installation
            through the Boiler Upgrade Scheme, plus £2,500 for air-to-air heat
            pumps where eligible. Lower-income households may qualify for
            additional support through the Warm Homes Plan. Most Climateway
            projects see total grant support of £7,500 to £10,000.
          </p>
          <p>
            Finance available from £180/month through our independent
            commercial finance partners. Spread the cost
            over 3–10 years. Subject to status. Representative APR 9.9%.
          </p>
        </div>
        <Link
          to="/grants"
          className="mt-6 inline-flex items-center gap-1 text-sm text-foreground underline underline-offset-4 hover:text-primary"
        >
          See exactly which grants apply to you →
        </Link>
      </Section>

      <Section tone="teal">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl text-ivory md:text-5xl">
            See what your home qualifies for.
          </h2>
          <Link
            to="/score"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 text-base font-medium text-accent-foreground hover:opacity-90"
          >
            Get your Climate Score
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
