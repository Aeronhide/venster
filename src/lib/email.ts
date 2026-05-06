import nodemailer from 'nodemailer';

const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: false,
  // Only enable AUTH when credentials are provided — local Mailpit etc. don't need auth.
  ...(SMTP_USER && SMTP_PASS ? { auth: { user: SMTP_USER, pass: SMTP_PASS } } : {}),
  tls: { rejectUnauthorized: false },
});

const FORM_LABELS: Record<string, string> = {
  callback: 'Terugbelverzoek',
  catalog: 'Catalogusaanvraag',
  installation: 'Inmeting aanvraag',
  pvc_hero: 'PVC Ramen — Banner',
  pvc_consult: 'PVC Ramen — Gratis consult',
  pvc_offer: 'PVC Ramen — Offerte',
  pvc_calculator: 'PVC Ramen — Calculator',
};

// Minimal HTML escape for values rendered into email markup.
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function sendContactEmail(params: {
  formType: string;
  email: string;
  phone: string;
  lang: string;
  clientIP: string;
  submittedAt: Date;
  pageUrl?: string;
  source?: string;
}): Promise<void> {
  const label = FORM_LABELS[params.formType] ?? params.formType;
  const subject = `[Venstervalent.nl] ${label} — Website bezoeker`;
  const ts = params.submittedAt.toISOString().replace('T', ' ').slice(0, 19);

  const emailRow = params.email
    ? `<p><strong>E-mail:</strong> <a href="mailto:${escapeHtml(params.email)}">${escapeHtml(params.email)}</a></p>`
    : '';

  const sourceRow = params.source
    ? `<p><strong>Bron (element):</strong> ${escapeHtml(params.source)}</p>`
    : '';

  const pageUrlRow = params.pageUrl
    ? `<p><strong>Pagina:</strong> <a href="${escapeHtml(params.pageUrl)}">${escapeHtml(params.pageUrl)}</a></p>`
    : '';

  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;color:#333;line-height:1.6">
<div style="max-width:600px;margin:0 auto;padding:20px">
  <div style="background:#1a365d;color:#fff;padding:20px;border-radius:8px 8px 0 0">
    <h2 style="margin:0;font-size:18px">${escapeHtml(subject)}</h2>
  </div>
  <div style="padding:20px;background:#f9f9f9">
    ${emailRow}
    <p><strong>Telefoon:</strong> <a href="tel:${escapeHtml(params.phone)}">${escapeHtml(params.phone)}</a></p>
    <p><strong>Formulier:</strong> ${escapeHtml(label)}</p>
    <p><strong>Taal:</strong> ${escapeHtml(params.lang)}</p>
    ${sourceRow}
    ${pageUrlRow}
  </div>
  <div style="padding:15px;background:#eee;font-size:12px;color:#666;border-radius:0 0 8px 8px">
    <p style="margin:0">IP: ${escapeHtml(params.clientIP)} | ${ts}</p>
    <p style="margin:4px 0 0">Venstervalent.nl</p>
  </div>
</div>
</body></html>`;

  const textLines = [
    subject,
    '',
    `Telefoon: ${params.phone}`,
    `E-mail: ${params.email || '-'}`,
    params.source ? `Bron: ${params.source}` : null,
    params.pageUrl ? `Pagina: ${params.pageUrl}` : null,
    '',
    `IP: ${params.clientIP} | ${ts}`,
  ].filter((l): l is string => l !== null);
  const text = textLines.join('\n');

  await transporter.sendMail({
    from: `"Venstervalent.nl" <${process.env.MAIL_FROM}>`,
    to: process.env.MAIL_TO,
    subject,
    html,
    text,
  });
}

export function notifyBitrix(params: {
  title: string;
  email: string;
  phone: string;
  comments: string;
}): Promise<void> {
  const base = process.env.BITRIX_WEBHOOK_BASE;
  if (!base) return Promise.resolve();

  return fetch(`${base}/crm.lead.add.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: {
        TITLE: params.title.slice(0, 255),
        COMMENTS: params.comments,
        SOURCE_ID: 'WEB',
        OPENED: 'Y',
        ...(params.email && { EMAIL: [{ VALUE: params.email, VALUE_TYPE: 'WORK' }] }),
        ...(params.phone && { PHONE: [{ VALUE: params.phone, VALUE_TYPE: 'WORK' }] }),
      },
      params: { REGISTER_SONET_EVENT: 'N' },
    }),
    signal: AbortSignal.timeout(20_000),
  }).then(() => void 0);
}
