import { useReveal } from '../hooks/useReveal.js'

/**
 * Section — page section with a scroll-triggered reveal.
 *
 * The reveal is a single fade-and-settle at 200ms, per the brief's motion
 * budget. It is not re-triggered on scroll-back, and it is disabled entirely
 * under prefers-reduced-motion.
 */
export default function Section({
  eyebrow,
  title,
  intro,
  children,
  tone = 'page',
  id,
}) {
  const [ref, revealed] = useReveal()

  const backgrounds = {
    page: 'var(--surface-page)',
    card: 'var(--surface-card)',
    sunken: 'var(--surface-sunken)',
    inverse: 'var(--surface-inverse)',
  }

  const inverse = tone === 'inverse'

  return (
    <section
      id={id}
      ref={ref}
      style={{
        background: backgrounds[tone],
        padding: 'var(--space-6) 0',
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 520ms var(--ease-standard), transform 520ms var(--ease-standard)',
      }}
      className={revealed ? 'pis-revealed' : undefined}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)' }}>
        {eyebrow && (
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'var(--text-caption)',
              letterSpacing: 'var(--tracking-eyebrow)',
              textTransform: 'uppercase',
              color: 'var(--brand-accent)',
              marginBottom: 'var(--space-3)',
            }}
          >
            {eyebrow}
          </div>
        )}

        {title && (
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--text-h2)',
              lineHeight: 'var(--leading-h2)',
              color: inverse ? 'var(--text-inverse)' : 'var(--text-heading)',
              margin: '0 0 var(--space-4)',
              maxWidth: '24ch',
            }}
          >
            {title}
          </h2>
        )}

        {intro && (
          <p
            style={{
              fontSize: 'var(--text-body-lg)',
              lineHeight: 'var(--leading-body-lg)',
              color: inverse ? 'var(--color-primary-300)' : 'var(--text-body)',
              maxWidth: '62ch',
              margin: '0 0 var(--space-7)',
            }}
          >
            {intro}
          </p>
        )}

        {children}
      </div>
    </section>
  )
}
