import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/how-it-works", label: "How it Works" },
  { to: "/score", label: "Your Score" },
  { to: "/pricing", label: "Pricing" },
  { to: "/grants", label: "Grants" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

const scoreCtaClass =
  "items-center justify-center whitespace-nowrap rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const close = () => {
      if (mq.matches) setOpen(false);
    };
    close();
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors ${
        scrolled
          ? "bg-background/90 backdrop-blur border-b border-border"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:py-5">
        <Link
          to="/"
          className="shrink-0 font-display text-xl font-semibold tracking-tight text-primary"
          aria-label="Climateway home"
        >
          Climateway
        </Link>

        <nav className="hidden items-center gap-8 xl:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="whitespace-nowrap text-sm text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/score" className={`${scoreCtaClass} inline-flex py-2`}>
            Get your Climate Score
          </Link>
        </nav>

        <div className="flex items-center gap-3 xl:hidden">
          <Link to="/score" className={`${scoreCtaClass} hidden py-2 sm:inline-flex`}>
            Get your Climate Score
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-foreground"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground/90"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/score"
              onClick={() => setOpen(false)}
              className={`${scoreCtaClass} mt-3 inline-flex py-3 text-base sm:hidden`}
            >
              Get your Climate Score
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
