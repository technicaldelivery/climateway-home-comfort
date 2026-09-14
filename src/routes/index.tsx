import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CirclePoundSterling,
  Flame,
  Home,
  HouseHeart,
  KeyRound,
  Landmark,
  Laptop,
  Leaf,
  Ruler,
  Shield,
  Sun,
  Snowflake,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { Section, Eyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";

const heroHome =
  "https://images.unsplash.com/photo-1759238136854-a43787126db7?fm=jpg&q=85&w=2400&auto=format&fit=crop";
const heroHomeAlt =
  "Modern living room with fireplace and contemporary minimalist decor";
const imgHeatPump =
  "https://images.unsplash.com/photo-1776860150305-108ed577d7d4?fm=jpg&q=85&w=1600&auto=format&fit=crop";
const imgHeatPumpAlt =
  "Modern heat pump installed against a brick house exterior";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Climateway — Climate-ready homes for British weather" },
      {
        name: "description",
        content:
          "Heating, cooling, ventilation and controls — designed and installed as one managed project. Warm in winter. Cool in summer. Lower bills, all year.",
      },
      { property: "og:title", content: "Climateway — Climate-ready homes" },
      {
        property: "og:description",
        content: "Warm in winter. Cool in summer. Lower bills, all year.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Problem />
      <Solution />
      <WhoWeHelp />
      <ScoreTeaser />
      <GrantsUpdate />
      <Process />
      <Pricing />
      <WhyClimateway />
      <FAQ />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-background px-6 pt-16 pb-24 md:min-h-[calc(100dvh-80px)] md:pt-28 md:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p
            className="mb-8 text-xs font-medium uppercase"
            style={{ color: "#0E4F4A", letterSpacing: "0.1em" }}
          >
            Whole-home climate adaptation
          </p>
          <h1
            className="font-display font-medium tracking-tight"
            style={{
              fontSize: "clamp(48px, 9vw, 96px)",
              lineHeight: 1.02,
            }}
          >
            Warm winters. Cool summers. Lower bills.
          </h1>
          <p className="mt-10 max-w-[60ch] text-lg font-normal text-foreground/75 md:text-xl">
            We design climate systems for British homes — heating, cooling,
            ventilation, controls. From a single AC unit to a whole-home
            installation. One team. One promise.
          </p>
          <div className="mt-12 flex flex-wrap items-start gap-x-8 gap-y-6">
            <div className="flex flex-col items-start">
              <Link
                to="/score"
                className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#D97942" }}
              >
                Get your free Climate Score
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p
                className="mt-3 text-sm font-normal"
                style={{ color: "#6B7280" }}
              >
                60 seconds. No commitment.
              </p>
            </div>
            <a
              href="#solution"
              className="inline-flex items-center gap-1.5 pt-3 text-base underline-offset-4 hover:underline"
              style={{ color: "#0E4F4A" }}
            >
              See how it works
              <ChevronDown className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroHome}
            alt={heroHomeAlt}
            width={1600}
            height={1280}
            className="aspect-[4/5] w-full rounded-md object-cover shadow-[0_20px_60px_-20px_rgb(31_41_55_/_0.25)] md:aspect-[5/6]"
          />
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const stats = [
    {
      n: "40°C",
      body: "UK summer temperatures are now regularly exceeding levels British homes were never designed for.",
    },
    {
      n: "19 million",
      body: "UK homes rated EPC D or worse — leaking heat in winter, overheating in summer.",
    },
    {
      n: "£2,400+",
      body: "Typical annual energy bill for a UK family home rated EPC D or below, based on current Ofgem price-cap data.",
    },
  ];
  return (
    <Section tone="teal">
      <h2 className="font-display text-4xl leading-tight text-ivory md:max-w-3xl md:text-5xl">
        Your home wasn't built for this climate.
      </h2>
      <div className="mt-16 grid gap-12 border-t border-ivory/20 pt-12 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.n}>
            <p className="font-display text-6xl text-ivory md:text-7xl">{s.n}</p>
            <p className="mt-6 text-base text-ivory/80">{s.body}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 text-[12px] italic text-ivory/60">
        Energy bill figures based on Ofgem price-cap data (Q1 2026) for a typical 3-bedroom gas-heated family home rated EPC D. Your bill will vary. Get your Climate Score for a home-specific estimate.
      </p>
    </Section>
  );
}

function Solution() {
  const features = [
    {
      title: "Whole-home design",
      body: "We assess your house as a system — fabric, heating, cooling, ventilation, controls — not as a list of separate measures. Every recommendation is engineered against the others.",
      icon: (
        <Home className="h-9 w-9" style={{ color: "#0E4F4A" }} strokeWidth={1.5} />
      ),
    },
    {
      title: "Year-round comfort",
      body: "Engineered for warm winters and cool summers. Most retrofit projects only solve half the problem. We solve both.",
      icon: (
        <div className="flex items-center gap-1" style={{ color: "#0E4F4A" }}>
          <Sun className="h-9 w-9" strokeWidth={1.5} />
          <Snowflake className="h-7 w-7" strokeWidth={1.5} />
        </div>
      ),
    },
    {
      title: "Comfort, guaranteed",
      body: "We design every system to deliver agreed comfort temperatures in both seasons. If our installation doesn't hit those temperatures, we come back at our cost until it does. No other UK climate company offers this.",
      icon: (
        <ShieldCheck className="h-9 w-9" style={{ color: "#0E4F4A" }} strokeWidth={1.5} />
      ),
    },
  ];
  return (
    <Section id="solution">
      <Eyebrow>How Climateway works</Eyebrow>
      <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
        One designed system. Built for every season.
      </h2>
      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`pt-8 md:pt-0 md:px-8 ${
              i > 0 ? "border-t border-hairline md:border-t-0 md:border-l" : ""
            } first:md:pl-0 last:md:pr-0`}
          >
            {f.icon}
            <h3 className="mt-6 font-display text-[28px] leading-tight">
              {f.title}
            </h3>
            <p className="mt-4 text-[17px] leading-relaxed text-foreground/75">
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const audiences = [
  {
    title: "Families with young children",
    body: "A cool bedroom transforms summer sleep. A warm home transforms winter mornings.",
    quote: '“Nobody else even mentioned cooling. Now the kids actually sleep in July.” — James, Sevenoaks',
    to: "/who-we-help/families" as const,
    icon: HouseHeart,
  },
  {
    title: "Period property owners",
    body: "Victorian, Edwardian, Georgian and 1930s homes weren't built for this climate. We adapt them without losing what makes them beautiful.",
    quote: '“Climateway looked at our whole home rather than selling us a boiler.” — Sarah, Wandsworth',
    to: "/who-we-help/period-homes" as const,
    icon: Landmark,
  },
  {
    title: "Homeworkers and creators",
    body: "The room you work in should work with you. Whatever the weather's doing outside.",
    to: "/who-we-help/home-workers" as const,
    icon: Laptop,
  },
  {
    title: "Extensions and renovations",
    body: "We work directly with your architect so climate design isn't what gets value-engineered out.",
    quote: '“Felt like working with our architect, not a trade.” — Priya, Wimbledon',
    to: "/who-we-help/renovations" as const,
    icon: Ruler,
  },
  {
    title: "Downsizers and forever-homes",
    body: "The home you plan to stay in should be the home you love in every season, for decades.",
    to: "/who-we-help/forever-homes" as const,
    icon: KeyRound,
  },
  {
    title: "Landlords and portfolios",
    body: "EPC C compliance by 2030 is real. So is the premium tenants pay for a comfortable home.",
    to: "/who-we-help/landlords" as const,
    icon: Building2,
  },
];

function WhoWeHelp() {
  return (
    <Section>
      <div className="text-center">
        <Eyebrow>Who we help</Eyebrow>
        <h2 className="mx-auto max-w-4xl font-display text-4xl font-medium leading-tight md:text-5xl">
          Different homes. Different lives. One system for each.
        </h2>
        <p className="mx-auto mt-6 max-w-[60ch] text-[17px] text-foreground/75">
          Every home has different pressure points. We design around the people who actually live in yours.
        </p>
      </div>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {audiences.map((audience) => {
          const Icon = audience.icon;
          return (
            <Link
              key={audience.title}
              to={audience.to}
              className="flex min-h-72 flex-col border border-border bg-background p-7 transition duration-300 hover:-translate-y-1 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-2xl font-medium leading-tight">{audience.title}</h3>
              <p className="mt-4 text-[16px] leading-relaxed text-foreground/75">{audience.body}</p>
              {audience.quote && (
                <p className="mt-auto pt-6 text-sm italic leading-snug text-foreground/65">{audience.quote}</p>
              )}
            </Link>
          );
        })}
      </div>
    </Section>
  );
}

function ScoreTeaser() {
  return (
    <Section tone="sky">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            Start with your free Climate Score.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-foreground/80">
            In 60 seconds, see how your home performs in the new British
            climate — and exactly what it would cost to make it future-ready.
          </p>
        </div>
        <div>
          <ul className="space-y-4 text-base text-foreground/85">
            {[
              "Personalised to your postcode and property type",
              "Identifies every grant you qualify for",
              "No technical knowledge required",
            ].map((b) => (
              <li
                key={b}
                className="flex gap-3 border-b border-foreground/15 pb-4"
              >
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {b}
              </li>
            ))}
          </ul>
          <Link
            to="/score"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Get your Climate Score — free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

function Process() {
  const steps: Array<{ title: string; body: string; img?: string; alt?: string }> = [
    {
      title: "Climate Score",
      body: "Free online assessment. 60 seconds. Tells you exactly where your home stands today.",
    },
    {
      title: "Home Audit",
      body: "A qualified assessor visits. 90 minutes on site. We measure everything — fabric, heating, ventilation, glazing, overheating risk. £250, credited against your design fee.",
    },
    {
      title: "System Design",
      body: "We design your complete climate system, model your savings, identify every grant you qualify for, and give you a fully fixed, written installation price. Once you accept it, that's what you pay. If anything comes up during installation that's our fault to have missed, we cover it. £1,500 fixed design fee. No obligation to proceed.",
    },
    {
      title: "Installation",
      body: "Our approved partner network, led by MBM Services Group, installs your system under our direct project management. One team, one invoice, one point of contact. Typical install: 2 to 6 weeks depending on scope.",
      img: imgHeatPump,
      alt: imgHeatPumpAlt,
    },
    {
      title: "Performance Year",
      body: "Twelve months of monitoring with smart meter data tied into your dashboard. We review performance against your design and tune the system to keep it on track.",
    },
  ];
  return (
    <Section>
      <Eyebrow>
        Five steps from "my home is uncomfortable" to "my home is brilliant"
      </Eyebrow>
      <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
        How a Climateway project works.
      </h2>
      <ol className="mt-16 space-y-0">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 border-t border-hairline py-8 md:grid-cols-[120px_240px_1fr] md:gap-x-12 md:py-10"
          >
            <span className="font-display text-3xl text-primary md:text-4xl">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="self-center font-display text-2xl md:text-3xl">
              {s.title}
            </h3>
            <p className="col-span-2 text-base text-foreground/75 md:col-span-1 md:self-center md:text-lg">
              {s.body}
            </p>
            {s.img && (
              <img
                src={s.img}
                alt={s.alt ?? ""}
                loading="lazy"
                width={1600}
                height={1200}
                className="col-span-2 mt-4 aspect-[4/3] w-full rounded-md object-cover md:col-span-3"
              />
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}

function TrustStrip() {
  const points = [
    {
      title: "One team, from quote to install",
      body: "You deal with the same people from your first enquiry to your final commissioning. No handoffs.",
      icon: Shield,
    },
    {
      title: "Fixed price at design stage",
      body: "The price we quote is the price you pay. No surprises on the invoice.",
      icon: CirclePoundSterling,
    },
    {
      title: "The Comfort Promise",
      body: "If your system doesn't deliver the temperatures we agreed, we come back at our cost until it does.",
      icon: Leaf,
    },
  ];
  return (
    <section className="border-y border-border bg-background px-6 py-16" aria-label="Why homeowners choose Climateway">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="md:px-9 first:md:pl-0 last:md:pr-0">
                <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                <h2 className="mt-4 text-[15px] font-medium">{point.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          MCS certified · F-Gas certified · Gas Safe registered · RECC member · Fully insured
        </p>
      </div>
    </section>
  );
}

function Pricing() {
  const entries = [
    {
      name: "Cooling",
      price: "From £2,950",
      description: "A single room made liveable in summer. Air-to-air, quiet, efficient, grant-eligible.",
      to: "/pricing/cooling" as const,
      icon: Snowflake,
    },
    {
      name: "Heating",
      price: "From £6,500 after £7,500 BUS grant",
      description: "Replace an old boiler with a heat pump. Warm, efficient, cheaper to run.",
      to: "/pricing/heating" as const,
      icon: Flame,
      featured: true,
    },
    {
      name: "Whole home",
      price: "From £14,500 after grants",
      description: "Heat, cool, ventilation and controls designed as one system. The full Climateway.",
      to: "/pricing/whole-home" as const,
      icon: Home,
    },
  ];
  return (
    <Section tone="sky" id="pricing">
      <Eyebrow>Where to start</Eyebrow>
      <h2 className="max-w-4xl font-display text-4xl font-medium leading-tight md:text-5xl">
        Start with what your home needs today. Grow from there.
      </h2>
      <p className="mt-6 max-w-[60ch] text-[17px] text-foreground/75">
        We design projects that make sense right now, with the option to build out as your home and life change.
      </p>
      <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
        {entries.map((entry) => {
          const Icon = entry.icon;
          return (
          <article
            key={entry.name}
            className={`flex flex-col border bg-background p-8 text-foreground ${entry.featured ? "border-primary shadow-lg" : "border-border"}`}
          >
            <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
            <h3 className="mt-6 font-display text-2xl font-medium">{entry.name}</h3>
            <p className="mt-4 font-display text-3xl font-bold leading-tight text-primary">{entry.price}</p>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
              Comfort Promise included
            </p>
            <p className="mt-6 text-base leading-relaxed text-foreground/75">{entry.description}</p>
            <Link to={entry.to} className="mt-auto pt-8 text-sm font-medium text-primary underline-offset-4 hover:underline">
              See what's included →
            </Link>
          </article>
          );
        })}
      </div>
      <p className="mt-10 max-w-4xl text-base text-foreground/80">
        Every project qualifies for at least £2,500 in government grants. Most qualify for £7,500-£10,000. Finance available from £75/month.
      </p>
      <Link
        to="/grants"
        className="mt-4 inline-flex items-center gap-1 text-sm text-primary underline underline-offset-4"
      >
        See exactly which grants apply to you →
      </Link>
    </Section>
  );
}

const faqs = [
  {
    q: "How long does a project take?",
    a: "From your audit to a finished installation, typically:\n\n— Climate Ready: 8 to 14 weeks\n— Climate Complete: 12 to 20 weeks\n— Climate Estate: 16 to 28 weeks\n\nMost of that time is design and approvals. The physical installation usually takes 1 to 3 weeks on site. Listed buildings, conservation areas, ground-source projects and complex period properties can take longer — we tell you upfront if your project falls into this category.",
  },
  {
    q: "Do I have to do everything at once?",
    a: "No. We design the full system but installation can be staged across phases if needed. We'll recommend a sequence that protects your savings target.",
  },
  {
    q: "What grants are available?",
    a: "The two main grants are the Boiler Upgrade Scheme, which provides £7,500 toward a heat pump installation (or £2,500 for air-to-air systems), plus zero-rated VAT on all energy-efficient home upgrades. Lower-income households may also qualify for the Warm Homes: Local Grant. Your Climate Score identifies exactly what your home qualifies for. We apply for the grants on your behalf — you don't deal with any paperwork.",
  },
  {
    q: "What if I'm planning to sell?",
    a: "A climate-ready home commands a meaningful premium. Most of our completed projects add more in value than they cost. We'll show you the projected resale uplift in your design.",
  },
  {
    q: "Do you work with my architect?",
    a: "Yes. We routinely partner with architects on refurbishments and extensions. Talk to us early and we'll integrate.",
  },
  {
    q: "What if it goes wrong?",
    a: "Every installation carries a 6-year workmanship guarantee, underwritten by an independent insurer, plus manufacturer product warranties of 5 to 10 years. On top of that, our Comfort Promise: if your designed system doesn't deliver the agreed indoor temperatures in winter or summer, we come back and fix it at our cost. You only ever deal with Climateway, not the installers. We manage every contractor on your behalf. Full details on our /guarantees page.",
  },
  {
    q: "Do you guarantee my energy bills will be lower?",
    a: "We model your projected savings using your home's design and current energy prices, and we share that modelling with you transparently before you sign. But your actual bills depend on factors outside our control — your energy tariff, how you use the system, weather, and energy market prices. We commit to designing the most efficient system possible for your home, and to delivering the comfort temperatures we agree. We can't guarantee a specific bill outcome and no honest installer can.",
  },
  {
    q: "Are you carbon offsetters or installers?",
    a: "Installers. Real engineering, real equipment, real homes. We don't sell offsets or carbon credits. Your savings come from your home actually using less energy.",
  },
  {
    q: "Where do you work?",
    a: "We work across London, the Home Counties, the Cotswolds and the West Country. That includes Notting Hill, Kensington, Chelsea, Fulham, Wandsworth, Wimbledon, Richmond, Chiswick, Islington, Hampstead, Highgate, Greenwich, Guildford, Cobham, Weybridge, Esher, Sevenoaks, Tunbridge Wells, Beaconsfield, Gerrards Cross, Amersham, Chorleywood, Marlow, Henley-on-Thames, Oxted, Reigate, Godalming, Farnham, Haslemere, Oxford, Cheltenham, Cirencester, Stow-on-the-Wold, Chipping Norton, Bath, Bristol, Bruton, Frome, Sherborne, Shaftesbury, Salisbury, Winchester, Wells, Taunton, Exeter and surrounding areas. If you're not sure whether we cover you, ask — our network is growing through 2027.",
  },
];

function WhyClimateway() {
  const left = [
    "Sell one product at a time: heating OR cooling OR insulation",
    "Often tied to a single supplier or manufacturer",
    "You coordinate the trades yourself",
    "Grants often missed because sequencing isn't planned",
  ];
  const right = [
    "One integrated approach across heat, cool, fabric, controls",
    "Independent — no supplier or manufacturer ties",
    "One project, one team, one invoice",
    "Every grant identified and applied for you",
  ];
  return (
    <Section>
      <Eyebrow>Why Climateway</Eyebrow>
      <h2 className="max-w-4xl font-display text-4xl font-medium leading-tight md:text-5xl">
        Most companies sell one thing. We look at your whole home.
      </h2>
      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-0 md:divide-x md:divide-foreground/15">
        <div className="md:pr-12">
          <h3 className="font-display text-2xl text-foreground/80">
            Single-product installers
          </h3>
          <ul className="mt-8 space-y-5">
            {left.map((item) => (
              <li
                key={item}
                className="text-[17px] font-normal leading-relaxed"
                style={{ color: "#6B7280" }}
              >
                — {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:pl-12">
          <h3
            className="font-display text-2xl font-semibold"
            style={{ color: "#0E4F4A" }}
          >
            Climateway
          </h3>
          <ul className="mt-8 space-y-5">
            {right.map((item) => (
              <li
                key={item}
                className="text-[17px] font-medium leading-relaxed"
                style={{ color: "#0E4F4A" }}
              >
                — {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <Section id="faq">
      <Eyebrow>Frequently asked</Eyebrow>
      <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
        Everything homeowners want to know.
      </h2>
      <div className="mt-12 md:max-w-3xl">
        {faqs.map((f, i) => {
          const open = openIdx === i;
          return (
            <div key={f.q} className="border-t border-hairline last:border-b">
              <button
                type="button"
                onClick={() => setOpenIdx(open ? null : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-8 py-6 text-left"
              >
                <span className="text-[18px] font-medium leading-snug text-foreground">
                  {f.q}
                </span>
                <span
                  aria-hidden
                  className="relative h-4 w-4 shrink-0"
                  style={{ color: "#0E4F4A" }}
                >
                  <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 bg-current" />
                  <span
                    className={`absolute left-1/2 top-0 h-4 w-[1.5px] -translate-x-1/2 bg-current transition-transform duration-300 ${
                      open ? "rotate-90" : ""
                    }`}
                  />
                </span>
              </button>
              <div
                className="grid transition-all duration-300 ease-out"
                style={{
                  gridTemplateRows: open ? "1fr" : "0fr",
                  opacity: open ? 1 : 0,
                }}
              >
                <div className="overflow-hidden">
                  <p
                    className="max-w-[65ch] whitespace-pre-line pb-6 pr-12 text-[17px] font-normal text-foreground/75"
                    style={{ lineHeight: 1.6 }}
                  >
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function GrantsUpdate() {
  return (
    <section className="scroll-mt-24 px-6 py-20 md:py-28" style={{ backgroundColor: "#B8D4E0" }}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-3">
          <p
            className="text-xs font-medium uppercase"
            style={{ color: "#0E4F4A", letterSpacing: "0.18em" }}
          >
            New in 2026
          </p>
          <span
            className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white"
            style={{ backgroundColor: "#D97942", letterSpacing: "0.12em" }}
          >
            New
          </span>
        </div>
        <h2 className="max-w-4xl font-display text-4xl font-medium leading-tight md:text-5xl">
          The Boiler Upgrade Scheme now covers cooling.
        </h2>
        <div className="mt-10 max-w-[65ch] space-y-5 text-[17px] leading-relaxed text-foreground/80">
          <p>
            Until this year, government grants only supported heating upgrades.
            From 2026, the Boiler Upgrade Scheme extends to air-to-air heat
            pumps — the same units that warm your home in winter and cool it in
            summer.
          </p>
          <p>
            Climateway projects qualify for up to £7,500 on traditional heat
            pumps and £2,500 on air-to-air systems, alongside Warm Homes Plan
            grants and other support. Most clients see grants of £5,000 to
            £15,000 on a complete climate adaptation project.
          </p>
        </div>
        <Link
          to="/score"
          className="mt-10 inline-flex items-center gap-1.5 text-base underline-offset-4 hover:underline"
          style={{ color: "#0E4F4A" }}
        >
          See what grants you qualify for
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="w-full bg-teal px-6 py-20 md:py-[120px]">
      <div className="mx-auto max-w-[700px] text-center text-ivory">
        <p className="text-xs font-medium uppercase tracking-[0.1em] text-ivory">
          Start here
        </p>
        <h2 className="mt-6 font-display font-medium leading-[1.05] text-ivory text-[clamp(2.5rem,6vw,4.5rem)]">
          The best time to design your home for the climate ahead is before the next heatwave.
        </h2>
        <p className="mx-auto mt-6 max-w-[60ch] text-lg leading-relaxed text-ivory/80 md:text-[20px]">
          The Climate Score takes 60 seconds. It's free. It tells you where your home stands and what's worth doing about it.
        </p>
        <Button asChild size="lg" className="mt-10 h-16 bg-accent px-8 text-base text-accent-foreground hover:bg-accent/90">
          <Link to="/score">
            Get your Climate Score
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

