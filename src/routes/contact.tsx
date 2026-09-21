import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Clock } from "lucide-react";
import { Section, Eyebrow } from "@/components/section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Climateway" },
      {
        name: "description",
        content:
          "Talk to Climateway. Most enquiries are answered within 4 working hours.",
      },
      { property: "og:title", content: "Contact — Climateway" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    postcode: "",
    message: "",
  });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "contact", ...form }),
      });
      if (!res.ok) throw new Error("send failed");
      setSent(true);
    } catch (err) {
      console.error(err);
      setError(
        "Something went wrong sending your message. Please try again or email hello@climateway.co.uk.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <Section>
        <Eyebrow>Contact</Eyebrow>
        <h1 className="max-w-3xl font-display text-5xl leading-tight md:text-6xl">
          Talk to us.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/75">
          Most enquiries are answered within 4 working hours.
        </p>
      </Section>

      <Section>
        <div className="grid gap-16 border-t border-hairline pt-12 md:grid-cols-[1fr_1fr]">
          <div>
            {sent ? (
              <div className="rounded-md border border-primary/30 bg-primary/5 p-8">
                <h2 className="font-display text-2xl text-primary">
                  Thanks — we'll be in touch.
                </h2>
                <p className="mt-3 text-base text-foreground/80">
                  We've got your message and will reply within 4 working hours.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <TextField
                  label="Your name"
                  value={form.name}
                  onChange={(v) => setForm((p) => ({ ...p, name: v }))}
                  required
                />
                <TextField
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm((p) => ({ ...p, email: v }))}
                  required
                />
                <TextField
                  label="Postcode"
                  value={form.postcode}
                  onChange={(v) => setForm((p) => ({ ...p, postcode: v }))}
                />
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-foreground/80">
                    How can we help?
                  </span>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    className="w-full rounded-md border border-input bg-background px-4 py-3 text-base focus:border-primary focus:outline-none"
                  />
                </label>
                {error ? (
                  <p className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                ) : null}
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-medium text-accent-foreground hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Send message"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-8 text-base">
            <Info
              icon={Mail}
              title="Email"
              body={
                <a className="hover:text-primary" href="mailto:hello@climateway.co.uk">
                  hello@climateway.co.uk
                </a>
              }
            />
            <Info
              icon={MapPin}
              title="Studio"
              body={
                <>
                  Climateway Ltd
                  <br />
                  1 Example Street
                  <br />
                  London EC1A 1AA
                </>
              }
            />
            <Info
              icon={Clock}
              title="Opening hours"
              body={
                <>
                  Mon–Fri, 9:00–18:00
                  <br />
                  Saturday by appointment
                </>
              }
            />
          </aside>
        </div>
      </Section>

      <Section tone="teal">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl text-ivory md:text-5xl">
            Or skip ahead — get your Climate Score.
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

function TextField({
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

function Info({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="border-t border-hairline pt-6">
      <div className="flex items-center gap-3 text-primary">
        <Icon className="h-5 w-5" />
        <p className="text-xs font-medium uppercase tracking-[0.16em]">{title}</p>
      </div>
      <p className="mt-3 text-base text-foreground/85">{body}</p>
    </div>
  );
}
