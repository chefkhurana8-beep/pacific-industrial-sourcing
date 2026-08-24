import { useState } from 'react'
import Section from '../components/Section.jsx'
import Timeline from '../components/Timeline.jsx'
import Card from '../components/ui/Card.jsx'
import Button from '../components/ui/Button.jsx'

/**
 * ⚠️ DRAFT COPY.
 *
 * content/website-copy.md lists "How It Works" as a page to be added and has
 * no copy for it. The steps below are drafts, written to the brand voice and
 * grounded in the process the final About copy already describes — "from first
 * inquiry through negotiation, documentation, customs, and delivery", supplier
 * vetting for "integrity, capacity, financial standing, and compliance", and
 * AS/NZS testing through accredited laboratories.
 *
 * Nothing here invents a capability the approved copy does not already claim.
 */

const BUYER_STEPS = [
  {
    title: 'You tell us what you need',
    description:
      'Product, volume, specification, target market and timeline — whatever you have. A drawing and a quantity is enough to start.',
  },
  {
    title: 'We source and vet',
    description:
      'We match verified manufacturers to your specification, then check integrity, capacity, financial standing and compliance. No traders, no marketplaces, no shortcuts.',
  },
  {
    title: 'We quote on landed cost',
    description:
      'Commercial terms negotiated and presented as delivered cost — not an ex-works number that grows on the way here.',
  },
  {
    title: 'You approve the sample',
    description:
      'Prototyping, tooling and first-article approval before production opens. Specification is signed off while changes are still cheap.',
  },
  {
    title: 'We follow production',
    description:
      'Progress tracked against your schedule, with pre-shipment inspection at origin — before goods leave the supplier.',
  },
  {
    title: 'We verify compliance',
    description:
      'Materials tested and certified to AS/NZS standards in partnership with accredited testing laboratories.',
  },
  {
    title: 'We deliver to your door',
    description:
      'Sea or air, FCL or LCL, with documentation, tariff classification, customs clearance and port handling all handled.',
  },
]

const EXPORTER_STEPS = [
  {
    title: 'We assess the opportunity',
    description:
      'Your product against New Zealand and Australian demand, pricing, competitors and the regulatory requirements you would need to meet.',
  },
  {
    title: 'We represent you locally',
    description:
      'A credible presence in market — handling enquiries, quoting and relationship management on your behalf.',
  },
  {
    title: 'We introduce you to buyers',
    description:
      'Business development into our existing network, structured for repeat volume rather than one-off transactions.',
  },
  {
    title: 'We gather feedback and build repeat volume',
    description:
      'Market feedback from buyers collected and shared to drive product improvement. Relationships nurtured for ongoing orders rather than project-based sales.',
  },
  {
    title: 'We handle the ground work',
    description:
      'Domestic logistics, warehousing and distribution, plus quality, shortage and damage claims between your factory and the buyer.',
  },
]

const TRACKS = [
  { key: 'buyer', label: 'If you are buying', steps: BUYER_STEPS },
  { key: 'exporter', label: 'If you are selling into NZ/AU', steps: EXPORTER_STEPS },
]

export default function HowItWorks({ onNav }) {
  const [track, setTrack] = useState('buyer')
  const active = TRACKS.find((t) => t.key === track) ?? TRACKS[0]

  return (
    <>
      <Section
        eyebrow="How it works"
        title="From first enquiry to delivered goods"
        intro="Sourcing goes wrong in the gaps — between quote and sample, between production and freight, between arrival and compliance. We hold those gaps. Here is the sequence."
        tone="card"
      >
        <div role="tablist" aria-label="Process track" style={tabRow}>
          {TRACKS.map((t) => {
            const isActive = t.key === track
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setTrack(t.key)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: 'var(--text-body)',
                  letterSpacing: 'var(--tracking-caps)',
                  color: isActive ? 'var(--brand-primary)' : 'var(--text-muted)',
                  background: 'none',
                  border: 'none',
                  borderBottom: `2px solid ${isActive ? 'var(--brand-accent)' : 'transparent'}`,
                  padding: 'var(--space-3) var(--space-2)',
                  minHeight: 44,
                  cursor: 'pointer',
                  transition: 'color var(--duration-fast) var(--ease-standard)',
                }}
              >
                {t.label}
                <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}> ({t.steps.length})</span>
              </button>
            )
          })}
        </div>

        {/* key remounts the timeline so its progress recalculates for the new track */}
        <Timeline key={track} steps={active.steps} />
      </Section>

      <Section eyebrow="What you carry" title="What changes when we run it">
        <div style={grid}>
          <Card
            interactive
            title="One point of contact"
            description="Not a supplier, a freight forwarder, a customs broker and a testing lab all managed separately by you."
          />
          <Card
            interactive
            title="Problems surface at origin"
            description="Inspection happens before goods ship. A specification issue found in the factory costs a fortnight; found on the wharf it costs a container."
          />
          <Card
            interactive
            title="Compliance is not an afterthought"
            description="AS/NZS testing is built into the sequence, not discovered at the border."
          />
        </div>
      </Section>

      <Section
        tone="inverse"
        title="Start at step one"
        intro="Tell us what you need sourced. We will come back with how we would approach it."
      >
        <Button variant="accent" size="lg" onClick={() => onNav('contact')}>
          Send an enquiry
        </Button>
      </Section>
    </>
  )
}

const tabRow = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--space-6)',
  borderBottom: '1px solid var(--border-default)',
  marginBottom: 'var(--space-8)',
}

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: 'var(--space-5)',
}
