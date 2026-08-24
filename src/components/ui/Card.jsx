/**
 * Card — matches the PIS design system contract exactly.
 * Declared props: eyebrow, title, description, footer, children.
 *
 * Brief rules honoured: 24px internal padding, 1px --border-default,
 * 8px radius, soft shadow only, no left-border accent stripe.
 */
export default function Card({ eyebrow, title, description, footer, children, interactive = false }) {
  return (
    <div
      onMouseEnter={(e) => {
        if (!interactive) return
        e.currentTarget.style.borderColor = 'var(--border-strong)'
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = 'var(--shadow-md)'
      }}
      onMouseLeave={(e) => {
        if (!interactive) return
        e.currentTarget.style.borderColor = 'var(--border-default)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
      }}
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-5)',
        boxShadow: 'var(--shadow-sm)',
        transition:
          'border-color var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        willChange: interactive ? 'transform' : undefined,
      }}
    >
      {eyebrow && (
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'var(--text-caption)',
            letterSpacing: 'var(--tracking-eyebrow)',
            textTransform: 'uppercase',
            color: 'var(--brand-accent)',
            marginBottom: 'var(--space-2)',
          }}
        >
          {eyebrow}
        </div>
      )}

      {title && (
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'var(--text-h4)',
            lineHeight: 'var(--leading-h4)',
            color: 'var(--text-heading)',
            margin: '0 0 var(--space-2)',
          }}
        >
          {title}
        </h3>
      )}

      {description && (
        <p
          style={{
            fontSize: 'var(--text-body)',
            lineHeight: 'var(--leading-body)',
            color: 'var(--text-body)',
            margin: 0,
          }}
        >
          {description}
        </p>
      )}

      {children}

      {footer && <div style={{ marginTop: 'auto', paddingTop: 'var(--space-4)' }}>{footer}</div>}
    </div>
  )
}
