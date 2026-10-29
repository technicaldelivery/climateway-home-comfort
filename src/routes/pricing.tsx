import { coverage, surveyFee, designFee } from "@/lib/site-facts";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";
import { PricingCards } from "@/components/pricing-cards";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { name: "twitter:title", content: "Climateway — Climate-ready homes for British weather — Pricing" },
      { name: "twitter:description", content: "Indicative starting prices for Daikin cooling, Daikin heat pumps and whole-home climate systems, with grants and fixed pricing at design stage." },
      { title: "Climateway — Climate-ready homes for British weather — Pricing" },
      { name: "description", content: "Indicative starting prices for Daikin cooling, Daikin heat pumps and whole-home climate systems, with grants and fixed pricing at design stage." },
      { property: "og:title", content: "Climateway — Climate-ready homes for British weather — Pricing" },
      { property: "og:description", content: "Cooling from £2,200, heating from £5,500 net of grant, whole home from £14,500. No surprises." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://climateway-home-comfort.lovable.app/pricing" }],
  }),
  component: PricingPage,
});

const steps = [
  ["1", "Climate Score", "Free", "Online tool. Two minutes. Returns your home's performance score, projected bill savings, grants you qualify for, and the recommended intervention."],
  ["2", "Home Survey", `£${surveyFee}`, "Our engineer visits your home. Measures, surveys, checks constraints — gas run, flue, condensate, loading, insulation state."],
  ["3", "System Design", `£${designFee.toLocaleString("en-GB")}`, "Full technical design pack: equipment schedule, loading calcs, installation drawings, grant application pack, fixed installation quote. Home Survey fee credits in full against this stage."],
  ["4", "Installation", "", "Fixed price from the Design. Delivered by our accredited partner network — MCS, F-Gas, Gas Safe. Backed by the Comfort Promise."],
];

function PricingPage() {
  return (
    <>
      <Section>
        <Eyebrow>Pricing</Eyebrow>
        <h1 className="max-w-4xl font-display text-5xl font-medium leading-tight md:text-6xl">
          Honest pricing. Grant-smart. No surprises.
        </h1>
      </Section>

      <Section tone="sky">
        <PricingCards />
      </Section>

      <Section>
        <Eyebrow>How we price</Eyebrow>
        <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight md:text-5xl">Four steps. Fixed before you commit.</h2>
        <ol className="mt-12 max-w-3xl space-y-10">
          {steps.map(([n, title, fee, body]) => (
            <li key={n} className="flex gap-6 border-t border-border pt-6">
              <p className="font-display text-3xl text-primary">{n}</p>
              <div>
                <h3 className="font-display text-2xl">
                  {title}
                  {fee && <span className="text-primary"> — {fee}</span>}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/75">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="sky">
        <Eyebrow>Grants</Eyebrow>
        <p className="max-w-4xl text-lg text-foreground/80">
          Every project qualifies for at least £2,500 in government grants. Most qualify for £7,500-£10,000. Finance is available through independent commercial finance partners.
        </p>
        <Link to="/grants" className="mt-4 inline-flex text-sm text-primary underline underline-offset-4">See exactly which grants apply →</Link>
      </Section>

      <Section tone="teal">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl text-ivory md:text-5xl">See what your home qualifies for.</h2>
          <Button asChild size="lg" className="mt-10 h-14 bg-accent px-7 text-base text-accent-foreground hover:bg-accent/90">
            <Link to="/score">Get your Climate Score <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </Section>

      <section className="bg-background px-6 py-12">
        <div className="mx-auto max-w-4xl space-y-4 text-xs leading-relaxed text-muted-foreground">
          <p><strong>Kit specification:</strong> We default to Daikin equipment. Where site requirements, scope or supply availability dictate, we may substitute equivalent premium Japanese brand (Mitsubishi, Panasonic). The specified make and model is always confirmed in your System Design before any order is placed.</p>
          <p><strong>Pricing accuracy:</strong> Prices shown are indicative starting points for typical UK homes in our Phase 1 geography. {coverage} Your final price depends on site survey findings, scope, kit specification and grant eligibility — all confirmed in your fixed-price System Design before installation.</p>
          <p><strong>Grants:</strong> BUS grant amounts are set by DESNZ and subject to eligibility (homeowner, EPC criteria, planning constraints). We handle the full application on your behalf.</p>
        </div>
      </section>
    </>
  );
}
