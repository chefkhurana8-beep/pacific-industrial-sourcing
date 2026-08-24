import Section from '../components/Section.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { SITE } from '../data/site.js'

export default function Contact() {
  return (
    <Section
      eyebrow="Get in touch"
      title="Tell us what you need sourced"
      intro="Send us the detail you have — product, volume, specification, target market, timeline. We will touch base as soon as possible."
      tone="card"
    >
      <div style={layout} className="pis-contact-grid">
        <div>
          <EnquiryForm />
        </div>

        <aside style={aside}>
          <h3 style={asideHeading}>Direct</h3>
          <a href={`mailto:${SITE.email}`} style={link}>
            {SITE.email}
          </a>

          <h3 style={{ ...asideHeading, marginTop: 'var(--space-6)' }}>Coverage</h3>
          <p style={asideText}>
            New Zealand and Australia, sourcing from verified manufacturers across Asia.
          </p>

          <h3 style={{ ...asideHeading, marginTop: 'var(--space-6)' }}>What happens next</h3>
          <ol style={list}>
            <li style={listItem}>You send the enquiry.</li>
            <li style={listItem}>You get an acknowledgement by email straight away.</li>
            <li style={listItem}>We will touch base to discuss your requirements.</li>
          </ol>
        </aside>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pis-contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  )
}

const layout = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1.6fr) minmax(0, 1fr)',
  gap: 'var(--space-8)',
  alignItems: 'start',
}

const aside = {
  background: 'var(--surface-sunken)',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-md)',
  padding: 'var(--space-5)',
}

const asideHeading = {
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: 'var(--text-caption)',
  letterSpacing: 'var(--tracking-eyebrow)',
  textTransform: 'uppercase',
  color: 'var(--brand-accent)',
  margin: '0 0 var(--space-2)',
}

const link = {
  fontSize: 'var(--text-body)',
  color: 'var(--text-link)',
  wordBreak: 'break-word',
}

const asideText = {
  fontSize: 'var(--text-small)',
  lineHeight: 'var(--leading-body)',
  color: 'var(--text-body)',
  margin: 0,
}

const list = { margin: 0, paddingLeft: '1.1rem' }
const listItem = {
  fontSize: 'var(--text-small)',
  lineHeight: 'var(--leading-body)',
  color: 'var(--text-body)',
  marginBottom: 'var(--space-2)',
}
