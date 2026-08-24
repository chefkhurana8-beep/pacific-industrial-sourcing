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
  `

  const ackHtml = `
    <p style="font-family:sans-serif;font-size:15px;line-height:1.6;">Hi ${escapeHtml(name.split(' ')[0] || name)},</p>
    <p style="font-family:sans-serif;font-size:15px;line-height:1.6;">
      Thanks for getting in touch with Pacific Industrial Sourcing. We have your enquiry and will
      come back to you shortly.
    </p>
    <p style="font-family:sans-serif;font-size:15px;line-height:1.6;color:#5B6570;">For your records, this is what you sent:</p>
    <blockquote style="font-family:sans-serif;font-size:15px;line-height:1.6;border-left:2px solid #A9723F;margin:0;padding-left:16px;color:#3A434B;white-space:pre-wrap;">${escapeHtml(message)}</blockquote>
    <p style="font-family:sans-serif;font-size:15px;line-height:1.6;margin-top:24px;">
      Pacific Industrial Sourcing<br>
      <a href="mailto:${TO}" style="color:#3E5A6B;">${TO}</a>
    </p>
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
