import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Climateway" },
      {
        name: "description",
        content:
          "Why Climateway exists, how we work, and the Comfort Promise that underpins every project.",
      },
      { property: "og:title", content: "About — Climateway" },
      {
        property: "og:description",
        content:
          "Why Climateway exists, how we work, and the Comfort Promise that underpins every project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        <Eyebrow>Why we exist</Eyebrow>
        <h1 className="max-w-4xl font-display text-5xl font-medium leading-tight md:text-6xl">
          British homes weren't built for the climate they now live in.
        </h1>
        <div className="mt-10 max-w-[65ch] space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            We keep meeting the same conversation in every home. People are cold
            and spending too much in winter. Sweltering and sleepless in summer.
            Every company they speak to sells them one thing — a boiler, a heat
            pump, an AC unit, some insulation. Each company tells them their box
            is the answer.
          </p>
          <p className="font-display text-2xl font-medium text-foreground">
            Nobody looks at the home as a whole.
          </p>
          <p>
            Climateway exists to redesign British homes for the climate they now
            live in. Heating, cooling, ventilation, controls — designed together,
            installed as one project, guaranteed to deliver the temperatures we
            agree.
          </p>
        </div>
      </Section>

      <Section tone="sky">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight md:text-5xl">
          One team you deal with. A network that delivers.
        </h2>
        <div className="mt-10 max-w-[65ch] space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            Climateway designs your climate system. Our approved installation
            partners — MCS certified, F-Gas certified, Gas Safe registered —
            build it under our direct project management. Our installation
            partners are established UK mechanical and electrical businesses
            with proven track records across residential and commercial
            projects, all bound by Climateway's quality standards.
          </p>
          <p>
            You have one team from your first enquiry to your final
            commissioning. One contract. One invoice. One Comfort Promise.
          </p>
        </div>
      </Section>

      <Section>
        <Eyebrow>What we promise</Eyebrow>
        <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight md:text-5xl">
          The Comfort Promise.
        </h2>
        <div className="mt-10 max-w-[65ch] space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            Every Climateway installation carries a 6-year workmanship
            guarantee, underwritten by an independent insurer, plus manufacturer
            product warranties of 5 to 10 years. On top of that, our Comfort
            Promise: if your designed system doesn't deliver the temperatures we
            agreed, we come back at our cost until it does.
          </p>
          <p>
            That's it. No fine print, no offset schemes, no carbon-credit
            bookkeeping. Just a home that actually works, in every season.
          </p>
        </div>
      </Section>

      <Section tone="teal">
        <div className="mx-auto max-w-[700px] text-center text-ivory">
          <Eyebrow>Start here</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-medium leading-tight md:text-5xl">
            Ready to see how your home performs?
          </h2>
          <p className="mx-auto mt-6 max-w-[60ch] text-lg leading-relaxed text-ivory/80 md:text-[20px]">
            Your free Climate Score takes 60 seconds.
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
    </>
  );
}
