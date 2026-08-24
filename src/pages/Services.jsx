import { useState } from 'react'
import Section from '../components/Section.jsx'
import Card from '../components/ui/Card.jsx'
import Button from '../components/ui/Button.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { BUYER_SERVICES, EXPORTER_SERVICES } from '../data/services.js'

const TABS = [
  { key: 'buyer', label: 'For buyers', services: BUYER_SERVICES },
  { key: 'exporter', label: 'For manufacturers', services: EXPORTER_SERVICES },
]

export default function Services() {
  const [tab, setTab] = useState('buyer')
  const active = TABS.find((t) => t.key === tab) ?? TABS[0]

  return (
    <>
      {/* Background image — industrial port/warehouse theme. */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          backgroundImage: 'url(/services-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.12,
        }}
      ></div>

      {/* Content above the background. */}
      <div style={{ position: 'relative', zIndex: 1 }}>
      <Section
        eyebrow="Our services"
        title="End-to-end supply chain, both directions"
        intro="We serve buyers sourcing from Asia and manufacturers selling into New Zealand and Australia. Choose the side you are on."
        tone="card"
      >
        <div role="tablist" aria-label="Service audience" style={tabRow}>
          {TABS.map((t) => {
            const isActive = t.key === tab
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setTab(t.key)}
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
                <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}> ({t.services.length})</span>
              </button>
            )
          })}
        </div>

        <div style={grid}>
          {active.services.map((service, i) => (
            <div
              key={service.slug}
              style={{
                animation: 'pis-fade-in var(--duration-base) var(--ease-standard) both',
                animationDelay: `${Math.min(i, 8) * 40}ms`,
              }}
            >
              <Card interactive title={service.title} description={service.description} />
            </div>
          ))}
        </div>

        <style>{`
          @keyframes pis-fade-in {
            from { opacity: 0; transform: translateY(8px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @media (prefers-reduced-motion: reduce) {
            [style*="pis-fade-in"] { animation: none !important; }
          }
        `}</style>
      </Section>

      <Section
        id="rfi"
        eyebrow="Request for information"
        title="Send us an RFI"
        intro="Tell us the product, volume and market. We will come back with how we would approach it and what it is likely to cost."
      >
        <div style={{ maxWidth: 760 }}>
          <EnquiryForm defaultType={tab} />
        </div>
      </Section>
      </div>
    </>
  )
}

const tabRow = {
  display: 'flex',
  gap: 'var(--space-6)',
  borderBottom: '1px solid var(--border-default)',
  marginBottom: 'var(--space-7)',
}

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: 'var(--space-5)',
}
