/**
 * Button — matches the PIS design system contract exactly.
 * Declared props: variant, size, disabled, children, onClick.
 *   variant: 'primary' | 'secondary' | 'accent' | 'ghost'
 *   size:    'sm' | 'md' | 'lg'
 *
 * Brief rules honoured: hover is a colour shift only (one token step darker),
 * no added shadow, no scale transform on press.
 */

const VARIANTS = {
  primary: {
    background: 'var(--brand-primary)',
    color: 'var(--text-inverse)',
    border: '1px solid var(--brand-primary)',
    hover: 'var(--brand-primary-dark)',
  },
  secondary: {
    background: 'transparent',
    color: 'var(--brand-primary)',
    border: '1px solid var(--border-strong)',
    hover: 'var(--color-neutral-100)',
  },
  accent: {
    background: 'var(--brand-accent)',
    color: 'var(--text-inverse)',
    border: '1px solid var(--brand-accent)',
    hover: 'var(--color-accent-700)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--brand-primary)',
    border: '1px solid transparent',
    hover: 'var(--color-neutral-100)',
  },
}

const SIZES = {
  sm: { padding: 'var(--space-2) var(--space-3)', fontSize: 'var(--text-small)' },
  md: { padding: 'var(--space-3) var(--space-5)', fontSize: 'var(--text-body)' },
  lg: { padding: 'var(--space-4) var(--space-6)', fontSize: 'var(--text-body-lg)' },
}

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  type = 'button',
}) {
  const v = VARIANTS[variant] ?? VARIANTS.primary
  const s = SIZES[size] ?? SIZES.md

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.background = v.hover
      }}
      onMouseLeave={(e) => {
        if (!disabled) e.currentTarget.style.background = v.background
      }}
      style={{
        background: v.background,
        color: v.color,
        border: v.border,
        padding: s.padding,
        fontSize: s.fontSize,
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        letterSpacing: 'var(--tracking-caps)',
        borderRadius: 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'background var(--duration-base) var(--ease-standard)',
        // Accessibility: 44px minimum touch target.
        minHeight: size === 'sm' ? 36 : 44,
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </button>
  )
}
