import { Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Home, Snowflake } from "lucide-react";

export const pricingEntries = [
  {
    name: "Cooling",
    price: "From £2,200",
    sub: "Single-room Daikin air-to-air",
    qualifier: "Grant-eligible from April 2026 (£2,500 BUS)",
    body: "Beat the next heatwave. A silent Daikin split in the room you can't sleep in — installed in a day, grant-eligible.",
    icon: Snowflake,
  },
  {
    name: "Heating",
    price: "From £5,500",
    sub: "Daikin heat pump",
    qualifier: "Net of £7,500 BUS grant",
    body: "Replace a tired gas boiler with a Daikin heat pump. Lower bills, lower carbon, same comfort — grant takes most of the sticker off.",
    icon: Flame,
    featured: true,
  },
  {
    name: "Whole home",
    price: "From £14,500",
    sub: "Integrated system",
    qualifier: "Net of grants, subject to scope and eligibility",
    body: "Heating, cooling, ventilation and controls designed as one system — not four. Project-managed end-to-end with the Comfort Promise behind it.",
    icon: Home,
  },
];

export function PricingCards() {
  return (
    <>
      <div className="grid items-stretch gap-6 md:grid-cols-3">
        {pricingEntries.map((e) => {
          const Icon = e.icon;
          return (
            <article
              key={e.name}
              className={`flex flex-col border bg-background p-8 text-foreground ${e.featured ? "border-primary shadow-lg" : "border-border"}`}
            >
              <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-2xl font-medium">{e.name}</h3>
              <p className="mt-4 font-display text-4xl font-bold leading-tight text-primary">{e.price}</p>
              <p className="mt-2 text-base text-muted-foreground">{e.sub}</p>
              <p className="mt-1 text-xs text-muted-foreground">{e.qualifier}</p>
              <p className="mt-6 text-base leading-relaxed text-foreground/75">{e.body}</p>
              <Link
                to="/score"
                className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Get my Climate Score <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          );
        })}
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        Prices are indicative starting points. Your Climate Score gives a tailored estimate in under two minutes.
      </p>
    </>
  );
}
