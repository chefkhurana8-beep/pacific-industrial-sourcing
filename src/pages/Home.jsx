import Hero from '../components/Hero.jsx'
import Section from '../components/Section.jsx'
import Card from '../components/ui/Card.jsx'
import Button from '../components/ui/Button.jsx'
import { BUYER_SERVICES, EXPORTER_SERVICES, INDUSTRIES } from '../data/services.js'

export default function Home({ onNav }) {
  return (
    <>
      <Hero onNav={onNav} />

      <Section
        eyebrow="Both ends of the supply chain"
        title="We work for buyers and for manufacturers"
        intro="Most sourcing agents serve one side. We sit in the middle — running procurement for businesses importing into New Zealand and Australia, and representing manufacturers who want to sell into those markets."
        tone="card"
      >
        <div style={twoCol}>
          <Card
            interactive
            eyebrow="For buyers"
            title="Source it properly, once"
            description="Supplier identification, verification, negotiation, production follow-up, freight and clearance — run end to end so you are not managing it from a spreadsheet at midnight."
            footer={
              <Button variant="secondary" onClick={() => onNav('services')}>
                {BUYER_SERVICES.length} buyer services
              </Button>
            }
          />
          <Card
            interactive
            eyebrow="For manufacturers and suppliers"
            title="A local presence in market"
            description="Representation, business development, logistics and claim handling for exporters who need someone on the ground in New Zealand and Australia."
            footer={
              <Button variant="secondary" onClick={() => onNav('services')}>
                {EXPORTER_SERVICES.length} exporter services
              </Button>
            }
          />
        </div>
      </Section>

      <Section
        eyebrow="Sectors"
        title="Where we work"
        intro="Sourcing and procurement across industrial sectors, from building materials through to mining consumables."
      >
        <ul style={chipList}>
          {INDUSTRIES.map((industry) => (
            <li key={industry.slug} style={chip}>
              {industry.title}
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 'var(--space-6)' }}>
          <Button variant="ghost" onClick={() => onNav('industries')}>
            See all sectors →
          </Button>
        </div>
      </Section>

      <Section tone="inverse" title="Tell us what you need sourced" intro="Send us the product, the volume and the market. We will come back with how we would approach it.">
        <Button variant="accent" size="lg" onClick={() => onNav('contact')}>
          Request a quote
        </Button>
      </Section>
    </>
  )
}

const twoCol = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: 'var(--space-5)',
}

const chipList = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--space-3)',
}

const chip = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--text-small)',
  fontWeight: 500,
  color: 'var(--brand-primary)',
  background: 'var(--surface-card)',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-pill)',
  padding: 'var(--space-2) var(--space-4)',
  whiteSpace: 'nowrap',
}
