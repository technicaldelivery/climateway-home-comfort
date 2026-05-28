import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/leads")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          // Placeholder — wire to CRM / email later.
          console.log("[leads] new submission", body);
          return Response.json({ ok: true });
        } catch (err) {
          console.error("[leads] error", err);
          return Response.json({ ok: false }, { status: 400 });
        }
      },
    },
  },
});
