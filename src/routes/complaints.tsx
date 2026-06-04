import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";

export const Route = createFileRoute("/complaints")({
  head: () => ({
    meta: [
      { title: "Complaints Procedure — Climateway" },
      { name: "description", content: "Climateway complaints procedure." },
      { property: "og:title", content: "Complaints Procedure — Climateway" },
      { property: "og:description", content: "Climateway complaints procedure." },
    ],
    links: [{ rel: "canonical", href: "/complaints" }],
  }),
  component: ComplaintsPage,
});

function ComplaintsPage() {
  return (
    <Section>
      <h1 className="font-display text-5xl leading-tight">Complaints Procedure</h1>
      <p className="mt-8 max-w-2xl text-lg text-foreground/75">
        Our Complaints Procedure is being finalised. For urgent enquiries, contact{" "}
        <a className="underline" href="mailto:hello@climateway.com">
          hello@climateway.com
        </a>
        .
      </p>
    </Section>
  );
}
