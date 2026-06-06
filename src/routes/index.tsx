import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Home,
  Sun,
  Snowflake,
  ShieldCheck,
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
      <TrustStrip />
      <Problem />
      <Solution />
      <ScoreTeaser />
      <GrantsUpdate />
      <Process />
      <SocialProof />
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
            We design and install complete climate systems for British homes —
            heating, cooling, ventilation, controls — as one managed project.
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
      title: "Lower bills, guaranteed",
      body: "We model your savings before we start. If we miss the number, we refund the difference for two years. No other UK climate company offers this.",
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
      body: "We design your complete climate system, model your savings, identify every grant you qualify for, and give you a fixed installation price. £1,500 fixed design fee. No obligation to proceed.",
    },
    {
      title: "Installation",
      body: "Our vetted engineers install everything as one managed project. One team, one invoice, one point of contact. Typical install: 2 to 6 weeks depending on scope.",
      img: imgHeatPump,
      alt: imgHeatPumpAlt,
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

function SocialProof() {
  const testimonials = [
    {
      img: imgVictorian,
      alt: imgVictorianAlt,
      name: "Sarah, Wandsworth",
      quote:
        "We were quoted heat pump only. Climateway showed us the whole picture and saved us £8,000 by sequencing it properly.",
      result: "£1,800 saved Year 1",
    },
    {
      img: imgBedroom,
      alt: imgBedroomAlt,
      name: "James, Sevenoaks",
      quote:
        "The summer bedroom problem was the dealbreaker for me. Nobody else even mentioned cooling.",
      result: "Cool bedrooms for the first time in 12 years",
    },
    {
      img: imgCozyLiving,
      alt: imgCozyLivingAlt,
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
              alt={t.alt}
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

    </Section>
  );
}

function TrustStrip() {
  return (
    <section
      className="border-y px-6 py-12"
      style={{ backgroundColor: "#F6F1E8", borderColor: "rgb(0 0 0 / 0.08)" }}
      aria-label="Installation standards"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
        <p
          className="text-[13px] font-medium uppercase tracking-[0.1em]"
          style={{ color: "#0E4F4A" }}
        >
          Our installation standards
        </p>
        <p className="max-w-[65ch] text-[17px] font-normal leading-relaxed text-foreground/85">
          Every Climateway installation partner is MCS certified. Cooling
          installations are completed by F-Gas certified engineers. All
          projects are designed to PAS 2035 whole-house retrofit standards.
        </p>
        <div
          className="mt-2 flex items-center gap-2 text-[14px] font-medium"
          style={{ color: "#0E4F4A" }}
        >
          <ShieldCheck className="h-4 w-4" strokeWidth={1.75} />
          <span>10-year insurance-backed guarantee on every installation</span>
        </div>
      </div>
    </section>
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
      <div className="mt-10 max-w-[65ch] space-y-4 text-base text-ivory/80">
        <p>
          Most homeowners qualify for £7,500 toward heat pump installation
          through the Boiler Upgrade Scheme, plus £2,500 for air-to-air heat
          pumps where eligible. Lower-income households may qualify for
          additional support through the Warm Homes Plan. Most Climateway
          projects see total grant support of £7,500 to £10,000.
        </p>
        <p>
          Finance available from £180/month through our commercial finance
          partners — independent of any energy supplier.
        </p>
      </div>
      <Link
        to="/grants"
        className="mt-4 inline-flex items-center gap-1 text-sm text-ivory/90 underline underline-offset-4 hover:text-ivory"
      >
        See exactly which grants apply to you →
      </Link>
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
    a: "The two main grants are the Boiler Upgrade Scheme, which provides £7,500 toward a heat pump installation (or £2,500 for air-to-air systems), and zero-rated VAT on all energy-efficient home upgrades. Lower-income households may also qualify for the Warm Homes: Local Grant. Your Climate Score identifies exactly what your home qualifies for. We apply for the grants on your behalf — you don't deal with any paperwork.",
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
    a: "Greater London, Surrey, Berkshire, Buckinghamshire, Hertfordshire, Kent and parts of Sussex. We're expanding through 2027.",
  },
];

function WhyClimateway() {
  const left = [
    "Heat pumps OR cooling OR insulation, never together",
    "Tied to one energy supplier or manufacturer",
    "You coordinate three or four contractors yourself",
    "You miss grants by sequencing wrong",
  ];
  const right = [
    "One integrated system: heat, cool, fabric, controls",
    "Independent — no supplier or manufacturer ties",
    "One designed project, one team, one invoice",
    "Every grant identified and applied for you",
  ];
  return (
    <Section className="bg-[#F6F1E8]">
      <Eyebrow>
        <span style={{ color: "#0E4F4A" }}>Why Climateway</span>
      </Eyebrow>
      <h2 className="max-w-4xl font-display text-4xl font-medium leading-tight md:text-5xl">
        Most companies sell one thing. We design the whole system.
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
                    className="max-w-[65ch] pb-6 pr-12 text-[17px] font-normal text-foreground/75"
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
    <section className="w-full bg-[#0E4F4A] px-6 py-20 md:py-[120px]">
      <div className="mx-auto max-w-[700px] text-center text-ivory">
        <p className="text-xs font-medium uppercase tracking-[0.1em] text-ivory">
          Start here
        </p>
        <h2 className="mt-6 font-display font-medium leading-[1.05] text-ivory text-[clamp(2.5rem,6vw,4.5rem)]">
          One question. One free answer.
        </h2>
        <p className="mx-auto mt-6 max-w-[60ch] text-[20px] leading-relaxed text-ivory/80">
          How does your home perform in the new British climate? Find out in 60 seconds. No commitment. No call required.
        </p>
        <Link
          to="/score"
          className="mt-10 inline-flex h-16 items-center gap-2 rounded-md bg-[#D97942] px-8 text-base font-medium text-ivory transition-opacity hover:opacity-90"
        >
          Get your Climate Score
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

