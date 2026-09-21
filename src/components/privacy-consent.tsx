import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

import {
  OPEN_CONSENT_EVENT,
  loadGtm,
  readConsent,
  writeConsent,
  type ConsentStatus,
} from "@/lib/privacy-consent";

export function PrivacyConsent() {
  const [choice, setChoice] = useState<ConsentStatus | null | "unknown">("unknown");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    setChoice(stored);
    if (stored === "accepted") loadGtm();

    function onReopen() {
      setOpen(true);
    }
    window.addEventListener(OPEN_CONSENT_EVENT, onReopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, onReopen);
  }, []);

  function decide(status: ConsentStatus) {
    writeConsent(status);
    setChoice(status);
    setOpen(false);
    if (status === "accepted") loadGtm();
  }

  if (!open && (choice === "accepted" || choice === "declined")) return null;

  return (
    <div
      data-privacy-banner
      className="fixed right-4 bottom-4 z-[60] w-[calc(100%-2rem)] max-w-lg md:right-6 md:bottom-6"
      role="dialog"
      aria-modal="false"
      aria-labelledby="privacy-consent-title"
      aria-describedby="privacy-consent-copy"
    >
      <div className="rounded-md border border-hairline bg-background p-6 shadow-[0_20px_60px_-20px_rgb(31_41_55_/_0.35)] md:p-8">
        <p
          id="privacy-consent-title"
          className="font-display text-2xl text-foreground"
        >
          Your privacy
        </p>
        <p
          id="privacy-consent-copy"
          className="mt-3 text-sm leading-relaxed text-foreground/75 md:text-base"
        >
          We use cookies to understand how the site is used and to improve it.
          You can accept analytics cookies or continue with essentials only.
          Read our{" "}
          <Link
            to="/privacy"
            className="text-primary underline underline-offset-4 hover:opacity-80"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="inline-flex cursor-pointer items-center justify-center rounded-md border border-input px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary"
          >
            Essentials only
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="inline-flex cursor-pointer items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
