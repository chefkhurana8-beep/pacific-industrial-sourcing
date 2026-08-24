import { useState } from 'react'
import { Input, Textarea, Select, Checkbox } from './ui/fields.jsx'
import Button from './ui/Button.jsx'
import { ENQUIRY_TYPES, SITE } from '../data/site.js'

const EMPTY = {
  name: '',
  company: '',
  email: '',
  phone: '',
  enquiryType: 'buyer',
  message: '',
  consent: false,
}

/**
 * Enquiry / RFI form.
 *
 * Posts to /api/enquiry, which is implemented as a Cloudflare Pages Function
 * (functions/api/enquiry.js). That function sends two emails: the enquiry to
 * the business, and an acknowledgement to the person who submitted it.
 *
 * Copy follows the brief: active voice, the button says what happens, and the
 * success state uses the same verb as the button.
 */
export default function EnquiryForm({ defaultType = 'buyer', compact = false }) {
  const [values, setValues] = useState({ ...EMPTY, enquiryType: defaultType })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const set = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setValues((v) => ({ ...v, [field]: value }))
    setErrors((err) => ({ ...err, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Enter your name.'
    if (!values.email.trim()) {
      next.email = 'Enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'That email address does not look right.'
    }
    if (!values.message.trim()) next.message = 'Tell us what you need sourced.'
    if (!values.consent) next.consent = 'Please confirm before sending.'
    return next
  }

  const submit = async (e) => {
    e.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('sending')
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      setValues({ ...EMPTY, enquiryType: defaultType })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div
        style={{
          background: 'var(--color-success-bg)',
          border: '1px solid var(--color-success)',
          borderRadius: 'var(--radius-md)',
          padding: 'var(--space-6)',
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-h4)',
            color: 'var(--color-success)',
            margin: '0 0 var(--space-3)',
          }}
        >
          Enquiry sent
        </h3>
        <p style={{ margin: 0, color: 'var(--text-body)', lineHeight: 'var(--leading-body)' }}>
          We have your details and will be in touch. A copy of your enquiry is on its way to your
          inbox from {SITE.email}.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: compact ? '1fr' : 'repeat(2, minmax(0, 1fr))',
          gap: '0 var(--space-5)',
        }}
        className="pis-form-grid"
      >
        <Input id="name" label="Name" value={values.name} onChange={set('name')} error={errors.name} required />
        <Input id="company" label="Company" value={values.company} onChange={set('company')} />
        <Input id="email" label="Email" type="email" value={values.email} onChange={set('email')} error={errors.email} required />
        <Input id="phone" label="Phone" type="tel" value={values.phone} onChange={set('phone')} />
      </div>

      <Select
        id="enquiryType"
        label="What brings you here?"
        options={ENQUIRY_TYPES}
        value={values.enquiryType}
        onChange={set('enquiryType')}
      />

      <Textarea
        id="message"
        label="What do you need sourced?"
        placeholder="Product, volume, specification, target market, timeline — whatever you have so far."
        value={values.message}
        onChange={set('message')}
        error={errors.message}
        required
      />

      <Checkbox
        id="consent"
        label={`I'm happy for ${SITE.name} to contact me about this enquiry.`}
        checked={values.consent}
        onChange={set('consent')}
      />
      {errors.consent && (
        <p style={{ marginTop: 'calc(var(--space-4) * -1)', marginBottom: 'var(--space-5)', fontSize: 'var(--text-small)', color: 'var(--color-error)' }}>
          {errors.consent}
        </p>
      )}

      {status === 'error' && (
        <div
          style={{
            background: 'var(--color-error-bg)',
            border: '1px solid var(--color-error)',
            borderRadius: 'var(--radius-sm)',
            padding: 'var(--space-4)',
            marginBottom: 'var(--space-5)',
            fontSize: 'var(--text-small)',
            color: 'var(--text-body)',
          }}
        >
          The enquiry did not send. Email us directly at{' '}
          <a href={`mailto:${SITE.email}`} style={{ color: 'var(--text-link)' }}>
            {SITE.email}
          </a>{' '}
          and we will pick it up from there.
        </div>
      )}

      <Button type="submit" variant="accent" size="lg" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending enquiry…' : 'Send enquiry'}
      </Button>

      <style>{`
        @media (max-width: 700px) {
          .pis-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  )
}
