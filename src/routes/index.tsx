import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Home,
  Sun,
  PiggyBank,
  ChevronDown,
} from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import homeVictorian from "@/assets/home-victorian.jpg";
import homeKitchen from "@/assets/home-kitchen.jpg";
import homeBedroom from "@/assets/home-bedroom.jpg";
import { Section, Eyebrow } from "@/components/section";

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
      <Problem />
      <Solution />
      <ScoreTeaser />
      <Process />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-background px-6 pt-12 pb-20 md:min-h-[calc(100dvh-80px)] md:pt-20 md:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            The way to a climate-ready home.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-foreground/75 md:text-xl">
            Warm in winter. Cool in summer. Lower bills, all year. We design and
            install complete climate systems for British homes — heating,
            cooling, ventilation, controls — as one managed project.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              to="/score"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Get your free Climate Score
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#solution"
              className="inline-flex items-center gap-1.5 text-base text-primary underline-offset-4 hover:underline"
            >
              How it works
              <ChevronDown className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroHome}
            alt="Sunlit modern British living room with oak floors and linen sofa"
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
      n: "19m",
      body: "UK homes rated EPC D or worse, leaking heat in winter and overheating in summer.",
    },
    {
      n: "£2,400",
      body: "Average annual energy bill for an inefficient family home — and rising.",
    },
  ];
  return (
    <Section tone="teal">
      <h2 className="font-display text-4xl leading-tight md:max-w-3xl md:text-5xl">
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
    </Section>
  );
}

function Solution() {
  const features = [
    {
      icon: Home,
      title: "Whole-home design",
      body: "We assess your house as a system — fabric, heating, cooling, ventilation, controls — not as a list of separate measures.",
    },
    {
      icon: Sun,
      title: "Year-round comfort",
      body: "Engineered for warm winters AND cool summers. Most retrofit only solves half the problem.",
    },
    {
      icon: PiggyBank,
      title: "Lower bills, guaranteed",
      body: "We model your savings before we start. If we miss the number, we refund the difference for two years.",
    },
  ];
  return (
    <Section id="solution">
      <Eyebrow>How Climateway works</Eyebrow>
      <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
        One designed system. Built for every season.
      </h2>
      <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
        {features.map((f) => (
          <div key={f.title} className="border-t border-hairline pt-8">
            <f.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
            <h3 className="mt-6 font-display text-2xl">{f.title}</h3>
            <p className="mt-3 text-base text-foreground/75">{f.body}</p>
          </div>
        ))}
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
            climate — and what it would cost to make it future-ready.
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
  const steps = [
    {
      title: "Climate Score",
      body: "Free online assessment. 60 seconds.",
    },
    {
      title: "Home Audit",
      body: "A qualified assessor visits. 90 minutes. £250, credited against your design fee.",
    },
    {
      title: "System Design",
      body: "We design your full climate system, model the savings, apply for grants, give you a fixed price. £1,500 fixed design fee.",
    },
    {
      title: "Installation",
      body: "Our vetted engineers install everything as one managed project. One team, one invoice, one contact.",
    },
    {
      title: "Performance Year",
      body: "Twelve months of monitoring. If we miss your savings target, we refund the difference.",
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
          </li>
        ))}
      </ol>
    </Section>
  );
}

function SocialProof() {
  const testimonials = [
    {
      img: homeVictorian,
      name: "Sarah, Islington",
      quote:
        "We were sceptical about whole-home design — but the first winter bill made the case for itself.",
      result: "£1,800 saved in Year 1",
    },
    {
      img: homeKitchen,
      name: "James, St Albans",
      quote:
        "One team, one project. After two years of quotes from different trades, it was a relief.",
      result: "From EPC D to B",
    },
    {
      img: homeBedroom,
      name: "Priya, Wimbledon",
      quote:
        "The kids actually slept through July. That was worth every penny on its own.",
      result: "Cool bedrooms for the first time",
    },
  ];
  return (
    <Section>
      <Eyebrow>Trusted by homeowners across London and the South East</Eyebrow>
      <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
        Real homes. Real numbers.
      </h2>
      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {testimonials.map((t) => (
          <article key={t.name} className="flex flex-col">
            <img
              src={t.img}
              alt={`Home of ${t.name}`}
              loading="lazy"
              width={1024}
              height={768}
              className="aspect-[4/3] w-full rounded-md object-cover"
            />
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-foreground/60">
              {t.name}
            </p>
            <blockquote className="mt-3 font-display text-xl leading-snug">
              "{t.quote}"
            </blockquote>
            <p className="mt-4 text-sm font-medium text-primary">{t.result}</p>
          </article>
        ))}
      </div>

      <div className="mt-20 hairline pt-10">
        <p className="text-xs uppercase tracking-[0.18em] text-foreground/55">
          Accredited by
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-12 gap-y-4 font-display text-lg text-foreground/70">
          <span>MCS</span>
          <span>TrustMark</span>
          <span>PAS 2035</span>
          <span>Which? Trusted Trader</span>
        </div>
      </div>
    </Section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Climate Ready",
      price: "From £18,000",
      blurb: "For homes under 100m².",
      detail:
        "Heating upgrade, controls, targeted cooling, fabric basics.",
    },
    {
      name: "Climate Complete",
      price: "From £32,000",
      blurb: "For homes 100–200m².",
      detail:
        "Full heating, cooling, MVHR, controls, full fabric works.",
    },
    {
      name: "Climate Estate",
      price: "From £55,000",
      blurb: "For larger homes.",
      detail: "Bespoke whole-house specification.",
    },
  ];
  return (
    <Section tone="teal" id="pricing">
      <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
        Fixed-price climate systems. No surprises.
      </h2>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className="rounded-md bg-background p-8 text-foreground"
          >
            <h3 className="font-display text-2xl">{t.name}</h3>
            <p className="mt-4 font-display text-3xl text-primary">{t.price}</p>
            <p className="mt-4 text-sm text-foreground/75">{t.blurb}</p>
            <p className="mt-2 text-sm text-foreground/75">{t.detail}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 text-base text-ivory/80">
        Grants of up to £15,000 available. Finance available from £180/month.
      </p>
      <Link
        to="/pricing"
        className="mt-6 inline-flex items-center gap-2 text-base text-ivory underline-offset-4 hover:underline"
      >
        See what's included
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Section>
  );
}

const faqs = [
  {
    q: "How long does a Climateway project take?",
    a: "Typical projects run 8–14 weeks from design sign-off to handover. The Climate Score and home audit happen in the first two weeks; installation is usually 4–8 weeks depending on scope.",
  },
  {
    q: "Will I need to move out?",
    a: "Most clients stay in their home throughout. We sequence the works to keep at least heating and a working kitchen running at all times.",
  },
  {
    q: "What grants can I get?",
    a: "Most homeowners qualify for the Boiler Upgrade Scheme (£7,500) and ECO4 contributions. Some London boroughs add a further £2,000–£5,000. We apply for everything you're eligible for as part of the design fee.",
  },
  {
    q: "Do you do listed buildings?",
    a: "Yes. We've completed projects in Grade II listed Georgian and Victorian homes and work with conservation officers from day one.",
  },
  {
    q: "What if your savings estimate is wrong?",
    a: "We monitor your home for twelve months after handover. If you miss your modelled savings, we refund the difference — for two years.",
  },
  {
    q: "Do I need planning permission?",
    a: "Most works are permitted development. Where planning is needed (typically external units in conservation areas), we manage the application for you.",
  },
  {
    q: "Can I just have cooling installed?",
    a: "We don't take cooling-only projects. Adding cooling without addressing the rest of the house creates new problems — higher bills, worse air quality, comfort that doesn't last.",
  },
  {
    q: "Where do you work?",
    a: "Greater London and the Home Counties — Surrey, Hertfordshire, Berkshire, Buckinghamshire, Essex, Kent.",
  },
];

function FAQ() {
  return (
    <Section id="faq">
      <Eyebrow>Frequently asked</Eyebrow>
      <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
        Everything homeowners want to know.
      </h2>
      <div className="mt-12 md:max-w-3xl">
        {faqs.map((f) => (
          <FaqItem key={f.q} q={f.q} a={f.a} />
        ))}
      </div>
    </Section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-hairline last:border-b">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-8 py-6 text-left"
      >
        <span className="font-display text-lg md:text-xl">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-primary transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <p className="pb-6 pr-12 text-base text-foreground/75">{a}</p>
      )}
    </div>
  );
}

function FinalCTA() {
  return (
    <Section tone="teal">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl leading-tight md:text-5xl">
          Find out what your home needs.
        </h2>
        <p className="mt-6 text-lg text-ivory/85">
          Your free Climate Score takes 60 seconds and tells you exactly where
          your home stands.
        </p>
        <Link
          to="/score"
          className="mt-10 inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Get your Climate Score
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
