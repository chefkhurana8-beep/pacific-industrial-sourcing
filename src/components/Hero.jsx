import Button from './ui/Button.jsx'
import HeroVisual from './HeroVisual.jsx'

/**
 * Hero.
 *
 * Copy is carried over verbatim from the approved Claude Design ui_kit —
 * eyebrow, headline and standfirst were already signed off in the brand voice.
 * Layout changed from centred to a two-column split so the signature visual
 * has somewhere to live.
 */
export default function Hero({ onNav }) {
  return (
    <section
      style={{
        background: 'var(--surface-page)',
        borderBottom: '1px solid var(--border-default)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background video — industrial manufacturing theme at 20% opacity. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.2,
          pointerEvents: 'none',
        }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: 'var(--space-9) var(--container-pad)',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)',
          gap: 'var(--space-8)',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
        className="pis-hero-grid"
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'var(--text-caption)',
              letterSpacing: 'var(--tracking-eyebrow)',
              color: 'var(--brand-accent)',
              marginBottom: 'var(--space-4)',
            }}
          >
            INDUSTRIAL SOURCING &amp; PROCUREMENT
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--text-display)',
              lineHeight: 'var(--leading-display)',
              color: 'var(--text-heading)',
              margin: '0 0 var(--space-5)',
            }}
          >
            Global sourcing.
            <br />
            Smarter procurement.
          </h1>

          <p
            style={{
              fontSize: 'var(--text-body-lg)',
              lineHeight: 'var(--leading-body-lg)',
              color: 'var(--text-body)',
              maxWidth: '52ch',
              margin: '0 0 var(--space-7)',
            }}
          >
            We connect New Zealand and Australian businesses with verified manufacturers across
            Asia — cutting the guesswork out of industrial sourcing.
          </p>

          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <Button variant="accent" size="lg" onClick={() => onNav('contact')}>
              Request a quote
            </Button>
            <Button variant="secondary" size="lg" onClick={() => onNav('services')}>
              Our services
            </Button>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <HeroVisual />
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .pis-hero-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-6) !important;
          }
          .pis-hero-grid h1 { font-size: var(--text-h1) !important; }
        }
      `}</style>
    </section>
  )
}
