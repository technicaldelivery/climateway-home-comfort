export const STORAGE_KEY = "climateway-privacy-consent";
export const GTM_ID = "GTM-NBPP77K6";
export const OPEN_CONSENT_EVENT = "climateway-open-privacy-consent";
export type ConsentStatus = "accepted" | "declined";

/** Runs in <head> before first paint so a stored choice never flashes the banner. */
export const consentBootstrapScript = `try{var r=localStorage.getItem(${JSON.stringify(STORAGE_KEY)});if(!r)throw 0;var p=JSON.parse(r);if(p.status==="accepted"||p.status==="declined")document.documentElement.setAttribute("data-privacy-consent",p.status)}catch(e){}`;

export function syncConsentDataset(status: ConsentStatus | null) {
  if (typeof document === "undefined") return;
  if (status) document.documentElement.setAttribute("data-privacy-consent", status);
  else document.documentElement.removeAttribute("data-privacy-consent");
}

type ConsentRecord = {
  status: ConsentStatus;
  at: string;
};

function isConsentRecord(value: unknown): value is ConsentRecord {
  if (!value || typeof value !== "object") return false;
  const status = (value as ConsentRecord).status;
  return status === "accepted" || status === "declined";
}

export function readConsent(): ConsentStatus | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    return isConsentRecord(parsed) ? parsed.status : null;
  } catch {
    return null;
  }
}

export function writeConsent(status: ConsentStatus) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ status, at: new Date().toISOString() } satisfies ConsentRecord),
  );
  syncConsentDataset(status);
}

export function openPrivacyConsent() {
  if (typeof window === "undefined") return;
  syncConsentDataset(null);
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}

export function loadGtm() {
  if (typeof window === "undefined") return;
  const w = window as Window & { dataLayer?: unknown[] };
  if (document.getElementById("gtm-script")) return;

  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const script = document.createElement("script");
  script.id = "gtm-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}
