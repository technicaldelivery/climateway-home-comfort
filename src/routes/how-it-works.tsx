import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/section";
const homeVictorian =
  "https://images.unsplash.com/photo-1712869965218-3128c2eef88c?fm=jpg&q=85&w=1600&auto=format&fit=crop";
const homeKitchen =
  "https://images.unsplash.com/photo-1633505765486-e404bbbec654?fm=jpg&q=85&w=1600&auto=format&fit=crop";
const homeBedroom =
  "https://images.unsplash.com/photo-1776860150305-108ed577d7d4?fm=jpg&q=85&w=1600&auto=format&fit=crop";
const heroHome =
  "https://images.unsplash.com/photo-1758915753332-cab59126742c?fm=jpg&q=85&w=1600&auto=format&fit=crop";
const imgThermostat =
  "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?fm=jpg&q=85&w=1600&auto=format&fit=crop";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works — Climateway" },
      {
        name: "description",
        content:
          "Five steps from \"my home is uncomfortable\" to \"my home is brilliant\". The Climateway process in detail.",
      },
      { property: "og:title", content: "How it works — Climateway" },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowPage,
});

const steps = [
  {
    title: "Climate Score",
    img: heroHome,
    desc: "A free, sixty-second online assessment that benchmarks your home against the new British climate. Personalised to your postcode and property type, with an instant view of every grant you qualify for.",
    includes: ["Personalised score across four metrics", "Estimated grant eligibility", "No technical knowledge required"],
    timeline: "60 seconds, online.",
  },
  {
    title: "Home Audit",
    img: homeVictorian,
    desc: "A qualified assessor visits your home for a 90-minute physical survey. We measure, photograph, and thermally image — building a complete picture of how your house performs today.",
    includes: ["On-site survey by a qualified assessor", "Thermal imaging and airtightness check", "Written audit report"],
    timeline: "90 minutes on site. £250, credited against your design fee.",
  },
  {
    title: "System Design",
    img: homeKitchen,
    desc: "We design your full climate system as a single integrated package — heating, cooling, ventilation, controls and fabric. We model the savings, apply for every grant you qualify for, and give you one fixed price.",
    includes: ["Full system design and specification", "Modelled energy savings", "Grant applications managed for you", "Fixed-price installation quote"],
    timeline: "3–5 weeks. £1,500 fixed design fee.",
  },
  {
    title: "Installation",
    img: homeBedroom,
    desc: "One project manager. One vetted team of engineers. One invoice. We sequence the works to keep your home livable throughout, and finish to a standard you can show off.",
    includes: ["Single point of contact", "All trades coordinated by Climateway", "Daily progress updates", "End-of-project commissioning"],
    timeline: "4–8 weeks on site.",
  },
  {
    title: "Performance Year",
    img: imgThermostat,
    desc: "Twelve months of remote monitoring. We watch how your home actually performs and tune the system in real time. If you miss your modelled savings, we refund the difference.",
    includes: ["Twelve months remote monitoring", "Annual performance report", "Two-year savings guarantee"],
    timeline: "12 months from handover.",
  },
];

function HowPage() {
  return (
    <>
      <Section>
        <Eyebrow>Our process</Eyebrow>
        <h1 className="max-w-3xl font-display text-5xl leading-tight md:text-6xl">
          How a Climateway project works.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/75">
          We treat your home as one system, and we run the project as one
          project. Here are the five steps from first click to twelve-month
          performance review.
        </p>
      </Section>

      {steps.map((s, i) => (
        <Section key={s.title} tone={i % 2 === 1 ? "ivory" : "ivory"}>
          <div className="grid gap-12 border-t border-hairline pt-12 md:grid-cols-[1fr_1fr] md:gap-16">
            <div>
              <p className="font-display text-5xl text-primary">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 font-display text-4xl">{s.title}</h2>
              <p className="mt-6 text-base text-foreground/75">{s.desc}</p>

              <p className="mt-8 text-xs uppercase tracking-[0.16em] text-foreground/55">
                What's included
              </p>
              <ul className="mt-3 space-y-2">
                {s.includes.map((inc) => (
                  <li key={inc} className="border-b border-hairline pb-2 text-sm">
                    {inc}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-xs uppercase tracking-[0.16em] text-foreground/55">
                Typical timeline
              </p>
              <p className="mt-2 text-sm text-foreground/75">{s.timeline}</p>
            </div>
            <img
              src={s.img}
              alt={`Climateway ${s.title}`}
              loading="lazy"
              width={1024}
              height={768}
              className="aspect-[4/5] w-full rounded-md object-cover"
            />
          </div>
        </Section>
      ))}

      <Section tone="teal">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl leading-tight text-ivory md:text-5xl">
            Start with your Climate Score.
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
