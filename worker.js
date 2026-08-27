import { onRequestPost } from './functions/api/enquiry.js'

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url)

    // TEMPORARY — remove once the Resend key is confirmed working.
    // Reports which bindings reach the runtime. Names only, never values.
    if (pathname === '/api/_diag') {
      const key = env.RESEND_API_KEY
      return Response.json({
        bindings: Object.keys(env).sort(),
        hasResendKey: typeof key === 'string' && key.length > 0,
        resendKeyLength: typeof key === 'string' ? key.length : null,
        resendKeyPrefix: typeof key === 'string' ? key.slice(0, 3) : null,
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
