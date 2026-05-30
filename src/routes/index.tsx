import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Home,
  Sun,
  PiggyBank,
  ChevronDown,
} from "lucide-react";
import { Section, Eyebrow } from "@/components/section";

const heroHome =
  "https://images.unsplash.com/photo-1758915753332-cab59126742c?fm=jpg&q=85&w=2400&auto=format&fit=crop";
const heroHomeAlt = "Modern living room with fireplace and pendant light";
const imgComfort =
  "https://images.unsplash.com/photo-1714153760214-5e86aa688fc3?fm=jpg&q=85&w=1600&auto=format&fit=crop";
const imgComfortAlt =
  "Warm sunlight streaming through a window into a calm apartment";
const imgHeatPump =
  "https://images.unsplash.com/photo-1776860150305-108ed577d7d4?fm=jpg&q=85&w=1600&auto=format&fit=crop";
const imgHeatPumpAlt =
  "Modern heat pump installed against a brick house exterior";
const imgVictorian =
  "https://images.unsplash.com/photo-1712869965218-3128c2eef88c?fm=jpg&q=85&w=1600&auto=format&fit=crop";
const imgVictorianAlt =
  "Row of Victorian terraced houses in Kensington, London";
const imgBedroom =
  "https://images.unsplash.com/photo-1600908389678-64b54d9cf054?fm=jpg&q=85&w=1600&auto=format&fit=crop";
const imgBedroomAlt =
  "Calm bedroom with crisp white linen and soft natural light";
const imgCozyLiving =
  "https://images.unsplash.com/photo-1680965585463-386646047473?fm=jpg&q=85&w=1600&auto=format&fit=crop";
const imgCozyLivingAlt =
  "Cozy living room with wood paneling, sofa and natural light";

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
      n: "19 million",
      body: "UK homes rated EPC D or worse — leaking heat in winter, overheating in summer.",
    },
    {
      n: "£2,400",
      body: "Average annual energy bill for an inefficient family home, and still climbing.",
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
      body: "We assess your house as a system — fabric, heating, cooling, ventilation, controls — not as a list of separate measures. Every recommendation is engineered against the others.",
    },
    {
      icon: Sun,
      title: "Year-round comfort",
      body: "Engineered for warm winters and cool summers. Most retrofit projects only solve half the problem. We solve both.",
    },
    {
      icon: PiggyBank,
      title: "Lower bills, guaranteed",
      body: "We model your savings before we start. If we miss the number, we refund the difference for two years. No other UK climate company offers this.",
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
  const steps = [
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
      body: "We design your complete climate system, model your savings, identify every grant you qualify for, and give you a fixed installation price. £1,500 fixed design fee. No obligation to proceed.",
    },
    {
      title: "Installation",
      body: "Our vetted engineers install everything as one managed project. One team, one invoice, one point of contact. Typical install: 2 to 6 weeks depending on scope.",
    },
    {
      title: "Performance Year",
      body: "Twelve months of monitoring with smart meter data tied into your dashboard. If we miss your projected savings target, we refund the difference for the next two years.",
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
      name: "Sarah, Wandsworth",
      quote:
        "We were quoted heat pump only. Climateway showed us the whole picture and saved us £8,000 by sequencing it properly.",
      result: "£1,800 saved Year 1",
    },
    {
      img: homeKitchen,
      name: "James, Sevenoaks",
      quote:
        "The summer bedroom problem was the dealbreaker for me. Nobody else even mentioned cooling.",
      result: "Cool bedrooms for the first time in 12 years",
    },
    {
      img: homeBedroom,
      name: "Priya, Wimbledon",
      quote:
        "Properly designed, properly installed, properly explained. The whole experience felt like working with our architect.",
      result: "From EPC D to B",
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
        "Heating upgrade, smart controls, targeted cooling, fabric improvements. Right for flats and smaller terraces.",
    },
    {
      name: "Climate Complete",
      price: "From £32,000",
      blurb: "For homes 100 to 200m².",
      detail:
        "Full heating, cooling, MVHR ventilation, smart controls, comprehensive fabric works. Right for typical family homes.",
    },
    {
      name: "Climate Estate",
      price: "From £55,000",
      blurb: "For homes over 200m².",
      detail: "Bespoke whole-house specification, multi-zone systems, integration with existing or planned renewable generation. Right for larger homes and complex properties.",
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
        Grants of up to £15,000 available depending on your property and circumstances. Finance available from £180/month.
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
    q: "How long does a project take?",
    a: "From your audit to a finished installation, typically 8 to 14 weeks for Climate Ready, 12 to 20 weeks for Climate Complete, longer for Estate.",
  },
  {
    q: "Do I have to do everything at once?",
    a: "No. We design the full system but installation can be staged across phases if needed. We'll recommend a sequence that protects your savings target.",
  },
  {
    q: "What grants are available?",
    a: "Every home is different. The Boiler Upgrade Scheme is £7,500 for heat pumps. The Warm Homes Plan offers further support for fabric works. Your Climate Score identifies everything you qualify for.",
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
    a: "Every project carries an insurance-backed 10-year guarantee. Plus our 2-year energy bill guarantee. Plus we manage every contractor directly — you never have to chase a trade.",
  },
  {
    q: "Are you carbon offsetters or installers?",
    a: "Installers. Real engineering, real equipment, real homes. We don't sell offsets or carbon credits. Your savings come from your home actually using less energy.",
  },
  {
    q: "Where do you work?",
    a: "Greater London, Surrey, Berkshire, Buckinghamshire, Hertfordshire, Kent and parts of Sussex. We're expanding through 2026.",
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
          your home stands — what's working, what isn't, what it would cost to make it brilliant.
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
