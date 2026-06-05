import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Section, Eyebrow } from "@/components/section";

export const Route = createFileRoute("/grants")({
  head: () => ({
    meta: [
      { title: "Climate Grants Explained — What You Actually Qualify For" },
      {
        name: "description",
        content:
          "Straight answers on UK heat pump and home-energy grants: Boiler Upgrade Scheme, air-to-air grant, Warm Homes Local Grant, 0% VAT and finance.",
      },
      {
        property: "og:title",
        content: "Climate Grants Explained — What You Actually Qualify For",
      },
      {
        property: "og:description",
        content:
          "What's available, what's realistic, and what Climateway handles for you.",
      },
      { property: "og:url", content: "/grants" },
    ],
    links: [{ rel: "canonical", href: "/grants" }],
  }),
  component: GrantsPage,
});

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((i) => (
        <li key={i} className="flex gap-3 text-base">
          <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

function GrantsPage() {
  return (
    <>
      <Section>
        <Eyebrow>
          <span className="text-primary">Honest guide</span>
        </Eyebrow>
        <h1 className="max-w-3xl font-display text-5xl leading-tight md:text-6xl">
          Which grants does your home qualify for?
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/75">
          Straight answers on what's available, what's realistic, and what we
          do for you.
        </p>
      </Section>

      <Section tone="sky">
        <h2 className="max-w-3xl font-display text-4xl">
          The mainstream grant — £7,500 for heat pumps
        </h2>
        <div className="mt-8 max-w-[65ch] space-y-5 text-base text-foreground/80">
          <p>
            The Boiler Upgrade Scheme provides £7,500 toward an air-source or
            ground-source heat pump that replaces a gas, oil or LPG boiler.
            It is not means-tested — eligibility is based on your property,
            not your income. Most Climateway customers qualify.
          </p>
          <p>
            How it works in practice: we apply on your behalf, Ofgem usually
            approves within 3–5 working days, and the £7,500 is deducted
            directly from your installation invoice. You pay the net amount.
            No forms, no paperwork, no waiting for reimbursement.
          </p>
        </div>
        <Checklist
          items={[
            "You own your home in England or Wales",
            "You currently have gas, oil, LPG, or electric heating",
            "Your property has a valid EPC less than 10 years old",
            "Your property is not a new build (less than 2 years old)",
          ]}
        />
      </Section>

      <Section>
        <h2 className="max-w-3xl font-display text-4xl">
          New in 2026 — £2,500 for air-to-air heat pumps
        </h2>
        <div className="mt-8 max-w-[65ch] space-y-5 text-base text-foreground/80">
          <p>
            From April 2026, the Boiler Upgrade Scheme expanded to cover
            air-to-air heat pumps — the units that heat AND cool your home.
            This is the grant that makes year-round comfort affordable for
            the first time.
          </p>
          <p>
            Important: this grant requires the air-to-air system to replace
            your primary heating, not sit alongside an existing boiler. We
            design projects that capture this grant where it fits your home,
            and tell you honestly when it doesn't.
          </p>
        </div>
        <Checklist
          items={[
            "The air-to-air system becomes your primary heating source",
            "You currently have fossil-fuel or electric heating",
            "You meet the same EPC and property rules as the main BUS grant",
          ]}
        />
      </Section>

      <Section tone="sky">
        <h2 className="max-w-3xl font-display text-4xl">
          For lower-income households — up to £15,000
        </h2>
        <div className="mt-8 max-w-[65ch] space-y-5 text-base text-foreground/80">
          <p>
            The Warm Homes: Local Grant provides substantial support for
            households on lower incomes — typically those receiving
            qualifying benefits or with household income under £36,000. Where
            you qualify, we coordinate the application with your local
            council on your behalf.
          </p>
          <p>
            Honest note: this scheme is heavily oversubscribed and not
            available in every council area. Timelines from application to
            installation are typically 12–20 weeks. We will tell you straight
            away whether you qualify and whether the timeline works for your
            project.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="max-w-3xl font-display text-4xl">
          0% VAT on every Climateway installation
        </h2>
        <div className="mt-8 max-w-[65ch] space-y-5 text-base text-foreground/80">
          <p>
            Energy-saving home improvements — including heat pumps,
            insulation, solar panels and battery storage — are zero-rated for
            VAT until March 2027. This applies automatically. On a £30,000
            project, that's £6,000 you don't pay, on top of any grants.
          </p>
        </div>
      </Section>

      <Section tone="sky">
        <h2 className="max-w-3xl font-display text-4xl">
          Finance available from £180/month
        </h2>
        <div className="mt-8 max-w-[65ch] space-y-5 text-base text-foreground/80">
          <p>
            For the portion not covered by grants, we offer commercial
            finance through our independent partners. Typical terms: 5 to 10
            years, fixed rate, no upfront payment. Climateway is not tied to
            any single lender — we offer the option that best fits your
            situation.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="max-w-3xl font-display text-4xl">A realistic example</h2>
        <div className="mt-10 max-w-2xl overflow-hidden rounded-lg border border-border">
          <table className="w-full text-base">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-5 py-4 text-left font-medium" />
                <th className="px-5 py-4 text-right font-medium">
                  Climate Complete project
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-5 py-4">Total project cost</td>
                <td className="px-5 py-4 text-right">£32,000</td>
              </tr>
              <tr>
                <td className="px-5 py-4">VAT (zero-rated)</td>
                <td className="px-5 py-4 text-right">−£0</td>
              </tr>
              <tr>
                <td className="px-5 py-4">Boiler Upgrade Scheme</td>
                <td className="px-5 py-4 text-right">−£7,500</td>
              </tr>
              <tr>
                <td className="px-5 py-4">
                  Air-to-air grant (where eligible)
                </td>
                <td className="px-5 py-4 text-right">−£2,500</td>
              </tr>
              <tr className="bg-muted/30 font-medium">
                <td className="px-5 py-4">Net cost to homeowner</td>
                <td className="px-5 py-4 text-right">£22,000</td>
              </tr>
              <tr>
                <td className="px-5 py-4">Or finance from</td>
                <td className="px-5 py-4 text-right">£210/month</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 max-w-2xl text-sm italic text-foreground/60">
          Worked example for illustration. Your audit produces precise
          figures for your home.
        </p>
      </Section>

      <Section tone="teal">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Next step</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl">
            Find out exactly which grants apply to your home.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ivory/80">
            Your free Climate Score takes 60 seconds and identifies the
            grants you qualify for, based on your postcode, property type and
            circumstances.
          </p>
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
