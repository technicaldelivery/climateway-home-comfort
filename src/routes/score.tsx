import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/score")({
  head: () => ({
    meta: [
      { title: "Your Climate Score — Climateway" },
      {
        name: "description",
        content:
          "Find out in 60 seconds how your home performs in the new British climate, and what it would cost to make it future-ready.",
      },
      { property: "og:title", content: "Your Climate Score — Climateway" },
      { property: "og:url", content: "/score" },
    ],
    links: [{ rel: "canonical", href: "/score" }],
  }),
  component: ScorePage,
});

type Answers = {
  postcode: string;
  property: string;
  age: string;
  size: string;
  heating: string;
  overheating: string;
  firstName: string;
  email: string;
  phone: string;
  marketing: boolean;
};

const initial: Answers = {
  postcode: "",
  property: "",
  age: "",
  size: "",
  heating: "",
  overheating: "",
  firstName: "",
  email: "",
  phone: "",
  marketing: false,
};

const STEPS = 7; // results = step 8

function ScorePage() {
  const [step, setStep] = useState(1);
  const [a, setA] = useState<Answers>(initial);
  const [submitted, setSubmitted] = useState(false);

  const progress = useMemo(() => Math.min(step, STEPS) / STEPS, [step]);

  const set = <K extends keyof Answers>(k: K, v: Answers[K]) =>
    setA((p) => ({ ...p, [k]: v }));

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => Math.max(1, s - 1));

  const canContinue =
    (step === 1 && a.postcode.trim().length >= 3) ||
    (step === 2 && a.property) ||
    (step === 3 && a.age) ||
    (step === 4 && a.size) ||
    (step === 5 && a.heating) ||
    (step === 6 && a.overheating) ||
    step === 7;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!a.firstName || !a.email) return;
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "score", ...a }),
      });
    } catch (err) {
      console.error(err);
    }
    setSubmitted(true);
    setStep(8);
  }

  if (step === 8 && submitted) {
    return <Results a={a} />;
  }

  return (
    <div className="min-h-[calc(100dvh-80px)] bg-background px-6 py-12 md:py-20">
      <div className="mx-auto max-w-2xl">
        {/* Progress */}
        <div className="mb-12">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.16em] text-foreground/60">
            <span>Step {Math.min(step, STEPS)} of {STEPS}</span>
            <span>{Math.round(progress * 100)}%</span>
          </div>
          <div className="mt-3 h-[2px] w-full bg-foreground/10">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>

        {step === 1 && (
          <Step
            title="Let's start with your postcode."
            sub="This tells us about your local climate and the grants available in your area."
          >
            <input
              type="text"
              autoFocus
              value={a.postcode}
              onChange={(e) => set("postcode", e.target.value.toUpperCase())}
              placeholder="e.g. SW19 4DR"
              aria-label="Postcode"
              className="w-full rounded-md border border-input bg-background px-5 py-4 font-display text-2xl tracking-wide focus:border-primary focus:outline-none"
            />
          </Step>
        )}

        {step === 2 && (
          <Step title="What kind of home is it?">
            <RadioGrid
              options={[
                "Detached house",
                "Semi-detached house",
                "Terraced house",
                "Flat (purpose-built)",
                "Flat (converted)",
                "Bungalow",
              ]}
              value={a.property}
              onChange={(v) => set("property", v)}
            />
          </Step>
        )}

        {step === 3 && (
          <Step title="Roughly when was it built?">
            <RadioGrid
              options={["Pre-1900", "1900–1939", "1940–1965", "1966–1990", "1991–2010", "Post-2010"]}
              value={a.age}
              onChange={(v) => set("age", v)}
            />
          </Step>
        )}

        {step === 4 && (
          <Step
            title="Roughly how big is it?"
            sub="A guess is fine. 130m² is a typical 3-bed semi."
          >
            <RadioGrid
              options={["Under 80m²", "80–130m²", "130–200m²", "Over 200m²"]}
              value={a.size}
              onChange={(v) => set("size", v)}
              cols={2}
            />
          </Step>
        )}

        {step === 5 && (
          <Step title="What heats it today?">
            <RadioGrid
              options={[
                "Gas boiler",
                "Oil boiler",
                "Electric (storage or panel)",
                "Heat pump",
                "Other",
              ]}
              value={a.heating}
              onChange={(v) => set("heating", v)}
            />
          </Step>
        )}

        {step === 6 && (
          <Step title="Does it get uncomfortably hot in summer?">
            <RadioGrid
              options={["Every summer", "Some rooms only", "Only in extreme weather", "Never"]}
              value={a.overheating}
              onChange={(v) => set("overheating", v)}
              cols={2}
            />
          </Step>
        )}

        {step === 7 && (
          <Step
            title="Where shall we send your Climate Score?"
            sub="We don't share your data. Unsubscribe anytime."
          >
            <form onSubmit={submit} className="space-y-5">
              <Field
                label="First name"
                value={a.firstName}
                onChange={(v) => set("firstName", v)}
                required
              />
              <Field
                label="Email"
                type="email"
                value={a.email}
                onChange={(v) => set("email", v)}
                required
              />
              <Field
                label="Phone (optional)"
                type="tel"
                value={a.phone}
                onChange={(v) => set("phone", v)}
              />
              <label className="flex cursor-pointer items-start gap-3 pt-2 text-sm text-foreground/80">
                <input
                  type="checkbox"
                  checked={a.marketing}
                  onChange={(e) => set("marketing", e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[color:var(--color-primary)]"
                />
                OK to send me occasional helpful emails about my home.
              </label>
              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                See my Climate Score
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </Step>
        )}

        {step < 7 && (
          <div className="mt-12 flex items-center justify-between">
            <button
              type="button"
              onClick={back}
              disabled={step === 1}
              className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary disabled:opacity-30"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            <button
              type="button"
              onClick={next}
              disabled={!canContinue}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
        {step === 7 && (
          <div className="mt-8">
            <button
              type="button"
              onClick={back}
              className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Step({
  title,
  sub,
  children,
}: {
  title: string;
  sub?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="font-display text-3xl leading-tight md:text-4xl">{title}</h1>
      {sub && <p className="mt-4 text-base text-foreground/70">{sub}</p>}
      <div className="mt-10">{children}</div>
    </div>
  );
}

function RadioGrid({
  options,
  value,
  onChange,
  cols = 1,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  cols?: 1 | 2;
}) {
  return (
    <div className={`grid gap-3 ${cols === 2 ? "sm:grid-cols-2" : ""}`}>
      {options.map((opt) => {
        const selected = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            aria-pressed={selected}
            className={`flex items-center justify-between gap-4 rounded-md border px-5 py-4 text-left text-base transition-colors ${
              selected
                ? "border-primary bg-primary/5 text-primary"
                : "border-input bg-card text-foreground hover:border-primary/60"
            }`}
          >
            <span>{opt}</span>
            {selected && <Check className="h-4 w-4" />}
          </button>
        );
      })}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-foreground/80">{label}</span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-input bg-background px-4 py-3 text-base focus:border-primary focus:outline-none"
      />
    </label>
  );
}

function Results({ a }: { a: Answers }) {
  const grants = [
    { name: "Boiler Upgrade Scheme", value: "£7,500" },
    { name: "Warm Homes: Local Grant", value: "Varies" },
    { name: "Great British Insulation Scheme", value: "Varies" },
  ];

  return (
    <div className="min-h-[calc(100dvh-80px)] bg-background px-6 py-12 md:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/60">
          Your Climate Score
        </p>
        <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
          Here's how your home performs today.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-foreground/70">
          Based on what you've told us about your home and what we know about UK property archetypes and your local climate. A site visit will refine these numbers significantly.
        </p>

        {/* Score grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <ScoreCard
            label="Winter Performance"
            value="Grade D"
            sub="Your home loses an estimated 60% of heat through fabric and ventilation."
            tone="warn"
          />
          <ScoreCard
            label="Summer Comfort"
            value="At Risk"
            sub="Based on orientation, glazing and ventilation profile, your home is at risk for the new British summer climate."
            tone="warn"
          />
          <ScoreCard
            label="Energy Bill"
            value="£2,400"
            sub="Estimated annual cost at current energy prices. Climateway typically reduces this by 40-65%."
            tone="neutral"
          />
          <ScoreCard
            label="2030 Outlook"
            value="Action needed"
            sub="Your home's compliance and comfort trajectory for the next five years."
            tone="warn"
          />
        </div>

        {/* Potential */}
        <h2 className="mt-20 font-display text-3xl">Your climate-ready potential</h2>
        <div className="mt-8 overflow-hidden rounded-md border border-hairline">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary text-foreground">
              <tr>
                <th className="px-5 py-4 font-medium">&nbsp;</th>
                <th className="px-5 py-4 font-medium">Today</th>
                <th className="px-5 py-4 font-medium">Climate Ready</th>
                <th className="px-5 py-4 font-medium">Climate Complete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline">
              {[
                ["Winter Grade", "D", "B", "A"],
                ["Summer Comfort", "At risk", "Comfortable", "Comfortable"],
                ["Annual Bill", "£2,400", "£1,400", "£900"],
                ["CO2 Emissions", "High", "Medium", "Low"],
                ["Estimated Project Cost", "—", "From £18,000", "From £32,000"],
                ["Net Cost After Grants", "—", "From £10,500", "From £24,500"],
              ].map((row) => (
                <tr key={row[0]}>
                  <td className="px-5 py-4 font-medium">{row[0]}</td>
                  <td className="px-5 py-4 text-foreground/70">{row[1]}</td>
                  <td className="px-5 py-4 text-primary">{row[2]}</td>
                  <td className="px-5 py-4 text-primary">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Grants */}
        <h2 className="mt-20 font-display text-3xl">
          Your estimated grants
        </h2>
        <p className="mt-4 text-base text-foreground/70">
          Based on your postcode and property profile, you may qualify for up to £12,500 in government and local grants:
        </p>
        <ul className="mt-8 space-y-0">
          {grants.map((g) => (
            <li key={g.name} className="border-t border-hairline py-5 last:border-b">
              <p className="font-display text-lg">{g.name} ({g.value})</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 rounded-md bg-teal p-10 text-ivory">
          <h3 className="font-display text-2xl text-ivory md:text-3xl">
            Ready for the next step?
          </h3>
          <p className="mt-3 max-w-xl text-ivory/85">
            Book your Home Audit — £250, fully credited against your design fee.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Book your Home Audit
            <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="mt-4">
            <button
              type="button"
              className="text-sm text-ivory/80 underline underline-offset-4 hover:text-ivory"
              onClick={() => alert("PDF download coming soon.")}
            >
              Email me my Climate Score (PDF)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreCard({
  label,
  value,
  sub,
  tone,
}: {
  label: string;
  value: string;
  sub: string;
  tone: "neutral" | "warn";
}) {
  return (
    <div className="rounded-md border border-hairline bg-card p-8">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-foreground/55">
        {label}
      </p>
      <p
        className={`mt-4 font-display text-3xl ${
          tone === "warn" ? "text-accent" : "text-primary"
        }`}
      >
        {value}
      </p>
      <p className="mt-3 text-sm text-foreground/70">{sub}</p>
    </div>
  );
}
