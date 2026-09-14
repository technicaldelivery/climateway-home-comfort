import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OfferLandingPage({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string[];
  image: string;
  imageAlt: string;
}) {
  return (
    <>
      <section className="bg-background px-6 py-20 md:py-[120px]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
            <h1 className="mt-5 max-w-xl font-display text-5xl font-medium leading-tight md:text-6xl">{title}</h1>
            <div className="mt-7 max-w-[60ch] space-y-4 text-lg leading-relaxed text-foreground/75">
              {intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <Button asChild size="lg" className="mt-10 h-14 bg-accent px-7 text-base text-accent-foreground hover:bg-accent/90">
              <Link to="/score">
                Get your Climate Score
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <img
            src={image}
            alt={imageAlt}
            width={1200}
            height={1500}
            className="aspect-[4/5] w-full rounded-md object-cover"
          />
        </div>
      </section>
    </>
  );
}