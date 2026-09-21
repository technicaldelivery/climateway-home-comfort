import { Resend } from "resend";
import { z } from "zod";

import { getServerConfig } from "./config.server";

const contactLeadSchema = z.object({
  kind: z.literal("contact"),
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  postcode: z.string().trim().max(20).optional().default(""),
  message: z.string().trim().min(1).max(5000),
});

const scoreLeadSchema = z.object({
  kind: z.literal("score"),
  firstName: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().max(40).optional().default(""),
  postcode: z.string().trim().min(1).max(20),
  property: z.string().trim().max(100),
  age: z.string().trim().max(100),
  size: z.string().trim().max(100),
  heating: z.string().trim().max(100),
  overheating: z.string().trim().max(100),
  marketing: z.boolean().optional().default(false),
});

export const leadSchema = z.discriminatedUnion("kind", [
  contactLeadSchema,
  scoreLeadSchema,
]);

export type Lead = z.infer<typeof leadSchema>;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function row(label: string, value: string) {
  const safe = escapeHtml(value || "—");
  return `<tr>
    <td style="padding:8px 12px 8px 0;color:#5b6573;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td>
    <td style="padding:8px 0;color:#1F2937;">${safe.replaceAll("\n", "<br/>")}</td>
  </tr>`;
}

function contactEmail(lead: z.infer<typeof contactLeadSchema>) {
  return {
    subject: `Contact form — ${lead.name}`,
    text: [
      "New contact form submission",
      "",
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      `Postcode: ${lead.postcode || "—"}`,
      "",
      "Message:",
      lead.message,
    ].join("\n"),
    html: `<div style="font-family:Inter,system-ui,sans-serif;font-size:16px;line-height:1.5;color:#1F2937;">
      <p style="margin:0 0 16px;">New contact form submission</p>
      <table style="border-collapse:collapse;">
        ${row("Name", lead.name)}
        ${row("Email", lead.email)}
        ${row("Postcode", lead.postcode)}
        ${row("Message", lead.message)}
      </table>
    </div>`,
  };
}

function scoreEmail(lead: z.infer<typeof scoreLeadSchema>) {
  return {
    subject: `Climate Score — ${lead.firstName} (${lead.postcode})`,
    text: [
      "New Climate Score submission",
      "",
      `Name: ${lead.firstName}`,
      `Email: ${lead.email}`,
      `Phone: ${lead.phone || "—"}`,
      `Postcode: ${lead.postcode}`,
      `Property: ${lead.property}`,
      `Age: ${lead.age}`,
      `Size: ${lead.size}`,
      `Heating: ${lead.heating}`,
      `Overheating: ${lead.overheating}`,
      `Marketing opt-in: ${lead.marketing ? "Yes" : "No"}`,
    ].join("\n"),
    html: `<div style="font-family:Inter,system-ui,sans-serif;font-size:16px;line-height:1.5;color:#1F2937;">
      <p style="margin:0 0 16px;">New Climate Score submission</p>
      <table style="border-collapse:collapse;">
        ${row("Name", lead.firstName)}
        ${row("Email", lead.email)}
        ${row("Phone", lead.phone)}
        ${row("Postcode", lead.postcode)}
        ${row("Property", lead.property)}
        ${row("Built", lead.age)}
        ${row("Size", lead.size)}
        ${row("Heating", lead.heating)}
        ${row("Summer overheating", lead.overheating)}
        ${row("Marketing opt-in", lead.marketing ? "Yes" : "No")}
      </table>
    </div>`,
  };
}

export async function sendLeadEmail(lead: Lead) {
  const { resendApiKey, resendFrom, leadsTo } = getServerConfig();
  if (!resendApiKey) {
    throw new Error("Missing RESEND_API_KEY");
  }

  const content =
    lead.kind === "contact" ? contactEmail(lead) : scoreEmail(lead);
  const resend = new Resend(resendApiKey);
  const { error } = await resend.emails.send({
    from: resendFrom,
    to: leadsTo,
    replyTo: lead.email,
    subject: content.subject,
    text: content.text,
    html: content.html,
  });

  if (error) {
    throw new Error(error.message);
  }
}
