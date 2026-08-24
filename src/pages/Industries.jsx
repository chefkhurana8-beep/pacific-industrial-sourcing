import Section from '../components/Section.jsx'
import Button from '../components/ui/Button.jsx'
import { INDUSTRIES } from '../data/services.js'

export default function Industries({ onNav }) {
  return (
    <>
      <Section
        eyebrow="Sectors"
        title="Industries we source for"
        intro="We work across industrial sectors where specification, compliance and lead time matter more than headline unit price."
        tone="card"
      >
        <div style={grid}>
          {INDUSTRIES.map((industry) => (
            <div key={industry.slug} style={tile}>
              <span style={rule} aria-hidden="true" />
              <h3 style={tileTitle}>{industry.title}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tone="inverse"
        title="Not seeing your sector?"
        intro="The list above is where most of our work sits, not a limit. If you are sourcing industrial goods into New Zealand or Australia, ask."
      >
        <Button variant="accent" size="lg" onClick={() => onNav('contact')}>
          Ask about your sector
        </Button>
      </Section>
    </>
  )
}

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
  gap: 'var(--space-5)',
}

const tile = {
  borderTop: '1px solid var(--border-default)',
  paddingTop: 'var(--space-4)',
}

const rule = {
  display: 'block',
  width: 28,
  height: 3,
  background: 'var(--brand-accent)',
  marginBottom: 'var(--space-3)',
}

const tileTitle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: 'var(--text-h4)',
  lineHeight: 'var(--leading-h4)',
  color: 'var(--text-heading)',
  margin: 0,
}
