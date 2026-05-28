import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export function SiteFooter() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Climateway",
    description:
      "Whole-home climate adaptation for British homes — heating, cooling, ventilation and controls designed and installed as one project.",
    areaServed: ["Greater London", "South East England"],
    telephone: "+44 20 0000 0000",
    email: "hello@climateway.co.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 Example Street",
      addressLocality: "London",
      postalCode: "EC1A 1AA",
      addressCountry: "GB",
    },
    url: "/",
  };

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link to="/" className="font-display text-2xl font-semibold">
              Climateway
            </Link>
            <p className="mt-4 max-w-xs text-sm text-ivory/70">
              Climate-ready homes for the way Britain lives now.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Instagram" className="text-ivory/70 hover:text-ivory">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-ivory/70 hover:text-ivory">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-ivory/70 hover:text-ivory">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <FooterCol
            title="Company"
            links={[
              { to: "/about", label: "About" },
              { to: "/how-it-works", label: "Process" },
              { to: "/pricing", label: "Pricing" },
              { to: "/contact", label: "Contact" },
            ]}
          />
          <FooterCol
            title="Resources"
            links={[
              { to: "/score", label: "Climate Score" },
              { to: "/journal", label: "Journal" },
              { to: "/#faq", label: "FAQ" },
              { to: "/journal", label: "Grant Guide" },
            ]}
          />
          <FooterCol
            title="Legal"
            links={[
              { to: "/", label: "Privacy" },
              { to: "/", label: "Terms" },
              { to: "/", label: "Complaints" },
            ]}
          />
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-ivory/15 pt-8 text-xs text-ivory/60 md:flex-row md:items-center md:justify-between">
          <p>
            Climateway Ltd, registered in England. Company no. 00000000.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-2">
            <span>MCS Certified</span>
            <span>TrustMark</span>
            <span>PAS 2035</span>
            <span>Which? Trusted Trader</span>
          </p>
        </div>
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-ivory">
        {title}
      </h2>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-ivory/70 hover:text-ivory">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
