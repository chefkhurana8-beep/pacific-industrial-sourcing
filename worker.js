import { onRequestPost } from './functions/api/enquiry.js'

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url)

    // TEMPORARY — remove once the Resend key is confirmed working.
    // Reports which bindings reach the runtime. Names only, never values.
    if (pathname === '/api/_diag') {
      const describe = (v) =>
        typeof v === 'string'
          ? { type: 'string', length: v.length, looksLikeResendKey: v.startsWith('re_') }
          : { type: typeof v }
      return Response.json({
        bindings: Object.fromEntries(Object.keys(env).sort().map((k) => [k, describe(env[k])])),
        hasResendKey: typeof env.RESEND_API_KEY === 'string' && env.RESEND_API_KEY.length > 0,
      })
    }

    if (pathname === '/api/enquiry') {
      if (request.method !== 'POST') {
        return new Response('Method not allowed', { status: 405 })
      }
      return onRequestPost({ request, env })
    }

    return env.ASSETS.fetch(request)
  },
}
