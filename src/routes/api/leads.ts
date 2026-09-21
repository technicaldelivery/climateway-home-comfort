import { createFileRoute } from "@tanstack/react-router";

import { leadSchema, sendLeadEmail } from "@/lib/leads.server";

export const Route = createFileRoute("/api/leads")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const json: unknown = await request.json();
          const parsed = leadSchema.safeParse(json);
          if (!parsed.success) {
            return Response.json({ ok: false, error: "Invalid submission" }, { status: 400 });
          }

          await sendLeadEmail(parsed.data);
          return Response.json({ ok: true });
        } catch (err) {
          console.error("[leads] error", err);
          return Response.json({ ok: false, error: "Could not send" }, { status: 500 });
        }
      },
    },
  },
});
