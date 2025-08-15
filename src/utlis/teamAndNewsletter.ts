export type ComposedEmail = { subject: string; message: string };

export const companyFooter = `
Best regards,
Estatein Real Estate Company

Headquarters:
123 Estatein Plaza, City Center
Email: info@estatein.com
Phone: 1234567890

Regional Office:
456 Urban Avenue, Downtown District, Metropolis
Email: info@estatein.com
Phone: +1 (123) 628-7890
`.trim();

const S = (v: unknown) => String(v ?? "").trim();
const bullet = (label: string, value?: string) => {
  const v = S(value);
  return v ? `• ${label}: ${v}` : "";
};
const join = (lines: string[]) => lines.filter(Boolean).join("\n");

/* =========== Team Card =========== */
export function composeTeamCardEmail(recipientName: string): { subject: string; message: string } {
  const name = (recipientName || "Mr. Alex Morgan").trim();

  const subject = `New Greeting for ${name} — Estatein`;

  const message =
`Hello ${name},

This is a courtesy notice to inform you that a new greeting has been addressed to you via the Team Card on Estatein. Our team monitors these greetings to ensure timely follow-up and a smooth communication experience.

If you would like our staff to respond on your behalf or schedule a quick call, please reply to this email with your preferred time window.

Best regards,
Estatein Real Estate Company

Headquarters:
123 Estatein Plaza, City Center
Email: info@estatein.com
Phone: 1234567890

Regional Office:
456 Urban Avenue, Downtown District, Metropolis
Email: info@estatein.com
Phone: +1 (123) 628-7890`;

  return { subject, message };
}
/* =========== Newsletter =========== */
export function composeNewsletterEmail(input: {
  subscriberEmail: string;
  siteName?: string;
  note?: string;
}): ComposedEmail {
  const email = S(input.subscriberEmail);
  const siteName = S(input.siteName) || "Your Website";
  const note = S(input.note);

  const subject = `New Newsletter Subscription`;
  const intro = `A new user has subscribed to your newsletter on ${siteName}.`;
  const summary = [bullet("Subscriber Email", email)].filter(Boolean).join("\n");

  const closing = [
    "Tip: Add this email to your mailing list or trigger a welcome sequence.",
    "",
    companyFooter,
  ].join("\n");

  const body = join([
    "Hello,",
    "",
    intro,
    "",
    summary,
    note ? `\nDetails:\n${note}\n` : "",
    closing,
  ]);

  return { subject, message: body };
}
