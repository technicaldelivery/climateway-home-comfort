import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Home, Snowflake } from "lucide-react";
import { Section, Eyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Climate System Pricing — Climateway" },
      { name: "description", content: "Accessible starting points for home cooling, heat pumps and complete whole-home climate systems." },
      { property: "og:title", content: "Climate System Pricing — Climateway" },
      { property: "og:description", content: "Start with cooling, heating or a whole-home system, with grants and fixed pricing at design stage." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const entries = [
  { name: "Cooling", price: "From £2,950", description: "A single room made liveable in summer. Air-to-air, quiet, efficient, grant-eligible.", to: "/pricing/cooling" as const, icon: Snowflake },
  { name: "Heating", price: "From £6,500 after £7,500 BUS grant", description: "Replace an old boiler with a heat pump. Warm, efficient, cheaper to run.", to: "/pricing/heating" as const, icon: Flame, featured: true },
  { name: "Whole home", price: "From £14,500 after grants", description: "Heat, cool, ventilation and controls designed as one system. The full Climateway.", to: "/pricing/whole-home" as const, icon: Home },
];

function PricingPage() {
  return (
    <>
      <Section>
        <Eyebrow>Where to start</Eyebrow>
        <h1 className="max-w-4xl font-display text-5xl font-medium leading-tight md:text-6xl">
          Start with what your home needs today. Grow from there.
        </h1>
        <p className="mt-8 max-w-[60ch] text-lg text-foreground/75">
          We design projects that make sense right now, with the option to build out as your home and life change.
        </p>
      </Section>

      <Section tone="sky">
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {entries.map((entry) => {
            const Icon = entry.icon;
            return (
              <article key={entry.name} className={`flex flex-col border bg-background p-8 ${entry.featured ? "border-primary shadow-lg" : "border-border"}`}>
                <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                <h2 className="mt-6 font-display text-2xl font-medium">{entry.name}</h2>
                <p className="mt-4 font-display text-3xl font-bold leading-tight text-primary">{entry.price}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">Comfort Promise included</p>
                <p className="mt-6 text-base leading-relaxed text-foreground/75">{entry.description}</p>
                <Link to={entry.to} className="mt-auto pt-8 text-sm font-medium text-primary underline-offset-4 hover:underline">See what's included →</Link>
              </article>
            );
          })}
        </div>
        <p className="mt-10 max-w-4xl text-base text-foreground/80">
          Every project qualifies for at least £2,500 in government grants. Most qualify for £7,500-£10,000. Finance available from £75/month.
        </p>
        <Link to="/grants" className="mt-4 inline-flex text-sm text-primary underline underline-offset-4">See exactly which grants apply →</Link>
      </Section>

      <Section>
        <Eyebrow>How pricing works</Eyebrow>
        <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight md:text-5xl">Fixed before you commit.</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {[
            ["01", "Choose a starting point", "Begin with the room or system your home needs now. We will show you how it can fit into a longer-term plan."],
            ["02", "Home Audit", "A qualified assessor measures your home and refines the right scope. The £250 fee is credited against your design fee."],
            ["03", "Design and fixed price", "We create the system design, apply eligible grants and give you one written installation price with no invoice surprises."],
          ].map(([number, title, body]) => (
            <div key={number} className="border-t border-border pt-6">
              <p className="font-display text-3xl text-primary">{number}</p>
              <h3 className="mt-4 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/75">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="teal">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl text-ivory md:text-5xl">See what your home qualifies for.</h2>
          <Button asChild size="lg" className="mt-10 h-14 bg-accent px-7 text-base text-accent-foreground hover:bg-accent/90">
            <Link to="/score">Get your Climate Score <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </Section>
    </>
  );
}