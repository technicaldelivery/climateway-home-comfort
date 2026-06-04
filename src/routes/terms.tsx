import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Climateway" },
      { name: "description", content: "Climateway terms of service." },
      { property: "og:title", content: "Terms of Service — Climateway" },
      { property: "og:description", content: "Climateway terms of service." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Section>
      <h1 className="font-display text-5xl leading-tight">Terms of Service</h1>
      <p className="mt-8 max-w-2xl text-lg text-foreground/75">
        Our Terms of Service is being finalised. For urgent enquiries, contact{" "}
        <a className="underline" href="mailto:hello@climateway.com">
          hello@climateway.com
        </a>
        .
      </p>
    </Section>
  );
}
