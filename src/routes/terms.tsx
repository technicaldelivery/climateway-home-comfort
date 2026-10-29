import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { name: "twitter:title", content: "Climateway — Climate-ready homes for British weather — Terms" },
      { name: "twitter:description", content: "Climateway terms of service." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Climateway — Climate-ready homes for British weather — Terms" },
      { name: "description", content: "Climateway terms of service." },
      { property: "og:title", content: "Climateway — Climate-ready homes for British weather — Terms" },
      { property: "og:description", content: "Climateway terms of service." },
    ],
    links: [{ rel: "canonical", href: "https://climateway-home-comfort.lovable.app/terms" }],
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
