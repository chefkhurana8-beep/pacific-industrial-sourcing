/**
 * Cloudflare Pages Function — POST /api/enquiry
 *
 * Sends two emails via Resend:
 *   1. the enquiry to the business
 *   2. an acknowledgement to the person who submitted it
 *
 * ── SETUP REQUIRED BEFORE THIS WORKS ────────────────────────────────────────
 * 1. Verify the domain pacificindustrialsourcing.co.nz in Resend
 *    (adds SPF/DKIM records to your Cloudflare DNS).
 * 2. In the Cloudflare Pages project, add an environment variable:
 *       RESEND_API_KEY = re_xxxxxxxx
 *    Set it as a SECRET, not a plaintext variable.
 * 3. Deploy. Until step 2 is done this endpoint returns 500 and the form shows
 *    its fallback "email us directly" message — which is the intended
 *    degradation, not a bug.
 *
 * Resend was chosen because it works from Cloudflare Workers with no SDK and
 * a free tier that covers a contact form comfortably. Any HTTP email API can
 * be swapped in here — only this file changes.
 */

const TO = 'info@pacificindustrialsourcing.co.nz'
const FROM = 'Pacific Industrial Sourcing <info@pacificindustrialsourcing.co.nz>'

const TYPE_LABELS = {
  buyer: 'Buyer / sourcing',
  exporter: 'Manufacturer / supplier',
  other: 'Other',
}

/**
 * The logo mark, drawn with bordered table cells rather than an <img>.
 *
 * public/logo-mark.svg cannot be used directly: Gmail strips SVG entirely, and
 * every major client hides remote images until the reader clicks "show images",
 * so an <img> signature is blank on first read — exactly when it matters. The
 * mark is three rectangles, so borders reproduce it faithfully and it always
 * renders. Colours match the SVG: #2E4756 navy, #A9723F bronze.
 */
/*
 * Geometry is scaled from the SVG, not eyeballed. In the 64-unit viewBox each
 * rect is 22x16 with a centred 3-unit stroke, so its outer size is 25x19 and
 * the boxes sit 1 unit apart — a 4% gap. At the ~0.9 scale used here that is
 * 22x17 boxes with a 1px gap. Bigger gaps read as three loose squares rather
 * than one mark.
 */
const box = (color) =>
  `<div style="width:16px;height:11px;border:3px solid ${color};border-radius:2px;font-size:0;line-height:0;">&nbsp;</div>`

const LOGO_MARK = `
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;line-height:0;">
    <tr><td colspan="2" align="center" style="padding:0 0 1px 0;">${box('#A9723F')}</td></tr>
    <tr>
      <td style="padding:0 1px 0 0;">${box('#2E4756')}</td>
      <td style="padding:0;">${box('#2E4756')}</td>
    </tr>
  </table>
`

const SIGNATURE = `
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:28px;border-collapse:collapse;">
    <tr>
      <td style="padding-right:14px;vertical-align:middle;">${LOGO_MARK}</td>
      <td style="vertical-align:middle;font-family:sans-serif;">
        <div style="font-size:15px;font-weight:700;color:#2E4756;letter-spacing:0.02em;">PACIFIC INDUSTRIAL</div>
        <div style="font-size:13px;color:#5B6570;letter-spacing:0.16em;">SOURCING</div>
        <div style="font-size:13px;margin-top:6px;">
          <a href="mailto:${TO}" style="color:#3E5A6B;text-decoration:none;">${TO}</a>
        </div>
      </td>
    </tr>
  </table>
`

const escapeHtml = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

async function sendEmail(apiKey, payload) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    throw new Error(`Resend responded ${res.status}: ${await res.text()}`)
  }
  return res.json()
}

export async function onRequestPost({ request, env }) {
  let body
  try {
    body = await request.json()
  } catch {
    return json({ error: 'Invalid request body.' }, 400)
  }

  const { name = '', company = '', email = '', phone = '', enquiryType = 'other', message = '', consent } = body

  // Server-side validation — never trust the client.
  if (!name.trim() || !message.trim()) {
    return json({ error: 'Name and message are required.' }, 400)
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'A valid email address is required.' }, 400)
  }
  if (consent !== true) {
    return json({ error: 'Consent is required.' }, 400)
  }

  if (!env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set — cannot send enquiry.')
    return json({ error: 'Email is not configured.' }, 500)
  }

  const audience = TYPE_LABELS[enquiryType] ?? TYPE_LABELS.other

  const enquiryHtml = `
    <h2 style="font-family:sans-serif;color:#2E4756;">New enquiry</h2>
    <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;">
      <tr><td style="padding:4px 12px 4px 0;color:#5B6570;">Name</td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#5B6570;">Company</td><td>${escapeHtml(company) || '—'}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#5B6570;">Email</td><td>${escapeHtml(email)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#5B6570;">Phone</td><td>${escapeHtml(phone) || '—'}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#5B6570;">Type</td><td>${escapeHtml(audience)}</td></tr>
    </table>
    <h3 style="font-family:sans-serif;color:#2E4756;margin-top:24px;">Enquiry</h3>
    <p style="font-family:sans-serif;font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</p>
    ${SIGNATURE}
  `

  const ackHtml = `
    <p style="font-family:sans-serif;font-size:15px;line-height:1.6;">Hi ${escapeHtml(name.split(' ')[0] || name)},</p>
    <p style="font-family:sans-serif;font-size:15px;line-height:1.6;">
      Thanks for getting in touch with Pacific Industrial Sourcing. We have your enquiry and will
      come back to you shortly.
    </p>
    <p style="font-family:sans-serif;font-size:15px;line-height:1.6;color:#5B6570;">For your records, this is what you sent:</p>
    <blockquote style="font-family:sans-serif;font-size:15px;line-height:1.6;border-left:2px solid #A9723F;margin:0;padding-left:16px;color:#3A434B;white-space:pre-wrap;">${escapeHtml(message)}</blockquote>
    ${SIGNATURE}
  `

  try {
    // The enquiry itself — reply-to set so hitting Reply reaches the enquirer.
    await sendEmail(env.RESEND_API_KEY, {
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `Enquiry — ${name}${company ? ` (${company})` : ''}`,
      html: enquiryHtml,
    })

    // The acknowledgement. Failure here should not fail the whole request, but
    // it must be logged: the user was told an acknowledgement is coming.
    try {
      await sendEmail(env.RESEND_API_KEY, {
        from: FROM,
        to: [email],
        subject: 'We received your enquiry — Pacific Industrial Sourcing',
        html: ackHtml,
      })
    } catch (ackError) {
      console.error('Acknowledgement email failed:', ackError.message)
    }

    return json({ ok: true })
  } catch (error) {
    console.error('Enquiry email failed:', error.message)
    return json({ error: 'Could not send the enquiry.' }, 500)
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}
