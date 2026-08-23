import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/section";
const homeKitchen =
  "https://images.unsplash.com/photo-1680965585463-386646047473?fm=jpg&q=85&w=1600&auto=format&fit=crop";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Climateway" },
      {
        name: "description",
        content:
          "Why Climateway exists, who we are, and the standards we work to.",
      },
      { property: "og:title", content: "About — Climateway" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section>
        <Eyebrow>About</Eyebrow>
        <h1 className="max-w-4xl font-display text-5xl leading-tight md:text-6xl">
          We're rebuilding British homes for British weather.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/75">
          Climateway is a London-based home climate company. We design and
          install heating, cooling, ventilation and controls as one project,
          for homeowners who'd rather spend a weekend than a year managing
          trades.
        </p>
      </Section>

      <Section>
        <div className="grid gap-12 border-t border-hairline pt-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Our story</h2>
            <div className="mt-6 space-y-5 text-base text-foreground/80">
              <p>
                Climateway began with a frustrated homeowner, three quotes
                from three different trades, and the realisation that nobody
                in the UK was designing the whole problem.
              </p>
              <p>
                British homes were built for a climate that no longer exists.
                Winters are wetter, summers are hotter, and the patchwork of
                separate retrofits — a boiler here, an air-con unit there —
                creates as many problems as it solves.
              </p>
              <p>
                We assembled a team of building physicists, MCS-certified
                installers and project managers, and rebuilt the process from
                scratch. One design. One contract. One team. One number that
                covers it all.
              </p>
            </div>
          </div>
          <img
            src={homeKitchen}
            alt="A Climateway project — modern kitchen extension"
            loading="lazy"
            width={1024}
            height={768}
            className="aspect-[4/5] w-full rounded-md object-cover"
          />
        </div>
      </Section>

      <Section tone="sky">
        <Eyebrow>Why we exist</Eyebrow>
        <h2 className="max-w-3xl font-display text-4xl md:text-5xl">
          The UK retrofit market is broken. We're the fix.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {[
            {
              t: "One project, not five",
              b: "Most homeowners juggle a boiler quote, an insulation quote, an air-con quote, a glazier and a smart-home installer. We bring all five into one design.",
            },
            {
              t: "Designed for 2040",
              b: "We model every system against projected climate data, not 1990s assumptions. Your home should still feel right in twenty years.",
            },
            {
              t: "Backed by our money",
              b: "Our Comfort Promise: if your installed system doesn't deliver the agreed indoor temperatures, we come back at our cost until it does. We bet on our own design.",
            },
          ].map((c) => (
            <div key={c.t} className="border-t border-foreground/20 pt-6">
              <h3 className="font-display text-xl">{c.t}</h3>
              <p className="mt-3 text-base text-foreground/80">{c.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>Team</Eyebrow>
        <h2 className="max-w-3xl font-display text-4xl md:text-5xl">
          Engineers, designers, project managers.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-4">
          {[
            { name: "Alex Morgan", role: "Founder & CEO" },
            { name: "Priya Shah", role: "Head of Design" },
            { name: "Tom Whitfield", role: "Head of Installation" },
            { name: "Hannah Reid", role: "Client Director" },
          ].map((p) => (
            <div key={p.name} className="border-t border-hairline pt-6">
              <div className="aspect-square w-full rounded-md bg-secondary" aria-hidden />
              <p className="mt-5 font-display text-lg">{p.name}</p>
              <p className="text-sm text-foreground/65">{p.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>Our network</Eyebrow>
        <h2 className="max-w-3xl font-display text-4xl md:text-5xl">
          Why we don't employ our installers directly.
        </h2>
        <div className="mt-8 max-w-3xl space-y-5 text-base text-foreground/80">
          <p>
            The UK has thousands of brilliant, MCS-certified heat pump and
            climate engineers — most of them small businesses with decades
            of trade experience. Our model is to bring the best of them
            together under one quality-controlled network, rather than try
            to compete with them by employing our own.
          </p>
          <p>Every installer in the Climateway network is:</p>
          <ul className="space-y-2 pl-1">
            <li>— MCS certified (Microgeneration Certification Scheme)</li>
            <li>— F-Gas certified where cooling work is involved</li>
            <li>— TrustMark registered</li>
            <li>— Vetted by us against project history, customer references and on-site quality audits</li>
            <li>— Bound by Climateway's quality protocols and service-level commitments</li>
          </ul>
          <p>
            Your contract is with Climateway. We design, we coordinate, we
            manage, we sign off — and we stand behind the result.
          </p>
        </div>
      </Section>

      <Section tone="teal">
        <Eyebrow>Our standards</Eyebrow>
        <h2 className="font-display text-4xl text-ivory">Standards we work to.</h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/85">
          Climateway is a member of the Renewable Energy Consumer Code
          (RECC). Every installation is delivered by MCS certified,
          TrustMark registered partners under direct Climateway management.
          Cooling installations are completed by F-Gas certified engineers,
          and all projects are designed to PAS 2035 whole-house retrofit
          standards.
        </p>
        <p className="mt-4 max-w-2xl text-sm italic leading-relaxed text-ivory/65">
          Specific accreditations of installation partners are available on
          request and detailed in your project documentation.
        </p>
        <Link
          to="/score"
          className="mt-12 inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 text-base font-medium text-accent-foreground hover:opacity-90"
        >
          Get your Climate Score
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>
    </>
  );
}
