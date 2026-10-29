import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { name: "twitter:title", content: "Climateway — Climate-ready homes for British weather — Privacy" },
      { name: "twitter:description", content: "Climateway privacy policy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Climateway — Climate-ready homes for British weather — Privacy" },
      { name: "description", content: "Climateway privacy policy." },
      { property: "og:title", content: "Climateway — Climate-ready homes for British weather — Privacy" },
      { property: "og:description", content: "Climateway privacy policy." },
    ],
    links: [{ rel: "canonical", href: "https://climateway-home-comfort.lovable.app/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Section>
      <h1 className="font-display text-5xl leading-tight">Privacy Policy</h1>
      <p className="mt-8 max-w-2xl text-lg text-foreground/75">
        Our Privacy Policy is being finalised. For urgent enquiries, contact{" "}
        <a className="underline" href="mailto:hello@climateway.com">
          hello@climateway.com
        </a>
        .
      </p>
    </Section>
  );
}
