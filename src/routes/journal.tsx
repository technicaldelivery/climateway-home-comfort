import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/section";
const heroHome =
  "https://images.unsplash.com/photo-1640797878742-dccaa23e7bfc?fm=jpg&q=85&w=1600&auto=format&fit=crop";
const homeVictorian =
  "https://images.unsplash.com/photo-1712869965218-3128c2eef88c?fm=jpg&q=85&w=1600&auto=format&fit=crop";
const homeKitchen =
  "https://images.unsplash.com/photo-1680965585463-386646047473?fm=jpg&q=85&w=1600&auto=format&fit=crop";
const homeBedroom =
  "https://images.unsplash.com/photo-1714153760214-5e86aa688fc3?fm=jpg&q=85&w=1600&auto=format&fit=crop";
const imgSpacejoy =
  "https://images.unsplash.com/photo-1633505765486-e404bbbec654?fm=jpg&q=85&w=1600&auto=format&fit=crop";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Climateway" },
      {
        name: "description",
        content:
          "Long-form thinking on climate-ready homes — heating, cooling, bills, grants, and the homes we're working on.",
      },
      { property: "og:title", content: "Journal — Climateway" },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: JournalPage,
});

const featured = {
  img: heroHome,
  category: "Climate & Comfort",
  title: "Why every British home will need cooling by 2035.",
  excerpt:
    "London now has more days above 30°C than Madrid did in 1990. We look at what that means for the homes we already live in.",
  date: "May 2026",
};

const posts = [
  {
    img: homeVictorian,
    category: "Heating",
    title: "Heat pumps in a Victorian terrace — what actually works.",
    excerpt:
      "Six projects, three boroughs, and the design decisions that made the difference.",
    date: "May 2026",
  },
  {
    img: homeKitchen,
    category: "Bills & Grants",
    title: "Everything you can claim in London in 2026.",
    excerpt:
      "The grants that exist, the ones that are quietly disappearing, and how to stack them.",
    date: "Apr 2026",
  },
  {
    img: homeBedroom,
    category: "Cooling",
    title: "Quiet cooling for a bedroom that overheats.",
    excerpt:
      "Why split air-con isn't always the answer, and what to do instead.",
    date: "Apr 2026",
  },
  {
    img: imgSpacejoy,
    category: "Home Stories",
    title: "A 1930s semi in St Albans, twelve months on.",
    excerpt:
      "We revisit a Climate Complete project to see how the modelled savings held up.",
    date: "Mar 2026",
  },
];

function JournalPage() {
  return (
    <>
      <Section>
        <Eyebrow>Journal</Eyebrow>
        <h1 className="max-w-3xl font-display text-5xl leading-tight md:text-6xl">
          Thinking on climate-ready homes.
        </h1>
      </Section>

      <Section>
        <Link
          to="/journal"
          className="group grid gap-10 border-t border-hairline pt-12 md:grid-cols-[3fr_2fr] md:gap-16"
        >
          <img
            src={featured.img}
            alt={featured.title}
            loading="lazy"
            width={1600}
            height={1280}
            className="aspect-[4/3] w-full rounded-md object-cover"
          />
          <div className="self-end">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
              {featured.category}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight group-hover:text-primary">
              {featured.title}
            </h2>
            <p className="mt-6 text-base text-foreground/75">{featured.excerpt}</p>
            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-foreground/55">
              {featured.date}
            </p>
          </div>
        </Link>
      </Section>

      <Section>
        <div className="grid gap-12 border-t border-hairline pt-12 md:grid-cols-2 md:gap-16">
          {posts.map((p) => (
            <Link key={p.title} to="/journal" className="group">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={768}
                className="aspect-[4/3] w-full rounded-md object-cover"
              />
              <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-primary">
                {p.category}
              </p>
              <h3 className="mt-3 font-display text-2xl leading-snug group-hover:text-primary">
                {p.title}
              </h3>
              <p className="mt-3 text-base text-foreground/75">{p.excerpt}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-foreground/55">
                {p.date}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="teal">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl md:text-5xl">
            Curious about your own home?
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
