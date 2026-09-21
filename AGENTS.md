## Learned User Preferences
- Clickable controls (buttons, accordion triggers, menu toggles) should show a pointer cursor on hover.
- Implement production features that touch shared layout, forms, or analytics in this repo rather than Lovable.
- On compact viewports, switch to the hamburger before nav labels wrap; keep “Get your Climate Score” beside it until small screens, then move the CTA into the menu.

## Learned Workspace Facts
- Production is https://climateway.co.uk; Netlify auto-deploys `main` from GitHub `technicaldelivery/climateway-home-comfort`, and Lovable also pushes to that branch.
- The Climateway Netlify site is on the Technical Delivery account; the default Netlify CLI login may be a different account that does not include this site.
- Contact and Climate Score forms POST to `/api/leads` and email `hello@climateway.co.uk` via Resend, with Reply-To set to the submitter.
- Resend cannot send from `climateway.co.uk` until that domain is verified and the sending key is granted access.
- Google Tag Manager (`GTM-NBPP77K6`) loads only after analytics consent; `/privacy` is still placeholder copy.
- Resend env vars (`RESEND_API_KEY`, `RESEND_FROM`, `LEADS_TO_EMAIL`) live in a 1Password Environment named `climateway-home-comfort` (Developer → Environments), locally in `.env.local`, and on Netlify.
- The app uses bun and TanStack Start.
