import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";

export const Route = createFileRoute("/grants")({
  head: () => ({
    meta: [
      { title: "Grants — Climateway" },
      {
        name: "description",
        content:
          "Government grants and support available for Climateway projects, including the Boiler Upgrade Scheme and Warm Homes Plan.",
      },
      { property: "og:title", content: "Grants — Climateway" },
      {
        property: "og:description",
        content:
          "Government grants and support available for Climateway projects.",
      },
    ],
    links: [{ rel: "canonical", href: "/grants" }],
  }),
  component: GrantsPage,
});

function GrantsPage() {
  return (
    <Section>
      <h1 className="font-display text-5xl leading-tight">Grants</h1>
      <p className="mt-8 max-w-2xl text-lg text-foreground/75">
        A detailed breakdown of grant eligibility — Boiler Upgrade Scheme,
        Warm Homes Plan, ECO4 and regional top-ups — is being finalised. For
        urgent enquiries, contact{" "}
        <a className="underline" href="mailto:hello@climateway.com">
          hello@climateway.com
        </a>
        .
      </p>
    </Section>
  );
}
