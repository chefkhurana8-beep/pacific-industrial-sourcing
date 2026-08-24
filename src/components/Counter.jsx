import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'

/**
 * Counter — counts a number up once, when it scrolls into view.
 *
 * Used only for figures that are genuinely concrete (17+ years). The brief is
 * explicit that numbers are proof, not decoration — do not point this at an
 * invented statistic.
 *
 * Jumps straight to the final value under prefers-reduced-motion.
 */
export default function Counter({ value, suffix = '', duration = 1100, label }) {
  const [ref, revealed] = useReveal({ threshold: 0.4 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!revealed) return

    // Skip the animation when it cannot be seen anyway: reduced-motion, or a
    // hidden document where requestAnimationFrame does not tick. Either way
    // the final value must be on screen, never a stranded 0.
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      document.visibilityState === 'hidden'
    ) {
      setDisplay(value)
      return
    }

    let frame
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutCubic — fast start, settles rather than bounces.
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [revealed, value, duration])

  return (
    <div ref={ref}>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'var(--text-h1)',
          lineHeight: 1,
          color: 'var(--brand-accent)',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {display}
        {suffix}
      </div>
      {label && (
        <div
          style={{
            marginTop: 'var(--space-2)',
            fontSize: 'var(--text-small)',
            lineHeight: 'var(--leading-body)',
            color: 'var(--text-body)',
          }}
        >
          {label}
        </div>
      )}
    </div>
  )
}
