import type { NextRequest } from 'next/server';
import { sendContactEmail, notifyBitrix } from '@/lib/email';

const rateLimitMap = new Map<string, { count: number; windowStart: number }>();
const LIMIT = Number(process.env.RATE_LIMIT_MAX ?? 10);
const WINDOW = Number(process.env.RATE_LIMIT_WINDOW_MS ?? 3_600_000);

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.windowStart > WINDOW) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return true;
  }
  if (entry.count >= LIMIT) return false;
  entry.count++;
  return true;
}

const VALID_TYPES = ['callback', 'catalog', 'installation'] as const;
const FORM_LABELS: Record<string, string> = {
  callback: 'Terugbelverzoek',
  catalog: 'Catalogusaanvraag',
  installation: 'Inmeting aanvraag',
};

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    '0.0.0.0';

  if (!checkRateLimit(ip))
    return Response.json({ success: false, code: 'rate_limited' }, { status: 429 });

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, code: 'invalid_json' }, { status: 400 });
  }

  const { form_type = '', email = '', phone = '', lang = '', website = '' } = body;

  if (website) return Response.json({ success: true });

  if (!VALID_TYPES.includes(form_type as (typeof VALID_TYPES)[number]))
    return Response.json({ success: false, code: 'invalid_form_type' }, { status: 400 });

  const cleanPhone = phone.trim();
  if (!cleanPhone)
    return Response.json({ success: false, code: 'phone_required' }, { status: 422 });

  const cleanEmail = email.trim();
  if (cleanEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail))
    return Response.json({ success: false, code: 'invalid_email' }, { status: 422 });

  try {
    await sendContactEmail({
      formType: form_type,
      email: cleanEmail,
      phone: cleanPhone,
      lang: lang === 'en' ? 'en' : 'nl',
      clientIP: ip,
      submittedAt: new Date(),
    });
  } catch (err) {
    console.error('[contact] email failed:', err);
    return Response.json({ success: false, code: 'send_failed' }, { status: 500 });
  }

  notifyBitrix({
    title: `[Venstervalent.nl] ${FORM_LABELS[form_type]} — Website bezoeker`,
    email: cleanEmail,
    phone: cleanPhone,
    comments: `IP: ${ip}\nTaal: ${lang}`,
  }).catch((e) => console.error('[contact] bitrix failed:', e));

  return Response.json({ success: true });
}
