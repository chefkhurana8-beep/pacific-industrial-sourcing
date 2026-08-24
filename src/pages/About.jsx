import Section from '../components/Section.jsx'
import Card from '../components/ui/Card.jsx'
import Button from '../components/ui/Button.jsx'
import Counter from '../components/Counter.jsx'

/**
 * About — final copy.
 *
 * Every word on this page is verbatim from content/website-copy.md (Google
 * Drive, retrieved 21 Aug 2026). This is the only page with signed-off copy;
 * the rest of the site is still on drafts.
 */

const PRIORITIES = [
  {
    title: 'Uncompromising quality',
    description: 'Products must meet exact specifications, every time, without compromise.',
  },
  {
    title: 'Competitive pricing',
    description: 'Costs aligned with market expectations while protecting your margins.',
  },
  {
    title: 'Reliable delivery',
    description: 'On-time, every time — because your supply chain depends on it.',
  },
]

const BACKED_BY = [
  {
    title: 'Strategic sourcing',
    description: 'Precise matching of verified manufacturers to your exact product needs.',
  },
  {
    title: 'Supplier vetting',
    description:
      'Rigorous checks for integrity, capacity, financial standing, and compliance — no traders, no shortcuts.',
  },
  {
    title: 'End-to-end support',
    description:
      'From first inquiry through negotiation, documentation, customs, and delivery.',
  },
]

const WHY = [
  { title: '17+ years', description: 'Import, export and industrial procurement experience.' },
  { title: 'Verified manufacturers only', description: 'No traders, no marketplaces, no shortcuts.' },
  { title: 'AS/NZS compliant', description: 'Accredited testing lab partnerships for full compliance confidence.' },
  { title: 'Two-way trade', description: 'Asia to NZ/AU and NZ/AU to global markets.' },
  { title: 'End-to-end', description: 'Sourcing, compliance, logistics, customs — all under one roof.' },
  { title: 'SME focused', description: "Built specifically for New Zealand's industrial small and medium businesses." },
]

export default function About({ onNav }) {
  return (
    <>
      {/* Background video — industrial manufacturing theme. */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.25,
          }}
        >
          <source src="/about-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content above the video background. */}
      <div style={{ position: 'relative', zIndex: 1 }} className="pis-about-bg">
        <style>{`
          .pis-about-bg section {
            background: rgba(255, 255, 255, 0.92) !important;
          }
          .pis-about-bg section h2 {
            color: var(--text-heading) !important;
          }
          .pis-about-bg section p {
            color: var(--text-body) !important;
          }
        `}</style>
        <Section
        eyebrow="About us"
        title="Connecting the world's best manufacturers to New Zealand and Australian industry"
        tone="card"
      >
        <div style={{ maxWidth: '68ch' }}>
          <p style={lead}>
            Pacific Industrial Sourcing was founded in Auckland, New Zealand, with one clear
            purpose — to make international trade simpler, more transparent, and more accessible
            for industrial businesses on both sides of the Pacific.
          </p>
          <p style={body}>
            With over 17 years of hands-on experience in import, export, machinery, and industrial
            procurement, we bring deep market knowledge, verified supplier networks, and genuine
            trade expertise to every partnership we build.
          </p>
          <p style={{ ...body, fontWeight: 600, color: 'var(--text-heading)' }}>
            We are not a marketplace. We are not a listing service. We are your dedicated sourcing
            and procurement partner — working alongside you like a trusted colleague, not just a
            service provider.
          </p>
        </div>

        <div style={counterRow}>
          <Counter value={17} suffix="+" label="Years in import, export and industrial procurement" />
          <Counter value={2} label="Directions of trade — Asia to NZ/AU, and NZ/AU to global markets" />
        </div>
      </Section>

      <Section tone="inverse" title="Mission" intro='"To build a purposeful international trading business — sourcing and supplying industrial products and materials across global markets, empowering New Zealand&apos;s SMEs with world-class procurement expertise, and serving as the trusted commercial gateway for overseas manufacturers seeking to establish their presence in New Zealand and Australia."'>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'var(--text-h2)',
            lineHeight: 'var(--leading-h2)',
            color: 'var(--brand-accent)',
            margin: 'var(--space-7) 0 var(--space-4)',
          }}
        >
          Vision
        </h2>
        <p
          style={{
            fontSize: 'var(--text-body-lg)',
            lineHeight: 'var(--leading-body-lg)',
            color: 'var(--text-body)',
            maxWidth: '62ch',
            margin: '0 0 var(--space-7)',
          }}
        >
          "To make industrial trade simpler and seamless — through local expertise, global
          connections, sustainable practices, where trust and confidentiality are not a promise —
          they are the foundation of everything we do."
        </p>
        <Button variant="accent" size="lg" onClick={() => onNav('contact')}>
          Work with us
        </Button>
      </Section>

      <Section eyebrow="What we do" title="From sourcing agency to end-to-end service">
        <div style={{ maxWidth: '68ch' }}>
          <p style={body}>
            We started as a sourcing and procurement agency helping professional buyers navigate
            the complexities of global trade. Over time, we expanded our capabilities by combining
            human intelligence, long-standing supplier relationships, and local compliance
            expertise to deliver a truly end-to-end service.
          </p>
          <p style={body}>
            Today, our services span across industrial products, construction materials, heavy
            engineering components, and healthcare equipment — all sourced and verified to meet
            AS/NZS compliance standards, in partnership with accredited testing laboratories.
          </p>
          <p style={body}>
            We also work the other way. We help New Zealand and Australian businesses go global —
            finding international buyers and connecting domestic suppliers to markets across Asia
            and beyond.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="How we work"
        title="Three things determine success in global trade"
        tone="card"
      >
        <div style={grid3}>
          {PRIORITIES.map((item, i) => (
            <Card key={item.title} interactive eyebrow={`0${i + 1}`} title={item.title} description={item.description} />
          ))}
        </div>

        <h3 style={subhead}>We back these with</h3>
        <div style={grid3}>
          {BACKED_BY.map((item) => (
            <Card key={item.title} interactive title={item.title} description={item.description} />
          ))}
        </div>

        <p style={{ ...lead, maxWidth: '68ch', marginTop: 'var(--space-7)', marginBottom: 0 }}>
          Our goal is simple: free you from the complexity of global sourcing so you can focus on
          what matters most — growing your business and serving your customers.
        </p>
      </Section>

      <Section eyebrow="Our promise" title="Trust and confidentiality are the foundation">
        <div style={{ maxWidth: '68ch' }}>
          <p style={body}>
            Trust and confidentiality are not features we offer — they are the foundation of
            everything we do. Every supplier relationship, every commercial term, and every client
            interest is handled with absolute discretion and professionalism.
          </p>
          <p style={body}>
            We are proud of the partnerships we have built across the Pacific. Many of our clients
            have been with us since the very beginning — and we look forward to building many more
            years of shared success together.
          </p>
        </div>
      </Section>

      <Section eyebrow="Why Pacific Industrial Sourcing" title="What you get working with us" tone="card">
        <div style={grid3}>
          {WHY.map((item) => (
            <Card key={item.title} interactive title={item.title} description={item.description} />
          ))}
        </div>
      </Section>
      </div>
    </>
  )
}

const lead = {
  fontSize: 'var(--text-body-lg)',
  lineHeight: 'var(--leading-body-lg)',
  color: 'var(--text-body)',
  margin: '0 0 var(--space-5)',
}

const body = {
  fontSize: 'var(--text-body)',
  lineHeight: 'var(--leading-body)',
  color: 'var(--text-body)',
  margin: '0 0 var(--space-5)',
}

const subhead = {
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: 'var(--text-h4)',
  color: 'var(--text-heading)',
  margin: 'var(--space-7) 0 var(--space-5)',
}

const grid3 = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: 'var(--space-5)',
}

const counterRow = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--space-8)',
  marginTop: 'var(--space-7)',
  paddingTop: 'var(--space-6)',
  borderTop: '1px solid var(--border-default)',
}
