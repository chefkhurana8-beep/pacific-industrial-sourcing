import { useEffect, useRef, useState } from 'react'

/**
 * Timeline — a numbered process with a progress line that draws as the reader
 * scrolls through it.
 *
 * The brief warns that numbered markers (01 / 02 / 03) are only appropriate
 * when the content genuinely is a sequence. A procurement journey is one, so
 * the numbering here carries information rather than decorating.
 *
 * The scroll-linked line is the page's one piece of continuous motion. Under
 * prefers-reduced-motion the line is drawn in full immediately and every step
 * shows as active.
 */
export default function Timeline({ steps }) {
  const containerRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true)
      setProgress(1)
      return
    }

    let frame = null

    const update = () => {
      frame = null
      const node = containerRef.current
      if (!node) return

      const rect = node.getBoundingClientRect()
      const viewport = window.innerHeight
      // 0 when the top of the list reaches mid-viewport, 1 when the bottom does.
      const start = viewport * 0.7
      const travelled = start - rect.top
      const ratio = travelled / Math.max(rect.height, 1)
      setProgress(Math.min(Math.max(ratio, 0), 1))
    }

    const onScroll = () => {
      // rAF-throttled: scroll fires far more often than the screen repaints.
      if (frame === null) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    // Fail-safe — a hidden document never scrolls, and the steps must not stay
    // dimmed for a reader who arrives via a background tab.
    const failSafe = setTimeout(() => setProgress((p) => (p === 0 ? 1 : p)), 1200)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame !== null) cancelAnimationFrame(frame)
      clearTimeout(failSafe)
    }
  }, [])

  return (
    <ol ref={containerRef} style={list}>
      {/* The rail the numbers sit on. */}
      <div aria-hidden="true" style={rail}>
        <div
          style={{
            ...railFill,
            height: `${progress * 100}%`,
            transition: reduced ? 'none' : 'height 120ms linear',
          }}
        />
      </div>

      {steps.map((step, i) => {
        const stepPoint = steps.length > 1 ? i / (steps.length - 1) : 0
        const active = reduced || progress >= stepPoint - 0.06

        return (
          <li key={step.title} style={item}>
            <div
              style={{
                ...marker,
                borderColor: active ? 'var(--brand-accent)' : 'var(--border-strong)',
                background: active ? 'var(--brand-accent)' : 'var(--surface-card)',
                color: active ? 'var(--text-inverse)' : 'var(--text-muted)',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>

            <div style={{ paddingBottom: 'var(--space-7)' }}>
              <h3
                style={{
                  ...stepTitle,
                  color: active ? 'var(--text-heading)' : 'var(--text-muted)',
                }}
              >
                {step.title}
              </h3>
              <p style={stepBody}>{step.description}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

const list = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  position: 'relative',
  maxWidth: '68ch',
}

const rail = {
  position: 'absolute',
  left: 21,
  top: 22,
  bottom: 22,
  width: 2,
  background: 'var(--border-default)',
}

const railFill = {
  width: '100%',
  background: 'var(--brand-accent)',
  transformOrigin: 'top',
}

const item = {
  display: 'grid',
  gridTemplateColumns: '44px 1fr',
  gap: 'var(--space-5)',
  position: 'relative',
}

const marker = {
  width: 44,
  height: 44,
  borderRadius: '50%',
  border: '2px solid',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: 'var(--text-small)',
  letterSpacing: 'var(--tracking-caps)',
  transition:
    'background var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard)',
  position: 'relative',
  zIndex: 1,
  flexShrink: 0,
}

const stepTitle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: 'var(--text-h4)',
  lineHeight: 'var(--leading-h4)',
  margin: '10px 0 var(--space-2)',
  transition: 'color var(--duration-base) var(--ease-standard)',
}

const stepBody = {
  fontSize: 'var(--text-body)',
  lineHeight: 'var(--leading-body)',
  color: 'var(--text-body)',
  margin: 0,
}
